import Hero from "@/components/Hero";
import ValuePoints from "@/components/ValuePoints";
import ExampleWork from "@/components/ExampleWork";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ValuePoints />
      <ExampleWork />
      <HowItWorks />
      <Pricing />
      <Testimonials />
      <About />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
