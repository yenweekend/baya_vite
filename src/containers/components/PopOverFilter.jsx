import React from "react";

const PopOverFilter = () => {
  return (
    <div className="absolute py-1 rounded-[8px]  shadow-[rgba(17,17,26,0.1)_0px_0px_16px] top-[120%] right-0">
      <div className="whitespace-nowrap text-[16px] font-semibold hover:bg-[#f3f3f3] px-3 py-1">
        Giá tăng dần
      </div>
      <div className="whitespace-nowrap text-[16px] font-semibold hover:bg-[#f3f3f3] px-3 py-1">
        Giá giảm dần
      </div>
      <div className="whitespace-nowrap text-[16px] font-semibold hover:bg-[#f3f3f3] px-3 py-1">
        % giảm
      </div>
    </div>
  );
};

export default PopOverFilter;
