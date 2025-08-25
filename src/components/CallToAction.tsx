import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-accent/80"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
          Ready to Win More Work with Your Custom Website?
        </h2>
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
          Join 150+ tradespeople across the UK who've transformed their businesses 
          with professional, custom-designed websites.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button variant="accent" size="xl" className="group">
            Get My Website Now
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Link to="/portfolio">
            <Button variant="outline" size="xl" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
              See Our Portfolio
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <Phone className="w-8 h-8 text-accent mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
            <p className="text-white/80 text-sm">Speak to a designer today</p>
            <p className="text-accent font-medium mt-2">0800 123 4567</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <MessageCircle className="w-8 h-8 text-accent mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">WhatsApp</h3>
            <p className="text-white/80 text-sm">Quick message us</p>
            <a 
              href="https://wa.me/447123456789" 
              className="text-accent font-medium mt-2 inline-block hover:underline"
              target="_blank" 
              rel="noopener noreferrer"
            >
              Start chat
            </a>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <ArrowRight className="w-8 h-8 text-accent mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">Get Started</h3>
            <p className="text-white/80 text-sm">Free consultation</p>
            <p className="text-accent font-medium mt-2">No commitment</p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm">
            💳 <span className="ml-2">Pay only after you approve your design</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;