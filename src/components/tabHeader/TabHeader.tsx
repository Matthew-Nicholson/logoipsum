import React from "react";
import "./TabHeader.scss";
import { TabHeaderProps } from "./TabHeader.types";

// TODO: Add tab functionality

const TabHeader = ({ className, title }: TabHeaderProps) => {
  return (
    <div className={`tab-header ${className || ""}`}>
      {title && <h2 className="h2 tab-header__title">{title}</h2>}

      <div className="tabs">
        <button className="tab active-tab">Yearly</button>
        <button className="tab">Monthly</button>
      </div>
    </div>
  );
};

export default TabHeader;
