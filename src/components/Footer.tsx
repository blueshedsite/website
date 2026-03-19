export function Footer() {
  return (
    <footer className="border-t border-border/60 px-4 py-16">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid gap-12 sm:grid-cols-2 md:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 md:col-span-1">
            <div className="text-lg font-semibold tracking-tight">
              The Blue Shed Group
            </div>
            <p className="mt-3 max-w-[280px] text-sm leading-relaxed text-muted">
              Empowering professionals to build flexible, purpose-driven
              careers.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <div className="text-xs font-medium uppercase tracking-[0.15em] text-muted">
              Navigation
            </div>
            <nav className="mt-4 flex flex-col gap-3">
              <a
                href="#about"
                className="text-sm text-foreground/70 transition-colors duration-200 hover:text-foreground"
              >
                About
              </a>
              <a
                href="#services"
                className="text-sm text-foreground/70 transition-colors duration-200 hover:text-foreground"
              >
                Services
              </a>
              <a
                href="#testimonials"
                className="text-sm text-foreground/70 transition-colors duration-200 hover:text-foreground"
              >
                Testimonials
              </a>
              <a
                href="#contact"
                className="text-sm text-foreground/70 transition-colors duration-200 hover:text-foreground"
              >
                Contact
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <div className="text-xs font-medium uppercase tracking-[0.15em] text-muted">
              Contact
            </div>
            <div className="mt-4 flex flex-col gap-3">
              <a
                href="mailto:info@blueshedgroup.com"
                className="text-sm text-foreground/70 transition-colors duration-200 hover:text-foreground"
              >
                info@blueshedgroup.com
              </a>
              <a
                href="tel:+441784693019"
                className="text-sm text-foreground/70 transition-colors duration-200 hover:text-foreground"
              >
                +44 1784 693 019
              </a>
              <span className="text-sm text-muted">
                Staines, Surrey, UK
              </span>
            </div>
          </div>

          {/* Legal */}
          <div>
            <div className="text-xs font-medium uppercase tracking-[0.15em] text-muted">
              Legal
            </div>
            <div className="mt-4 flex flex-col gap-3">
              <a
                href="#"
                className="text-sm text-foreground/70 transition-colors duration-200 hover:text-foreground"
              >
                Privacy policy
              </a>
              <a
                href="#"
                className="text-sm text-foreground/70 transition-colors duration-200 hover:text-foreground"
              >
                Terms of service
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center gap-4 border-t border-border/60 pt-8 text-center sm:flex-row sm:justify-between">
          <span className="text-sm text-muted">
            &copy; {new Date().getFullYear()} The Blue Shed Group. All rights
            reserved.
          </span>
          <span className="text-sm text-muted">
            dev —{" "}
            <a
              href="https://maiaa.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-foreground/70 transition-colors duration-200 hover:text-foreground"
            >
              maiaa.ai
            </a>
          </span>
          <span className="text-sm text-muted">
            Surrey, United Kingdom
          </span>
        </div>
      </div>
    </footer>
  );
}
