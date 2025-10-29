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
    answer: "Most websites are completed within 48 hours of receiving all your information and content. Complex projects might take up to 5 working days, but we'll let you know upfront if that's the case."
  },
  {
    question: "Can I make changes after the website is live?",
    answer: "Absolutely! Minor content updates (like phone numbers, prices, or adding new photos) are included in your monthly fee. Larger design changes can be quoted separately if needed."
  },
  {
    question: "Do you provide the domain name and hosting?",
    answer: "Yes, everything is included in your monthly fee - hosting, SSL certificate, security updates, and technical support. You can use your existing domain or we can help you register a new one."
  },
  {
    question: "What happens if I want to cancel?",
    answer: "You can cancel anytime with 30 days' notice. There are no long-term contracts or cancellation fees. Your website will remain live during the notice period."
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
    answer: "We offer unlimited revisions during the design phase until you're completely satisfied. You only pay the setup fee once you approve the final design."
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
              href="tel:0800-123-4567"
              className="inline-flex items-center justify-center px-6 py-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors font-medium min-h-[48px]"
            >
              Call us: 0800 123 4567
            </a>
            <a 
              href="https://wa.me/447800123456?text=Hi, I have a question about getting a website for my trade business"
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