import React from "react";
import "./Card.scss";
import Button from "../button/Button";
import { CardProps } from "./Card.types";

const Card = ({
  className,
  ctaText,
  features,
  flex,
  onClick,
  path,
  tag,
  title,
  variant = "primary",
}: CardProps) => {
  const splitTitle = title.split("/");
  title = splitTitle[0];

  const btnVariants = {
    primary: "base" as "base",
    secondary: "accent" as "accent",
  };

  return (
    <article
      className={`card card--${variant} ${flex ? "card--flex" : ""} ${
        className || ""
      }`}
    >
      {tag && <span className="card__tag">{tag}</span>}

      {title && (
        <h3 className="card__title">
          {title}
          {splitTitle.length > 1 ? <span>/{splitTitle[1]}</span> : ""}
        </h3>
      )}

      {features && (
        <ul className="card__features">
          {features.map((feature, idx) => (
            <li key={`ft-${idx}`} className="card__feature">
              {feature}
            </li>
          ))}
        </ul>
      )}

      {ctaText && (
        <Button
          className="card__button"
          onClick={onClick}
          path={path}
          variant={btnVariants[variant]}
          flex
        >
          {ctaText}
        </Button>
      )}
    </article>
  );
};

export default Card;
