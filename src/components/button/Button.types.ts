export type ButtonProps = {
  children: any;
  className?: string;
  flex?: boolean;
  onClick?: () => void;
  path?: string;
  variant?: "primary" | "secondary" | "accent" | "neutral" | "base";
};
