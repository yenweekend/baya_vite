import React, { useRef, useState } from "react";
import icons from "@/utils/icons";
import useClickAway from "@/hooks/useClickAway";
const Dropdown = ({
  icon,
  text,
  top = 50,
  right = 0,
  children,
  badge = null,
}) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const triggerRef = useRef(null);
  const dropdownRef = useRef(null);
  useClickAway(triggerRef, dropdownRef, () => {
    setShowDropdown(false);
  });
  return (
    <div className="relative">
      <div
        className="flex items-center gap-2  cursor-pointer relative"
        ref={triggerRef}
        onClick={(e) => {
          e.stopPropagation();
          setShowDropdown((state) => !state);
        }}
      >
        {icon}
        <span className="text-[#fff] text-[14px] whitespace-nowrap">
          {text}
        </span>
        {badge && (
          <div className="badge absolute w-[20px] h-[20px] bg-[#ff0000] rounded-full flex items-center justify-center text-[#fff] top-[-12px] left-[9px]">
            {badge}
          </div>
        )}
      </div>
      <div
        className={`absolute  z-[60] w-[420px] h-[500px] bg-[#fff] transition-all ease-linear duration-200 ${
          showDropdown ? "opacity-[1] visible" : " opacity-0 invisible"
        }`}
        ref={dropdownRef}
        style={{
          top: `${top}px`,
          right: `${right}px`,
        }}
      >
        {children}
        <div
          className="absolute  z-[61] "
          style={{
            bottom: "98%",
            right: `${right + 20}px`,
          }}
        >
          <icons.uparrow className="text-[#fff] text-[25px]"></icons.uparrow>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
