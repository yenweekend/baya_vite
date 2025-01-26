import React from "react";
import { cn } from "@/lib/utils";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
const CollectionCard = ({ className, collectionData }) => {
  return (
    <div className={cn("w-full  relative  ", className)}>
      <a
        className="w-full overflow-hidden rounded-t-[6px] block"
        href="/collections/"
      >
        <LazyLoadImage
          src="https://theme.hstatic.net/200000796751/1001266995/14/categorybanner_3_img.jpg?v=82"
          effect="opacity"
          className="hover:scale-110 transition-all ease-linear duration-300 cursor-pointer"
        />
      </a>
      <div className="py-[10px] px-5 absolute bottom-0 right-0 left-0 flex flex-col items-center">
        <a
          href="/collections/"
          className="cursor-pointer text-redichi font-bold text-[16px] text-center"
        >
          Phòng ăn và bếp
        </a>
        <a
          href="/collections/"
          className="text-vendor text-[13px] cursor-pointer hover:text-redichi transition-all ease-linear duration-150"
        >
          Xem ngay
        </a>
      </div>
    </div>
  );
};

export default CollectionCard;
