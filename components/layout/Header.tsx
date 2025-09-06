"use client";

import React from "react";
import { ModeToggle } from "@/components/theme-toggle";
import Link from "next/link";
import { Button } from "../ui/button";
import { motion } from "motion/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const items = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Experience", link: "/experience" },
    { name: "Projects", link: "/projects" },
    { name: "Contact", link: "/contact" },
  ];

  const pathname = usePathname();

  return (
    <div className="w-full font-mono border-b sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-black/60 shadow-2xl rounded-b-lg">
      <nav className="flex items-center justify-between py-2 px-4 sm:px-6 mx-auto w-full max-w-7xl">
        {/* Logo & Name */}
        <div className="flex items-center gap-3">
          <Avatar className="w-10 h-10 lg:w-12 lg:h-12 origin-left transition-transform hover:scale-105 hover:shadow-lg">
            <AvatarImage src="/momin.jpg" alt="Momin avatar" />
            <AvatarFallback>MM</AvatarFallback>
          </Avatar>
          <h1 className="font-extrabold text-lg origin-left lg:text-2xl font-mono transition-colors hover:text-primary cursor-pointer">
            Momin Mohasin
          </h1>
        </div>

        {/* Nav Links (Desktop) */}
        <ul className="hidden sm:flex items-center space-x-2">
          {items.map((item, i) => (
            <motion.li
              key={item.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, type: "spring" } as any}
            >
              <Link
                href={item.link}
                aria-current={pathname === item.link ? "page" : undefined}
                className={`px-3 py-1 font-semibold rounded-md transition-colors ${
                  pathname === item.link
                    ? "text-primary bg-primary/10"
                    : "hover:bg-primary/20 hover:text-primary"
                }`}
              >
                {item.name}
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* Right Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Mobile Menu */}
          <div className="sm:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button size="sm" variant="outline" aria-label="Open menu">
                  <Menu className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {items.map((item) => (
                  <DropdownMenuItem key={item.name} asChild>
                    <Link
                      href={item.link}
                      className={pathname === item.link ? "text-primary font-semibold" : ""}
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
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring" } as any}
          >
            <ModeToggle />
          </motion.div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
