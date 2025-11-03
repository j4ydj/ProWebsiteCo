import { contentService } from "@/lib/services/contentService";

const examples = contentService.getAllContent().examples;

const ExampleWork = () => {
  return (
    <section id="examples" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col gap-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Real Results for Real Trades
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A snapshot of how custom trade websites transform enquiries, bookings, and brand trust.
          </p>
        </div>
        <div className="mb-12 space-y-6">
          {examples.map((example, index) => (
            <div
              key={index}
              className="rounded-xl border border-border/60 bg-card/90 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="text-xl font-semibold text-card-foreground">
                      {example.trade}
                    </h3>
                    <span className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                      {example.location}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground/80">{example.highlight}</p>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <span className="rounded-full bg-accent/10 px-3 py-1 font-semibold uppercase tracking-wide text-accent">
                    {example.result}
                  </span>
                  <span className="text-muted-foreground">in {example.timeframe}</span>
                </div>
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div className="rounded-lg border border-border/50 bg-background/70 p-4">
                  <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground/80">Before</div>
                  <p className="mt-1 text-sm text-card-foreground">{example.before}</p>
                </div>
                <div className="rounded-lg border border-accent/40 bg-accent/10 p-4">
                  <div className="text-xs font-semibold uppercase tracking-wide text-accent">After</div>
                  <p className="mt-1 text-sm text-card-foreground">{example.after}</p>
                </div>
              </div>

              <blockquote className="mt-4 border-l-2 border-accent/60 pl-4 text-sm italic text-muted-foreground">
                "{example.testimonial}"
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExampleWork;