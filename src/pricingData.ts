export interface PricingPlan {
  id: number;
  title: string;
  subtitle?: string;
  price: number;
  billingCycle: "month" | "year";
  highlight: boolean;
  features: string[];
}

export const pricingPlans: PricingPlan[] = [
  {
    id: 1,
    title: "Basic",
    subtitle: "Great for getting started",
    price: 9,
    billingCycle: "month",
    highlight: false,
    features: [
      "1 user",
      "2 GB storage",
      "Email support",
      "Monthly updates",
    ],
  },
  {
    id: 2,
    title: "Pro",
    subtitle: "Most popular",
    price: 19,
    billingCycle: "month",
    highlight: true,      // highlighted plan
    features: [
      "5 users",
      "50 GB storage",
      "24/7 priority support",
      "Daily backups",
      "API integrations",
    ],
  },
  {
    id: 3,
    title: "Enterprise",
    subtitle: "Scale without limits",
    price: 49,
    billingCycle: "month",
    highlight: false,
    features: [
      "Unlimited users",
      "1 TB storage",
      "Dedicated account manager",
      "99.9 % SLA & phone support",
      "Advanced integrations",
      "Single Sign-On (SSO)",
    ],
  },
];
