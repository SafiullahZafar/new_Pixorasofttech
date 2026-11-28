"use client";

import { useEffect, useState } from "react";
import type { ComponentType } from "react";
import { useAllowHeavyMotion } from "./useAllowHeavyMotion";

export default function StartAnimation() {
  const allowHeavyMotion = useAllowHeavyMotion();
  const [Animation, setAnimation] = useState<ComponentType | null>(null);

  useEffect(() => {
    if (!allowHeavyMotion) return;

    let cancelled = false;
    import("./StartAnimationCanvas")
      .then((module) => {
        if (!cancelled) setAnimation(() => module.default);
      })
      .catch((error: unknown) => {
        console.error("Failed to load the intro animation.", error);
      });

    return () => {
      cancelled = true;
    };
  }, [allowHeavyMotion]);

  return allowHeavyMotion && Animation ? <Animation /> : null;
}
