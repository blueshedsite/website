"use client";

import Image from "next/image";
import { ScrollReveal, StaggerContainer, StaggerItem } from "./ScrollReveal";

const services = [
  {
    title: "Self-Leadership",
    description:
      "Develop unwavering confidence and clarity. Learn to lead yourself before leading others, with frameworks that shift how you think, decide, and act.",
    image: "https://images.unsplash.com/photo-1519834785169-98be25ec3f84?w=800&h=500&fit=crop&q=80",
  },
  {
    title: "Communication mastery",
    description:
      "Transform the way you connect with others. Build the skills to influence, inspire, and navigate any conversation with purpose and ease.",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=500&fit=crop&q=80",
  },
  {
    title: "Mindset education",
    description:
      "Rewire limiting beliefs and cultivate a growth-oriented mindset. Our programmes combine proven psychology with actionable daily practices.",
    image: "https://images.unsplash.com/photo-1545389336-cf090694435e?w=800&h=500&fit=crop&crop=center&q=80",
  },
  {
    title: "Career direction",
    description:
      "Gain a stronger sense of where you're heading. We help you map a path that aligns your skills, values, and ambitions into a career that fits.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop&q=80",
  },
];

export function Services() {
  return (
    <section id="services" className="px-4 py-16 sm:py-36">
      <div className="mx-auto max-w-[1200px]">
        <ScrollReveal className="mb-16 max-w-[560px]">
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/15 bg-accent-light/60 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-accent">
            What you will learn
          </span>
          <h2 className="mt-6 text-3xl font-semibold leading-[1.12] tracking-tighter sm:text-4xl md:text-5xl">
            Programmes built for real results
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            Focused areas of development designed to create lasting change in
            how you work, lead, and live.
          </p>
        </ScrollReveal>

        <StaggerContainer className="grid gap-4 sm:grid-cols-2" stagger={0.12}>
          {services.map((service) => (
            <StaggerItem key={service.title}>
            <div
              className="group overflow-hidden rounded-[1.5rem] border border-border/60 bg-surface p-1.5 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:border-accent/20 hover:shadow-[0_12px_40px_rgba(26,75,140,0.06)]"
            >
              <div className="relative h-40 w-full overflow-hidden rounded-[calc(1.5rem-0.375rem)] sm:h-56">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              <div className="p-8 sm:p-10">
                <h3 className="text-xl font-semibold tracking-tight">
                  {service.title}
                </h3>
                <p className="mt-3 max-w-[50ch] leading-relaxed text-muted">
                  {service.description}
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
