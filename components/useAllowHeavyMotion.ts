"use client";

import { useEffect, useState } from "react";

type NetworkInformation = EventTarget & {
  effectiveType?: string;
  saveData?: boolean;
};

type NavigatorWithConnection = Navigator & {
  connection?: NetworkInformation;
};

export function useAllowHeavyMotion() {
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const smallScreen = window.matchMedia("(max-width: 767px)");
    const connection = (navigator as NavigatorWithConnection).connection;
    const slowNetworks = new Set(["slow-2g", "2g", "3g"]);

    const update = () => {
      setAllowed(
        !reducedMotion.matches &&
          !smallScreen.matches &&
          !connection?.saveData &&
          !slowNetworks.has(connection?.effectiveType ?? ""),
      );
    };

    update();
    reducedMotion.addEventListener("change", update);
    smallScreen.addEventListener("change", update);
    connection?.addEventListener("change", update);

    return () => {
      reducedMotion.removeEventListener("change", update);
      smallScreen.removeEventListener("change", update);
      connection?.removeEventListener("change", update);
    };
  }, []);

  return allowed;
}
