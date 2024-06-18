import React from "react";
import { Item, NextButton, PrevButton, DiscoveryAllBtn } from ".";
const SectionItem = ({ title, data }) => {
  return (
    <div className=" pt-[30px] pb-[10px] ">
      <div className="wrap_container top_sale">
        <div className="text-center mt-[13px]">
          <span className="uppercase text-[rgba(0,0,0,.85)] text-[26px] font-bold leading-[36px] ">
            {title}
          </span>
        </div>
        <div className=" pt-[20px]">
          <div className="relative">
            <div className="overflow-x-scroll no-scrollbar ">
              <Item width={260} />
            </div>
            <NextButton />
            <PrevButton />
          </div>
        </div>
        <DiscoveryAllBtn />
      </div>
    </div>
  );
};

export default SectionItem;
