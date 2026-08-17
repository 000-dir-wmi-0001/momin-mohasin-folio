"use client";

import React from "react";
import { ModeToggle } from "@/components/theme-toggle";
import Link from "next/link";
import { Button } from "../ui/button";
import { motion } from "motion/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ScrollProgress from "@/components/ScrollProgress";

const Header = () => {
  const items = [
    { name: "Home", link: "/" },
    { name: "Projects", link: "/projects" },
    { name: "Contact", link: "/contact" },
  ];

  const pathname = usePathname();

  return (
    <div className="w-full font-mono sticky top-0 z-50 backdrop-blur-xl bg-background/75 border-b border-border/60 supports-backdrop-filter:bg-background/60">
      <ScrollProgress />

      <nav className="flex items-center justify-between h-16 lg:h-18 px-4 sm:px-6 mx-auto w-full max-w-7xl">
        <Link href="/" className="flex items-center gap-3 group">
          <Avatar className="w-9 h-9 lg:w-10 lg:h-10 ring-1 ring-border transition-all duration-300 group-hover:ring-primary/40 group-hover:ring-2">
            <AvatarImage src="/momin.jpg" />
            <AvatarFallback>MM</AvatarFallback>
          </Avatar>

          <span
            className="font-bold text-base lg:text-lg tracking-tight transition-colors group-hover:text-primary"
            aria-label="Momin Mohasin"
          >
            Momin Mohasin
          </span>
        </Link>

        {/* Nav Links (Desktop) */}
        <ul className="hidden sm:flex items-center gap-1 rounded-full border border-border/60 bg-muted/40 p-1">
          {items.map((item) => {
            const isActive = pathname === item.link;
            return (
              <li key={item.name} className="relative">
                <Link
                  href={item.link}
                  aria-current={isActive ? "page" : undefined}
                  className={`relative z-10 block px-4 py-1.5 text-sm font-medium rounded-full transition-colors duration-300 ${
                    isActive
                      ? "text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-primary shadow-sm"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Right Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Mobile Menu */}
          <div className="sm:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button size="icon" variant="outline" aria-label="Open menu">
                  <Menu className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="min-w-40">
                {items.map((item) => (
                  <DropdownMenuItem key={item.name} asChild>
                    <Link
                      href={item.link}
                      className={
                        pathname === item.link
                          ? "text-primary font-semibold"
                          : ""
                      }
                      aria-current={pathname === item.link ? "page" : undefined}
                    >
                      {item.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Theme Toggle */}
          <ModeToggle />
        </div>
      </nav>
    </div>
  );
};

export default Header;
