'use client';

import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MessageCircle, Phone } from "lucide-react";

const faqs = [
  {
    question: "What if I don't have photos of my work?",
    answer: "No problem! We can help you get started with stock photos that match your trade, and you can always update them later with your own work photos. We'll also guide you on how to take great photos of future projects."
  },
  {
    question: "How long does it take to build my website?",
    answer: "From start to finish, most websites are completed within one week. This includes time for design revisions and your approval. We'll create your initial design within 2-3 days, then work with you on any changes until you're completely happy. Complex projects might take up to 10 working days, but we'll let you know upfront if that's the case."
  },
  {
    question: "What's included in the £899 setup fee?",
    answer: "Everything to get you online: custom design, copywriting, Google Maps setup, 2 full years of premium hosting & security updates. Technical maintenance is covered, so your site stays safe and fast. For text/photo changes, we give you an easy login to do it yourself."
  },
  {
    question: "When do I pay the £899 setup fee?",
    answer: "You only pay after you've seen and approved your website design. We'll create your custom design first, make any revisions you need, and you only pay once you're completely happy with it. No payment required upfront."
  },
  {
    question: "Can I make changes after the website is live?",
    answer: "Yes! You'll have full access to an easy-to-use editor where you can update text, prices, and add new project photos in seconds. If you need us to do it for you, we offer affordable support packages."
  },
  {
    question: "Do you provide the domain name and hosting?",
    answer: "Yes, 2 years of premium hosting and SSL security are included in your £899 setup fee. You can use your existing domain or we can help you register a new one (domain registration is around £10-15/year)."
  },
  {
    question: "What happens after 2 years?",
    answer: "After 2 years, you can keep your site running for just £99/year (covers hosting, SSL, and support). Or, if you prefer, you can take full ownership and host it yourself—we'll help you transfer everything. No long-term contracts, your choice."
  },
  {
    question: "Will my website work on mobile phones?",
    answer: "Yes! Every website we build is fully responsive and optimized for mobile devices. We test on various phone and tablet sizes to ensure it looks perfect everywhere."
  },
  {
    question: "Do I get help with Google and local search?",
    answer: "Yes, basic local SEO is included. We'll set up your website to be found by local customers and provide guidance on Google My Business optimization."
  },
  {
    question: "What if I'm not happy with the design?",
    answer: "We offer unlimited revisions during the design phase until you're completely satisfied. You only pay the £899 setup fee once you approve the final design. If we can't create something you love, you don't pay anything."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 bg-slate-50 dark:bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4 tracking-tight">
            Common Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about the process.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-white dark:bg-card rounded-xl border border-slate-200 dark:border-white/10 px-2"
            >
              <AccordionTrigger className="px-4 py-5 text-left hover:no-underline text-foreground font-semibold text-lg">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-6 text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center mt-16 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl p-8">
          <h3 className="text-xl font-bold text-foreground mb-2">Still have questions?</h3>
          <p className="text-muted-foreground mb-6">
            We're happy to chat about your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:07808822974"
              className="inline-flex items-center justify-center px-6 py-3 bg-slate-100 dark:bg-white/10 text-foreground rounded-lg hover:bg-slate-200 transition-colors font-bold"
            >
              <Phone className="w-4 h-4 mr-2" />
              07808 822974
            </a>
            <a 
              href="https://wa.me/447808822974"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-[#25D366] text-white rounded-lg hover:bg-[#20bd5a] transition-colors font-bold"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp Chat
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;