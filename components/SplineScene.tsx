"use client";

import React, { Suspense, lazy } from "react";

const Spline = lazy(() => import("@splinetool/react-spline"));

interface SplineSceneProps {
  scene: string;
  className?: string;
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  return (
    <Suspense
      fallback={
        <div className="w-full h-full flex items-center justify-center min-h-[300px]">
          <div className="flex flex-col items-center gap-3">
            <div className="size-8 rounded-full border-2 border-white/20 border-t-white animate-spin" />
            <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest">
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
