"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export type BackgroundAnimationTheme = "dark-gray" | "charcoal" | "light-gray" | "custom";

export interface BackgroundAnimationProps {
  /**
   * Theme preset. Defaults to "dark-gray".
   */
  theme?: BackgroundAnimationTheme;
  /**
   * Custom background color (Hex string, e.g. "#1e1e24").
   * Overrides preset when theme is "custom" or if provided.
   */
  backgroundColor?: string;
  /**
   * Custom wave highlight color (Hex string, e.g. "#9ca3af").
   * Overrides preset when theme is "custom" or if provided.
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
   * Friction / deceleration rate (between 0.85 and 0.98).
   * Higher values mean waves glide longer after mouse stops.
   * Defaults to 0.92.
   */
  friction?: number;
  /**
   * Disable the radial center dimming effect.
   * Defaults to false.
   */
  disableCenterDimming?: boolean;
  /**
   * Additional Tailwind or CSS classes for the container.
   */
  className?: string;
  /**
   * Additional inline styles for the container.
   */
  style?: React.CSSProperties;
}

// Color presets for grayish aesthetics
const THEME_PRESETS: Record<
  Exclude<BackgroundAnimationTheme, "custom">,
  { bgHex: string; waveHex: string; bgRgb: [number, number, number]; waveRgb: [number, number, number] }
> = {
  "dark-gray": {
    bgHex: "#1a1a1f",
    waveHex: "#a1a1aa",
    bgRgb: [0.10, 0.10, 0.12],
    waveRgb: [0.63, 0.63, 0.67],
  },
  charcoal: {
    bgHex: "#222227",
    waveHex: "#cbd5e1",
    bgRgb: [0.13, 0.13, 0.15],
    waveRgb: [0.75, 0.78, 0.82],
  },
  "light-gray": {
    bgHex: "#F5F5F5",
    waveHex: "#8e95a2",
    bgRgb: [0.96, 0.96, 0.96],
    waveRgb: [0.52, 0.55, 0.62],
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
  friction = 0.92,
  disableCenterDimming = true,
  className = "",
  style = {},
}: BackgroundAnimationProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const materialRef = useRef<THREE.ShaderMaterial | null>(null);

  // Motion physics refs
  const accumulatedTimeRef = useRef<number>(1.2); // Start with formed wave patterns
  const velocityRef = useRef<number>(0);
  const lastMousePosRef = useRef<{ x: number; y: number } | null>(null);
  const targetMouseRef = useRef<THREE.Vector2>(new THREE.Vector2(0, 0));
  const currentMouseRef = useRef<THREE.Vector2>(new THREE.Vector2(0, 0));

  // Determine active colors
  const activePreset = theme !== "custom" && THEME_PRESETS[theme] ? THEME_PRESETS[theme] : THEME_PRESETS["dark-gray"];
  const finalBgRgb = backgroundColor ? hexToRgb(backgroundColor, activePreset.bgRgb) : activePreset.bgRgb;
  const finalWaveRgb = waveColor ? hexToRgb(waveColor, activePreset.waveRgb) : activePreset.waveRgb;
  const containerBgColor = backgroundColor || activePreset.bgHex;

  // Update dynamic uniforms
  useEffect(() => {
    if (materialRef.current) {
      materialRef.current.uniforms.uBgColor.value.set(...finalBgRgb);
      materialRef.current.uniforms.uWaveColor.value.set(...finalWaveRgb);
      materialRef.current.uniforms.disableCenterDimming.value = disableCenterDimming;
    }
  }, [finalBgRgb, finalWaveRgb, disableCenterDimming]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || typeof window === "undefined") return;

    // 1. Renderer initialization with safety check
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

    // 2. Vertex & Fragment Shaders
    const vertexShader = `
      varying vec2 vTextureCoord;
      void main() {
        vTextureCoord = uv;
        gl_Position = vec4(position, 1.0);
      }
    `;

    const fragmentShader = `
      precision mediump float;
      uniform vec2 iResolution;
      uniform float iTime;
      uniform vec2 iMouse;
      uniform vec3 uBgColor;
      uniform vec3 uWaveColor;
      uniform bool disableCenterDimming;
      varying vec2 vTextureCoord;

      void mainImage(out vec4 fragColor, in vec2 fragCoord) {
        vec2 uv = (2.0 * fragCoord - iResolution.xy) / min(iResolution.x, iResolution.y);

        // Center dimming
        vec2 center = iResolution.xy * 0.5;
        float dist = distance(fragCoord, center);
        float radius = min(iResolution.x, iResolution.y) * 0.5;
        float centerDim = disableCenterDimming ? 1.0 : smoothstep(radius * 0.25, radius * 0.65, dist);

        // Subtle cursor proximity ripple
        vec2 mouseUV = (2.0 * iMouse - iResolution.xy) / min(iResolution.x, iResolution.y);
        mouseUV.y = -mouseUV.y;
        float mouseDist = length(uv - mouseUV);
        float mousePush = smoothstep(0.8, 0.0, mouseDist) * 0.18;
        uv += normalize(uv - mouseUV + 0.0001) * mousePush;

        // Wave harmonics (organic flowing contours)
        for(float i = 1.0; i < 9.0; i++){
          uv.x += 0.55 / i * cos(i * 2.5 * uv.y + iTime);
          uv.y += 0.55 / i * cos(i * 1.5 * uv.x + iTime);
        }

        // Luminous grayish wave ridge intensity
        float waveIntensity = 0.085 / max(abs(sin(iTime - uv.y - uv.x)), 0.035);
        waveIntensity = clamp(waveIntensity, 0.0, 1.0);

        // Smooth blend: from grayish background to elegant silver/gray wave crests
        vec3 finalColor = mix(uBgColor, uWaveColor, waveIntensity * 0.88);

        // Optional center depth attenuation
        if (!disableCenterDimming) {
          finalColor = mix(finalColor * 0.65, finalColor, centerDim);
        }

        fragColor = vec4(finalColor, 1.0);
      }

      void main() {
        vec4 color;
        mainImage(color, vTextureCoord * iResolution);
        gl_FragColor = color;
      }
    `;

    // 3. Uniforms & Material
    const uniforms = {
      iTime: { value: accumulatedTimeRef.current },
      iResolution: { value: new THREE.Vector2() },
      iMouse: { value: new THREE.Vector2() },
      uBgColor: { value: new THREE.Vector3(...finalBgRgb) },
      uWaveColor: { value: new THREE.Vector3(...finalWaveRgb) },
      disableCenterDimming: { value: disableCenterDimming },
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

    // 4. Resize Handling
    const onResize = () => {
      if (!container) return;
      const w = container.clientWidth || window.innerWidth;
      const h = container.clientHeight || window.innerHeight;
      renderer.setSize(w, h);
      uniforms.iResolution.value.set(w, h);
    };

    // 5. Mouse Interaction: Wave moves ONLY when cursor moves
    const onMouseMove = (event: MouseEvent) => {
      const clientX = event.clientX;
      const clientY = event.clientY;

      targetMouseRef.current.set(clientX, clientY);

      if (lastMousePosRef.current) {
        const dx = clientX - lastMousePosRef.current.x;
        const dy = clientY - lastMousePosRef.current.y;
        const dist = Math.hypot(dx, dy);

        if (onlyMoveOnCursor) {
          // Add velocity proportional to cursor movement
          velocityRef.current += Math.min(dist * 0.0016 * sensitivity, 0.07);
        }
      }

      lastMousePosRef.current = { x: clientX, y: clientY };
    };

    // Handle touch move for mobile devices
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
            velocityRef.current += Math.min(dist * 0.0016 * sensitivity, 0.07);
          }
        }
        lastMousePosRef.current = { x: clientX, y: clientY };
      }
    };

    window.addEventListener("resize", onResize, { passive: true });
    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    onResize();

    // 6. Animation Loop with Friction Decay
    renderer.setAnimationLoop(() => {
      if (onlyMoveOnCursor) {
        // Apply friction to velocity so waves smoothly glide to a stop
        velocityRef.current *= friction;
        if (Math.abs(velocityRef.current) < 0.00003) {
          velocityRef.current = 0;
        }
        accumulatedTimeRef.current += velocityRef.current;
        uniforms.iTime.value = accumulatedTimeRef.current;
      } else {
        // Continuous ambient animation mode
        uniforms.iTime.value = clock.getElapsedTime() * sensitivity;
      }

      // Smooth mouse coordinate tracking
      currentMouseRef.current.lerp(targetMouseRef.current, 0.08);
      uniforms.iMouse.value.copy(currentMouseRef.current);

      renderer.render(scene, camera);
    });

    // 7. Cleanup
    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("touchmove", onTouchMove);
      renderer.setAnimationLoop(null);

      const canvas = renderer.domElement;
      if (canvas && canvas.parentNode) {
        canvas.parentNode.removeChild(canvas);
      }

      material.dispose();
      geometry.dispose();
      renderer.dispose();
    };
  }, [onlyMoveOnCursor, sensitivity, friction, disableCenterDimming]);

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
