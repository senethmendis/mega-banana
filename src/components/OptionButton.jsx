import React from "react";
import { Children } from "react";

export const OptionButton = ({ children, onClick, className }) => {
  return (
    <button type="button" onClick={onClick} className={className}>
      {children}
    </button>
  );
};
