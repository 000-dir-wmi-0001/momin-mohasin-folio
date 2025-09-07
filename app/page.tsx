"use client";
import Hero from "@/components/Hero";
import { motion } from "motion/react";
import Services from "@/components/Services";
import { Separator } from "@/components/ui/separator"
export default function Home() {
  return (
    <>
        <Hero />
        <br />
        <br />
        <Separator />
        <br />
        <Services />
    </>
  );
}
