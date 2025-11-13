import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Mike Thompson",
    trade: "Plumber",
    location: "Manchester",
    text: "Within a week of the site going live, I had 3 new emergency callouts. The phone hasn't stopped ringing since. Best investment I've made for my business.",
    rating: 5,
    result: "60% increase in emergency calls"
  },
  {
    name: "Sarah Jenkins", 
    trade: "Decorator",
    location: "Bristol",
    text: "I was sceptical about websites, but Pro Website Co made it so easy. Now customers can see my work properly and I'm getting much better paying jobs.",
    rating: 5,
    result: "Premium quotes up 80%"
  },
  {
    name: "Dave Clarke",
    trade: "Builder", 
    location: "London",
    text: "The website landed me a £50k extension project within the first month. The professional look gives customers confidence in my work.",
    rating: 5,
    result: "Won £50k project"
  },
  {
    name: "Emma Wilson",
    trade: "Gardener",
    location: "Leeds", 
    text: "I love how they made my website match my brand perfectly. It's nothing like those template sites - it's uniquely mine and my customers notice.",
    rating: 5,
    result: "Doubled weekly clients"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Real Results from Real Tradespeople
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's how custom websites have transformed 
            businesses across the UK.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl p-8 shadow-card hover:shadow-elegant transition-all duration-300 border border-border relative group"
            >
              <div className="absolute top-6 right-6 text-accent/20 group-hover:text-accent/40 transition-colors">
                <Quote className="w-8 h-8" />
              </div>
              
              <div className="mb-6">
                <div className="flex items-center mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-accent fill-current" />
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
                      {testimonial.trade} • {testimonial.location}
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

        <div className="text-center mt-12">
          <div className="inline-flex items-center px-6 py-3 bg-primary/10 rounded-full text-primary font-semibold">
            ⭐ 4.9/5 average rating from 150+ trades
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
