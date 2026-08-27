"use client";

import { useEffect } from "react";
import { onCLS, onINP, onFCP, onLCP, onTTFB } from "web-vitals";

export function PerformanceMonitor() {
  useEffect(() => {
    const isDev = process.env.NODE_ENV === "development";

    // Core Web Vitals monitoring
    onCLS((metric) => { if (isDev) console.log("CLS:", metric); });
    onINP((metric) => { if (isDev) console.log("INP:", metric); });
    onFCP((metric) => { if (isDev) console.log("FCP:", metric); });
    onLCP((metric) => { if (isDev) console.log("LCP:", metric); });
    onTTFB((metric) => { if (isDev) console.log("TTFB:", metric); });

    if (typeof window === "undefined") return;
    if (!("PerformanceObserver" in window)) return;

    try {
      const navigationObserver = new PerformanceObserver((list) => {
        if (!isDev) return;
        list.getEntries().forEach((entry) => {
          if (entry.entryType === "navigation") {
            const nav = entry as PerformanceNavigationTiming;
            console.log("Navigation timing:", {
              domContentLoaded: nav.domContentLoadedEventEnd - nav.domContentLoadedEventStart,
              loadComplete: nav.loadEventEnd - nav.loadEventStart,
              totalTime: nav.loadEventEnd - nav.fetchStart,
            });
          }
        });
      });
      navigationObserver.observe({ entryTypes: ["navigation"] });

      const resourceObserver = new PerformanceObserver((list) => {
        if (!isDev) return;
        const slowResources = list.getEntries().filter((entry) => entry.duration > 1000);
        if (slowResources.length > 0) {
          console.log("Slow resources:", slowResources.map((entry) => ({
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
      if (isDev) console.warn("Performance monitoring not supported:", error);
    }
  }, []);

  return null;
}
