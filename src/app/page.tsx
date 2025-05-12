import { AnimatedBackground } from "@/components/animated-background";
import Hero from "@/components/hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/how-it-works";
import Benefits from "@/components/benefits";
import Testimonials from "@/components/testimonials";
import CTA from "@/components/cta";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <AnimatedBackground />
      <Hero />
      <Features />
      <HowItWorks />
      <Benefits />
      <Testimonials />
      <CTA />
    </div>
  );
}
