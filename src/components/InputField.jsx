import React from "react";

const InputField = ({ type, placeholder }) => {
  return (
    <input
      className="px-2 py-3 rounded-md text-black"
      type={type}
      placeholder={placeholder}
    />
  );
};

export default InputField;
