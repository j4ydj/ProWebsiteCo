import { Button } from "@/components/ui/button";
import { ArrowRight, PlayCircle } from "lucide-react";
import heroImage from "@/assets/hero-websites.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-accent/80"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Your Trade, Your Website —{" "}
              <span className="text-accent">Built to Win You More Work</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Custom-designed, mobile-friendly websites for tradespeople across the UK. 
              Ready to bring you more enquiries in as little as 48 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="accent" size="xl" className="group">
                Get My Website
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="xl" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                <PlayCircle className="mr-2" />
                See Our Work
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-primary/20 rounded-3xl blur-3xl"></div>
            <img 
              src={heroImage}
              alt="Professional tradesperson websites on laptop and mobile"
              className="relative rounded-2xl shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;