"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

const logos = [
  { src: "/home_page/client_logos/clientlogos1.png", alt: "Client brand" },
  { src: "/home_page/client_logos/clientlogos2.png", alt: "Billora POS" },
  { src: "/home_page/client_logos/clientlogos3.png", alt: "Byte and Brew" },
  { src: "/home_page/client_logos/clientlogos4.png", alt: "Client brand" },
  { src: "/home_page/client_logos/clientlogos5.png", alt: "Eduka" },
  { src: "/home_page/client_logos/clientlogos6.png", alt: "Glass Haven" },
  { src: "/home_page/client_logos/clientlogos7.png", alt: "Nexora HRMS" },
  { src: "/home_page/client_logos/clientlogos8.png", alt: "Eco Food" },
  { src: "/home_page/client_logos/clientlogos9.png", alt: "PixoraSoftTech" },
  { src: "/home_page/client_logos/clientlogos10.png", alt: "Growth Gauge" },
  { src: "/home_page/client_logos/clientlogos11.png", alt: "Pumpora Petroleum" },
  { src: "/home_page/client_logos/clientlogos12.png", alt: "Zostell Travel" },
  { src: "/home_page/client_logos/clientlogos13.png", alt: "Invenza" },
  { src: "/home_page/client_logos/clientlogos14.png", alt: "Solar Solutions" },
  { src: "/home_page/client_logos/clientlogos15.png", alt: "Threadix" },
  { src: "/home_page/client_logos/clientlogos16.png", alt: "Travel Hub" },
  { src: "/home_page/client_logos/clientlogos17.png", alt: "Zostell Travel" },
  { src: "/home_page/client_logos/clientlogos18.png", alt: "Client brand" },
];

const orbitCount = 3;
const iconsPerOrbit = Math.ceil(logos.length / orbitCount);
const orbits = Array.from({ length: orbitCount }, (_, orbitIndex) =>
  logos.slice(orbitIndex * iconsPerOrbit, (orbitIndex + 1) * iconsPerOrbit),
);

export default function ClientLogoSection() {
  const shouldReduceMotion = useReducedMotion();
  // Guard against hydration mismatch: useReducedMotion returns null on the server
  // but true/false on the client. Apply animation styles only after mount.
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  return (
    <section
      aria-labelledby="client-logos-heading"
      className="overflow-hidden border-t border-dashed border-zinc-300 bg-transparent px-5 py-20 font-sans sm:px-8 sm:py-24 md:px-12 md:py-28 xl:px-16 2xl:px-20 2xl:py-32"
    >
      <div className="mx-auto grid w-full max-w-[3000px] items-center gap-12 sm:gap-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-20 2xl:gap-32">
        <div className="mx-auto w-full max-w-3xl lg:mx-0">
          <div className="mb-5 flex items-center gap-2.5 sm:mb-7">
            <span className="size-2.5 rounded-full bg-[#0342DD]" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-600 sm:text-sm">
              OUR CLIENTS
            </span>
          </div>
          <h2
            id="client-logos-heading"
            className="text-4xl font-normal uppercase leading-tight tracking-tight text-black sm:text-5xl lg:text-6xl"
          >
            Clients we&apos;ve worked with
          </h2>
          <p className="mt-4 max-w-2xl text-sm font-normal leading-relaxed text-[#555555] sm:mt-8 sm:text-base">
            The logos shown here represent just some of the clients we've had
            the pleasure of working with. We partner with ambitious teams to
            turn ideas into thoughtful, reliable digital products and support
            them as their businesses grow.
          </p>
        </div>

        <div className="relative mx-auto flex aspect-square w-full max-w-[26rem] items-center justify-center sm:max-w-[30rem] xl:max-w-[34rem] 2xl:max-w-[38rem]">
          {orbits.map((orbitLogos, orbitIndex) => {
            const orbitSize = `${((14 + 6 * orbitIndex) / 26) * 100}%`;
            const duration = `${12 + orbitIndex * 6}s`;

            return (
              <div
                key={orbitIndex}
                className="absolute left-1/2 top-1/2 rounded-full border-2 border-dotted border-zinc-300"
                style={{
                  width: orbitSize,
                  height: orbitSize,
                  transform: "translate(-50%, -50%)",
                  // Only apply animation after client mount to avoid SSR/client mismatch
                  animation: mounted && !shouldReduceMotion
                    ? `orbit-spin ${duration} linear infinite`
                    : undefined,
                }}
              >
                {orbitLogos.map((logo, iconIndex) => {
                  const angle = (2 * Math.PI * iconIndex) / orbitLogos.length;
                  const x = 50 + 50 * Math.cos(angle);
                  const y = 50 + 50 * Math.sin(angle);

                  return (
                    <div
                      key={logo.src}
                      className="absolute flex size-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center p-1.5 sm:size-[4.5rem]"
                      style={{ left: `${x}%`, top: `${y}%` }}
                    >
                      <img
                        src={logo.src}
                        alt={logo.alt}
                        loading="lazy"
                        className="pointer-events-none h-full w-full select-none object-contain"
                        draggable={false}
                      />
                    </div>
                  );
                })}
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}
