"use client";

import { ScrollReveal } from "./ScrollReveal";

export function About() {
  return (
    <section id="about" className="px-4 py-16 sm:py-36">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid gap-16 md:grid-cols-[1fr_1.2fr] md:items-center md:gap-24">
          {/* Left */}
          <ScrollReveal direction="left">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/15 bg-accent-light/60 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-accent">
              About us
            </span>
            <h2 className="mt-6 text-3xl font-semibold leading-[1.12] tracking-tighter sm:text-4xl md:text-5xl">
              Your hub for personal & leadership transformation
            </h2>
          </ScrollReveal>

          {/* Right */}
          <ScrollReveal direction="right" delay={0.15}>
          <div className="space-y-6">
            <p className="max-w-[65ch] text-base leading-relaxed text-muted sm:text-lg">
              The Blue Shed Group delivers renowned programmes known for
              life-changing results. We work with professionals across the
              globe, from HR and sales to education and consulting, building
              confidence, clarity, and self-leadership skills that last.
            </p>
            <p className="max-w-[65ch] text-base leading-relaxed text-muted sm:text-lg">
              Our approach centres on practical outcomes, not theory. Every
              course is thoughtfully crafted to create real-world impact you
              can feel from day one.
            </p>

            <div className="grid grid-cols-3 gap-4 pt-4 sm:gap-6">
              <ScrollReveal delay={0.3}>
                <div className="text-3xl font-semibold tracking-tighter text-foreground">
                  12+
                </div>
                <div className="mt-1 text-sm text-muted">
                  Years of experience
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.4}>
                <div className="text-3xl font-semibold tracking-tighter text-foreground">
                  2,400+
                </div>
                <div className="mt-1 text-sm text-muted">
                  Lives transformed
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.5}>
                <div className="text-3xl font-semibold tracking-tighter text-foreground">
                  30+
                </div>
                <div className="mt-1 text-sm text-muted">
                  Countries reached
                </div>
              </ScrollReveal>
            </div>
          </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
