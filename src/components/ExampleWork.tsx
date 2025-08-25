import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import exampleImage from "@/assets/example-websites.jpg";

const examples = [
  { trade: "Plumber", location: "Manchester", highlight: "Emergency callouts increased 60%", liveUrl: "https://clearflow-plumbing-site.lovable.app" },
  { trade: "Electrician", location: "Birmingham", highlight: "Booked solid for 3 months ahead", liveUrl: "https://sparkright-safe-electrics.lovable.app" },
  { trade: "Builder", location: "London", highlight: "Won £50k extension project", liveUrl: "https://solidbuild-built-to-last.lovable.app" },
  { trade: "Gardener", location: "UK", highlight: "Professional online presence live", liveUrl: "https://garden-pride-site.lovable.app" },
  { trade: "Driveway Specialist", location: "Midlands", highlight: "Premium projects up 140%", liveUrl: "https://solidpath-driveway-solutions.lovable.app" },
  { trade: "Roofer", location: "Sheffield", highlight: "Insurance work up 200%", liveUrl: "https://peak-roofing-pros.lovable.app" },
  { trade: "Plasterer", location: "Newcastle", highlight: "Premium jobs increased 90%", liveUrl: "https://smooth-finish-pro.lovable.app" },
  { trade: "Tiler", location: "Cardiff", highlight: "Bathroom projects up 120%", liveUrl: "https://precision-tile-pros.lovable.app" },
  { trade: "Cleaning Service", location: "London", highlight: "Bookings increased 180%", liveUrl: "https://freshstart-sparkle.lovable.app" },
  { trade: "Window Cleaner", location: "Manchester", highlight: "Regular clients up 200%", liveUrl: "https://crystalview-shine.lovable.app" }
];

const ExampleWork = () => {
  return (
    <section className="py-20 bg-muted/30">
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

        <div className="relative mb-12">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl blur-2xl"></div>
          <img 
            src={exampleImage}
            alt="Collection of custom tradesperson websites"
            className="relative w-full rounded-xl shadow-elegant"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {examples.map((example, index) => (
            <div 
              key={index}
              className="bg-card rounded-lg p-6 shadow-card hover:shadow-elegant transition-all duration-300 border border-border group"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-lg text-card-foreground">
                  {example.trade}
                </h3>
                <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded">
                  {example.location}
                </span>
              </div>
              <p className="text-accent font-medium mb-4">
                {example.highlight}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-muted-foreground">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Custom design & branding
                </div>
                {example.liveUrl && (
                  <a
                    href={example.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-3 py-1.5 bg-accent text-accent-foreground rounded-md hover:bg-accent/90 transition-colors text-sm font-medium"
                  >
                    <ExternalLink className="w-3 h-3 mr-1" />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/portfolio">
            <Button variant="hero" size="lg">
              See All Our Work
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ExampleWork;