 'use client';

import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { contentService } from "@/lib/services/contentService";
import { trackCTAClick } from "@/lib/utils/tracking";

const hero = contentService.getHero();

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={hero.heroVideo}
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/70 to-black/40" />

      <div className="relative z-10 flex min-h-screen items-center">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-24 sm:px-10 lg:px-12 lg:py-32">
          {hero.highlight && (
            <span className="text-xs uppercase tracking-[0.4em] text-white/70">
              {hero.highlight}
            </span>
          )}

          <div className="max-w-2xl space-y-6 text-white">
            <h1 className="text-4xl font-black uppercase leading-[1.1] tracking-tight md:text-5xl lg:text-6xl">
              {hero.heading}
            </h1>
            <p className="text-base text-white/80 md:text-lg">
              {hero.subheading}
            </p>
            <div>
              <a href="#contact" onClick={() => trackCTAClick('hero')}>
                <Button
                  size="lg"
                  className="group inline-flex items-center rounded-lg bg-white px-6 py-2 text-sm font-semibold uppercase tracking-wide text-black transition hover:bg-white/90"
                >
                  {hero.ctaLabel}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>
            </div>
          </div>
        </div>
        {hero.verticalLabel && (
          <span className="pointer-events-none absolute right-8 top-1/2 hidden -translate-y-1/2 rotate-90 transform text-xs uppercase tracking-[0.5em] text-white/60 lg:inline-flex">
            {hero.verticalLabel}
          </span>
        )}
        {hero.footerLeft && (
          <span className="pointer-events-none absolute bottom-6 left-6 text-xs uppercase tracking-[0.3em] text-white/60">
            {hero.footerLeft}
          </span>
        )}
        {hero.footerRight && (
          <span className="pointer-events-none absolute bottom-6 right-6 text-xs text-white/60">
            {hero.footerRight}
          </span>
        )}
      </div>
    </section>
  );
};

export default Hero;