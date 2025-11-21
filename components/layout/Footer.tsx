import Image from "next/image";
import { Mail, MapPin, Phone, Instagram, Linkedin, Facebook } from "lucide-react";

const logo = "/assets/prowebsitecologo.svg";

const Footer = () => {
  return (
    <footer className="bg-neutral-950 text-white py-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-24">
          {/* Logo and Company Info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-center">
              <Image
                src={logo}
                alt="Pro Website Co"
                width={240}
                height={120}
                className="h-12 w-auto brightness-0 invert" // Invert to make it white if it's black
              />
            </div>
            <p className="text-neutral-400 max-w-md text-lg leading-relaxed">
              We build high-performance, custom-designed websites exclusively for UK tradespeople. 
              No templates, no shortcuts—just quality digital craftsmanship that helps you win more work.
            </p>
            <div className="space-y-4">
              <a href="tel:07808822974" className="flex items-center text-neutral-300 hover:text-white transition-colors">
                <Phone className="w-5 h-5 mr-4 text-primary" />
                <span className="font-medium">07808 822974</span>
              </a>
              <a href="mailto:hello@prowebsiteco.com" className="flex items-center text-neutral-300 hover:text-white transition-colors">
                <Mail className="w-5 h-5 mr-4 text-primary" />
                <span className="font-medium">hello@prowebsiteco.com</span>
              </a>
              <div className="flex items-center text-neutral-300">
                <MapPin className="w-5 h-5 mr-4 text-primary" />
                <span className="font-medium">London, United Kingdom</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white tracking-wide uppercase">Services</h3>
            <ul className="space-y-4 text-neutral-400">
              <li><a href="#" className="hover:text-primary transition-colors">Custom Website Design</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Lead Generation</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">SEO & Local Search</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Google Business Profile</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Logo & Branding</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Hosting & Support</a></li>
            </ul>
          </div>

          {/* Trades We Serve */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white tracking-wide uppercase">Trades</h3>
            <ul className="space-y-4 text-neutral-400">
              <li><a href="#" className="hover:text-primary transition-colors">Plumbers & Heating</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Electricians</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Builders & Construction</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Landscapers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Roofers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Carpenters</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-neutral-500 text-sm">
            © {new Date().getFullYear()} Pro Website Co. All rights reserved.
          </div>
          <div className="flex space-x-8 text-sm text-neutral-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
          <div className="flex space-x-4">
             {/* Social placeholders */}
             <a href="#" className="bg-white/5 p-2 rounded-full hover:bg-primary hover:text-white transition-colors text-neutral-400">
                <Instagram className="w-5 h-5" />
             </a>
             <a href="#" className="bg-white/5 p-2 rounded-full hover:bg-primary hover:text-white transition-colors text-neutral-400">
                <Linkedin className="w-5 h-5" />
             </a>
             <a href="#" className="bg-white/5 p-2 rounded-full hover:bg-primary hover:text-white transition-colors text-neutral-400">
                <Facebook className="w-5 h-5" />
             </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;