import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import exampleImage from "@/assets/example-websites.jpg";

const examples = [
  { 
    trade: "Builder", 
    location: "London", 
    highlight: "Won £50k extension project", 
    liveUrl: "https://solidbuild-built-to-last.lovable.app",
    before: "No online presence",
    after: "Premium project leads",
    result: "£50k",
    timeframe: "3 months",
    testimonial: "The website transformed my business overnight"
  },
  { 
    trade: "Gardener", 
    location: "UK", 
    highlight: "Professional online presence live", 
    liveUrl: "https://garden-pride-site.lovable.app",
    before: "Word of mouth only",
    after: "National visibility",
    result: "3x bookings",
    timeframe: "2 months",
    testimonial: "Now I'm booked solid throughout the seasons"
  },
  { 
    trade: "Plasterer", 
    location: "Newcastle", 
    highlight: "Premium jobs increased 90%", 
    liveUrl: "https://smooth-finish-pro.lovable.app",
    before: "Basic Facebook page",
    after: "Professional showcase",
    result: "+90%",
    timeframe: "6 weeks",
    testimonial: "Higher paying clients found me through Google"
  },
  { 
    trade: "Window Cleaner", 
    location: "Manchester", 
    highlight: "Regular clients up 200%", 
    liveUrl: "https://crystalview-shine.lovable.app",
    before: "Door-to-door marketing",
    after: "Online booking system",
    result: "+200%",
    timeframe: "1 month",
    testimonial: "Customers now book me online automatically"
  }
];

const ExampleWork = () => {
  return (
    <section id="examples" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Real Websites for Real Trades
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Every website we create is designed from scratch for each client. 
            Here's what's possible when your trade gets the custom treatment it deserves.
          </p>
          <div className="inline-flex items-center px-4 py-2 bg-accent/10 rounded-full text-accent font-medium">
            All examples shown are unique, tailored designs — no templates used
          </div>
        </div>


        <div className="space-y-8 mb-12">
          {examples.map((example, index) => (
            <div 
              key={index}
              className={`relative bg-card rounded-2xl p-8 shadow-card hover:shadow-elegant transition-all duration-500 border border-border group overflow-hidden ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative grid lg:grid-cols-2 gap-8 items-center">
                {/* Content Side */}
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-card-foreground mb-2">
                        {example.trade}
                      </h3>
                      <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
                        {example.location}
                      </span>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-accent">{example.result}</div>
                      <div className="text-sm text-muted-foreground">in {example.timeframe}</div>
                    </div>
                  </div>

                  {/* Before/After */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-muted/50 rounded-lg p-4">
                      <div className="text-xs font-medium text-muted-foreground mb-2">BEFORE</div>
                      <div className="text-sm text-card-foreground">{example.before}</div>
                    </div>
                    <div className="bg-accent/10 rounded-lg p-4">
                      <div className="text-xs font-medium text-accent mb-2">AFTER</div>
                      <div className="text-sm text-card-foreground">{example.after}</div>
                    </div>
                  </div>

                  {/* Testimonial */}
                  <blockquote className="border-l-4 border-accent pl-4 italic text-muted-foreground">
                    "{example.testimonial}"
                  </blockquote>

                  {/* CTA */}
                  <div className="pt-4">
                    <a
                      href={example.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-all duration-300 font-medium group-hover:scale-105"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Live Website
                    </a>
                  </div>
                </div>

                {/* Visual Side */}
                <div className="relative">
                  <div className="aspect-[4/3] bg-gradient-to-br from-muted to-muted/50 rounded-xl overflow-hidden">
                    {/* Placeholder for website preview */}
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-center space-y-4">
                        <div className="w-16 h-16 bg-accent/20 rounded-lg mx-auto flex items-center justify-center">
                          <ExternalLink className="w-8 h-8 text-accent" />
                        </div>
                        <div className="space-y-2">
                          <div className="text-sm font-medium text-card-foreground">
                            Custom {example.trade} Website
                          </div>
                          <div className="text-xs text-muted-foreground">
                            Mobile-optimized • SEO-ready • Professional design
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating result badge */}
                  <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-full font-bold shadow-lg animate-pulse">
                    {example.highlight}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="hero" size="lg" asChild>
            <a 
              href="https://solidbuild-built-to-last.lovable.app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              View Live Examples
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ExampleWork;