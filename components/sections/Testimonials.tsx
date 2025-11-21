import { Star, Quote, CheckCircle2 } from "lucide-react";

const testimonials = [
  {
    name: "Mike Thompson",
    trade: "Plumber",
    location: "Manchester",
    text: "Within a week of the site going live, I had 3 new emergency callouts. The phone hasn't stopped ringing since. Best investment I've made for my business.",
    rating: 5,
    tag: "Emergency Repairs"
  },
  {
    name: "Sarah Jenkins", 
    trade: "Decorator",
    location: "Bristol",
    text: "I was sceptical about websites, but Pro Website Co made it so easy. Now customers can see my work properly and I'm getting much better paying jobs.",
    rating: 5,
    tag: "High-End Finish"
  },
  {
    name: "Dave Clarke",
    trade: "Builder", 
    location: "London",
    text: "The website landed me a £50k extension project within the first month. The professional look gives customers confidence in my work.",
    rating: 5,
    tag: "Extensions"
  },
  {
    name: "Emma Wilson",
    trade: "Gardener",
    location: "Leeds", 
    text: "I love how they made my website match my brand perfectly. It's nothing like those template sites - it's uniquely mine and my customers notice.",
    rating: 5,
    tag: "Landscaping"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-slate-50 dark:bg-neutral-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <span className="text-accent font-bold tracking-wider uppercase text-sm mb-2 block">Client Success</span>
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6 tracking-tight">
              Real Results for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">Real Trades</span>
          </h2>
          </div>
          <div className="lg:text-right">
            <p className="text-xl text-muted-foreground font-light leading-relaxed">
               We don't just build websites; we build assets that pay for themselves. 
               See what our partners are saying about their growth.
          </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-card rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-white/5 group"
            >
              <div className="flex justify-between items-start mb-6">
                 <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-slate-200 group-hover:text-accent/30 transition-colors" />
              </div>

              <p className="text-lg text-foreground leading-relaxed font-medium mb-8 min-h-[80px]">
                "{testimonial.text}"
              </p>

              <div className="flex items-center justify-between pt-6 border-t border-slate-100 dark:border-white/5">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center text-white font-bold">
                        {testimonial.name.charAt(0)}
                    </div>
                    <div>
                        <div className="font-bold text-foreground">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground flex items-center gap-1">
                            {testimonial.trade} <span className="text-slate-300">•</span> {testimonial.location}
                  </div>
                    </div>
                  </div>
                
                <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 rounded-full text-xs font-bold uppercase tracking-wide">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Verified
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-white dark:bg-white/5 rounded-full border border-slate-200 dark:border-white/10 shadow-sm">
                 <div className="flex -space-x-2">
                    {[1,2,3,4].map(i => (
                        <div key={i} className="w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-700 border-2 border-white dark:border-neutral-900" />
                    ))}
                 </div>
                 <span className="text-sm font-medium text-muted-foreground ml-2">Join 150+ happy tradespeople</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;