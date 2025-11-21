'use client';

import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { createClient } from "@supabase/supabase-js";
import { ArrowRight, MessageCircle, Phone, Send, Mail, CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { trackFormSubmit, trackWhatsAppClick, trackEmailClick } from "@/lib/utils/tracking";
import { sendNotifications } from "@/lib/services/notifications";

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
      
      // Track conversion
      trackFormSubmit(data.trade);
      
      // Send notifications
      await sendNotifications({
        name: data.name,
        email: data.email,
        trade: data.trade,
        message: data.message,
        createdAt: new Date().toISOString(),
      });
      
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
      <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/80 to-accent/90"></div>
      
      {/* Decorative Blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full overflow-hidden pointer-events-none">
         <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-accent/20 rounded-full blur-3xl" />
         <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            
            {/* Left Column: Content & Contact Options */}
            <div className="text-white space-y-8">
                <div>
                    <span className="inline-block py-1 px-3 rounded-full bg-accent/20 text-accent border border-accent/20 text-xs font-bold uppercase tracking-widest mb-4">
                        Start Your Project
                    </span>
                    <h2 className="text-4xl md:text-5xl font-black leading-tight mb-6">
                        Ready to Dominate <br /> Your Local Area?
                    </h2>
                    <p className="text-lg text-white/80 leading-relaxed max-w-md">
                        Join 150+ tradespeople who are getting more high-value leads with a Pro Website Co site. No generic templates, just results.
                    </p>
                </div>

                <div className="space-y-4">
                    <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                        <div className="bg-green-500/20 p-3 rounded-lg">
                            <MessageCircle className="w-6 h-6 text-green-400" />
                        </div>
                        <div>
                            <h3 className="font-bold text-lg">WhatsApp Us</h3>
                            <p className="text-sm text-white/60">Fastest response time</p>
                        </div>
                        <a
                            href="https://wa.me/447808822974?text=Hi, I'd like to get a website for my trade business"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-auto text-sm font-bold text-green-400 hover:text-green-300 flex items-center gap-1"
                            onClick={() => trackWhatsAppClick()}
                        >
                            Chat Now <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>

                    <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                         <div className="bg-blue-500/20 p-3 rounded-lg">
                            <Mail className="w-6 h-6 text-blue-400" />
                        </div>
                        <div>
                            <h3 className="font-bold text-lg">Email Us</h3>
                            <p className="text-sm text-white/60">Send us your details</p>
                        </div>
                        <a
                            href="mailto:hello@prowebsiteco.com?subject=Website Inquiry"
                            className="ml-auto text-sm font-bold text-blue-400 hover:text-blue-300 flex items-center gap-1"
                            onClick={() => trackEmailClick()}
                        >
                            Email Now <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/10">
                    <div className="flex items-center gap-2 text-sm font-medium text-white/80">
                        <CheckCircle2 className="w-5 h-5 text-accent" />
                        <span>Pay only after you approve your design</span>
                    </div>
                </div>
            </div>

            {/* Right Column: The Form */}
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 lg:p-10 border border-white/20 shadow-2xl relative overflow-hidden">
                 {/* Glass Shine */}
                 <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />

                 <div className="relative z-10">
                    <div className="mb-8">
                        <h3 className="text-2xl font-bold text-white mb-2">Get Your Free Quote</h3>
                        <p className="text-white/60 text-sm">
                            Fill in the details below. We'll review your needs and get back to you within 24 hours with a plan.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="space-y-2">
                            <Label htmlFor="name" className="text-white/90 font-medium">Name</Label>
                            <Input
                            id="name"
                            {...register("name")}
                            className="bg-white/90 border-transparent focus:border-accent focus:ring-accent text-black placeholder-gray-500 h-11"
                            placeholder="John Smith"
                            />
                            {errors.name && <p className="text-red-300 text-xs mt-1 font-medium">{errors.name.message}</p>}
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email" className="text-white/90 font-medium">Email</Label>
                            <Input
                            id="email"
                            type="email"
                            {...register("email")}
                            className="bg-white/90 border-transparent focus:border-accent focus:ring-accent text-black placeholder-gray-500 h-11"
                            placeholder="john@example.com"
                            />
                            {errors.email && <p className="text-red-300 text-xs mt-1 font-medium">{errors.email.message}</p>}
                        </div>
                        </div>
                        
                        <div className="space-y-2">
                        <Label htmlFor="trade" className="text-white/90 font-medium">Trade / Business Type</Label>
                        <Input
                            id="trade"
                            {...register("trade")}
                            className="bg-white/90 border-transparent focus:border-accent focus:ring-accent text-black placeholder-gray-500 h-11"
                            placeholder="e.g. Plumber, Electrician, Builder"
                        />
                        {errors.trade && <p className="text-red-300 text-xs mt-1 font-medium">{errors.trade.message}</p>}
                        </div>
                        
                        <div className="space-y-2">
                        <Label htmlFor="message" className="text-white/90 font-medium">How can we help?</Label>
                        <Textarea
                            id="message"
                            {...register("message")}
                            className="bg-white/90 border-transparent focus:border-accent focus:ring-accent text-black placeholder-gray-500 min-h-[120px] resize-none"
                            placeholder="Tell us a bit about what you need..."
                        />
                        {errors.message && <p className="text-red-300 text-xs mt-1 font-medium">{errors.message.message}</p>}
                        </div>
                        
                        <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-accent hover:bg-accent/90 text-accent-foreground h-14 text-lg font-bold shadow-lg shadow-accent/20 transition-all hover:scale-[1.02]"
                        >
                        {isSubmitting ? "Sending Request..." : "Get My Free Quote"}
                        <Send className="ml-2 w-5 h-5" />
                        </Button>
                        
                        <p className="text-center text-xs text-white/40">
                        Zero spam. Your data is secure.
                        </p>

                        {submitMessage && (
                        <div className={`p-4 rounded-xl mt-4 animate-in fade-in slide-in-from-bottom-2 ${submitMessage.includes('Thank you') ? 'bg-green-500/20 text-green-100 border border-green-500/30' : 'bg-red-500/20 text-red-100 border border-red-500/30'}`}>
                            <p className="text-center text-sm font-medium flex items-center justify-center gap-2">
                                {submitMessage.includes('Thank you') && <CheckCircle2 className="w-4 h-4" />}
                                {submitMessage}
                            </p>
                        </div>
                        )}
                    </form>
                 </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default CallToAction;