import { Shield, Users, Clock, Award } from "lucide-react";

const trustSignals = [
  {
    icon: Clock,
    text: "5+ Years Serving UK Trades",
    subtext: "Established & trusted"
  },
  {
    icon: Users,
    text: "150+ Happy Clients",
    subtext: "Proven track record"
  },
  {
    icon: Shield,
    text: "Money-Back Guarantee",
    subtext: "Risk-free service"
  },
  {
    icon: Award,
    text: "No Templates Used",
    subtext: "100% custom designs"
  }
];

const TrustSignals = () => {
  return (
    <section className="py-12 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustSignals.map((signal, index) => {
            const IconComponent = signal.icon;
            return (
              <div 
                key={index}
                className="flex items-center justify-center text-center p-4 bg-background/60 rounded-lg border border-border/50"
              >
                <div className="flex items-center space-x-3">
                  <div className="bg-accent/10 rounded-full p-2 flex-shrink-0">
                    <IconComponent className="w-5 h-5 text-accent" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-foreground text-sm">
                      {signal.text}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {signal.subtext}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustSignals;