"use client";

import { ScrollReveal } from "./ScrollReveal";

export function CTA() {
  return (
    <section id="contact" className="px-4 py-16 sm:py-36">
      <div className="mx-auto max-w-[1200px]">
        <div className="relative overflow-hidden rounded-[2rem] bg-accent px-8 py-20 text-center sm:px-16 sm:py-28">
          {/* Decorative gradient */}
          <div
            className="pointer-events-none absolute inset-0 opacity-30"
            style={{
              background:
                "radial-gradient(ellipse 60% 80% at 30% 100%, rgba(255,255,255,0.15), transparent), radial-gradient(ellipse 40% 60% at 80% 0%, rgba(255,255,255,0.1), transparent)",
            }}
          />

          <ScrollReveal className="relative z-10">
            <h2 className="mx-auto max-w-[600px] text-3xl font-semibold leading-[1.12] tracking-tighter text-white sm:text-4xl md:text-5xl">
              Ready to take the first step?
            </h2>
            <p className="mx-auto mt-6 max-w-[480px] text-base leading-relaxed text-white/70 sm:text-lg">
              Book a free personal development consultation. No pressure, no
              obligation. Just an honest conversation about where you are and
              where you want to go.
            </p>

            <div className="mt-10 flex flex-col items-center gap-6">
              <a
                href="https://calendly.com/twiltshire9/business-interview?month=2026-03"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-sm font-semibold text-accent transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-white/90 active:scale-[0.98]"
              >
                Talk to a consultant
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-accent/10 transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-px group-hover:scale-105">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </span>
              </a>

              <div className="flex flex-col items-center gap-2 text-sm text-white/50">
                <span>or call directly</span>
                <a
                  href="tel:+441784693019"
                  className="font-medium text-white/80 transition-colors duration-300 hover:text-white"
                >
                  +44 1784 693 019
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
