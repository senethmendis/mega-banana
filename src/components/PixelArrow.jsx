import React from "react";

const PixelArrow = ({ onClick }) => {
  return (
    <svg
      onClick={onClick}
      fill="#ffff33"
      width="40px"
      height="40px"
      viewBox="0 0 22 22"
      xmlns="http://www.w3.org/2000/svg"
      id="memory-arrow-left"
    >
      <path d="M5 12V10H6V9H7V8H8V7H9V6H11V8H10V9H9V10H18V12H9V13H10V14H11V16H9V15H8V14H7V13H6V12" />
    </svg>
  );
};

export default PixelArrow;
