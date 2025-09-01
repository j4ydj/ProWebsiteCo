import { Phone, Mail, MapPin } from "lucide-react";
const proWebsiteCoLogo = "/lovable-uploads/f9d0b234-3c59-43c4-9a61-51088314195e.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <img 
                src={proWebsiteCoLogo} 
                alt="Pro Website Co" 
                className="h-8 mr-3"
              />
            </div>
            <p className="text-background/80 mb-6 max-w-md">
              Custom-designed websites for UK tradespeople. We create unique, 
              professional sites that win you more work.
            </p>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-accent" />
                <span>0800 123 4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-accent" />
                <span>hello@prowebsiteco.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-3 text-accent" />
                <span>Manchester, UK</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-background/80">
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
            <ul className="space-y-2 text-background/80">
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

        <div className="border-t border-background/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-background/60 text-sm mb-4 md:mb-0">
            © 2024 Pro Website Co. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm text-background/80">
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