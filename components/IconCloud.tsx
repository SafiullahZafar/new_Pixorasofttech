"use client";

import React, { useEffect, useMemo, useState } from "react";
import dynamic from "next/dynamic";
import {
  fetchSimpleIcons,
  ICloud,
  renderSimpleIcon,
  SimpleIcon,
} from "react-icon-cloud";

// This library generates random canvas IDs while rendering. Load its Cloud
// component only in the browser so the server and client markup cannot differ.
const Cloud = dynamic(
  () => import("react-icon-cloud").then((module) => module.Cloud),
  { ssr: false },
);

export const cloudProps: Omit<ICloud, "children"> = {
  containerProps: {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      paddingTop: 10,
    },
  },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 2,
    activeCursor: "default",
    tooltip: "native",
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: "#0000",
    maxSpeed: 0.04,
    minSpeed: 0.02,
    dragControl: true,
  },
};

export const renderCustomIcon = (icon: SimpleIcon, theme: string = "light") => {
  const bgHex = theme === "light" ? "#ffffff" : "#080510";
  const fallbackHex = theme === "light" ? "#0A2540" : "#ffffff";
  const minContrastRatio = theme === "dark" ? 2 : 1.2;

  return renderSimpleIcon({
    icon,
    bgHex,
    fallbackHex,
    minContrastRatio,
    size: 44,
    aProps: {
      href: undefined,
      target: undefined,
      rel: undefined,
      onClick: (e: React.MouseEvent) => e.preventDefault(),
    },
  });
};

export type DynamicCloudProps = {
  iconSlugs?: string[];
};

type IconData = Awaited<ReturnType<typeof fetchSimpleIcons>>;

export const defaultTechSlugs: string[] = [
  "typescript",
  "javascript",
  "react",
  "nextdotjs",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "postgresql",
  "firebase",
  "supabase",
  "mongodb",
  "prisma",
  "tailwindcss",
  "flutter",
  "android",
  "apple",
  "figma",
  "docker",
  "git",
  "github",
  "visualstudiocode",
  "amazonaws",
  "laravel",
  "go",
  "python",
  "threedotjs",
  "vercel",
];

export default function IconCloud({
  iconSlugs = defaultTechSlugs,
}: DynamicCloudProps) {
  const [data, setData] = useState<IconData | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    let isCancelled = false;
    fetchSimpleIcons({ slugs: iconSlugs })
      .then((res) => {
        if (!isCancelled) setData(res);
      })
      .catch((err) => {
        console.error("Failed to fetch icons for cloud:", err);
      });
    return () => {
      isCancelled = true;
    };
  }, [iconSlugs]);

  const renderedIcons = useMemo(() => {
    if (!data) return null;

    return Object.values(data.simpleIcons).map((icon) =>
      renderCustomIcon(icon, "light"),
    );
  }, [data]);

  if (!mounted) {
    return (
      <div className="flex items-center justify-center w-full min-h-[350px] sm:min-h-[440px]">
        <div className="w-12 h-12 rounded-full border-2 border-zinc-200 border-t-[#0342DD] animate-spin" />
      </div>
    );
  }

  return (
    <div className="relative w-full flex items-center justify-center overflow-hidden">
      {/* @ts-ignore */}
      <Cloud {...cloudProps}>
        <>{renderedIcons}</>
      </Cloud>
    </div>
  );
}
