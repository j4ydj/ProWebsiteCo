import { contentService } from "@/lib/services/contentService";
import { ExternalLink, LayoutTemplate, Monitor, ArrowRight } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";

const examples = contentService.getAllContent().examples;

// Add screenshot paths
const screenshots = {
  builder: "/assets/screenshots/builder-site.png",
  gardener: "/assets/screenshots/gardener-site.png",
  windowCleaner: "/assets/screenshots/window-cleaner-site.png",
};

// Create enhanced examples
const enhancedExamples = examples
  .filter(e => e.trade.toLowerCase() !== 'plasterer') // Filter out plasterer
  .map((example, index) => ({
  ...example,
  screenshot: Object.values(screenshots)[index],
  stats: [
    { label: "Mobile Score", value: "98/100" },
    { label: "Load Time", value: "< 1s" },
    { label: "Conversion", value: "High" },
  ]
}));

const ExampleWork = () => {
  return (
    <section id="examples" className="relative py-32 bg-neutral-950 overflow-hidden">
       {/* Background Pattern */}
       <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
       
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-24 text-center">
          <FadeIn>
             <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6">
              Our Work
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-8">
              Designed for <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">Impact</span>
          </h2>
            <p className="text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed font-light">
              Explore our portfolio of design concepts. These prototypes demonstrate the high standard 
              of quality and performance we deliver for every trade business.
          </p>
          </FadeIn>
        </div>

        <div className="space-y-32">
          {enhancedExamples.map((example, index) => (
            <FadeIn key={index} delay={index * 100}>
              <div 
                  className={`flex flex-col lg:flex-row gap-12 lg:gap-20 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Visual Side */}
                <div className="w-full lg:w-3/5 relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary to-amber-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000" />
                  <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-neutral-900 aspect-[16/10]">
                <Image
                  src={example.screenshot || "/assets/placeholder-website.png"}
                        alt={`${example.trade} Website Concept`}
                  fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 50vw"
                />
                      
                      {/* Overlay Action */}
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                  <a
                    href={example.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-bold text-lg hover:scale-105 transition-transform"
                          >
                              View Prototype <ExternalLink className="w-5 h-5" />
                          </a>
                      </div>
                  </div>
                  {/* Decorative Badge */}
                  <div className="absolute -bottom-6 -right-6 bg-neutral-800 p-4 rounded-xl border border-white/10 shadow-xl hidden md:block">
                      <div className="flex items-center gap-3">
                          <div className="h-3 w-3 rounded-full bg-amber-500 animate-pulse" />
                          <span className="text-sm font-mono text-white/80">Concept Design</span>
                      </div>
                </div>
              </div>

                {/* Content Side */}
                <div className="w-full lg:w-2/5 space-y-8">
                  <div>
                      <div className="flex items-center gap-3 mb-2">
                          <span className="px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider bg-white/10 text-white/60">Example</span>
                          <h3 className="text-3xl font-bold text-white">{example.trade} Concept</h3>
                      </div>
                      <p className="text-amber-500 font-medium">Design Prototype</p>
                  </div>
                  
                  <p className="text-lg text-neutral-400 leading-relaxed">
                      A high-fidelity concept showcasing how we would structure a lead-generating site for a {example.trade.toLowerCase()}. 
                      Featuring optimized conversion paths and industry-specific trust signals.
                  </p>

                  <div className="grid grid-cols-3 gap-4 py-6 border-y border-white/10">
                      {example.stats.map((stat, i) => (
                          <div key={i}>
                              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                              <div className="text-xs uppercase tracking-wider text-neutral-500">{stat.label}</div>
                          </div>
                      ))}
                  </div>

                  <div className="flex items-center gap-4">
                       <Button asChild variant="outline" className="border-white/20 text-black hover:bg-white/10 hover:text-white">
                          <a href={example.liveUrl} target="_blank" rel="noopener noreferrer">
                              <LayoutTemplate className="w-4 h-4 mr-2" /> View Design
                          </a>
                      </Button>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <div className="mt-32 text-center">
            <FadeIn delay={300}>
              <p className="text-neutral-400 mb-8 text-lg">Ready to get a site like this for your business?</p>
               <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-full" asChild>
                  <a href="#pricing">
                    See Packages <ArrowRight className="ml-2 w-5 h-5" />
          </a>
                </Button>
            </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default ExampleWork;