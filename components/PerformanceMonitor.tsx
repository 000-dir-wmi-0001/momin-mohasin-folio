"use client";

import { useEffect } from "react";

export function PerformanceMonitor() {
  useEffect(() => {
    // ❗ Exit early on mobile or server
    if (typeof window === "undefined" || window.innerWidth < 768) return;
    if (!("PerformanceObserver" in window)) return;

    try {
      // Navigation timing observer
      const navigationObserver = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.entryType === "navigation") {
            const nav = entry as PerformanceNavigationTiming;
            console.log("Navigation timing:", {
              domContentLoaded:
                nav.domContentLoadedEventEnd -
                nav.domContentLoadedEventStart,
              loadComplete:
                nav.loadEventEnd - nav.loadEventStart,
              totalTime:
                nav.loadEventEnd - nav.fetchStart,
            });
          }
        });
      });

      navigationObserver.observe({ entryTypes: ["navigation"] });

      // Resource timing observer
      const resourceObserver = new PerformanceObserver((list) => {
        const slowResources = list
          .getEntries()
          .filter((entry) => entry.duration > 1000);

        if (slowResources.length > 0) {
          console.log(
            "Slow resources:",
            slowResources.map((entry) => ({
              name: entry.name,
              duration: entry.duration,
              type: entry.entryType,
            }))
          );
        }
      });

      resourceObserver.observe({ entryTypes: ["resource"] });

      // ✅ Proper cleanup
      return () => {
        navigationObserver.disconnect();
        resourceObserver.disconnect();
      };
    } catch (error) {
      console.warn("Performance monitoring not supported:", error);
    }
  }, []);

  return null;
}
