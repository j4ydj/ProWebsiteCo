"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { contentService } from "@/lib/services/contentService";

const navigation = contentService.getNavigation();
const logo = "/assets/prowebsitecologo.svg";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm pt-5 pb-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src={logo}
              alt="Pro Website Co - Professional Websites for UK Trades"
              width={360}
              height={180}
              className="h-60 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium min-h-[48px] min-w-[48px] flex items-center"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href="tel:+442039967776" className="flex items-center text-accent hover:text-accent/80 transition-colors">
              <Phone className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">+44 203 996 7776</span>
            </a>
            <Button 
              variant="cta" 
              size="sm"
              onClick={() => scrollToSection('#contact')}
              className="min-h-[48px]"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-muted-foreground hover:text-foreground p-2 min-h-[48px] min-w-[48px]"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.href)}
                  className="block w-full text-left px-3 py-3 text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-md text-base font-medium min-h-[48px]"
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-4 pb-2 border-t border-border mt-4">
                <a 
                  href="tel:+442039967776" 
                  className="flex items-center px-3 py-3 text-accent hover:text-accent/80 min-h-[48px]"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  <span className="font-medium">+44 203 996 7776</span>
                </a>
                <Button 
                  variant="cta" 
                  size="lg"
                  onClick={() => scrollToSection('#contact')}
                  className="w-full mx-3 mt-2 min-h-[48px]"
                >
                  Get Started Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;