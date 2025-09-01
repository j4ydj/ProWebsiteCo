import { Button } from "@/components/ui/button";
import { ArrowRight, PlayCircle } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-websites.jpg";
const proWebsiteCoLogo = "/lovable-uploads/f4283fe5-8bf6-4e10-bfbb-a15ccaadd166.png";

const Hero = () => {
  return (
    <section id="hero" className="relative overflow-hidden bg-gradient-hero pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-accent/80"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start mb-6">
              <img 
                src={proWebsiteCoLogo} 
                alt="Pro Website Co - Professional Websites for UK Trades" 
                className="h-12 md:h-14"
              />
            </div>
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 font-medium mb-6 border border-white/20">
              <span className="text-sm">🚀 Custom-designed from scratch — no templates</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Professional websites for trades in the UK —{" "}
              <span className="text-accent">£549 setup</span>{" "}
              <span className="text-2xl md:text-3xl lg:text-4xl text-accent/90">+ £19.99/month</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Custom-designed, mobile-friendly websites that bring you more enquiries. 
              Get your professional online presence in just 48 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#contact" className="group">
                <Button variant="accent" size="xl" className="w-full min-h-[56px] text-lg font-semibold">
                  Get Your Free Custom Demo in 24 Hours
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <div className="flex flex-col sm:flex-row gap-2">
                <Link to="/portfolio">
                  <Button variant="outline" size="xl" className="bg-white/10 border-white/20 text-white hover:bg-white/20 min-h-[56px]">
                    <PlayCircle className="mr-2" />
                    View Live Examples
                  </Button>
                </Link>
                <a 
                  href="https://wa.me/447800123456?text=Hi, I'd like to chat with a designer about getting a website for my trade business"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sm:ml-2"
                >
                  <Button variant="outline" size="xl" className="bg-green-600/20 border-green-400/30 text-white hover:bg-green-600/30 min-h-[56px] w-full">
                    💬 Chat with a Designer
                  </Button>
                </a>
              </div>
            </div>
            <p className="text-white/70 text-sm mt-4 font-medium">
              ✅ Pay setup fee only after you approve your design
            </p>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-primary/20 rounded-3xl blur-3xl"></div>
            <img 
              src={heroImage}
              alt="Professional custom-designed websites for UK tradespeople displayed on laptop and mobile devices, showing plumber, electrician, and builder websites with modern responsive layouts"
              className="relative rounded-2xl shadow-2xl w-full h-auto"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;