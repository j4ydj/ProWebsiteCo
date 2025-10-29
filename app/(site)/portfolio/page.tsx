import { contentService } from "@/lib/services/contentService";
import { ExternalLink } from "lucide-react";

export default function PortfolioPage() {
  const examples = contentService.getAllContent().examples;

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Live Portfolio</h1>
          <p className="text-lg text-muted-foreground">
            Explore a selection of real websites crafted for UK trade professionals.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-2">
          {examples.map((example) => (
            <a
              key={example.trade}
              href={example.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-xl border border-border bg-card p-6 shadow-card transition-shadow hover:shadow-elegant"
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-semibold text-card-foreground">{example.trade}</h2>
                  <span className="text-sm text-muted-foreground">{example.location}</span>
                </div>
                <ExternalLink className="h-5 w-5 text-accent" />
              </div>
              <p className="text-card-foreground mb-4">{example.highlight}</p>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-lg bg-muted/60 p-3">
                  <span className="font-medium text-muted-foreground">Before</span>
                  <p className="text-card-foreground">{example.before}</p>
                </div>
                <div className="rounded-lg bg-accent/10 p-3">
                  <span className="font-medium text-accent">After</span>
                  <p className="text-card-foreground">{example.after}</p>
                </div>
              </div>
              <div className="mt-4 text-sm text-muted-foreground">
                {example.result} in {example.timeframe}
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

