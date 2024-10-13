import React from "react";
import { Children } from "react";

export const OptionButton = ({ children, onClick, className }) => {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};
