import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  PlayCircle,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { contentService } from "@/lib/services/contentService";

const hero = contentService.getHero();

const featureHighlights = [
  { icon: Clock, label: "Launch in 48 hours" },
  { icon: CheckCircle2, label: "Custom copy & branding" },
  { icon: Sparkles, label: "Google-ready & fully managed" },
];

const Hero = () => {
  return (
    <section id="hero" className="relative overflow-hidden bg-gradient-hero pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-accent/80"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div className="relative z-10 flex flex-col items-center gap-6 text-center text-white lg:items-start lg:text-left">
           
            <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur">
              <span className="hidden h-2 w-2 rounded-full bg-accent sm:block" />
              <span className="text-sm sm:text-base">{hero.highlight}</span>
            </div>
            <div className="space-y-4">
              <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
                {hero.heading}
              </h1>
              <p className="text-lg leading-relaxed text-white/90 md:text-xl">
                {hero.subheading}
              </p>
            </div>
            <div className="grid w-full max-w-3xl grid-cols-1 gap-3 sm:grid-cols-3">
              {featureHighlights.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 rounded-2xl bg-white/10 px-4 py-3 text-left backdrop-blur transition hover:bg-white/15"
                >
                  <Icon className="h-5 w-5 text-accent" />
                  <span className="text-sm font-medium text-white/90">{label}</span>
                </div>
              ))}
            </div>
            <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <a href="#contact" className="group w-full sm:w-auto">
                <Button variant="accent" size="xl" className="w-full min-h-[56px] text-lg font-semibold">
                  {hero.ctaLabel}
                  <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>
              <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row">
                <Link href="/portfolio" className="w-full sm:w-auto">
                  <Button
                    variant="outline"
                    size="xl"
                    className="w-full min-h-[56px] border-white/20 bg-white/10 text-white hover:bg-white/20"
                  >
                    <PlayCircle className="mr-2" />
                    {hero.portfolioCta}
                  </Button>
                </Link>
                <a
                  href={hero.waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <Button
                    variant="outline"
                    size="xl"
                    className="w-full min-h-[56px] border-green-400/30 bg-green-600/20 text-white hover:bg-green-600/30"
                  >
                    {hero.chatCta}
                  </Button>
                </a>
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3 text-sm font-medium text-white/80 lg:justify-start">
              <ShieldCheck className="h-5 w-5 text-accent" />
              <span>{hero.setupGuarantee}</span>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-accent/20 to-primary/20 blur-3xl"></div>
            <Image
              src={hero.heroImage}
              alt="Professional custom-designed websites for UK tradespeople displayed on laptop and mobile devices, showing plumber, electrician, and builder websites with modern responsive layouts"
              className="relative h-auto w-full rounded-3xl border border-white/10 shadow-2xl"
              width={960}
              height={720}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;