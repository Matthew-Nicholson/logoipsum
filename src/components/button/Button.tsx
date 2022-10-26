import React from "react";
import { ButtonProps } from "./Button.types";
import "./Button.scss";

const Button = ({
  className,
  children,
  flex,
  onClick,
  variant = "primary",
}: ButtonProps) => {
  return (
    <button
      className={`btn ${variant} ${flex ? "flex" : ""} ${className || ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
