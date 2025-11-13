// Case studies for testimonials and portfolio

export interface CaseStudy {
  name: string;
  trade: string;
  location: string;
  before: string;
  after: string;
  result: string;
  timeframe: string;
  testimonial: string;
  rating: number;
  image?: string;
  highlights: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    name: 'Mike Thompson',
    trade: 'Plumber',
    location: 'Manchester',
    before: 'No online presence, relied on word of mouth',
    after: 'Professional website ranking on Google',
    result: '60% increase in emergency calls',
    timeframe: '3 weeks',
    testimonial: 'Within a week of the site going live, I had 3 new emergency callouts. The phone hasn\'t stopped ringing since. Best investment I\'ve made for my business.',
    rating: 5,
    highlights: [
      'Ranked #1 for "emergency plumber Manchester"',
      'Online booking form receives 5+ enquiries daily',
      'Average job value increased by 40%',
    ],
  },
  {
    name: 'Dave Clarke',
    trade: 'Builder',
    location: 'London',
    before: 'Basic Facebook page, no website',
    after: 'Professional portfolio showcasing £50k+ projects',
    result: 'Won £50k extension project',
    timeframe: '1 month',
    testimonial: 'The website landed me a £50k extension project within the first month. The professional look gives customers confidence in my work.',
    rating: 5,
    highlights: [
      'Won 3 major projects in first month',
      'Portfolio section showcases 20+ completed projects',
      'Quote conversion rate increased to 35%',
    ],
  },
];

export const getCaseStudiesByTrade = (trade?: string): CaseStudy[] => {
  if (trade) {
    return caseStudies.filter(cs => cs.trade.toLowerCase() === trade.toLowerCase());
  }
  return caseStudies;
};

