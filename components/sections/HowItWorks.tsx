import { contentService } from "@/lib/services/contentService";

const steps = contentService.getHowItWorksSteps();

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">Simple Process</span>
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6">
            From Zero to <span className="text-primary">Live</span> in 7 Days
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
            We've stripped away the complexity. No tech jargon, no endless meetings. 
            Just a streamlined process to get your business online fast.
          </p>
        </div>

        <div className="relative">
          {/* Desktop Connector Line */}
          <div className="hidden lg:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="relative group">
                  <div className="flex flex-col items-center text-center">
                    
                    {/* Step Number & Icon */}
                    <div className="relative mb-8">
                        <div className="w-24 h-24 bg-white rounded-2xl shadow-lg flex items-center justify-center relative z-10 group-hover:-translate-y-2 transition-transform duration-500 border border-slate-100">
                            <IconComponent className="w-10 h-10 text-primary group-hover:scale-110 transition-transform duration-300" />
                        </div>
                        <div className="absolute -top-3 -right-3 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md z-20 border-2 border-white">
                            {index + 1}
                        </div>
                        {/* Decorative blob behind */}
                        <div className="absolute inset-0 bg-primary/5 rounded-2xl blur-xl -z-10 transform scale-90 group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed px-4">
                      {index === 0 ? "We start with a quick phone chat to understand your business. No long forms to fill out—we ask the questions, you talk, and we handle the writing." : step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="text-center mt-20">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white rounded-full shadow-sm border border-slate-100 text-sm font-medium text-slate-600">
            <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
            Average delivery time: <span className="text-foreground font-bold">Less than 1 week</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;