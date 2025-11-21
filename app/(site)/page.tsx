import Navigation from "@/components/layout/Navigation";
import Hero from "@/components/sections/Hero";
import TrustSignals from "@/components/sections/TrustSignals";
import ValuePoints from "@/components/sections/ValuePoints";
import ExampleWork from "@/components/sections/ExampleWork";
import ExclusivitySection from "@/components/sections/ExclusivitySection";
import HowItWorks from "@/components/sections/HowItWorks";
import Pricing from "@/components/sections/Pricing";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import About from "@/components/sections/About";
import CallToAction from "@/components/sections/CallToAction";
import Footer from "@/components/layout/Footer";
import { MobileConversionBar } from "@/components/layout/MobileConversionBar";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <TrustSignals />
        <ValuePoints />
        <ExampleWork />
        <ExclusivitySection />
        <HowItWorks />
        <Pricing />
        <Testimonials />
        <FAQ />
        <About />
        <CallToAction />
      </main>
      <Footer />
      <MobileConversionBar />
    </div>
  );
}

