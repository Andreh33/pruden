"use client";

import { useSyncExternalStore } from "react";

function subscribe(onStoreChange: () => void) {
  if (typeof window === "undefined") return () => {};
  window.addEventListener("scroll", onStoreChange, { passive: true });
  return () => window.removeEventListener("scroll", onStoreChange);
}

function getSnapshot() {
  return typeof window === "undefined" ? 0 : window.scrollY;
}

function getServerSnapshot() {
  return 0;
}

export function useScrolled(threshold = 8) {
  const scrollY = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  return scrollY > threshold;
}
