import React from "react";
import { cn } from "@/lib/utils";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
const ProductCardNi = ({ className, productData }) => {
  return (
    <div
      className={cn(
        "flex items-start [&:last-child]:border-b-transparent border-b pb-[6px] border-solid border-b-[#eae4e8] ",
        className
      )}
    >
      <a href="" className="w-[100px] overflow-hidden flex-none block p-[10px]">
        <div className="w-full pb-[100%] relative ">
          <div className="absolute inset-0">
            <LazyLoadImage
              src="https://product.hstatic.net/200000796751/product/393351201_658816639672803_6098816195754972438_n-2_2e6440fe58084d709f33859eb96bbfbc_small.jpg"
              effect="blur"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </a>
      <div className="flex-auto p-[10px]">
        <div className="flex items-center w-full">
          <a
            href="/"
            className="flex-auto w-0 text-[14px] line-clamp-2 mb-[5px]"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            aut ipsam dicta. Vero provident deserunt voluptatem tempore, sequi
            commodi cumque.
          </a>
        </div>
        <div className="">
          <span className=" text-[13px] price  font-bold text-redni">
            291.000đ
          </span>
          <span className=" text-[13px] price-delete ml-[10px] text-[#878c8f] line-through font-light relative">
            717.000đ
          </span>
          <span className="text-redni border-solid border border-[#f0e8ee] rounded-[3px] px-[4px] py-[1px] text-[10px] font-semibold text-center bg-[#fbf1f1] ml-[10px]">
            -30%
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCardNi;
