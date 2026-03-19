"use client";

import React from "react";
import { motion } from "framer-motion";
import { DotGlobeHero } from "@/components/ui/globe-hero";
import { ArrowUpRight } from "lucide-react";

export function Hero() {
  return (
    <DotGlobeHero
      rotationSpeed={0.003}
      globeRadius={1.1}
      className="min-h-[100dvh] bg-background relative overflow-hidden"
    >
      {/* Ambient light layers */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-background/30" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-accent/3 rounded-full blur-3xl animate-pulse" />

      <div className="relative z-10 text-center space-y-5 sm:space-y-8 max-w-5xl mx-auto px-5 sm:px-6 py-6 sm:py-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-4 sm:space-y-6"
        >
          {/* Eyebrow badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-accent/20 backdrop-blur-xl bg-accent-light/40"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
            <span className="text-xs font-semibold text-accent tracking-[0.2em] uppercase">
              Personal growth & leadership
            </span>
          </motion.div>

          {/* Headline */}
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter leading-[0.9] select-none"
            >
              <span className="block text-muted font-light text-2xl sm:text-4xl md:text-6xl mb-2">
                Unlock your potential.
              </span>
              <span className="block relative">
                <span className="text-foreground">
                  Redefine success.
                </span>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.5, delay: 1.2, ease: "easeOut" }}
                  className="absolute -bottom-3 left-0 h-1 bg-gradient-to-r from-accent via-accent/60 to-transparent rounded-full"
                />
              </span>
            </motion.h1>
          </div>

          {/* Subtext */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="max-w-2xl mx-auto"
          >
            <p className="text-base sm:text-lg md:text-xl text-muted leading-relaxed">
              We help ambitious professionals build flexible, purpose-driven
              careers through{" "}
              <span className="text-foreground font-medium">
                self-leadership
              </span>
              ,{" "}
              <span className="text-foreground font-medium">
                communication mastery
              </span>
              , and a stronger sense of direction.
            </p>
          </motion.div>

          {/* Brand name */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tighter text-foreground"
          >
            The Blue Shed Group
          </motion.p>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex justify-center items-center"
        >
          <motion.a
            href="https://calendly.com/twiltshire9/business-interview?month=2026-03"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              scale: 1.03,
              y: -2,
            }}
            whileTap={{ scale: 0.98 }}
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-accent text-white rounded-full font-medium text-base shadow-[0_8px_24px_rgba(26,75,140,0.2)] transition-all duration-500 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
            <span className="relative z-10">Book your free consultation</span>
            <span className="relative z-10 flex h-7 w-7 items-center justify-center rounded-full bg-white/15 transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-px group-hover:scale-105">
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </motion.a>
        </motion.div>
      </div>
    </DotGlobeHero>
  );
}
