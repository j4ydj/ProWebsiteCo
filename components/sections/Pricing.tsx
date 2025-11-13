'use client';

import { ArrowRight, Check, Shield } from "lucide-react";

import { Button } from "@/components/ui/button";
import { contentService } from "@/lib/services/contentService";
import { trackPaymentLinkClick } from "@/lib/utils/tracking";

const features = contentService.getPricingFeatures();
const pricing = contentService.getPricingContent();

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            No hidden fees, no surprises. One transparent setup cost covers a fully managed launch, hosting, and support to keep your site running smoothly.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-2xl shadow-elegant border border-border overflow-hidden">
            <div className="bg-gradient-primary p-8 text-center text-primary-foreground">
              <h3 className="text-2xl font-bold mb-2">Professional Trade Website</h3>
              <p className="text-primary-foreground/90">Everything you need to get more work</p>
            </div>
            
            <div className="p-8 lg:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <div>
                  <div className="mb-8">
                    <div className="flex items-baseline mb-4">
                      <div className="flex flex-col">
                        <div className="flex items-baseline">
                          <span className="text-2xl text-muted-foreground line-through mr-3">£1,149</span>
                          <span className="text-5xl font-bold text-foreground">£899</span>
                          <span className="text-xl text-muted-foreground ml-2">one-time</span>
                        </div>
                        <span className="text-sm text-accent font-medium mt-1">{pricing.limitedOffer}</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground mt-4">
                      Includes 2 full years of premium hosting, SSL security, updates, and priority support. After 2 years, keep your site running for just £99/year (cancel anytime, or take full ownership).
                    </p>
                    <div className="bg-accent/10 rounded-lg p-4 mt-4 border border-accent/20">
                      <div className="flex items-center text-accent font-semibold text-sm mb-2">
                        <Shield className="w-4 h-4 mr-2" />
                        Risk-Free Design Process
                      </div>
                      <p className="text-sm text-muted-foreground">{pricing.guarantee}</p>
                    </div>
                  </div>

                <div className="space-y-4">
                  <a href="#contact">
                    <Button variant="cta" size="xl" className="w-full group">
                      Get Started Now
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </a>
                  <p className="text-center text-sm text-muted-foreground">
                    💳 Pay only after you approve your design
                  </p>
                </div>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-card-foreground mb-6">
                    Everything Included:
                  </h4>
                  <div className="space-y-3">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <div className="bg-accent/10 rounded-full p-1 mr-3 mt-0.5 flex-shrink-0">
                          <Check className="w-4 h-4 text-accent" />
                        </div>
                        <span className="text-card-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-muted-foreground">{pricing.benefitHighlight}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;