import { Check, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const comparisonData = [
  {
    feature: "Design uniqueness",
    template: "Same as thousands of others",
    custom: "100% unique to your business",
    templateIcon: X,
    customIcon: Check
  },
  {
    feature: "Brand representation",
    template: "Generic colors and fonts",
    custom: "Your brand, properly represented",
    templateIcon: X,
    customIcon: Check
  },
  {
    feature: "Customer perception",
    template: "Looks cheap and unprofessional",
    custom: "Professional and trustworthy",
    templateIcon: X,
    customIcon: Check
  },
  {
    feature: "Local relevance",
    template: "Generic content for anyone",
    custom: "Tailored for UK trades",
    templateIcon: X,
    customIcon: Check
  },
  {
    feature: "Conversion optimization",
    template: "Generic call-to-actions",
    custom: "Optimized for your specific trade",
    templateIcon: X,
    customIcon: Check
  }
];

const ExclusivitySection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Generic Sites Cost You Jobs
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Template websites make you look like everyone else. Custom design makes you stand out 
            and win the work that matters.
          </p>
        </div>

        <div className="bg-card rounded-2xl shadow-elegant border border-border overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-border">
            {/* Template Column */}
            <div className="p-8 bg-destructive/5">
              <div className="text-center mb-6">
                <div className="bg-destructive/10 rounded-lg w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <X className="w-8 h-8 text-destructive" />
                </div>
                <h3 className="text-xl font-bold text-destructive mb-2">Template Websites</h3>
                <p className="text-sm text-muted-foreground">What most web companies offer</p>
              </div>
              <div className="space-y-4">
                {comparisonData.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <X className="w-5 h-5 text-destructive mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-card-foreground text-sm mb-1">
                        {item.feature}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {item.template}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* VS Column */}
            <div className="p-8 bg-muted/50 flex items-center justify-center">
              <div className="text-center">
                <div className="bg-gradient-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">VS</span>
                </div>
                <p className="text-sm font-medium text-muted-foreground">
                  The difference is clear
                </p>
              </div>
            </div>

            {/* Custom Column */}
            <div className="p-8 bg-accent/5">
              <div className="text-center mb-6">
                <div className="bg-accent/10 rounded-lg w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-accent mb-2">Pro Website Co</h3>
                <p className="text-sm text-muted-foreground">Custom designed from scratch</p>
              </div>
              <div className="space-y-4">
                {comparisonData.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <Check className="w-5 h-5 text-accent mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-card-foreground text-sm mb-1">
                        {item.feature}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {item.custom}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center px-6 py-4 bg-gradient-primary rounded-xl text-primary-foreground font-semibold mb-6">
            🎯 Custom design gets you 3x more enquiries than template sites
          </div>
          <div>
            <Button variant="cta" size="xl" className="group">
              Get My Custom Website Now
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExclusivitySection;