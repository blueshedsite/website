"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const links = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-6 left-1/2 z-40 -translate-x-1/2 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
          scrolled
            ? "bg-surface/80 shadow-[0_8px_32px_rgba(26,75,140,0.06)] backdrop-blur-2xl"
            : "bg-surface/50 backdrop-blur-lg"
        } rounded-full border border-border/60 px-2 py-2`}
      >
        <div className="flex items-center gap-1">
          <a
            href="#"
            className="flex items-center gap-2 px-3 py-1"
          >
            <Image
              src="/bsg1.jpg"
              alt="Blue Shed Group"
              width={44}
              height={44}
              className="h-11 w-11 object-contain"
            />
            <span className="text-sm font-semibold tracking-tight text-foreground">
              The Blue Shed Group
            </span>
          </a>

          <div className="hidden items-center gap-0.5 md:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full px-4 py-2 text-sm text-muted transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-accent-light hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="https://calendly.com/twiltshire9/business-interview?month=2026-03"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-accent px-5 py-2 text-sm font-medium text-white transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-accent/90 active:scale-[0.98] md:block"
          >
            Book a call
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-accent-light md:hidden"
            aria-label="Toggle menu"
          >
            <div className="relative h-4 w-5">
              <span
                className={`absolute left-0 h-[1.5px] w-full bg-foreground transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                  menuOpen ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-1/2 h-[1.5px] w-full -translate-y-1/2 bg-foreground transition-opacity duration-200 ${
                  menuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 h-[1.5px] w-full bg-foreground transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                  menuOpen
                    ? "top-1/2 -translate-y-1/2 -rotate-45"
                    : "bottom-0"
                }`}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-30 flex flex-col items-center justify-center bg-background/95 backdrop-blur-3xl transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] md:hidden ${
          menuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        {links.map((link, i) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className="py-4 text-2xl font-medium tracking-tight text-foreground transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"
            style={{
              transitionDelay: menuOpen ? `${100 + i * 60}ms` : "0ms",
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? "translateY(0)" : "translateY(1.5rem)",
            }}
          >
            {link.label}
          </a>
        ))}
        <a
          href="https://calendly.com/twiltshire9/business-interview?month=2026-03"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setMenuOpen(false)}
          className="mt-8 rounded-full bg-accent px-8 py-3 text-base font-medium text-white transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"
          style={{
            transitionDelay: menuOpen ? "340ms" : "0ms",
            opacity: menuOpen ? 1 : 0,
            transform: menuOpen ? "translateY(0)" : "translateY(1.5rem)",
          }}
        >
          Book a call
        </a>
      </div>
    </>
  );
}
