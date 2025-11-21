'use client';

import { ArrowRight, Check, Shield, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { contentService } from "@/lib/services/contentService";

const features = contentService.getPricingFeatures();
const pricing = contentService.getPricingContent();

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-background relative overflow-hidden">
      {/* Ambient background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6 tracking-tight">
            Simple, Transparent <span className="text-primary">Pricing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
            One package. Everything you need. No hidden monthly fees.
          </p>
        </div>

        <div className="max-w-lg mx-auto lg:max-w-4xl">
          <div className="relative group">
            {/* Glow effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-accent to-primary rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000" />
            
            <div className="relative bg-card rounded-2xl border border-border shadow-2xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-5">
                
                {/* Left Panel: Value Prop & Price */}
                <div className="lg:col-span-3 p-8 lg:p-12 bg-slate-50 dark:bg-slate-900/50 flex flex-col justify-between relative">
                   <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent" />
                   
                   <div>
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider mb-6">
                        <Star className="w-3 h-3 fill-current" /> Most Popular Choice
                      </div>
                      <h3 className="text-3xl font-bold text-foreground mb-2">Complete Trade Package</h3>
                      <p className="text-muted-foreground mb-8">The all-in-one solution designed specifically to get tradespeople more work.</p>
                      
                      <div className="flex items-baseline gap-2 mb-1">
                        <span className="text-5xl lg:text-6xl font-black text-foreground tracking-tight">£899</span>
                        <span className="text-xl text-muted-foreground font-medium">one-time</span>
                      </div>
                      <p className="text-sm text-green-600 font-medium mb-8 flex items-center gap-1">
                        <span className="line-through text-muted-foreground/60 opacity-70">£1,149</span> 
                        Save £250 this month
                      </p>

                      <div className="bg-white dark:bg-slate-800 rounded-xl p-4 border border-border/60 shadow-sm">
                         <div className="flex items-start gap-3">
                            <div className="bg-primary/10 p-2 rounded-lg shrink-0">
                                <Shield className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                                <p className="font-bold text-foreground text-sm mb-1">Zero Risk Guarantee</p>
                                <p className="text-xs text-muted-foreground leading-relaxed">
                                    We design your site first. You only pay the invoice when you are 100% happy with the design.
                                </p>
                            </div>
                         </div>
                      </div>
                   </div>

                   <div className="mt-8 lg:mt-0 pt-8 lg:pt-0">
                      <Button asChild size="xl" className="w-full bg-primary hover:bg-primary/90 text-lg font-bold shadow-lg shadow-primary/20">
                        <a href="#contact">
                            Get Started Now <ArrowRight className="ml-2 w-5 h-5" />
                        </a>
                      </Button>
                      <p className="text-center text-xs text-muted-foreground mt-3">
                        No credit card required upfront.
                      </p>
                   </div>
                </div>

                {/* Right Panel: Feature List */}
                <div className="lg:col-span-2 p-8 lg:p-12 bg-white dark:bg-card border-t lg:border-t-0 lg:border-l border-border">
                   <h4 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-6">What's Included</h4>
                   <ul className="space-y-4">
                      <li className="flex items-start gap-3 group/item">
                         <div className="shrink-0 w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mt-0.5 group-hover/item:bg-green-500 group-hover/item:text-white transition-colors duration-300">
                            <Check className="w-3.5 h-3.5 text-green-600 dark:text-green-400 group-hover/item:text-white transition-colors" />
                         </div>
                         <span className="text-sm text-foreground/80 group-hover/item:text-foreground transition-colors font-bold">We Write All Content For You</span>
                      </li>
                      <li className="flex items-start gap-3 group/item">
                         <div className="shrink-0 w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mt-0.5 group-hover/item:bg-green-500 group-hover/item:text-white transition-colors duration-300">
                            <Check className="w-3.5 h-3.5 text-green-600 dark:text-green-400 group-hover/item:text-white transition-colors" />
                         </div>
                         <span className="text-sm text-foreground/80 group-hover/item:text-foreground transition-colors font-bold">Google Business Profile Setup</span>
                      </li>
                      {features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3 group/item">
                           <div className="shrink-0 w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mt-0.5 group-hover/item:bg-green-500 group-hover/item:text-white transition-colors duration-300">
                              <Check className="w-3.5 h-3.5 text-green-600 dark:text-green-400 group-hover/item:text-white transition-colors" />
                           </div>
                           <span className="text-sm text-foreground/80 group-hover/item:text-foreground transition-colors">{feature}</span>
                        </li>
                      ))}
                   </ul>
                   
                   <div className="mt-10 pt-8 border-t border-border">
                      <h4 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-4">After Launch</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        <span className="font-bold text-foreground">2 Years Free Hosting</span> & Support included.
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Then just £99/year (optional). Cancel anytime.
                      </p>
                   </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;