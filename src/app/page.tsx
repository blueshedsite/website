import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Promise } from "@/components/Promise";
import { Testimonials } from "@/components/Testimonials";
import { SpiritualLaws } from "@/components/SpiritualLaws";
import { Founder } from "@/components/Founder";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Services />
        <Founder />
        <Promise />
        <Testimonials />
        <SpiritualLaws />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
