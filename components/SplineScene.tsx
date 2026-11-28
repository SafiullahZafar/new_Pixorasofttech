"use client";

import React, { Suspense, lazy } from "react";
import { useAllowHeavyMotion } from "./useAllowHeavyMotion";

const Spline = lazy(() => import("@splinetool/react-spline"));

interface SplineSceneProps {
  scene: string;
  className?: string;
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  const allowHeavyMotion = useAllowHeavyMotion();

  if (!allowHeavyMotion) {
    return (
      <div
        className={`min-h-[300px] bg-gradient-to-br from-[#0A2540]/[0.04] via-white/50 to-[#0342DD]/[0.08] ${className ?? ""}`}
        aria-hidden="true"
      />
    );
  }

  return (
    <Suspense
      fallback={
        <div className="w-full h-full flex items-center justify-center min-h-[300px]">
          <div className="flex flex-col items-center gap-3">
            <div className="size-8 rounded-full border-2 border-black/15 border-t-[#0A2540] animate-spin" />
            <span className="text-xs font-mono text-black/60 uppercase tracking-widest">
              Loading 3D Core...
            </span>
          </div>
        </div>
      }
    >
      <Spline scene={scene} className={className} />
    </Suspense>
  );
}
