import { Shield, Users, Clock, Award } from "lucide-react";

const trustSignals = [
  {
    icon: Clock,
    text: "5+ Years Experience",
    subtext: "Serving UK Trades"
  },
  {
    icon: Users,
    text: "150+ Happy Clients",
    subtext: "5-Star Rated Service"
  },
  {
    icon: Shield,
    text: "Money-Back Guarantee",
    subtext: "Risk-Free Investment"
  },
  {
    icon: Award,
    text: "Bespoke Design",
    subtext: "No Generic Templates"
  }
];

const TrustSignals = () => {
  return (
    <section className="relative z-20 -mt-12 px-4 pb-12">
      <div className="mx-auto max-w-6xl rounded-2xl bg-white px-6 py-10 shadow-elegant border border-border/40 sm:px-10">
        <div className="grid grid-cols-1 gap-y-8 sm:grid-cols-2 md:grid-cols-4 md:gap-x-8 md:gap-y-0 divide-y md:divide-y-0 md:divide-x divide-border/60">
          {trustSignals.map((signal, index) => {
            const IconComponent = signal.icon;
            return (
              <div 
                key={index}
                className="flex flex-col items-center justify-center text-center group pt-8 first:pt-0 md:pt-0 px-4"
              >
                <div className="mb-4 rounded-full bg-accent/10 p-3 transition-transform duration-300 group-hover:scale-110 group-hover:bg-accent/20">
                  <IconComponent className="h-6 w-6 text-accent" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-bold text-foreground text-base">
                    {signal.text}
                  </h3>
                  <p className="text-sm font-medium text-muted-foreground">
                    {signal.subtext}
                  </p>
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