import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { ShoppingCart, Eye } from "lucide-react";
import QuickView from "../Button/QuickView";
import formatPrice from "@/helpers/formatPrice";
import { Link } from "react-router-dom";

const ProductCard = ({ tagSale = null, productData }) => {
  return productData ? (
    <div
      className={` w-full shrink-0 bg-[#fff] shadow-card h-full flex flex-col`}
    >
      <div className="product-item-thumb w-full  relative cursor-pointer group/image">
        <div className=" w-full pb-[100%] relative p-[5px]">
          <div className="absolute inset-0 overflow-hidden">
            <div
              className={`flex items-center ${
                productData.thumbnailM
                  ? "group-hover/image:translate-x-[-100%]"
                  : ""
              } transition-all ease-linear duration-300`}
            >
              <div className={` w-full h-full  flex items-center shrink-0  `}>
                <div className="pb-[100%] relative w-full">
                  <div className="absolute inset-0">
                    <LazyLoadImage
                      src={productData?.thumbnail}
                      effect="blur"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              {productData?.thumbnailM && (
                <div className={` w-full h-full  flex items-center shrink-0  `}>
                  <div className="pb-[100%] relative w-full">
                    <div className="absolute inset-0">
                      <LazyLoadImage
                        src={productData?.thumbnailM}
                        effect="blur"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
            <a
              className="absolute inset-0 bg-transparent"
              href={productData.url}
            ></a>
          </div>
          <span className="sale-percent absolute w-10 rounded-sm px-[5px] bg-redni text-[#fff] top-[10px] left-[10px]">
            -5%
          </span>
        </div>
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  opacity-0 invisible scale-90 group-hover/image:opacity-[1] group-hover/image:visible group-hover/image:scale-100  rounded-full flex items-center justify-center  text-[#5d5d5d] transition-all ease-linear duration-150 btn-quickview max-768:hidden">
          <QuickView data={productData}>
            <div className="cursor-pointer text-inherit  flex items-center justify-center  xl:w-[34px] xl:h-[34px] md:w-7 md:h-7  ">
              <span className="">
                <Eye size={16} className="text-inherit" />
              </span>
            </div>
          </QuickView>
        </div>
      </div>
      <div className="px-[14px] pb-[10px] flex flex-col items-center justify-between flex-auto">
        <div className="">
          <div className="  text-vendor text-center text-[12px]">
            {productData?.Vendor?.title}
          </div>
          <div className="flex items-center ">
            <a
              href={productData.url}
              className="w-0 flex-auto line-clamp-2 md:text-[14px] text-blacknifont-medium text-center text-[13px]"
            >
              {productData.title}
            </a>
          </div>
          <div className="price flex items-center justify-center flex-wrap pb-[10px]">
            <span className="price md:text-[13px] text-[12px] font-bold text-redni">
              {formatPrice(productData.price)}
            </span>
            <span className="price-delete md:text-[13px] text-[12px] ml-[10px] text-[#4d6c7d] line-through font-light relative">
              {formatPrice(productData.price_original)}
            </span>
          </div>
        </div>
        {productData.single ? (
          <div className="cursor-pointer flex items-center justify-between gap-2 h-7 2xl:h-8 border border-solid border-transparent hover:border-[--shop-color-main] transition-all ease-linear duration-150 rounded-full 2xl:pl-[15px] ">
            <span className=" text-[12px] 2xl:text-[13px] font-bold uppercase flex-auto text-center">
              Thêm vào giỏ{" "}
            </span>
            <span className=" w-7 h-7 2xl:w-8 2xl:h-8 bg-primary  rounded-full flex items-center justify-center">
              <ShoppingCart size={16} strokeWidth={1.5} stroke="#fff" />
            </span>
          </div>
        ) : (
          <QuickView productData={productData}>
            <div className="cursor-pointer flex items-center justify-between gap-2 h-7 2xl:h-8 border border-solid border-transparent hover:border-[--shop-color-main] transition-all ease-linear duration-150 rounded-full 2xl:pl-[15px] ">
              <span className=" text-[12px] 2xl:text-[13px] font-bold uppercase flex-auto text-center">
                Thêm vào giỏ{" "}
              </span>
              <span className=" w-7 h-7 2xl:w-8 2xl:h-8 bg-primary  rounded-full flex items-center justify-center">
                <ShoppingCart size={16} strokeWidth={1.5} stroke="#fff" />
              </span>
            </div>
          </QuickView>
        )}
      </div>
    </div>
  ) : (
    "On Going"
  );
};

export default ProductCard;
