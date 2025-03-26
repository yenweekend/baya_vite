import React from "react";

const ThreeDotsLoading = () => {
  return (
    <div className="flex items-center">
      <div className="flex gap-1 justify-center items-center   dark:invert">
        <div className="h-2 w-2 bg-[#d8d8d8] rounded-full animate-bounce [animation-delay:-0.3s]"></div>
        <div className="h-2 w-2 bg-[#d8d8d8] rounded-full animate-bounce [animation-delay:-0.15s]"></div>
        <div className="h-2 w-2 bg-[#d8d8d8] rounded-full animate-bounce"></div>
      </div>
    </div>
  );
};

export default ThreeDotsLoading;
