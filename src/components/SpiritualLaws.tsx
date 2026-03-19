"use client";

import { ScrollReveal, StaggerContainer, StaggerItem } from "./ScrollReveal";

export function SpiritualLaws() {
  const laws = [
    {
      title: "Intention",
      description:
        "Harness the power of focused intention to direct your energy toward meaningful goals and outcomes.",
    },
    {
      title: "Giving",
      description:
        "The flow of giving and receiving creates abundance. What you put out into the world returns to you.",
    },
    {
      title: "Gratitude",
      description:
        "Cultivating gratitude shifts your perspective, opening doors to greater fulfilment and opportunity.",
    },
    {
      title: "Detachment",
      description:
        "Release rigid attachment to outcomes. Trust the process and allow space for growth to unfold naturally.",
    },
  ];

  return (
    <section className="px-4 py-16 sm:py-36">
      <div className="mx-auto max-w-[1200px]">
        <div className="rounded-[2rem] border border-border/60 bg-surface p-2">
          <div className="rounded-[calc(2rem-0.5rem)] bg-surface-alt/40 px-8 py-16 sm:px-16 sm:py-20">
            <ScrollReveal className="mb-14 max-w-[640px]">
              <span className="inline-flex items-center gap-2 rounded-full border border-accent/15 bg-accent-light/60 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-accent">
                Spiritual laws of success
              </span>
              <h2 className="mt-6 text-3xl font-semibold leading-[1.12] tracking-tighter sm:text-4xl md:text-5xl">
                Principles that guide lasting transformation
              </h2>
              <p className="mt-4 max-w-[55ch] text-base leading-relaxed text-muted sm:text-lg">
                The spiritual laws of success guide individuals to align with
                universal principles, fostering inner harmony and external
                prosperity.
              </p>
            </ScrollReveal>

            <StaggerContainer className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4" stagger={0.1}>
              {laws.map((law, i) => (
                <StaggerItem key={law.title}>
                <div className="space-y-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-light text-sm font-semibold tabular-nums text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="text-lg font-semibold tracking-tight">
                    {law.title}
                  </h3>
                  <p className="leading-relaxed text-muted">{law.description}</p>
                </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
