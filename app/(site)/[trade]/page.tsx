import { Metadata } from "next";
import Navigation from "@/components/layout/Navigation";
import Hero from "@/components/sections/Hero";
import TrustSignals from "@/components/sections/TrustSignals";
import ValuePoints from "@/components/sections/ValuePoints";
import ExampleWork from "@/components/sections/ExampleWork";
import ExclusivitySection from "@/components/sections/ExclusivitySection";
import HowItWorks from "@/components/sections/HowItWorks";
import Pricing from "@/components/sections/Pricing";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import About from "@/components/sections/About";
import CallToAction from "@/components/sections/CallToAction";
import Footer from "@/components/layout/Footer";
import { getTradeContent } from "@/lib/data/trade-content";
import { notFound } from "next/navigation";

interface TradePageProps {
  params: {
    trade: string;
  };
}

export async function generateStaticParams() {
  return [
    { trade: 'plumber' },
    { trade: 'electrician' },
    { trade: 'builder' },
  ];
}

export async function generateMetadata({ params }: TradePageProps): Promise<Metadata> {
  const tradeContent = getTradeContent(params.trade);
  
  if (!tradeContent) {
    return {
      title: "Pro Website Co — Custom Trade Websites",
    };
  }

  return {
    title: `${tradeContent.displayName} Websites — Pro Website Co`,
    description: tradeContent.seoDescription,
    openGraph: {
      title: `${tradeContent.displayName} Websites — Pro Website Co`,
      description: tradeContent.seoDescription,
      url: `https://prowebsiteco.com/${params.trade}`,
    },
  };
}

export default function TradePage({ params }: TradePageProps) {
  const tradeContent = getTradeContent(params.trade);

  if (!tradeContent) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Custom Hero for Trade */}
        <section id="hero" className="relative min-h-screen overflow-hidden bg-gradient-to-br from-primary/90 via-primary/70 to-accent/80">
          <div className="relative z-10 flex min-h-screen items-center">
            <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-24 sm:px-10 lg:px-12 lg:py-32">
              <span className="text-xs uppercase tracking-[0.4em] text-white/70">
                PROWEBSITECO · {tradeContent.displayName.toUpperCase()} WEBSITES
              </span>

              <div className="max-w-2xl space-y-6 text-white">
                <h1 className="text-4xl font-black uppercase leading-[1.1] tracking-tight md:text-5xl lg:text-6xl">
                  {tradeContent.heroHeading}
                </h1>
                <p className="text-base text-white/80 md:text-lg">
                  {tradeContent.heroSubheading}
                </p>
                <div>
                  <a href="#contact">
                    <button className="group inline-flex items-center rounded-lg bg-white px-6 py-2 text-sm font-semibold uppercase tracking-wide text-black transition hover:bg-white/90">
                      Get Your {tradeContent.displayName} Website
                      <svg className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <TrustSignals />
        
        {/* Custom Value Points for Trade */}
        <section id="why-us" className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why {tradeContent.displayName}s Choose Pro Website Co
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We understand the unique needs of {tradeContent.displayName.toLowerCase()} businesses. 
                That's why every website we create is built specifically for your trade.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tradeContent.valuePoints.map((point, index) => (
                <div 
                  key={index}
                  className="group bg-card rounded-xl p-8 shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border border-border"
                >
                  <div className="bg-accent/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-card-foreground mb-3">
                    {point}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ExampleWork />
        <ExclusivitySection />
        <HowItWorks />
        <Pricing />
        
        {/* Custom Testimonials for Trade */}
        <section id="testimonials" className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Real Results from {tradeContent.displayName}s
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                See how custom websites have transformed {tradeContent.displayName.toLowerCase()} businesses across the UK.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {tradeContent.testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="bg-card rounded-xl p-8 shadow-card hover:shadow-elegant transition-all duration-300 border border-border"
                >
                  <div className="mb-6">
                    <div className="flex items-center mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-accent fill-current" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-card-foreground leading-relaxed text-lg italic">
                      "{testimonial.text}"
                    </p>
                  </div>

                  <div className="border-t border-border pt-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-card-foreground">
                          {testimonial.name}
                        </div>
                        <div className="text-muted-foreground text-sm">
                          {tradeContent.displayName} • {testimonial.location}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium">
                          {testimonial.result}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FAQ />
        <About />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}

