"use client";

import { useState, useEffect } from "react";
import { MessageCircle, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export const MobileConversionBar = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past the hero section (approx 500px)
      const heroHeight = 500;
      setIsVisible(window.scrollY > heroHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 lg:hidden bg-background/80 backdrop-blur-lg border-t border-border animate-in slide-in-from-bottom-full duration-300">
      <div className="flex gap-3">
        <Button 
            asChild 
            variant="default" 
            className="flex-1 bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-lg"
        >
          <a 
            href="https://wa.me/447808822974?text=Hi, I'd like to get a website for my trade business"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            WhatsApp
          </a>
        </Button>
        <Button 
            asChild 
            variant="default"
            className="flex-1 bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg"
        >
          <a href="tel:07808822974">
            <Phone className="w-5 h-5 mr-2" />
            Call Now
          </a>
        </Button>
      </div>
    </div>
  );
};

