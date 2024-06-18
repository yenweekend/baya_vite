import React from "react";
import { poster_notifications } from "../../utils/scrape_data";
import { NextButton, PrevButton } from ".";
const Concessionary = () => {
  return (
    <div className=" pb-[10px] wrap_container ">
      <div className="relative">
        <div className="overflow-x-scroll no-scrollbar py-[20px]">
          <div className=" flex  items-center ml-[-15px]">
            {poster_notifications?.map((item) => (
              <div
                className="w-[calc((100%/3)-20px)] ml-[20px] shrink-0 rounded-[6px] overflow-hidden cursor-pointer hover:translate-y-[-4px] transition duration-300 ease-linear"
                key={item}
              >
                <img src={item} className="w-full h-full object-cover"></img>
              </div>
            ))}
          </div>
        </div>
        <NextButton />
        <PrevButton />
      </div>
    </div>
  );
};

export default Concessionary;
