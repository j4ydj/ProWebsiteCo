import { Palette, Smartphone, Zap, QrCode } from "lucide-react";

const valuePoints = [
  {
    icon: Palette,
    title: "Tailored to Your Business",
    description: "No cookie-cutter templates. Every website is designed from scratch to reflect your unique brand and services."
  },
  {
    icon: Zap,
    title: "Built to Convert Enquiries",
    description: "Strategic design focused on turning visitors into paying customers. Clear contact forms and compelling calls-to-action."
  },
  {
    icon: Smartphone,
    title: "Mobile-Optimised & Fast",
    description: "Your customers browse on their phones. We ensure your site looks perfect and loads lightning-fast on every device."
  },
  {
    icon: QrCode,
    title: "Free QR Code Included",
    description: "Get a custom QR code for your van, signage, and business cards. Make it easy for customers to find you online."
  }
];

const ValuePoints = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Tradespeople Choose TradeSite Pro
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We understand the unique needs of UK trades. That's why every website we create 
            is built specifically for your business, not adapted from a generic template.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {valuePoints.map((point, index) => {
            const IconComponent = point.icon;
            return (
              <div 
                key={index}
                className="group bg-card rounded-xl p-8 shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border border-border"
              >
                <div className="bg-gradient-primary rounded-lg w-16 h-16 flex items-center justify-center mb-6 group-hover:shadow-glow transition-all duration-300">
                  <IconComponent className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-3">
                  {point.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {point.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ValuePoints;