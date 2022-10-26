export type ButtonProps = {
  className?: string;
  children: any;
  flex?: boolean;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "accent" | "neutral";
};
