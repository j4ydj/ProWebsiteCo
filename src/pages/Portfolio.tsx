import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Star, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import exampleImage from "@/assets/example-websites.jpg";

const portfolioItems = [
  {
    trade: "Emergency Plumber",
    name: "AquaFix Pro",
    location: "Manchester",
    image: exampleImage,
    description: "24/7 emergency plumbing services with instant booking system",
    features: ["Online booking", "Emergency callouts", "Price calculator"],
    result: "60% increase in emergency calls",
    testimonial: "Phone hasn't stopped ringing since the site went live!"
  },
  {
    trade: "Electrician", 
    name: "Spark & Sons",
    location: "Birmingham",
    image: exampleImage,
    description: "Family electrical business specializing in home rewiring",
    features: ["Safety certificates", "Project gallery", "Free quotes"],
    result: "Booked solid for 3 months",
    testimonial: "Professional look gives customers real confidence"
  },
  {
    trade: "Builder",
    name: "Heritage Builds",
    location: "London", 
    image: exampleImage,
    description: "Luxury home extensions and renovations",
    features: ["3D project visualizer", "Planning permission help", "Timeline tracker"],
    result: "Won £50k extension project",
    testimonial: "Website helped me land the biggest job of my career",
    liveUrl: "https://solidbuild-built-to-last.lovable.app"
  },
  {
    trade: "Gardener",
    name: "Garden Pride", 
    location: "UK",
    image: exampleImage,
    description: "Professional garden design and maintenance services",
    features: ["Online booking system", "Service showcase", "Professional portfolio"],
    result: "Live working website",
    testimonial: "Professional online presence that converts visitors to customers",
    liveUrl: "https://garden-pride-site.lovable.app"
  },
  {
    trade: "Decorator",
    name: "Prestige Painting",
    location: "Bristol",
    image: exampleImage, 
    description: "High-end interior and exterior painting",
    features: ["Color visualizer", "Premium finishes showcase", "Room transformations"],
    result: "Premium quotes up 80%",
    testimonial: "Now attracting much higher-paying customers"
  },
  {
    trade: "Carpenter",
    name: "Craftsman Joinery",
    location: "Liverpool",
    image: exampleImage,
    description: "Bespoke furniture and fitted kitchen specialist", 
    features: ["Custom design tool", "Wood species guide", "Installation videos"],
    result: "Kitchen enquiries up 150%",
    testimonial: "Website showcases my craftsmanship perfectly"
  },
  {
    trade: "Roofer",
    name: "Peak Roofing",
    location: "Sheffield",
    image: exampleImage,
    description: "Complete roofing solutions with drone surveys",
    features: ["Drone inspection booking", "Material calculator", "Weather alerts"],
    result: "Insurance work up 200%", 
    testimonial: "Professional site helps win insurance contracts",
    liveUrl: "https://peak-roofing-pros.lovable.app"
  },
  {
    trade: "Plasterer",
    name: "Smooth Finish",
    location: "Newcastle",
    image: exampleImage,
    description: "Specialist plastering and rendering services",
    features: ["Finish gallery", "Technique explanations", "Project timeline"],
    result: "Premium jobs increased 90%",
    testimonial: "Customers appreciate the detailed explanations",
    liveUrl: "https://smooth-finish-pro.lovable.app"
  },
  {
    trade: "Tiler", 
    name: "Precision Tiling",
    location: "Cardiff",
    image: exampleImage,
    description: "Luxury bathroom and kitchen tiling specialist",
    features: ["Pattern visualizer", "Grout color matcher", "Maintenance guides"],
    result: "Bathroom projects up 120%",
    testimonial: "Tool helps customers visualize their dream bathroom",
    liveUrl: "https://precision-tile-pros.lovable.app"
  },
  {
    trade: "Cleaning Service",
    name: "Fresh Start Cleaning",
    location: "London",
    image: exampleImage,
    description: "Professional residential and commercial cleaning services",
    features: ["Online booking system", "Eco-friendly options", "Regular maintenance plans"],
    result: "Bookings increased 180%",
    testimonial: "Customer inquiries tripled since launch",
    liveUrl: "https://freshstart-sparkle.lovable.app"
  }
];

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-8">
            <Link to="/">
              <Button variant="outline" className="bg-white/10 border-white/20 text-primary-foreground hover:bg-white/20 mr-4">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
          <div className="text-center text-primary-foreground">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Portfolio of Custom Trade Websites
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto">
              Every website is designed from scratch. No templates, no copy-paste designs. 
              Each one is as unique as the tradesperson behind it.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-accent/10 rounded-full text-accent font-medium mb-8">
              All examples shown are live, working websites for real UK trades
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <div key={index} className="bg-card rounded-xl shadow-card hover:shadow-elegant transition-all duration-300 border border-border group overflow-hidden">
                <div className="relative">
                  <img 
                    src={item.image}
                    alt={`${item.name} website preview`}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="text-sm font-medium bg-accent px-2 py-1 rounded">
                      {item.trade}
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold text-card-foreground">
                      {item.name}
                    </h3>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 mr-1" />
                      {item.location}
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-card-foreground mb-2">Key Features:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {item.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t border-border pt-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium">
                        {item.result}
                      </div>
                      <div className="flex items-center text-accent">
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                      </div>
                    </div>
                    <blockquote className="text-sm text-muted-foreground italic mb-4">
                      "{item.testimonial}"
                    </blockquote>
                    {item.liveUrl && (
                      <a
                        href={item.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors text-sm font-medium"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Every website above started with a simple conversation. Let's discuss how we can 
              create something equally impressive for your trade.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta" size="lg">
                Get My Custom Website
              </Button>
              <Link to="/">
                <Button variant="outline" size="lg">
                  Learn More About Our Process
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-foreground mb-2">150+</div>
              <div className="text-muted-foreground">Websites Created</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-foreground mb-2">0</div>
              <div className="text-muted-foreground">Templates Used</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-foreground mb-2">48hrs</div>
              <div className="text-muted-foreground">Average Delivery</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-foreground mb-2">4.9★</div>
              <div className="text-muted-foreground">Customer Rating</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;