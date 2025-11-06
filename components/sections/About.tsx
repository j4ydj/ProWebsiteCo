import { Button } from "@/components/ui/button";
import { Users, Award, Clock } from "lucide-react";

const stats = [
  {
    icon: Users,
    number: "150+",
    label: "Trades Served",
    description: "Across all UK regions"
  },
  {
    icon: Award,
    number: "4.9★",
    label: "Average Rating", 
    description: "From happy customers"
  },
  {
    icon: Clock,
    number: "48hr",
    label: "Average Delivery",
    description: "From brief to live site"
  }
];

const About = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Helping UK Trades Stand Out Online Since 2019
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                We started Pro Website Co because we saw too many skilled tradespeople 
                struggling with generic, template-based websites that didn't represent 
                the quality of their work.
              </p>
              <p>
                Every trade is different. A plumber's website shouldn't look like an 
                electrician's, and a decorator's site needs to showcase creativity in 
                a way that a builder's doesn't. That's why we design every single 
                website from scratch.
              </p>
              <p>
                <strong className="text-foreground">Our commitment is simple:</strong> No two websites we create 
                will ever look the same. Your business is unique, and your website 
                should be too.
              </p>
            </div>
            <div className="mt-8">
              <Button variant="hero" size="lg">
                Meet the Team
              </Button>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-card rounded-xl p-8 shadow-card border border-border">
              <h3 className="text-xl font-semibold text-card-foreground mb-6">
                Why Tradespeople Trust Us
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary/10 rounded-lg p-2 mr-4 mt-1">
                    <Award className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-card-foreground mb-1">UK Trade Specialists</h4>
                    <p className="text-sm text-muted-foreground">We understand UK customer behaviour and local search</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-accent/10 rounded-lg p-2 mr-4 mt-1">
                    <Users className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-medium text-card-foreground mb-1">No Tech Headaches</h4>
                    <p className="text-sm text-muted-foreground">We handle everything so you can focus on your trade</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary/10 rounded-lg p-2 mr-4 mt-1">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-card-foreground mb-1">Quick Turnaround</h4>
                    <p className="text-sm text-muted-foreground">Most sites live within one week</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="bg-gradient-primary rounded-lg w-12 h-12 flex items-center justify-center mx-auto mb-3">
                      <IconComponent className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div className="text-2xl font-bold text-foreground">{stat.number}</div>
                    <div className="text-sm font-medium text-card-foreground">{stat.label}</div>
                    <div className="text-xs text-muted-foreground">{stat.description}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;