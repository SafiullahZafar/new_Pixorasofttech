"use client";

import { useEffect, useState } from "react";
import type { ComponentType } from "react";
import type {
  BackgroundAnimationProps,
  BackgroundAnimationTheme,
} from "./BackgroundAnimationCanvas";
import { useAllowHeavyMotion } from "./useAllowHeavyMotion";

export type {
  BackgroundAnimationProps,
  BackgroundAnimationTheme,
} from "./BackgroundAnimationCanvas";

function getBackgroundColor(
  theme: BackgroundAnimationTheme = "light-gray",
  backgroundColor?: string,
) {
  if (backgroundColor) return backgroundColor;

  switch (theme) {
    case "dark-gray":
      return "#18181b";
    case "charcoal":
      return "#222227";
    default:
      return "#FAFAFD";
  }
}

export default function BackgroundAnimation(props: BackgroundAnimationProps) {
  const allowHeavyMotion = useAllowHeavyMotion();
  const [AnimatedBackground, setAnimatedBackground] =
    useState<ComponentType<BackgroundAnimationProps> | null>(null);

  useEffect(() => {
    if (!allowHeavyMotion) return;

    let cancelled = false;
    const timer = window.setTimeout(() => {
      import("./BackgroundAnimationCanvas")
        .then((module) => {
          if (!cancelled) setAnimatedBackground(() => module.default);
        })
        .catch((error: unknown) => {
          console.error("Failed to load the background animation.", error);
        });
    }, 700);

    return () => {
      cancelled = true;
      window.clearTimeout(timer);
    };
  }, [allowHeavyMotion]);

  return (
    <>
      <div
        className={`pointer-events-none fixed inset-0 z-0 h-full w-full overflow-hidden ${props.className ?? ""}`}
        style={{
          backgroundColor: getBackgroundColor(props.theme, props.backgroundColor),
          ...props.style,
        }}
        aria-hidden="true"
      />
      {allowHeavyMotion && AnimatedBackground && (
        <AnimatedBackground {...props} />
      )}
    </>
  );
}
