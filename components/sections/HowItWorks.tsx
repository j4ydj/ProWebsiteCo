import { contentService } from "@/lib/services/contentService";

const steps = contentService.getHowItWorksSteps();

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Getting your professional trade website is simpler than you think. 
            No tech headaches, no lengthy delays.
          </p>
        </div>

        <div className="relative">
          {/* Connection lines for desktop */}
          <div className="hidden lg:block absolute top-24 left-1/2 transform -translate-x-1/2 w-2/3 h-0.5 bg-gradient-to-r from-primary via-accent to-primary"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="relative">
                  {/* Step number circle */}
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 lg:relative lg:top-0 lg:left-0 lg:transform-none lg:mx-auto lg:mb-6 w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg shadow-elegant lg:z-10">
                    {index + 1}
                  </div>
                  
                  <div className="bg-card rounded-xl p-8 shadow-card hover:shadow-elegant transition-all duration-300 border border-border text-center">
                    <div className="bg-gradient-accent rounded-lg w-16 h-16 flex items-center justify-center mx-auto mb-6">
                      <IconComponent className="w-8 h-8 text-accent-foreground" />
                    </div>
                    
                    <div className="text-sm font-medium text-accent mb-2">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-semibold text-card-foreground mb-4">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center px-6 py-3 bg-accent/10 rounded-full text-accent font-semibold">
            ⚡ Average delivery time: 48 hours
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;