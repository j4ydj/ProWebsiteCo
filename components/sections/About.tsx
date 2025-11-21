import { Button } from "@/components/ui/button";
import { Users, Award, Clock, MapPin } from "lucide-react";

const stats = [
  {
    number: "150+",
    label: "Trades Served",
  },
  {
    number: "4.9/5",
    label: "Client Rating", 
  },
  {
    number: "7 Days",
    label: "Average Delivery",
  }
];

const About = () => {
  return (
    <section className="py-24 bg-white dark:bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          
          {/* Left Column: Story */}
          <div className="lg:col-span-7">
            <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">Our Mission</span>
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-8 tracking-tight leading-tight">
              We Built Pro Website Co to End the <span className="text-primary">"Template Trap"</span>
            </h2>
            
            <div className="space-y-6 text-lg text-muted-foreground font-light leading-relaxed">
              <p>
                In 2019, we noticed a pattern. Skilled tradespeople were paying thousands for websites that looked exactly like their competitors'. Same stock photos, same generic text, same poor results.
              </p>
              <p>
                We believe a high-quality trade business deserves a high-quality digital presence. A plumber's website needs to function differently than a roofer's. A luxury builder needs a different aesthetic than an emergency locksmith.
              </p>
              <div className="pl-6 border-l-4 border-accent my-8">
                <p className="text-xl font-medium text-foreground italic">
                  "Our commitment is absolute: No templates. No generic copy. Just 100% custom design engineered for your specific trade."
                </p>
              </div>
              <p>
                 We stripped away the agency fluff—the expensive meetings, the confusing jargon, and the slow timelines—to focus on what matters: building beautiful, high-converting websites that help you win better work.
              </p>
            </div>

            <div className="mt-10 flex items-center gap-6">
               <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="font-bold text-foreground">London Based</span>
               </div>
               <div className="w-1 h-1 bg-slate-300 rounded-full" />
               <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  <span className="font-bold text-foreground">UK Team Only</span>
               </div>
            </div>
          </div>

          {/* Right Column: Stats & Trust */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-slate-50 dark:bg-neutral-900 rounded-3xl p-8 border border-slate-100 dark:border-white/5 shadow-lg">
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                 <Award className="w-5 h-5 text-accent" />
                 Why Trades Trust Us
              </h3>
              <ul className="space-y-4">
                 {[
                    "We speak 'Trade', not 'Tech'",
                    "Specialists in Local SEO for UK Areas",
                    "Direct access to your designer",
                    "No hidden monthly maintenance fees",
                    "Full ownership of your website"
                 ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                       <div className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center shrink-0 mt-0.5">
                          <div className="w-2 h-2 rounded-full bg-green-600" />
                  </div>
                       <span className="text-muted-foreground font-medium">{item}</span>
                    </li>
                 ))}
              </ul>
            </div>

            <div className="grid grid-cols-3 gap-4">
               {stats.map((stat, index) => (
                  <div key={index} className="bg-white dark:bg-card rounded-2xl p-4 border border-slate-100 dark:border-white/5 shadow-sm text-center">
                     <div className="text-2xl md:text-3xl font-black text-primary mb-1">{stat.number}</div>
                     <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{stat.label}</div>
                  </div>
               ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;