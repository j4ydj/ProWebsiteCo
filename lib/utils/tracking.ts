// Analytics tracking utilities

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    fbq?: (...args: any[]) => void;
  }
}

export const trackEvent = (
  eventName: string,
  eventParams?: Record<string, any>
) => {
  // Google Analytics 4
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, eventParams);
  }

  // Meta Pixel
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', eventName, eventParams);
  }
};

export const trackConversion = (conversionType: string, value?: number) => {
  trackEvent(conversionType, {
    value: value || 0,
    currency: 'GBP',
  });
};

// Specific conversion tracking functions
export const trackFormSubmit = (trade?: string) => {
  trackConversion('form_submit', 0);
  trackEvent('lead_form_submitted', { trade });
};

export const trackWhatsAppClick = () => {
  trackConversion('whatsapp_click', 0);
  trackEvent('whatsapp_clicked');
};

export const trackEmailClick = () => {
  trackConversion('email_click', 0);
  trackEvent('email_clicked');
};

export const trackPaymentLinkClick = () => {
  trackConversion('payment_link_click', 799);
  trackEvent('payment_link_clicked', { value: 799, currency: 'GBP' });
};

export const trackCTAClick = (location: string) => {
  trackEvent('cta_clicked', { location });
};

export const trackPhoneClick = () => {
  trackConversion('phone_click', 0);
  trackEvent('phone_clicked');
};

