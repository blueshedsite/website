"use client";

import Image from "next/image";
import { ScrollReveal } from "./ScrollReveal";

export function Founder() {
  return (
    <section className="px-4 py-16 sm:py-36">
      <div className="mx-auto max-w-[1200px]">
        <div className="rounded-[2rem] border border-border/60 bg-surface p-2">
          <div className="rounded-[calc(2rem-0.5rem)] bg-surface-alt/40 px-8 py-16 sm:px-16 sm:py-20">
            <div className="grid gap-12 md:grid-cols-[auto_1fr] md:items-center md:gap-16">
              {/* Avatar and name */}
              <ScrollReveal direction="left">
              <div className="flex flex-col items-center text-center md:items-start md:text-left">
                <div className="h-32 w-32 overflow-hidden rounded-3xl shadow-[0_8px_24px_rgba(26,75,140,0.15)]">
                  <Image
                    src="/tom-wiltshire.jpeg"
                    alt="Tom Wiltshire, Founder of The Blue Shed Group"
                    width={128}
                    height={128}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="mt-6 text-2xl font-semibold tracking-tight sm:text-3xl">
                  Tom Wiltshire
                </h3>
                <p className="mt-1 text-sm font-medium text-accent">
                  Founder, The Blue Shed Group
                </p>
                <p className="mt-1 text-sm text-muted">Surrey, United Kingdom</p>
              </div>
              </ScrollReveal>

              {/* Bio */}
              <ScrollReveal direction="right" delay={0.15}>
              <div className="space-y-5">
                <h3 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                  Hi I&apos;m Tom Wiltshire!
                </h3>
                <p className="max-w-none text-sm leading-relaxed text-muted sm:text-base">
                  With years of experience in Corporate HR, my journey into
                  entrepreneurship has opened up incredible opportunities—including
                  traveling the world and building a global client base.
                </p>
                <p className="max-w-none text-sm leading-relaxed text-muted sm:text-base">
                  Originally from the UK, I began my career as a primary school
                  teacher before transitioning into HR, where I spent several
                  impactful years supporting people and organisations. Eventually,
                  I took the leap into building something of my own—creating a
                  life and business aligned with my values and goals.
                </p>
                <p className="max-w-none text-sm leading-relaxed text-muted sm:text-base">
                  Now based in Surrey, just outside of London, I work with clients
                  across the UK and around the world. Through my business success,
                  I&apos;ve carved out a niche in helping individuals set themselves
                  up for success and supporting businesses to grow by unlocking
                  the true potential of their people—and turning that potential
                  into profit.
                </p>
                <p className="max-w-none text-sm leading-relaxed text-muted sm:text-base">
                  I&apos;m looking to connect with individuals who are ready to
                  shed the shadows, step into their light, and take their career
                  or business to the next level. If that sounds like you,
                  let&apos;s connect and see if we&apos;re aligned—I&apos;d love
                  to hear your story.
                </p>
                <a
                  href="#contact"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-accent transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:gap-3"
                >
                  Get in touch
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
