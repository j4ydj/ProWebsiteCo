import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";

const features = [
  "Custom design tailored to your trade",
  "Mobile-optimised and fast-loading",
  "Professional contact forms",
  "Google Maps integration",
  "Free QR code for van/signage", 
  "Gallery for your best work",
  "Customer testimonials section",
  "Local SEO optimisation",
  "Secure hosting included",
  "Free SSL certificate",
  "Priority customer support",
  "Regular security updates"
];

const Pricing = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            No hidden fees, no surprises. One setup cost, then a low monthly fee 
            that covers everything your website needs to keep running smoothly.
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
                      <span className="text-5xl font-bold text-foreground">£349</span>
                      <span className="text-xl text-muted-foreground ml-2">one-time setup</span>
                    </div>
                    <div className="flex items-baseline">
                      <span className="text-3xl font-bold text-accent">£14.99</span>
                      <span className="text-lg text-muted-foreground ml-2">/month</span>
                    </div>
                    <p className="text-muted-foreground mt-4">
                      Monthly fee covers hosting, security, updates, and priority support. 
                      Cancel anytime with 30 days notice.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <Button variant="cta" size="xl" className="w-full group">
                      Get Started Now
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <p className="text-center text-sm text-muted-foreground">
                      💳 Pay setup fee only after you approve the design
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
            <p className="text-muted-foreground">
              🚀 <strong>Limited Time:</strong> First 20 customers get a free logo design (worth £150)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;