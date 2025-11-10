import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
    answer: "Everything you need: custom design tailored to your trade, 2 full years of premium hosting, SSL security, unlimited minor content updates, local SEO setup, free QR code for your van, and priority support. After 2 years, it's just £99/year to keep everything running."
  },
  {
    question: "When do I pay the £899 setup fee?",
    answer: "You only pay after you've seen and approved your website design. We'll create your custom design first, make any revisions you need, and you only pay once you're completely happy with it. No payment required upfront."
  },
  {
    question: "Can I make changes after the website is live?",
    answer: "Absolutely! Minor content updates (like phone numbers, prices, or adding new photos) are included for the full 2 years. Larger design changes or new pages can be added on-demand—we'll quote these separately if needed."
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
    <section id="faq" className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center">
            <Image
              src="/assets/prowebsitecologo.svg"
              alt="Pro Website Co"
              width={500}
              height={250}
              className="h-auto w-auto max-w-xs"
            />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about getting your professional trade website
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-card rounded-lg border border-border shadow-card hover:shadow-elegant transition-all duration-300"
            >
              <AccordionTrigger className="px-6 py-4 text-left hover:no-underline text-card-foreground font-semibold">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Still have questions?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:03300436621"
              className="inline-flex items-center justify-center px-6 py-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors font-medium min-h-[48px]"
            >
              Call us: 0330 043 6621
            </a>
            <a 
              href="https://wa.me/447808822974?text=Hi, I have a question about getting a website for my trade business"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium min-h-[48px]"
            >
              WhatsApp Chat
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;