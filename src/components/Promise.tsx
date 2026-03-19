"use client";

import { ScrollReveal, StaggerContainer, StaggerItem } from "./ScrollReveal";

const promises = [
  {
    number: "01",
    title: "Practical outcomes",
    description:
      "Every course is designed around real-world application. You will walk away with tools you can use the same day, not abstract theory that sits in a folder.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
        <path d="M22 4L12 14.01l-3-3" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Lifetime access",
    description:
      "Enrol once, learn forever. All materials, updates, and resources are yours for life. Revisit any module whenever you need a refresher.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Personalised support",
    description:
      "Your goals are unique. We tailor guidance to your specific situation, whether you are pivoting careers, seeking a promotion, or building something new.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Community of peers",
    description:
      "Join a network of driven professionals across HR, sales, education, and consulting. Share experiences, stay accountable, and grow together.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
  {
    number: "05",
    title: "Ongoing mentorship",
    description:
      "Support does not end when the course does. We stay with you through the transition, offering continued guidance as you apply what you have learned.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      </svg>
    ),
  },
  {
    number: "06",
    title: "Global reach",
    description:
      "Work with us from anywhere in the world. Our programmes are fully online, giving you the flexibility to learn and grow on your schedule, wherever you are.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20" />
        <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
      </svg>
    ),
  },
];

export function Promise() {
  return (
    <section className="px-4 py-16 sm:py-36">
      <div className="mx-auto max-w-[1200px]">
        <ScrollReveal className="mb-16 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/15 bg-accent-light/60 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-accent">
            Our promise
          </span>
          <h2 className="mt-6 text-3xl font-semibold leading-[1.12] tracking-tighter sm:text-4xl md:text-5xl">
            Why professionals choose us
          </h2>
        </ScrollReveal>

        <StaggerContainer className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3" stagger={0.1}>
          {promises.map((promise) => (
            <StaggerItem key={promise.number}>
              <div className="group relative rounded-[1.5rem] border border-border/60 bg-surface p-1.5 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:border-accent/20 hover:shadow-[0_12px_40px_rgba(26,75,140,0.08)]">
                <div className="rounded-[calc(1.5rem-0.375rem)] bg-surface-alt/40 p-8">
                  <div className="mb-6 flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-light text-accent">
                      {promise.icon}
                    </div>
                    <span className="text-4xl font-bold tabular-nums text-accent/10 tracking-tighter">
                      {promise.number}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold tracking-tight">
                    {promise.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-muted">
                    {promise.description}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
