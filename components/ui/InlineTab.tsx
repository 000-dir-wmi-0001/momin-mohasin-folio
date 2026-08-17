"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export type TabItem<T extends string> = {
  title: string;
  value: T;
};

interface InlineTabsProps<T extends string> {
  tabs: TabItem<T>[];
  activeTab: T;
  onChange: (tab: T) => void;
  className?: string;
}

export function InlineTabs<T extends string>({
  tabs,
  activeTab,
  onChange,
  className,
}: InlineTabsProps<T>) {
  return (
    <div className={cn("w-full max-w-xl mx-auto justify-center flex items-center", className)}>
      <div
        className="
          grid grid-cols-1 gap-1
          sm:grid-cols-2
          md:flex md:justify-between md:gap-1
          rounded-xl md:rounded-full border border-border/60 bg-muted/40 p-1 md:w-fit
        "
      >
        {tabs.map((tab) => {
          const isActive = tab.value === activeTab;

          return (
            <Button
              key={tab.value}
              variant={isActive ? "default" : "ghost"}
              size="sm"
              onClick={() => onChange(tab.value)}
              className={cn(
                "w-full md:w-auto rounded-full transition-colors duration-200",
                isActive
                  ? "shadow-sm"
                  : "text-muted-foreground hover:text-foreground hover:bg-transparent"
              )}
            >
              {tab.title}
            </Button>
          );
        })}
      </div>
    </div>
  );
}
