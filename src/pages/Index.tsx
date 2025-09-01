import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import TrustSignals from "@/components/TrustSignals";
import ValuePoints from "@/components/ValuePoints";
import ExampleWork from "@/components/ExampleWork";
import ExclusivitySection from "@/components/ExclusivitySection";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import About from "@/components/About";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
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
    </div>
  );
};

export default Index;
