import { contentService } from "@/lib/services/contentService";
import { ExternalLink, Eye, TrendingUp } from "lucide-react";
import Image from "next/image";

const examples = contentService.getAllContent().examples;

// Add screenshot paths - assuming they've been added to public/assets
const screenshots = {
  builder: "/assets/screenshots/builder-site.png",
  gardener: "/assets/screenshots/gardener-site.png",
  plasterer: "/assets/screenshots/plasterer-site.png",
  windowCleaner: "/assets/screenshots/window-cleaner-site.png",
};

// Map them to examples
examples[0].screenshot = screenshots.builder;
examples[1].screenshot = screenshots.gardener;
examples[2].screenshot = screenshots.plasterer;
examples[3].screenshot = screenshots.windowCleaner;

const ExampleWork = () => {
  return (
    <section id="examples" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 flex flex-col gap-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            See What Your Website Could Look Like
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore these live demo websites we've created to showcase our design capabilities for trades. We'll build something just as professional and effective for your business.
          </p>
          <p className="text-sm text-muted-foreground/80 italic max-w-2xl mx-auto">
            Note: These are demonstration sites with sample content. Actual results depend on your business and marketing efforts. Testimonials and metrics are illustrative examples based on industry averages.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {examples.map((example, index) => (
            <article
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              {/* Website Preview */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={example.screenshot || "/assets/placeholder-website.png"}
                  alt={`${example.trade} Website Preview`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Live Site Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <span className="inline-flex items-center gap-1 rounded-full bg-green-500/90 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                    <div className="h-2 w-2 rounded-full bg-white animate-pulse"></div>
                    Live Demo
                  </span>
                </div>

                {/* Overlay with CTA */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col justify-end p-6">
                  <a
                    href={example.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold text-black transition-colors hover:bg-gray-100 w-fit"
                  >
                    <Eye className="h-4 w-4" />
                    Explore Demo Site
                  </a>
                </div>
              </div>

              {/* Minimal Content */}
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-sm font-semibold uppercase tracking-wide text-accent">
                      {example.trade} Demo
                    </span>
                    <span className="ml-2 rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                      {example.location}
                    </span>
                  </div>
                  <a
                    href={example.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent/80 transition-colors"
                  >
                    View Full Site
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6">
            These demos show the quality and style of websites we can create for your trade business. Ready to get your custom site?
          </p>
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-8 py-4 font-semibold text-accent-foreground hover:bg-accent/90 transition-colors"
          >
            Start Your Project
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ExampleWork;