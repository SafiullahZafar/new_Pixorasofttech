"use client";

import { useRef, useState, useMemo } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useSpring,
  type MotionValue,
} from "framer-motion";
import DottedMap from "dotted-map";
import Image from "next/image";

export interface MapPoint {
  lat: number;
  lng: number;
  label?: string;
  offsetX?: number;
  offsetY?: number;
}

export interface MapDotConnection {
  start: MapPoint;
  end: MapPoint;
}

export interface MapProps {
  dots?: Array<{
    start: MapPoint;
    end: MapPoint;
  }>;
  lineColor?: string;
  showLabels?: boolean;
  labelClassName?: string;
  animationDuration?: number;
  loop?: boolean;
}

/**
 * Animated connection path that draws progressively as user scrolls into the map.
 * Once connected, a luminous photon particle streams along the path continuously.
 */
function AnimatedConnectionPath({
  dot,
  index,
  total,
  projectPoint,
  createCurvedPath,
  lineColor,
  smoothProgress,
}: {
  dot: { start: MapPoint; end: MapPoint };
  index: number;
  total: number;
  projectPoint: (lat: number, lng: number) => { x: number; y: number };
  createCurvedPath: (
    start: { x: number; y: number },
    end: { x: number; y: number }
  ) => string;
  lineColor: string;
  smoothProgress: MotionValue<number>;
}) {
  const startPoint = projectPoint(dot.start.lat, dot.start.lng);
  const endPoint = projectPoint(dot.end.lat, dot.end.lng);
  const pathCurve = createCurvedPath(startPoint, endPoint);

  // Staggered thresholds across the scroll window
  const startThreshold = (index / total) * 0.55;
  const endThreshold = Math.min(startThreshold + 0.38, 0.98);

  // Draw line length dynamically tied to scroll
  const pathLength = useTransform(
    smoothProgress,
    [startThreshold, endThreshold],
    [0, 1],
    { clamp: true }
  );

  const pathOpacity = useTransform(
    smoothProgress,
    [startThreshold, startThreshold + 0.03],
    [0, 1],
    { clamp: true }
  );

  return (
    <g>
      {/* Subtle dashed route underlay */}
      <path
        d={pathCurve}
        fill="none"
        stroke={lineColor}
        strokeOpacity="0.16"
        strokeWidth="1"
        strokeDasharray="3 4"
      />

      {/* Main clean blue connection line drawn smoothly on scroll */}
      <motion.path
        d={pathCurve}
        fill="none"
        stroke="#1E5BF4"
        strokeWidth="1.75"
        strokeOpacity="0.85"
        style={{
          pathLength,
          opacity: pathOpacity,
        }}
      />

      {/* Moving pulse: slightly lighter #0342DD, crisp with NO glow */}
      <motion.path
        d={pathCurve}
        fill="none"
        stroke="#2B66F6"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeDasharray="16 160"
        style={{
          pathLength,
          opacity: pathOpacity,
        }}
        animate={{
          strokeDashoffset: [-176, 0],
        }}
        transition={{
          duration: 2.8,
          repeat: Infinity,
          ease: "linear",
          delay: index * 0.35,
        }}
      />
    </g>
  );
}

/**
 * City node on the map: bursts with a pulse when its connection reaches it on scroll
 */
function CityNode({
  point,
  projectPoint,
  lineColor,
  showLabels,
  labelClassName,
  smoothProgress,
  activationProgress,
  onHover,
}: {
  point: MapPoint;
  projectPoint: (lat: number, lng: number) => { x: number; y: number };
  lineColor: string;
  showLabels: boolean;
  labelClassName: string;
  smoothProgress: MotionValue<number>;
  activationProgress: number;
  onHover: (label: string | null) => void;
}) {
  const coords = projectPoint(point.lat, point.lng);

  // Pop and bloom when the line reaches this city on scroll
  const scale = useTransform(
    smoothProgress,
    [activationProgress - 0.05, activationProgress, activationProgress + 0.08],
    [0.6, 1.45, 1],
    { clamp: true }
  );

  const opacity = useTransform(
    smoothProgress,
    [activationProgress - 0.06, activationProgress],
    [0.2, 1],
    { clamp: true }
  );

  const labelOpacity = useTransform(
    smoothProgress,
    [activationProgress - 0.02, activationProgress + 0.06],
    [0, 1],
    { clamp: true }
  );

  const labelY = useTransform(
    smoothProgress,
    [activationProgress - 0.02, activationProgress + 0.06],
    [6, 0],
    { clamp: true }
  );

  return (
    <g className="cursor-pointer">
      <motion.g
        style={{ scale, opacity }}
        onHoverStart={() => onHover(point.label || null)}
        onHoverEnd={() => onHover(null)}
        whileHover={{ scale: 1.4 }}
        transition={{ type: "spring", stiffness: 400, damping: 12 }}
      >
        {/* Continuous Radar Wave Ping */}
        <circle
          cx={coords.x}
          cy={coords.y}
          r="3.5"
          fill={lineColor}
          opacity="0.45"
        >
          <animate
            attributeName="r"
            from="3.5"
            to="16"
            dur="2.4s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            from="0.7"
            to="0"
            dur="2.4s"
            repeatCount="indefinite"
          />
        </circle>

        {/* Crisp Blue Core Dot */}
        <circle
          cx={coords.x}
          cy={coords.y}
          r="4"
          fill="#0342DD"
        />
        {/* Slightly lighter #0342DD Center Accent */}
        <circle cx={coords.x} cy={coords.y} r="1.8" fill="#1E5BF4" />
      </motion.g>

      {/* High-contrast City Label Badge */}
      {showLabels && point.label && (
        <motion.g
          style={{ opacity: labelOpacity, y: labelY }}
          className="pointer-events-none"
        >
          <foreignObject
            x={coords.x - 50 + (point.offsetX || 0)}
            y={coords.y - 32 + (point.offsetY || 0)}
            width="100"
            height="28"
            className="block"
          >
            <div className="flex items-center justify-center h-full">
              <span
                className={`font-medium px-2 py-0.5 rounded-full bg-white/95 text-black border border-zinc-200/90 shadow-sm backdrop-blur-xs whitespace-nowrap ${labelClassName}`}
              >
                {point.label}
              </span>
            </div>
          </foreignObject>
        </motion.g>
      )}
    </g>
  );
}

export function WorldMap({
  dots = [],
  lineColor = "#0342DD",
  showLabels = true,
  labelClassName = "text-xs font-semibold",
}: MapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredLocation, setHoveredLocation] = useState<string | null>(null);

  // Connect lines dynamically to scroll progress with fluid spring physics
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 85%", "center 42%"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 75,
    damping: 24,
    restDelta: 0.001,
  });

  const map = useMemo(
    () => new DottedMap({ height: 80, grid: "diagonal" }),
    []
  );

  // Bold black continent dots on transparent background
  const svgMap = useMemo(
    () =>
      map.getSVG({
        radius: 0.26,
        color: "#000000",
        shape: "circle",
        backgroundColor: "transparent",
      }),
    [map]
  );

  const projectPoint = (lat: number, lng: number) => {
    const x = (lng + 180) * (800 / 360);
    const y = (90 - lat) * (400 / 180);
    return { x, y };
  };

  const createCurvedPath = (
    start: { x: number; y: number },
    end: { x: number; y: number }
  ) => {
    const midX = (start.x + end.x) / 2;
    const midY = Math.min(start.y, end.y) - 50;
    return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
  };

  // Deduplicate city nodes so each location has one clean dot, ripple & badge
  const uniqueNodes = useMemo(() => {
    const nodeMap = new Map<
      string,
      { point: MapPoint; activationProgress: number }
    >();

    dots.forEach((dot, idx) => {
      const startKey =
        dot.start.label || `${dot.start.lat},${dot.start.lng}`;
      const endKey = dot.end.label || `${dot.end.lat},${dot.end.lng}`;

      const startProgress = (idx / dots.length) * 0.55;
      const endProgress = Math.min(startProgress + 0.38, 0.98);

      if (!nodeMap.has(startKey)) {
        nodeMap.set(startKey, {
          point: dot.start,
          activationProgress: startProgress,
        });
      }
      if (!nodeMap.has(endKey)) {
        nodeMap.set(endKey, {
          point: dot.end,
          activationProgress: endProgress,
        });
      }
    });

    return Array.from(nodeMap.values());
  }, [dots]);

  return (
    <div
      ref={containerRef}
      className="w-full aspect-[2/1] md:aspect-[2.4/1] lg:aspect-[2.1/1] bg-transparent relative font-sans overflow-hidden"
    >
      <Image
        src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
        className="h-full w-full [mask-image:linear-gradient(to_bottom,transparent_0%,black_15%,black_85%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,black_15%,black_85%,transparent_100%)] pointer-events-none select-none object-cover opacity-90"
        alt="world map"
        height="495"
        width="1056"
        draggable={false}
        priority
      />

      <svg
        viewBox="0 0 800 400"
        className="w-full h-full absolute inset-0 pointer-events-auto select-none"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={lineColor} stopOpacity="0.2" />
            <stop offset="25%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="75%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="100%" stopColor={lineColor} stopOpacity="0.3" />
          </linearGradient>

          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2.2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Dynamic scroll-connected connection lines */}
        {dots.map((dot, i) => (
          <AnimatedConnectionPath
            key={`conn-${i}-${dot.start.label}-${dot.end.label}`}
            dot={dot}
            index={i}
            total={dots.length}
            projectPoint={projectPoint}
            createCurvedPath={createCurvedPath}
            lineColor={lineColor}
            smoothProgress={smoothProgress}
          />
        ))}

        {/* City nodes with arrival pulse and sonar rings */}
        {uniqueNodes.map(({ point, activationProgress }, i) => (
          <CityNode
            key={`node-${i}-${point.label || `${point.lat}-${point.lng}`}`}
            point={point}
            projectPoint={projectPoint}
            lineColor={lineColor}
            showLabels={showLabels}
            labelClassName={labelClassName}
            smoothProgress={smoothProgress}
            activationProgress={activationProgress}
            onHover={setHoveredLocation}
          />
        ))}
      </svg>

      {/* Mobile Tooltip */}
      <AnimatePresence>
        {hoveredLocation && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute bottom-4 left-4 bg-white/95 text-black px-3 py-1.5 rounded-lg text-xs font-semibold backdrop-blur-sm sm:hidden border border-zinc-200 shadow-md"
          >
            {hoveredLocation}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default WorldMap;
