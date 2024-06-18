import React from "react";
import icons from "../../utils/icons";
const NextButton = () => {
  return (
    <div
      className={`w-12 h-12 rounded-[50%] flex items-center justify-center cursor-pointer shadow-[rgb(184,193,202)_0px_0px_10px] right-[-15px] absolute top-[50%] translate-y-[-50%] bg-[white]`}
    >
      <div>
        <icons.next className="text-[20px] text-[#000]"></icons.next>
      </div>
    </div>
  );
};

export default NextButton;
