import {
  exampleProjects,
  heroContent,
  howItWorksSteps,
  navigationLinks,
  pricingContent,
  pricingFeatures,
} from "@/lib/data/site-content";
import { exampleRepository } from "@/lib/repositories/exampleRepository";

export const contentService = {
  getNavigation() {
    return navigationLinks;
  },
  getHero() {
    return heroContent;
  },
  getHowItWorksSteps() {
    return howItWorksSteps;
  },
  getPricingFeatures() {
    return pricingFeatures;
  },
  getPricingContent() {
    return pricingContent;
  },
  async getExampleProjects() {
    return exampleRepository.list();
  },
  getAllContent() {
    return {
      hero: heroContent,
      navigation: navigationLinks,
      howItWorks: howItWorksSteps,
      pricing: {
        features: pricingFeatures,
        content: pricingContent,
      },
      examples: exampleProjects,
    };
  },
};

