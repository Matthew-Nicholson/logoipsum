import React from "react";
import "./FeatureCard.scss";
import Button from "../button/Button";
import { FeatureCardProps } from "./FeatureCard.types";

const FeatureCard = ({
  className,
  title,
  description,
  image,
}: FeatureCardProps) => {
  return (
    <article className={`ft-card ${className || ""}`}>
      {image && <img className="ft-card__img" src={image} alt={title} />}
      <h4 className="h4">{title}</h4>
      {description && <p className="ft-card__desc">{description}</p>}
    </article>
  );
};

export default FeatureCard;
