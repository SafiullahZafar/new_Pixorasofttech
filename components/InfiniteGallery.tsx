"use client";

import type React from "react";
import {
  useRef,
  useMemo,
  useCallback,
  useState,
  useEffect,
  Suspense,
} from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import { useMotionValueEvent, type MotionValue } from "framer-motion";
import * as THREE from "three";

export type ImageItem = string | { src: string; alt?: string };

export interface FadeSettings {
  fadeIn: {
    start: number;
    end: number;
  };
  fadeOut: {
    start: number;
    end: number;
  };
}

export interface BlurSettings {
  blurIn: {
    start: number;
    end: number;
  };
  blurOut: {
    start: number;
    end: number;
  };
  maxBlur: number;
}

export interface InfiniteGalleryProps {
  images: ImageItem[];
  speed?: number;
  zSpacing?: number;
  visibleCount?: number;
  falloff?: { near: number; far: number };
  fadeSettings?: FadeSettings;
  blurSettings?: BlurSettings;
  className?: string;
  style?: React.CSSProperties;
  centerTitle?: string;
  scrollProgress?: MotionValue<number>;
}

interface PlaneData {
  index: number;
  z: number;
  imageIndex: number;
  x: number;
  y: number;
}

const DEFAULT_DEPTH_RANGE = 50;
const MAX_HORIZONTAL_OFFSET = 8;
const MAX_VERTICAL_OFFSET = 8;

const createClothMaterial = () => {
  return new THREE.ShaderMaterial({
    transparent: true,
    uniforms: {
      map: { value: null },
      opacity: { value: 1.0 },
      blurAmount: { value: 0.0 },
      scrollForce: { value: 0.0 },
      time: { value: 0.0 },
      isHovered: { value: 0.0 },
    },
    vertexShader: `
      uniform float scrollForce;
      uniform float time;
      uniform float isHovered;
      varying vec2 vUv;
      varying vec3 vNormal;
      
      void main() {
        vUv = uv;
        vNormal = normal;
        
        vec3 pos = position;
        
        // Gentle, calm curving based on scroll force
        float curveIntensity = clamp(scrollForce * 0.06, -0.25, 0.25);
        
        // Base curve across the plane based on distance from center
        float distanceFromCenter = length(pos.xy);
        float curve = distanceFromCenter * distanceFromCenter * curveIntensity;
        
        // Subtle micro-ripples
        float ripple1 = sin(pos.x * 2.0 + time * 1.5) * 0.008;
        float ripple2 = sin(pos.y * 2.5 + time * 1.2) * 0.006;
        float clothEffect = (ripple1 + ripple2);
        
        // Flag waving effect when hovered
        float flagWave = 0.0;
        if (isHovered > 0.5) {
          float wavePhase = pos.x * 3.0 + time * 6.0;
          float waveAmplitude = sin(wavePhase) * 0.05;
          float dampening = smoothstep(-0.5, 0.5, pos.x);
          flagWave = waveAmplitude * dampening;
        }
        
        pos.z -= (curve + clothEffect + flagWave);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
      }
    `,
    fragmentShader: `
      uniform sampler2D map;
      uniform float opacity;
      uniform float blurAmount;
      uniform float scrollForce;
      varying vec2 vUv;
      varying vec3 vNormal;
      
      void main() {
        vec4 color = texture2D(map, vUv);
        
        // Universal blur approximation
        if (blurAmount > 0.0) {
          vec2 texelSize = vec2(1.0 / 512.0, 1.0 / 512.0);
          vec4 blurred = vec4(0.0);
          float total = 0.0;
          
          for (float x = -2.0; x <= 2.0; x += 1.0) {
            for (float y = -2.0; y <= 2.0; y += 1.0) {
              vec2 offset = vec2(x, y) * texelSize * blurAmount;
              float weight = 1.0 / (1.0 + length(vec2(x, y)));
              blurred += texture2D(map, vUv + offset) * weight;
              total += weight;
            }
          }
          color = blurred / total;
        }
        
        float curveHighlight = abs(scrollForce) * 0.03;
        color.rgb += vec3(curveHighlight * 0.08);
        
        gl_FragColor = vec4(color.rgb, color.a * opacity);
      }
    `,
  });
};

function ImagePlane({
  texture,
  position,
  scale,
  material,
}: {
  texture: THREE.Texture;
  position: [number, number, number];
  scale: [number, number, number];
  material: THREE.ShaderMaterial;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (material && texture) {
      material.uniforms.map.value = texture;
    }
  }, [material, texture]);

  useEffect(() => {
    if (material && material.uniforms) {
      material.uniforms.isHovered.value = isHovered ? 1.0 : 0.0;
    }
  }, [material, isHovered]);

  return (
    <mesh
      ref={meshRef}
      position={position}
      scale={scale}
      material={material}
      onPointerEnter={() => setIsHovered(true)}
      onPointerLeave={() => setIsHovered(false)}
    >
      <planeGeometry args={[1, 1, 32, 32]} />
    </mesh>
  );
}

function GalleryScene({
  images,
  speed = 1,
  visibleCount = 8,
  fadeSettings = {
    fadeIn: { start: 0.05, end: 0.15 },
    fadeOut: { start: 0.85, end: 0.95 },
  },
  blurSettings = {
    blurIn: { start: 0.0, end: 0.1 },
    blurOut: { start: 0.9, end: 1.0 },
    maxBlur: 3.0,
  },
  scrollProgress,
}: Omit<InfiniteGalleryProps, "className" | "style">) {
  const [scrollVelocity, setScrollVelocity] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const lastInteraction = useRef(Date.now());
  const touchStartY = useRef(0);
  const prevProgress = useRef(0);

  const normalizedImages = useMemo(
    () =>
      images.map((img) =>
        typeof img === "string" ? { src: img, alt: "" } : img
      ),
    [images]
  );

  const textures = useTexture(normalizedImages.map((img) => img.src));

  const materials = useMemo(
    () => Array.from({ length: visibleCount }, () => createClothMaterial()),
    [visibleCount]
  );

  const spatialPositions = useMemo(() => {
    const positions: { x: number; y: number }[] = [];
    const maxHorizontalOffset = MAX_HORIZONTAL_OFFSET;
    const maxVerticalOffset = MAX_VERTICAL_OFFSET;

    for (let i = 0; i < visibleCount; i++) {
      const horizontalAngle = (i * 2.618) % (Math.PI * 2);
      const verticalAngle = (i * 1.618 + Math.PI / 3) % (Math.PI * 2);

      const horizontalRadius = (i % 3) * 1.25;
      const verticalRadius = ((i + 1) % 4) * 0.85;

      const x =
        (Math.sin(horizontalAngle) *
          horizontalRadius *
          maxHorizontalOffset) /
        3;
      const y =
        (Math.cos(verticalAngle) * verticalRadius * maxVerticalOffset) / 4;

      positions.push({ x, y });
    }

    return positions;
  }, [visibleCount]);

  const totalImages = normalizedImages.length;
  const depthRange = DEFAULT_DEPTH_RANGE;

  const planesData = useRef<PlaneData[]>(
    Array.from({ length: visibleCount }, (_, i) => ({
      index: i,
      z:
        visibleCount > 0
          ? ((depthRange / visibleCount) * i) % depthRange
          : 0,
      imageIndex: totalImages > 0 ? i % totalImages : 0,
      x: spatialPositions[i]?.x ?? 0,
      y: spatialPositions[i]?.y ?? 0,
    }))
  );

  useEffect(() => {
    planesData.current = Array.from({ length: visibleCount }, (_, i) => ({
      index: i,
      z:
        visibleCount > 0
          ? ((depthRange / Math.max(visibleCount, 1)) * i) % depthRange
          : 0,
      imageIndex: totalImages > 0 ? i % totalImages : 0,
      x: spatialPositions[i]?.x ?? 0,
      y: spatialPositions[i]?.y ?? 0,
    }));
  }, [depthRange, spatialPositions, totalImages, visibleCount]);

  // Pinned scroll tracking: card flight smoothly advances with page scroll
  useMotionValueEvent(
    scrollProgress || ({ get: () => 0, on: () => () => {} } as unknown as MotionValue<number>),
    "change",
    (latest: number) => {
      const inside = latest > 0.005 && latest < 0.995;
      const delta = latest - prevProgress.current;
      prevProgress.current = latest;

      if (inside && Math.abs(delta) > 0.0001) {
        setScrollVelocity((prev) => prev + delta * 24 * speed);
        setAutoPlay(false);
        lastInteraction.current = Date.now();
      }
    }
  );

  // Non-blocking wheel handler: gentle, controlled scroll advance
  const handleWheel = useCallback(
    (event: WheelEvent) => {
      setScrollVelocity((prev) => prev + event.deltaY * 0.008 * speed);
      setAutoPlay(false);
      lastInteraction.current = Date.now();
    },
    [speed]
  );

  // Synchronize with natural page scrolling when not pinned
  useEffect(() => {
    if (scrollProgress) return;
    let lastY = typeof window !== "undefined" ? window.scrollY : 0;
    const onScroll = () => {
      const currentY = window.scrollY;
      const delta = currentY - lastY;
      lastY = currentY;

      const canvasEl = document.querySelector("#infinite-gallery-canvas");
      if (canvasEl) {
        const rect = canvasEl.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          if (Math.abs(delta) > 0.5) {
            setScrollVelocity((prev) => prev + delta * 0.012 * speed);
            setAutoPlay(false);
            lastInteraction.current = Date.now();
          }
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [speed, scrollProgress]);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
        setScrollVelocity((prev) => prev - 1.5 * speed);
        setAutoPlay(false);
        lastInteraction.current = Date.now();
      } else if (event.key === "ArrowDown" || event.key === "ArrowRight") {
        setScrollVelocity((prev) => prev + 1.5 * speed);
        setAutoPlay(false);
        lastInteraction.current = Date.now();
      }
    },
    [speed]
  );

  const handleTouchStart = useCallback((e: TouchEvent) => {
    if (e.touches.length > 0) {
      touchStartY.current = e.touches[0].clientY;
      setAutoPlay(false);
      lastInteraction.current = Date.now();
    }
  }, []);

  const handleTouchMove = useCallback(
    (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const delta = touchStartY.current - e.touches[0].clientY;
        touchStartY.current = e.touches[0].clientY;
        setScrollVelocity((prev) => prev + delta * 0.014 * speed);
        setAutoPlay(false);
        lastInteraction.current = Date.now();
      }
    },
    [speed]
  );

  useEffect(() => {
    const canvas = document.querySelector("#infinite-gallery-canvas canvas");
    if (canvas) {
      canvas.addEventListener("wheel", handleWheel as EventListener, {
        passive: true,
      });
      canvas.addEventListener("touchstart", handleTouchStart as EventListener, {
        passive: true,
      });
      canvas.addEventListener("touchmove", handleTouchMove as EventListener, {
        passive: true,
      });
      document.addEventListener("keydown", handleKeyDown);

      return () => {
        canvas.removeEventListener("wheel", handleWheel as EventListener);
        canvas.removeEventListener("touchstart", handleTouchStart as EventListener);
        canvas.removeEventListener("touchmove", handleTouchMove as EventListener);
        document.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [handleWheel, handleKeyDown, handleTouchStart, handleTouchMove]);

  // Gentle auto-play resumes after 2s of inactivity while inside section
  useEffect(() => {
    const interval = setInterval(() => {
      const isInside = scrollProgress
        ? scrollProgress.get() > 0.005 && scrollProgress.get() < 0.995
        : true;

      if (isInside && Date.now() - lastInteraction.current > 2000) {
        setAutoPlay(true);
      } else if (!isInside) {
        setAutoPlay(false);
        setScrollVelocity(0);
      }
    }, 500);
    return () => clearInterval(interval);
  }, [scrollProgress]);

  useFrame((state, delta) => {
    const isInside = scrollProgress
      ? scrollProgress.get() > 0.005 && scrollProgress.get() < 0.995
      : true;

    if (autoPlay && isInside) {
      setScrollVelocity((prev) => prev + 0.3 * delta);
    }

    setScrollVelocity((prev) => prev * 0.94);

    const time = state.clock.getElapsedTime();
    materials.forEach((material) => {
      if (material && material.uniforms) {
        material.uniforms.time.value = time;
        material.uniforms.scrollForce.value = scrollVelocity;
      }
    });

    const imageAdvance =
      totalImages > 0 ? visibleCount % totalImages || totalImages : 0;
    const totalRange = depthRange;

    planesData.current.forEach((plane, i) => {
      let newZ = plane.z + scrollVelocity * delta * 6;
      let wrapsForward = 0;
      let wrapsBackward = 0;

      if (newZ >= totalRange) {
        wrapsForward = Math.floor(newZ / totalRange);
        newZ -= totalRange * wrapsForward;
      } else if (newZ < 0) {
        wrapsBackward = Math.ceil(-newZ / totalRange);
        newZ += totalRange * wrapsBackward;
      }

      if (wrapsForward > 0 && imageAdvance > 0 && totalImages > 0) {
        plane.imageIndex =
          (plane.imageIndex + wrapsForward * imageAdvance) % totalImages;
      }

      if (wrapsBackward > 0 && imageAdvance > 0 && totalImages > 0) {
        const step = plane.imageIndex - wrapsBackward * imageAdvance;
        plane.imageIndex = ((step % totalImages) + totalImages) % totalImages;
      }

      plane.z = ((newZ % totalRange) + totalRange) % totalRange;
      plane.x = spatialPositions[i]?.x ?? 0;
      plane.y = spatialPositions[i]?.y ?? 0;

      const normalizedPosition = plane.z / totalRange;
      let opacity = 1;

      if (
        normalizedPosition >= fadeSettings.fadeIn.start &&
        normalizedPosition <= fadeSettings.fadeIn.end
      ) {
        opacity =
          (normalizedPosition - fadeSettings.fadeIn.start) /
          (fadeSettings.fadeIn.end - fadeSettings.fadeIn.start);
      } else if (normalizedPosition < fadeSettings.fadeIn.start) {
        opacity = 0;
      } else if (
        normalizedPosition >= fadeSettings.fadeOut.start &&
        normalizedPosition <= fadeSettings.fadeOut.end
      ) {
        opacity =
          1 -
          (normalizedPosition - fadeSettings.fadeOut.start) /
          (fadeSettings.fadeOut.end - fadeSettings.fadeOut.start);
      } else if (normalizedPosition > fadeSettings.fadeOut.end) {
        opacity = 0;
      }

      opacity = Math.max(0, Math.min(1, opacity));

      let blur = 0;
      if (
        normalizedPosition >= blurSettings.blurIn.start &&
        normalizedPosition <= blurSettings.blurIn.end
      ) {
        blur =
          blurSettings.maxBlur *
          (1 -
            (normalizedPosition - blurSettings.blurIn.start) /
            (blurSettings.blurIn.end - blurSettings.blurIn.start));
      } else if (normalizedPosition < blurSettings.blurIn.start) {
        blur = blurSettings.maxBlur;
      } else if (
        normalizedPosition >= blurSettings.blurOut.start &&
        normalizedPosition <= blurSettings.blurOut.end
      ) {
        blur =
          blurSettings.maxBlur *
          ((normalizedPosition - blurSettings.blurOut.start) /
            (blurSettings.blurOut.end - blurSettings.blurOut.start));
      } else if (normalizedPosition > blurSettings.blurOut.end) {
        blur = blurSettings.maxBlur;
      }

      blur = Math.max(0, Math.min(blurSettings.maxBlur, blur));

      const material = materials[i];
      if (material && material.uniforms) {
        material.uniforms.opacity.value = opacity;
        material.uniforms.blurAmount.value = blur;
      }
    });
  });

  if (normalizedImages.length === 0) return null;

  return (
    <>
      {planesData.current.map((plane, i) => {
        const texture = textures[plane.imageIndex];
        const material = materials[i];

        if (!texture || !material) return null;

        const worldZ = plane.z - depthRange / 2;

        const img = texture.image as { width?: number; height?: number } | undefined;
        const aspect =
          img && img.width && img.height ? img.width / img.height : 1.33;
        const scale: [number, number, number] =
          aspect > 1 ? [2.6 * aspect, 2.6, 1] : [2.6, 2.6 / aspect, 1];

        return (
          <ImagePlane
            key={plane.index}
            texture={texture}
            position={[plane.x, plane.y, worldZ]}
            scale={scale}
            material={material}
          />
        );
      })}
    </>
  );
}

function FallbackGallery({
  images,
  title,
}: {
  images: ImageItem[];
  title: string;
}) {
  const normalizedImages = useMemo(
    () =>
        images.map((img, index) =>
        typeof img === "string"
          ? { src: img, alt: `${title} project image ${index + 1}` }
          : { ...img, alt: img.alt || `${title} project image ${index + 1}` }
      ),
    [images]
  );

  return (
    <div className="relative flex h-full min-h-[280px] flex-col items-center justify-center overflow-hidden bg-white/70 p-4 text-black">
      <h2 className="mb-4 text-center text-3xl font-serif italic text-black/70 sm:text-5xl">
        {title}
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-h-96 overflow-y-auto w-full">
        {normalizedImages.map((img, i) => (
          <img
            key={i}
            src={img.src || "/placeholder.svg"}
            alt={img.alt}
            className="w-full h-36 object-cover rounded-2xl border border-zinc-200"
          />
        ))}
      </div>
    </div>
  );
}

export default function InfiniteGallery({
  images,
  className = "h-full w-full",
  style,
  visibleCount,
  fadeSettings = {
    fadeIn: { start: 0.05, end: 0.25 },
    fadeOut: { start: 0.4, end: 0.43 },
  },
  blurSettings = {
    blurIn: { start: 0.0, end: 0.1 },
    blurOut: { start: 0.4, end: 0.43 },
    maxBlur: 6.0,
  },
  centerTitle = "Who We Are",
  scrollProgress,
}: InfiniteGalleryProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [webglSupported, setWebglSupported] = useState(true);

  useEffect(() => {
    setMounted(true);
    try {
      const canvas = document.createElement("canvas");
      const gl =
        canvas.getContext("webgl") ||
        canvas.getContext("experimental-webgl");
      if (!gl) {
        setWebglSupported(false);
      }
    } catch {
      setWebglSupported(false);
    }
  }, []);

  if (!mounted) {
    return (
      <div className={className} style={style}>
        <FallbackGallery images={images} title={centerTitle} />
      </div>
    );
  }

  if (!webglSupported) {
    return (
      <div className={className} style={style}>
        <FallbackGallery images={images} title={centerTitle} />
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      id="infinite-gallery-canvas"
      className={`relative ${className} bg-transparent overflow-hidden select-none cursor-default [mask-image:linear-gradient(to_bottom,transparent_0%,black_6%,black_94%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,black_6%,black_94%,transparent_100%)]`}
      style={style}
    >
      {/* Center Cinematic Serif Italic Title with luxury gradient color */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 px-4">
        <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-serif italic font-normal tracking-tight select-none text-center bg-gradient-to-b from-zinc-900 via-zinc-600 to-zinc-400 bg-clip-text text-transparent drop-shadow-xs">
          {centerTitle}
        </h2>
      </div>

      {/* 3D Canvas with normal cursor (grab cursor removed) and transparent background */}
      <Canvas
        camera={{ position: [0, 0, 0], fov: 55 }}
        gl={{ antialias: true, alpha: true }}
        className="w-full h-full cursor-default"
      >
        <Suspense fallback={null}>
          <GalleryScene
            images={images}
            visibleCount={visibleCount}
            fadeSettings={fadeSettings}
            blurSettings={blurSettings}
            scrollProgress={scrollProgress}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
