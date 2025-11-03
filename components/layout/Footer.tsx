import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";

const logo = "/assets/prowebsitecologo.svg";

const Footer = () => {
  return (
    <footer className="bg-slate-50 text-foreground py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <Image
                src={logo}
                alt="Pro Website Co"
                width={360}
                height={180}
                className="h-60 w-auto"
              />
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Custom-designed websites for UK tradespeople. We create unique, 
              professional sites that win you more work.
            </p>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-accent" />
                <span>+44 203 996 7776</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-accent" />
                <span>hello@prowebsiteco.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-3 text-accent" />
                <span>London, UK</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>Custom Website Design</li>
              <li>Mobile Optimisation</li>
              <li>SEO & Local Search</li>
              <li>Website Hosting</li>
              <li>QR Code Generation</li>
              <li>Priority Support</li>
            </ul>
          </div>

          {/* Trades We Serve */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Trades We Serve</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>Plumbers</li>
              <li>Electricians</li>
              <li>Builders</li>
              <li>Gardeners</li>
              <li>Decorators</li>
              <li>Carpenters</li>
              <li>And many more...</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-muted-foreground text-sm mb-4 md:mb-0">
            © 2024 Pro Website Co. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-accent transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;