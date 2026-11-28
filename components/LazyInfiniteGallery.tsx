"use client";

import { useEffect, useRef, useState } from "react";
import type { ComponentType } from "react";
import type { InfiniteGalleryProps } from "./InfiniteGallery";
import InfiniteGalleryFallback from "./InfiniteGalleryFallback";
import { useAllowHeavyMotion } from "./useAllowHeavyMotion";

export default function LazyInfiniteGallery(props: InfiniteGalleryProps) {
  const hostRef = useRef<HTMLDivElement>(null);
  const [nearViewport, setNearViewport] = useState(false);
  const [Gallery, setGallery] =
    useState<ComponentType<InfiniteGalleryProps> | null>(null);
  const allowHeavyMotion = useAllowHeavyMotion();
  const className = props.className ?? "h-full w-full";
  const title = props.centerTitle ?? "Who We Are";

  useEffect(() => {
    const host = hostRef.current;
    if (!host || !("IntersectionObserver" in window)) {
      const timer = window.setTimeout(() => setNearViewport(true), 0);
      return () => window.clearTimeout(timer);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setNearViewport(true);
          observer.disconnect();
        }
      },
      { rootMargin: "600px" },
    );
    observer.observe(host);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!nearViewport || !allowHeavyMotion || Gallery) return;

    let cancelled = false;
    import("./InfiniteGallery")
      .then((module) => {
        if (!cancelled) setGallery(() => module.default);
      })
      .catch((error: unknown) => {
        console.error("Failed to load the 3D gallery.", error);
      });

    return () => {
      cancelled = true;
    };
  }, [nearViewport, allowHeavyMotion, Gallery]);

  if (Gallery) return <Gallery {...props} />;

  return (
    <div ref={hostRef} className={className} style={props.style}>
      <InfiniteGalleryFallback images={props.images} title={title} />
    </div>
  );
}
