"use client";

import { useEffect } from "react";

export function PerformanceMonitor() {
  useEffect(() => {
    // Basic performance monitoring
    if (typeof window !== "undefined" && "PerformanceObserver" in window) {
      try {
        // Monitor navigation timing
        const navigationObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            if (entry.entryType === "navigation") {
              const navEntry = entry as PerformanceNavigationTiming;
              console.log("Navigation timing:", {
                domContentLoaded: navEntry.domContentLoadedEventEnd - navEntry.domContentLoadedEventStart,
                loadComplete: navEntry.loadEventEnd - navEntry.loadEventStart,
                totalTime: navEntry.loadEventEnd - navEntry.fetchStart,
              });
            }
          });
        });
        navigationObserver.observe({ entryTypes: ["navigation"] });

        // Monitor resource loading
        const resourceObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const slowResources = entries.filter((entry) => entry.duration > 1000);
          if (slowResources.length > 0) {
            console.log("Slow resources:", slowResources.map(entry => ({
              name: entry.name,
              duration: entry.duration,
              type: entry.entryType,
            })));
          }
        });
        resourceObserver.observe({ entryTypes: ["resource"] });

        return () => {
          navigationObserver.disconnect();
          resourceObserver.disconnect();
        };
      } catch (error) {
        console.warn("Performance monitoring not fully supported:", error);
      }
    }
  }, []);

  return null;
}