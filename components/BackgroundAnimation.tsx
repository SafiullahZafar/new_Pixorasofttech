"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export type BackgroundAnimationTheme = "light-gray" | "dark-gray" | "charcoal" | "custom";

export interface BackgroundAnimationProps {
  /**
   * Theme preset. Defaults to "light-gray".
   */
  theme?: BackgroundAnimationTheme;
  /**
   * Custom background color (Hex string, e.g. "#FAFAFD").
   */
  backgroundColor?: string;
  /**
   * Custom wave highlight color (Hex string, e.g. "#707888").
   */
  waveColor?: string;
  /**
   * When true, wave only animates while the cursor is actively moving.
   * Defaults to true.
   */
  onlyMoveOnCursor?: boolean;
  /**
   * Motion sensitivity multiplier when the mouse moves.
   * Defaults to 1.0.
   */
  sensitivity?: number;
  /**
   * Friction / deceleration rate (0.90 to 0.97).
   * Defaults to 0.94 for smooth gliding.
   */
  friction?: number;
  /**
   * Wave blend intensity. Defaults to 0.55 for crisp, clear visibility.
   */
  intensity?: number;
  /**
   * Additional Tailwind or CSS classes for the container.
   */
  className?: string;
  /**
   * Additional inline styles for the container.
   */
  style?: React.CSSProperties;
}

// Light grayish-white background with clearly visible grayish wave ribbons
const THEME_PRESETS: Record<
  Exclude<BackgroundAnimationTheme, "custom">,
  { bgHex: string; waveHex: string; bgRgb: [number, number, number]; waveRgb: [number, number, number] }
> = {
  "light-gray": {
    bgHex: "#FAFAFD", // Luminous, clean light grayish-white
    waveHex: "#707888", // Distinct, visible slate-gray wave ribbons
    bgRgb: [0.98, 0.98, 0.992],
    waveRgb: [0.44, 0.47, 0.53],
  },
  "dark-gray": {
    bgHex: "#18181b",
    waveHex: "#a1a1aa",
    bgRgb: [0.09, 0.09, 0.11],
    waveRgb: [0.63, 0.63, 0.67],
  },
  charcoal: {
    bgHex: "#222227",
    waveHex: "#cbd5e1",
    bgRgb: [0.13, 0.13, 0.15],
    waveRgb: [0.75, 0.78, 0.82],
  },
};

function hexToRgb(hex: string, fallback: [number, number, number]): [number, number, number] {
  const clean = hex.replace("#", "").trim();
  if (!clean) return fallback;
  const full = clean.length === 3 ? clean.split("").map((c) => c + c).join("") : clean;
  const num = parseInt(full, 16);
  if (isNaN(num)) return fallback;
  return [
    ((num >> 16) & 255) / 255,
    ((num >> 8) & 255) / 255,
    (num & 255) / 255,
  ];
}

export default function BackgroundAnimation({
  theme = "light-gray",
  backgroundColor,
  waveColor,
  onlyMoveOnCursor = true,
  sensitivity = 1.0,
  friction = 0.94,
  intensity = 0.55,
  className = "",
  style = {},
}: BackgroundAnimationProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const materialRef = useRef<THREE.ShaderMaterial | null>(null);

  // Motion physics refs
  const accumulatedTimeRef = useRef<number>(1.8);
  const velocityRef = useRef<number>(0);
  const lastMousePosRef = useRef<{ x: number; y: number } | null>(null);
  const targetMouseRef = useRef<THREE.Vector2>(new THREE.Vector2(0, 0));
  const currentMouseRef = useRef<THREE.Vector2>(new THREE.Vector2(0, 0));

  // Determine active colors
  const activePreset = theme !== "custom" && THEME_PRESETS[theme] ? THEME_PRESETS[theme] : THEME_PRESETS["light-gray"];
  const finalBgRgb = backgroundColor ? hexToRgb(backgroundColor, activePreset.bgRgb) : activePreset.bgRgb;
  const finalWaveRgb = waveColor ? hexToRgb(waveColor, activePreset.waveRgb) : activePreset.waveRgb;
  const containerBgColor = backgroundColor || activePreset.bgHex;

  // Update dynamic uniforms
  useEffect(() => {
    if (materialRef.current) {
      materialRef.current.uniforms.uBgColor.value.set(...finalBgRgb);
      materialRef.current.uniforms.uWaveColor.value.set(...finalWaveRgb);
      materialRef.current.uniforms.uIntensity.value = intensity;
    }
  }, [finalBgRgb, finalWaveRgb, intensity]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || typeof window === "undefined") return;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: false,
        powerPreference: "high-performance",
      });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      container.appendChild(renderer.domElement);
    } catch (err) {
      console.warn("WebGL is not supported on this device/browser.", err);
      return;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const clock = new THREE.Clock();

    const vertexShader = `
      varying vec2 vTextureCoord;
      void main() {
        vTextureCoord = uv;
        gl_Position = vec4(position, 1.0);
      }
    `;

    // Dynamic wave shader preserving the user's signature wave formula,
    // now rendered in elegant grayish ribbons on a light white background
    const fragmentShader = `
      precision mediump float;
      uniform vec2 iResolution;
      uniform float iTime;
      uniform vec2 iMouse;
      uniform vec3 uBgColor;
      uniform vec3 uWaveColor;
      uniform float uIntensity;
      varying vec2 vTextureCoord;

      void mainImage(out vec4 fragColor, in vec2 fragCoord) {
        vec2 uv = (2.0 * fragCoord - iResolution.xy) / min(iResolution.x, iResolution.y);

        // Gentle cursor magnetic ripple
        vec2 mouseUV = (2.0 * iMouse - iResolution.xy) / min(iResolution.x, iResolution.y);
        mouseUV.y = -mouseUV.y;
        float mouseDist = length(uv - mouseUV);
        float mouseAura = smoothstep(1.2, 0.0, mouseDist);
        uv += (mouseUV - uv) * (mouseAura * 0.05);

        // Harmonic wave oscillation (your signature wave distortion)
        for(float i = 1.0; i < 7.0; i++){
          uv.x += (0.42 / i) * cos(i * 2.0 * uv.y + iTime);
          uv.y += (0.42 / i) * cos(i * 1.4 * uv.x + iTime);
        }

        // Distinct, clearly visible wave ribbons
        float waveShape = abs(sin(iTime - uv.y - uv.x));
        float waveIntensity = 0.09 / max(waveShape, 0.045);
        waveIntensity = clamp(waveIntensity, 0.0, 1.0);

        // Blend from luminous light grayish-white base to distinct grayish wave ribbons
        vec3 finalColor = mix(uBgColor, uWaveColor, waveIntensity * uIntensity);

        fragColor = vec4(finalColor, 1.0);
      }

      void main() {
        vec4 color;
        mainImage(color, vTextureCoord * iResolution);
        gl_FragColor = color;
      }
    `;

    const uniforms = {
      iTime: { value: accumulatedTimeRef.current },
      iResolution: { value: new THREE.Vector2() },
      iMouse: { value: new THREE.Vector2() },
      uBgColor: { value: new THREE.Vector3(...finalBgRgb) },
      uWaveColor: { value: new THREE.Vector3(...finalWaveRgb) },
      uIntensity: { value: intensity },
    };

    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms,
    });
    materialRef.current = material;

    const geometry = new THREE.PlaneGeometry(2, 2);
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const onResize = () => {
      if (!container) return;
      const w = container.clientWidth || window.innerWidth;
      const h = container.clientHeight || window.innerHeight;
      renderer.setSize(w, h);
      uniforms.iResolution.value.set(w, h);
    };

    // Responsive cursor tracking: moves when mouse moves
    const onMouseMove = (event: MouseEvent) => {
      const clientX = event.clientX;
      const clientY = event.clientY;

      targetMouseRef.current.set(clientX, clientY);

      if (lastMousePosRef.current) {
        const dx = clientX - lastMousePosRef.current.x;
        const dy = clientY - lastMousePosRef.current.y;
        const dist = Math.hypot(dx, dy);

        if (onlyMoveOnCursor) {
          velocityRef.current += Math.min(dist * 0.00065 * sensitivity, 0.025);
        }
      }

      lastMousePosRef.current = { x: clientX, y: clientY };
    };

    const onTouchMove = (event: TouchEvent) => {
      if (event.touches.length > 0) {
        const touch = event.touches[0];
        const clientX = touch.clientX;
        const clientY = touch.clientY;

        targetMouseRef.current.set(clientX, clientY);

        if (lastMousePosRef.current) {
          const dx = clientX - lastMousePosRef.current.x;
          const dy = clientY - lastMousePosRef.current.y;
          const dist = Math.hypot(dx, dy);

          if (onlyMoveOnCursor) {
            velocityRef.current += Math.min(dist * 0.00065 * sensitivity, 0.025);
          }
        }
        lastMousePosRef.current = { x: clientX, y: clientY };
      }
    };

    const onStartReveal = () => {
      // Gracefully bloom wave ribbon motion as the start animation reveals into the background
      velocityRef.current = 0.016;
    };

    window.addEventListener("resize", onResize, { passive: true });
    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("start-animation-reveal", onStartReveal);
    onResize();

    // Silky animation loop with smooth friction glide
    renderer.setAnimationLoop(() => {
      if (onlyMoveOnCursor) {
        velocityRef.current *= friction;
        if (Math.abs(velocityRef.current) < 0.00002) {
          velocityRef.current = 0;
        }
        accumulatedTimeRef.current += velocityRef.current;
        uniforms.iTime.value = accumulatedTimeRef.current;
      } else {
        uniforms.iTime.value = clock.getElapsedTime() * (sensitivity * 0.4);
      }

      currentMouseRef.current.lerp(targetMouseRef.current, 0.07);
      uniforms.iMouse.value.copy(currentMouseRef.current);

      renderer.render(scene, camera);
    });

    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("start-animation-reveal", onStartReveal);
      renderer.setAnimationLoop(null);

      const canvas = renderer.domElement;
      if (canvas && canvas.parentNode) {
        canvas.parentNode.removeChild(canvas);
      }

      material.dispose();
      geometry.dispose();
      renderer.dispose();
    };
  }, [onlyMoveOnCursor, sensitivity, friction, intensity]);

  return (
    <div
      ref={containerRef}
      className={`pointer-events-none fixed inset-0 z-0 h-full w-full overflow-hidden ${className}`}
      style={{
        backgroundColor: containerBgColor,
        ...style,
      }}
      aria-hidden="true"
    />
  );
}
