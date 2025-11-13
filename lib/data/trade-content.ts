// Trade-specific content for landing pages

export interface TradeContent {
  name: string;
  displayName: string;
  heroHeading: string;
  heroSubheading: string;
  valuePoints: string[];
  testimonials: Array<{
    name: string;
    location: string;
    text: string;
    rating: number;
    result: string;
  }>;
  seoDescription: string;
}

export const tradeContentMap: Record<string, TradeContent> = {
  plumber: {
    name: 'plumber',
    displayName: 'Plumber',
    heroHeading: 'Professional Websites for Plumbers',
    heroSubheading: 'Get more emergency callouts and regular plumbing jobs with a custom website that showcases your expertise and builds trust with customers.',
    valuePoints: [
      'Emergency callout booking forms',
      'Service area maps for local SEO',
      'Before/after gallery of your work',
      'Customer reviews and testimonials',
      '24/7 online enquiry system',
      'Mobile-optimised for on-the-go customers',
    ],
    testimonials: [
      {
        name: 'Mike Thompson',
        location: 'Manchester',
        text: 'Within a week of the site going live, I had 3 new emergency callouts. The phone hasn\'t stopped ringing since. Best investment I\'ve made for my business.',
        rating: 5,
        result: '60% increase in emergency calls',
      },
      {
        name: 'James Wilson',
        location: 'Birmingham',
        text: 'My website now ranks on Google for "emergency plumber near me". I\'m getting quality leads every day without spending on ads.',
        rating: 5,
        result: 'Top 3 Google ranking',
      },
    ],
    seoDescription: 'Custom website design for UK plumbers. Get more emergency callouts and plumbing jobs with a professional online presence.',
  },
  electrician: {
    name: 'electrician',
    displayName: 'Electrician',
    heroHeading: 'Custom Websites for Electricians',
    heroSubheading: 'Stand out from competitors with a professional website that highlights your certifications, showcases your work, and converts visitors into customers.',
    valuePoints: [
      'Certification badges and credentials',
      'Service type filters (domestic/commercial)',
      'Safety-focused messaging',
      'Project portfolio gallery',
      'Part P certification display',
      'Quote request forms',
    ],
    testimonials: [
      {
        name: 'Sarah Jenkins',
        location: 'Bristol',
        text: 'Customers can see my qualifications and past work before they even call. It builds so much trust and I\'m getting better quality jobs.',
        rating: 5,
        result: 'Premium quotes up 80%',
      },
      {
        name: 'David Roberts',
        location: 'Leeds',
        text: 'The website makes me look like a serious professional, not just another electrician. I\'ve won several commercial contracts because of it.',
        rating: 5,
        result: 'Won 3 commercial contracts',
      },
    ],
    seoDescription: 'Professional website design for UK electricians. Showcase certifications and win more commercial and domestic electrical work.',
  },
  builder: {
    name: 'builder',
    displayName: 'Builder',
    heroHeading: 'Powerhouse Websites for Builders',
    heroSubheading: 'Win bigger projects and premium clients with a custom website that showcases your craftsmanship, project portfolio, and professional reputation.',
    valuePoints: [
      'Project portfolio with before/after photos',
      'Service pages (extensions, renovations, etc.)',
      'Client testimonials and case studies',
      'Quote calculator integration',
      'Project timeline showcases',
      'Trust badges and insurance info',
    ],
    testimonials: [
      {
        name: 'Dave Clarke',
        location: 'London',
        text: 'The website landed me a £50k extension project within the first month. The professional look gives customers confidence in my work.',
        rating: 5,
        result: 'Won £50k project',
      },
      {
        name: 'Mark Stevens',
        location: 'Sheffield',
        text: 'I can now show potential clients exactly what I\'ve built. The portfolio section has been a game-changer for winning quotes.',
        rating: 5,
        result: 'Quote win rate up 65%',
      },
    ],
    seoDescription: 'Custom website design for UK builders. Showcase your projects and win bigger construction and renovation contracts.',
  },
};

export const getTradeContent = (trade: string): TradeContent | null => {
  return tradeContentMap[trade.toLowerCase()] || null;
};

