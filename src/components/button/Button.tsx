import React from "react";
import { ButtonProps } from "./Button.types";
import "./Button.scss";

const Button = ({
  children,
  className,
  flex,
  onClick,
  path,
  variant = "primary",
}: ButtonProps) => {
  const Element = path ? "a" : "button";
  const pathProps = path ? { href: path } : {};

  return (
    <Element
      className={`btn btn--${variant} ${flex ? "btn--flex" : ""} ${
        className || ""
      }`}
      onClick={onClick}
      {...pathProps}
    >
      {children}
    </Element>
  );
};

export default Button;
