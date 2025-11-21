import Image from "next/image";

const valuePoints = [
  {
    icon: "/assets/logos/tailored-business.png",
    title: "Tailored to Your Trade",
    description: "We don't use cookie-cutter templates. Your website is hand-crafted to reflect the specific quality and professionalism of your trade business."
  },
  {
    icon: "/assets/logos/convert-enquiries.png",
    title: "Engineered for Growth",
    description: "Strategic design meets psychology. We build high-converting funnels that turn casual browsers into high-value quote requests."
  },
  {
    icon: "/assets/logos/mobile-fast.png",
    title: "Lightning Fast Mobile",
    description: "With 80% of your customers on mobile, we ensure your site loads instantly and functions perfectly on every device, everywhere."
  },
  {
    icon: "/assets/logos/qr-code.png",
    title: "Digital Toolkit Included",
    description: "Beyond the web: receive a custom QR code suite for your van livery and business cards to bridge your offline and online presence."
  }
];

const ValuePoints = () => {
  return (
    <section id="why-us" className="py-24 bg-slate-50/50 dark:bg-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute top-[20%] -left-[10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center rounded-full border border-accent/20 bg-accent/10 px-4 py-1.5 text-sm font-bold uppercase tracking-wider text-accent-foreground mb-8">
            <span className="flex h-2 w-2 rounded-full bg-accent mr-2 animate-pulse"></span>
            The Pro Website Co Difference
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground tracking-tight mb-6 uppercase">
            Why Top Trades <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/70">Choose Us</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-light">
            We understand the unique needs of UK trades. That's why every website we create 
            is built specifically for your business, not adapted from a generic template.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {valuePoints.map((point, index) => {
            return (
              <div 
                key={index}
                className="group relative bg-background rounded-2xl p-8 shadow-card hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 border border-border/50 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="mb-8 inline-flex items-center justify-center rounded-2xl bg-slate-100 dark:bg-slate-800 p-4 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-inner">
                    <Image 
                      src={point.icon} 
                      alt={point.title}
                      width={64}
                      height={64}
                      className="object-contain h-16 w-16"
                    />
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {point.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-base">
                    {point.description}
                  </p>
                </div>

                <div className="absolute bottom-0 left-0 h-1 w-0 bg-accent transition-all duration-500 group-hover:w-full" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ValuePoints;