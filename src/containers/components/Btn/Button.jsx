import React from "react";
import { Link } from "react-router-dom";
const Button = ({ children }) => {
  return (
    <span className="text-[14px] overflow-hidden btn-loadmore cursor-pointer">
      {children}
    </span>
  );
};

export default Button;
