import React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
const HoverEffectButton = ({ className, children }) => {
  return (
    <button
      className={cn(
        "text-[14px] overflow-hidden btn-hover-effect cursor-pointer  ",
        className
      )}
    >
      {children}
    </button>
  );
};

export default HoverEffectButton;
