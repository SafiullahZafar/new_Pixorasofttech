"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import Image from "next/image";

export function ShaderAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isReady, setIsReady] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  // Timers begin only when the WebGL canvas is mounted and running
  useEffect(() => {
    if (!isReady) return;

    // 1. At 3200ms: The curly circular reveal has fully expanded past the screen corners.
    // Trigger reveal event and begin slow, smooth fadeout.
    const revealTimer = setTimeout(() => {
      window.dispatchEvent(new CustomEvent("start-animation-reveal"));
      setIsFadingOut(true);
    }, 3200);

    // 2. At 3750ms: Cleanly unmount StartAnimation from the DOM after smooth fade.
    const unmountTimer = setTimeout(() => {
      setIsVisible(false);
    }, 3750);

    return () => {
      clearTimeout(revealTimer);
      clearTimeout(unmountTimer);
    };
  }, [isReady]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const vertexShader = `
      void main() {
        gl_Position = vec4(position, 1.0);
      }
    `;

    const fragmentShader = `
      #define TWO_PI 6.2831853072
      #define PI 3.14159265359

      precision highp float;
      uniform vec2 resolution;
      uniform float time;

      void main(void) {
        vec2 uv = (gl_FragCoord.xy * 2.0 - resolution.xy) / min(resolution.x, resolution.y);
        
        // Gentle, slow ring swirl animation
        float t = max(time - 0.05, 0.0) * 0.11;
        float lineWidth = 0.0028;

        float ringIntensity = 0.0;
        for (int i = 0; i < 6; i++) {
          ringIntensity += lineWidth * float(i * i) / abs(
            fract(t + float(i) * 0.016) * 5.0
            - length(uv)
            + mod(uv.x + uv.y, 0.22)
          );
        }
        ringIntensity = clamp(ringIntensity, 0.0, 1.0);

        // Background #FAFAFD seamlessly matches page background
        vec3 bgColor = vec3(0.98039, 0.98039, 0.99216);
        // Website dark blue (#0A2540) & slate gray (#707888)
        vec3 darkBlue = vec3(0.0392, 0.1451, 0.2510);
        vec3 slateGray = vec3(0.4392, 0.4706, 0.5333);
        vec3 ringColor = mix(darkBlue, slateGray, clamp(length(uv) * 0.7, 0.0, 1.0));

        // Blend rings onto background
        vec3 finalColor = mix(bgColor, ringColor, ringIntensity * 0.9);

        // Curly Reveal Logic:
        // 0.0s - 1.1s: Closed. alpha = 1.0 everywhere. Hero section is completely covered.
        // 1.1s - 3.2s: Circular reveal expands outward with organic, curly ribbon folds matching the rings.
        float radius = length(uv);
        float angle = atan(uv.y, uv.x);
        float maxScreenDist = (length(resolution.xy) / min(resolution.x, resolution.y)) * 1.45;
        
        float alpha = 1.0;
        if (time > 1.1) {
          float revealProgress = clamp((time - 1.1) / 2.1, 0.0, 1.0);
          // Luxurious, smooth cubic easing
          float eased = revealProgress * revealProgress * (3.0 - 2.0 * revealProgress);

          // Curly ribbons distortion matching the shader rings
          float waveMod = (mod(uv.x + uv.y, 0.28) - 0.14) * 0.75;
          float curlyWave = sin(angle * 5.0 + t * 2.8) * 0.12 + cos(angle * 3.0 - t * 2.2) * 0.09;
          float curlEffect = (waveMod + curlyWave) * (1.0 - eased * 0.65);

          float revealRadius = eased * maxScreenDist + curlEffect;
          alpha = smoothstep(revealRadius - 0.055, revealRadius + 0.055, radius);
        }

        gl_FragColor = vec4(finalColor, alpha);
      }
    `;

    const camera = new THREE.Camera();
    camera.position.z = 1;

    const scene = new THREE.Scene();
    const geometry = new THREE.PlaneGeometry(2, 2);
    const uniforms = {
      time: { type: "f", value: 0.0 },
      resolution: { type: "v2", value: new THREE.Vector2() },
    };
    const material = new THREE.ShaderMaterial({
      uniforms,
      vertexShader,
      fragmentShader,
      transparent: true,
      depthWrite: false,
    });
    scene.add(new THREE.Mesh(geometry, material));

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    } catch {
      setIsVisible(false);
      return () => {
        geometry.dispose();
        material.dispose();
      };
    }

    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setClearColor(0x000000, 0);
    renderer.domElement.setAttribute("aria-hidden", "true");
    renderer.domElement.style.position = "absolute";
    renderer.domElement.style.inset = "0";
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    renderer.domElement.style.zIndex = "0";
    container.appendChild(renderer.domElement);

    const resize = () => {
      const { width, height } = container.getBoundingClientRect();
      if (width === 0 || height === 0) return;
      renderer.setSize(width, height);
      uniforms.resolution.value.set(renderer.domElement.width, renderer.domElement.height);
    };

    resize();
    renderer.render(scene, camera);

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(container);

    let animationId = 0;
    let disposed = false;
    const startTime = performance.now();

    const animate = () => {
      if (disposed) return;
      animationId = window.requestAnimationFrame(animate);
      const elapsed = (performance.now() - startTime) / 1000;
      uniforms.time.value = elapsed;
      renderer.render(scene, camera);
    };
    animate();
    setIsReady(true);

    return () => {
      disposed = true;
      window.cancelAnimationFrame(animationId);
      resizeObserver.disconnect();
      if (renderer.domElement.parentElement === container) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      aria-label="PixoraSoftTech intro animation"
      className="start-animation fixed inset-0 z-[10000] flex min-h-[100svh] w-full items-center justify-center overflow-hidden"
      style={{
        opacity: isFadingOut ? 0 : 1,
        pointerEvents: isFadingOut ? "none" : "auto",
        transition: "opacity 500ms ease-out",
      }}
    >
      {/* 
        Solid background shield during SSR and initial HTML parse.
        Ensures the hero section is 100% hidden before WebGL initializes.
        Fades away the instant the WebGL canvas begins rendering the closed rings.
      */}
      <div
        className={`absolute inset-0 bg-[#FAFAFD] transition-opacity duration-200 ${
          isReady ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      />

      <div
        ref={containerRef}
        aria-hidden="true"
        className="start-animation__shader absolute inset-0"
      />

      {/* 
        Monogram logo is hidden until WebGL is initialized.
        Once isReady is true, it scales smoothly into the center of the closed animation,
        then scales up in sync as the curly circular reveal opens.
      */}
      <div
        className={`start-animation__logo relative z-10 flex items-center justify-center pointer-events-none ${
          isReady ? "animate-monogram-reveal" : "opacity-0"
        }`}
      >
        <Image
          src="/pixora-monogram.png"
          alt="PixoraSoftTech monogram"
          width={264}
          height={272}
          priority
          className="relative h-auto w-full object-contain brightness-0"
        />
      </div>
    </div>
  );
}

export default ShaderAnimation;
