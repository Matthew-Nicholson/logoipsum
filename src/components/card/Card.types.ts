export type CardProps = {
  className?: string;
  ctaText?: string;
  features?: string[];
  flex?: boolean;
  onClick?: (event?: Event) => void;
  path?: string;
  tag?: string;
  title: string;
  variant?: "primary" | "secondary";
};
