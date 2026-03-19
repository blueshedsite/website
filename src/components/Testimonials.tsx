"use client";

import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { ScrollReveal } from "./ScrollReveal";

const testimonials = [
  {
    quote:
      "Since diving into these online courses I have been able to fall in love with myself, which is truly a blessing. The actionable steps provided have led me to feel again. Waking up each morning and being thankful for who I am is priceless. The best part is going through the course repeatedly and having my kids show up as their true self. Pure magic!",
    name: "Christina",
    designation: "Canada",
    src: "/christina.png",
  },
  {
    quote:
      "The first course I embarked on here hit the spot - valuable and transformative material from the very first day. Easy to understand and expounded in a relaxed, friendly and professional manner. Implementation was easy and has helped me to explore thoughts way outside of my comfort zone.",
    name: "Eamon",
    designation: "United Kingdom",
    src: "/eamon.png",
  },
  {
    quote:
      "I have learned so much from undertaking these programs. There have been so many significant shifts in my mindset, emotional state and way of thinking. Truly life-transforming! The flexibility of learning at my own pace, combined with the expertly crafted content has allowed me to delve deep into areas of personal growth that I had never explored before. I highly recommend these programs to anyone looking to invest in themselves and their future.",
    name: "Katy",
    designation: "New Zealand",
    src: "/katy.png",
    smallText: true,
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="px-4 py-16 sm:py-36">
      <div className="mx-auto max-w-[1200px]">
        <ScrollReveal className="mb-4 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/15 bg-accent-light/60 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-accent">
            Testimonials
          </span>
          <h2 className="mt-6 text-3xl font-semibold leading-[1.12] tracking-tighter sm:text-4xl md:text-5xl">
            What our clients are saying
          </h2>
        </ScrollReveal>

        <AnimatedTestimonials testimonials={testimonials} autoplay />
      </div>
    </section>
  );
}
