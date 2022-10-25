import React from "react";
import "./LogoList.scss";
import { ReactComponent as Logo } from "../../assets/svgs/logoIpsum.svg";
import { ReactComponent as Logo2 } from "../../assets/svgs/logoIpsum-2.svg";
import { ReactComponent as Logo3 } from "../../assets/svgs/logoIpsum-3.svg";
import { ReactComponent as Logo4 } from "../../assets/svgs/logoIpsum-4.svg";
import { ReactComponent as Logo5 } from "../../assets/svgs/logoIpsum-5.svg";

const LogoList = () => {
  return (
    <article className="logo-list">
      <Logo />
      <Logo2 />
      <Logo3 />
      <Logo4 />
      <Logo5 />
    </article>
  );
};

export default LogoList;
