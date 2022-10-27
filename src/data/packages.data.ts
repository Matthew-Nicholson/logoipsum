import { CardProps } from "../components/card/Card.types";

const PACKAGES: CardProps[] = [
  {
    ctaText: "Get Started",
    title: "Free",
    features: ["1 Website", "5 GB Hosting", "Limited Support"],
    tag: "Starter",
  },
  {
    ctaText: "Get Started",
    title: "$29/month",
    features: ["10 Website", "15 GB Hosting", "Premium Support"],
    tag: "Premium",
    variant: "secondary",
  },
  {
    ctaText: "Get Started",
    title: "$49/month",
    features: ["Unlimited Website", "50 GB Hosting", "Premium Support"],
    tag: "Enterprise",
  },
];

export default PACKAGES;
