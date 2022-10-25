import React from "react";
import "./Hero.scss";
import { ReactComponent as Icon } from "../../assets/arrow-down.svg";

const Hero = () => {
  return (
    <article className="hero">
      <div className="hero__content">
        <h1 className="h1 hero__title">Grow your subscription business</h1>
        <p className="hero__desc">
          Outcome-centered products that reduce churn, optimize pricing, and
          grow your subscription business end-to-end.
        </p>
        <div className="hero__btn-group">
          <button>Get Started</button>
          <span className="download-icon">
            <Icon />
          </span>
        </div>
      </div>

      <div className="hero__img-container">
        <img className="hero__img" src="/assets/hero-3d.png" alt="Hero" />
      </div>
    </article>
  );
};

export default Hero;
