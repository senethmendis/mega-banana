import React from "react";

const InputField = ({ type, placeholder }) => {
  return (
    <input
      className="px-2 py-3 rounded-md font-thin text-lg outline-none text-white border border-custom-green bg-transparent"
      type={type}
    />
  );
};

export default InputField;
