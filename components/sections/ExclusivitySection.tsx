import { MapPin, AlertCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ExclusivitySection = () => {
  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Abstract Background */}
      <div className="absolute inset-0 bg-[url('/assets/grid-pattern.svg')] opacity-10"></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/10 to-transparent"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-12 shadow-2xl">
          
          <div className="flex-shrink-0">
            <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center border border-accent/50">
              <AlertCircle className="w-10 h-10 text-accent" />
            </div>
          </div>

          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Limited Availability: <span className="text-accent">London & South East</span>
            </h2>
            <p className="text-white/80 text-lg leading-relaxed mb-6">
              To ensure every website meets our "Crafted" standard, we strictly limit our intake to 
              <strong className="text-white ml-1">5 new clients per month</strong>.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
              <div className="flex items-center gap-2 text-sm font-medium bg-green-500/20 text-green-300 px-3 py-1 rounded-full border border-green-500/30">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                2 spots remaining for November
              </div>
            </div>
          </div>

          <div className="flex-shrink-0">
             <Button asChild size="lg" className="bg-white text-slate-900 hover:bg-white/90 font-bold text-base px-8 h-14">
                <a href="#contact">
                  Secure Your Spot <ArrowRight className="ml-2 w-5 h-5" />
                </a>
             </Button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ExclusivitySection;