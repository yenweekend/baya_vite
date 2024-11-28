import React, { useEffect } from "react";
import { Item, NextButton, PrevButton, DiscoveryAllBtn } from ".";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderCustom from "./SliderCustom";
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
          <SliderCustom data={data}/>
        </div>
        <DiscoveryAllBtn />
      </div>
    </div>
    
  );
};

export default SectionItem;
