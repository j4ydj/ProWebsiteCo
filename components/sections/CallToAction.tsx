'use client';

import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { createClient } from "@supabase/supabase-js";
import { ArrowRight, MessageCircle, Phone, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const supabaseUrl = "https://nveahhqvqrzuosladhgl.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im52ZWFoaHF2cXJ6dW9zbGFkaGdsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI5NzY5NTUsImV4cCI6MjA3ODU1Mjk1NX0.3HSLYKjpJMkXeLaC35e42uq6DiPpbvo9suq0uReY_yI";
const supabase = createClient(supabaseUrl, supabaseKey);

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  trade: z.string().min(2, "Please specify your trade"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

const CallToAction = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<string | null>(null);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitMessage(null);
    try {
      const { error } = await supabase.from('leads').insert([data]);
      if (error) throw error;
      setSubmitMessage("Thank you! We'll get back to you within 24 hours.");
      reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitMessage("Something went wrong. Please try again or contact us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-accent/80"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
          Ready to Win More Work with Your Custom Website?
        </h2>
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
          Join 150+ tradespeople across the UK who've transformed their businesses 
          with professional, custom-designed websites.
        </p>
        

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <MessageCircle className="w-8 h-8 text-accent mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">WhatsApp</h3>
            <p className="text-white/80 text-sm">Quick message us</p>
            <a
              href="https://wa.me/447808822974?text=Hi, I'd like to get a website for my trade business"
              className="text-accent font-medium mt-2 inline-block hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Start chat
            </a>
          </div>

          <a href="#contact" className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-colors">
            <ArrowRight className="w-8 h-8 text-accent mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">Contact Us</h3>
            <p className="text-white/80 text-sm">Free consultation</p>
            <p className="text-accent font-medium mt-2">No commitment</p>
          </a>
        </div>

        <div className="mt-16 max-w-2xl mx-auto">
          <h3 className="text-2xl font-semibold text-white mb-6">Or Get in Touch Directly</h3>
          <form onSubmit={handleSubmit(onSubmit)} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name" className="text-white">Name *</Label>
                <Input
                  id="name"
                  {...register("name")}
                  className="bg-white border-gray-300 text-black placeholder-gray-500"
                  placeholder="Your name"
                />
                {errors.name && <p className="text-red-300 text-sm mt-1">{errors.name.message}</p>}
              </div>
              <div>
                <Label htmlFor="email" className="text-white">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  {...register("email")}
                  className="bg-white border-gray-300 text-black placeholder-gray-500"
                  placeholder="your.email@example.com"
                />
                {errors.email && <p className="text-red-300 text-sm mt-1">{errors.email.message}</p>}
              </div>
            </div>
            <div>
              <Label htmlFor="trade" className="text-white">Trade/Service *</Label>
              <Input
                id="trade"
                {...register("trade")}
                className="bg-white border-gray-300 text-black placeholder-gray-500"
                placeholder="e.g. Plumber, Electrician, Builder"
              />
              {errors.trade && <p className="text-red-300 text-sm mt-1">{errors.trade.message}</p>}
            </div>
            <div>
              <Label htmlFor="message" className="text-white">Message *</Label>
              <Textarea
                id="message"
                {...register("message")}
                className="bg-white border-gray-300 text-black placeholder-gray-500 min-h-[100px]"
                placeholder="Tell us about your business and what you need..."
              />
              {errors.message && <p className="text-red-300 text-sm mt-1">{errors.message.message}</p>}
            </div>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
              <Send className="ml-2 w-4 h-4" />
            </Button>
            {submitMessage && (
              <p className={`text-center text-sm mt-4 ${submitMessage.includes('Thank you') ? 'text-green-300' : 'text-red-300'}`}>
                {submitMessage}
              </p>
            )}
          </form>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm">
            💳 <span className="ml-2">Pay only after you approve your design</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;