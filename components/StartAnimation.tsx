"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import Image from "next/image";

export function ShaderAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true);

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
        // float t = time * 0.04;
        float t = max(time - 0.09, 0.0) * 0.05;
        float lineWidth = 0.002;

        vec3 color = vec3(0.0);
        for (int j = 0; j < 3; j++) {
          for (int i = 0; i < 5; i++) {
            color[j] += lineWidth * float(i * i) / abs(
              fract(t - 0.01 * float(j) + float(i) * 0.01) * 5.0
              - length(uv)
              + mod(uv.x + uv.y, 0.2)
            );
          }
        }

        float radius = length(uv);
        float revealDistance = 18.4 * max(resolution.x, resolution.y) / min(resolution.x, resolution.y);
        // Follow the same outward-moving ring phase as the original shader,
        // keeping its diagonal ripple and letting the hero show behind it.
        float revealRadius = min((t + 0.01) * 5.0, revealDistance)
                           + mod(uv.x + uv.y, 0.2) - 0.4;
        float alpha = smoothstep(revealRadius - 0.045, revealRadius + 0.045, radius);
        gl_FragColor = vec4(color[0], color[1], color[2], alpha);
      }
    `;

    const camera = new THREE.Camera();
    camera.position.z = 1;

    const scene = new THREE.Scene();
    const geometry = new THREE.PlaneGeometry(2, 2);
    const uniforms = {
      time: { type: "f", value: 0.001 },
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
      // Keep the page usable in browsers or devices without WebGL support.
      return () => {
        geometry.dispose();
        material.dispose();
      };
    }

    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setClearColor(0x00000, 0);
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
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(container);

    let animationId = 0;
    let disposed = false;
    const animate = () => {
      if (disposed) return;
      animationId = window.requestAnimationFrame(animate);
      uniforms.time.value += 0.05;
      renderer.render(scene, camera);
    };
    animate();

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
      onAnimationEnd={(event) => {
        if (event.target === event.currentTarget && event.animationName === "intro-exit") {
          setIsVisible(false);
        }
      }}
      className="start-animation fixed inset-0 z-[100] flex min-h-[100svh] w-full items-center justify-center overflow-hidden"
    >
      <div
        ref={containerRef}
        aria-hidden="true"
        className="start-animation__shader absolute inset-0"
      />
      <div className="start-animation__logo relative z-10 flex w-[min(72vw,42vh,420px)] max-w-[min(72vw,42vh,420px)] items-center justify-center">
        <Image
          src="/pixora-monogram.png"
          alt="PixoraSoftTech monogram"
          width={264}
          height={272}
          priority
          className="relative h-auto w-full object-contain"
        />
      </div>
    </div>
  );
}

export default ShaderAnimation;
