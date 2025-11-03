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
        <div className="grid gap-6 md:grid-cols-2">
          {examples.map((example, index) => (
            <article
              key={index}
              className="flex h-full flex-col rounded-2xl border border-border/50 bg-card/95 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <header className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold uppercase tracking-wide text-accent">
                      {example.trade}
                    </span>
                    <span className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                      {example.location}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground/80">
                    {example.highlight}
                  </p>
                </div>
                <div className="flex flex-col items-end text-right text-sm">
                  <span className="rounded-md bg-accent/10 px-3 py-1 font-semibold text-accent">
                    {example.result}
                  </span>
                  <span className="mt-1 text-muted-foreground/80">in {example.timeframe}</span>
                </div>
              </header>

              <div className="mt-4 grid gap-4 text-sm md:grid-cols-2">
                <div className="rounded-xl border border-border/60 bg-background/80 p-4">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground/70">
                    Before
                  </span>
                  <p className="mt-2 text-card-foreground">{example.before}</p>
                </div>
                <div className="rounded-xl border border-accent/40 bg-accent/10 p-4">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                    After
                  </span>
                  <p className="mt-2 text-card-foreground">{example.after}</p>
                </div>
              </div>

              <footer className="mt-4 flex items-start gap-4 text-sm">
                <blockquote className="flex-1 border-l-2 border-accent/60 pl-4 text-muted-foreground">
                  "{example.testimonial}"
                </blockquote>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExampleWork;