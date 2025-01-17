import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import icons from "../../../utils/icons";
import { card } from "../../../utils/scrape_data";
import axios from "axios";
import { apiUrl } from "../../../utils/constants";
import { useParams } from "react-router-dom";
import { setToastify } from "../../../redux-toolkit/slice/homeSlice";
import { useDispatch } from "react-redux";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { ProductItem } from "@/containers/components";
const brandDetail = {};
const BrandDetail = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [hidden, setHidden] = useState(false);
  const desc_ref = useRef();
  // const popover_filter_ref = useRef();
  // const btn_ref = useRef();
  // const clickOutSide = (e) => {
  //   if (
  //     !popover_filter_ref.current.classList.contains("hidden") &&
  //     !popover_filter_ref.current.contains(e.target) &&
  //     !btn_ref.current.contains(e.target)
  //   ) {
  //     popover_filter_ref.current.classList.add("hidden");
  //   }
  // };
  // useEffect(() => {
  //   document.addEventListener("mousedown", clickOutSide);
  //   return () => {
  //     document.removeEventListener("mousedown", clickOutSide);
  //   };
  // }, []);
  // useEffect(() => {
  //   (async() => {
  //     const res = await axios.get(" http://localhost:3001/api/getbrand");
  //     if(res?.data?.success)
  //       {
  //         // remove class hidden from default description of beautybox.com.vn
  //         const desc = res.data.message.description.replace('hidden', "");
  //         const newDiv = document.createElement('div');
  //         newDiv.innerHTML = desc;
  //         const btn = newDiv.querySelector("button");
  //         if(btn)
  //           {
  //             btn.remove();
  //           }
  //         desc_ref.current.innerHTML = newDiv.innerHTML;
  //       }else
  //       {
  //         console.log('get brand failed');
  //       }
  //         // remove class hidden from default description of beautybox.com.vn

  //   })();
  // },[]);

  return (
    <BrandStyled className="pt-[150px]">
      <div className="">
        <div className="mt-[80px]">
          {brandDetail?.avatar ? (
            <div className="logo_brand relative flex items-center justify-center">
              <div className="brand_section w-[123px] h-[123px] overflow-hidden rounded-[15px]">
                <img
                  src={brandDetail?.avatar}
                  className="max-w-full block"
                ></img>
              </div>
            </div>
          ) : (
            ""
          )}

          <h1 className="text-[24px] font-bold leading-[35px] text-center mt-3">
            {brandDetail?.name}
          </h1>
          <div className="flex items-center justify-center gap-3">
            <div>70 sản phẩm</div>
            <div className="w-[1px] bg-[rgba(0,0,0,.06)] h-[18px] "></div>
            <div>7.8K lượt mua</div>
          </div>
          <div className=" max-w-[994px] mb-[35px] mx-auto relative w-[90%] mt-3">
            <div className={` brand_content  ${show ? "h-auto" : "h-[110px]"}`}>
              <div className="relative cursor-pointer">
                <div
                  className={`content  overflow-hidden max-w-[994px] ${
                    show ? "h-auto" : "h-[50px]"
                  }`}
                  ref={desc_ref}
                ></div>
                <div
                  className={`bg_cover absolute ${show ? "hidden" : ""}`}
                ></div>
              </div>
              <div
                className="text-[16px] font-bold text-center cursor-pointer"
                onClick={() => {
                  setShow((prev) => !prev);
                }}
              >
                {show ? "Ẩn bớt nội dung" : "Xem thêm"}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" flex gap-6">
        <div className="basis-1/4 ">
          <div className="max-w-[263px]">
            <div className="bg-[#fff] filter-group mb-[14px]">
              <Accordion
                type="single"
                collapsible
                className="w-full"
                defaultValue="item-1"
              >
                <AccordionItem value="item-1">
                  <AccordionTrigger
                    className={
                      "px-[13px] py-[10px] border-b border-solid border-[--shop-color-border] text-[--shop-color-text] text-[[16px] font-bold"
                    }
                  >
                    Giá
                  </AccordionTrigger>
                  <AccordionContent className={"p-[10px]"}>
                    {Array.from({ length: 4 }).map((_, index) => (
                      <label className="flex items-center checkbox cursor-pointer relative gap-3">
                        <input
                          type="checkbox"
                          className="p-[6px] cursor-pointer"
                          checked={true}
                        ></input>
                        <span className="text-[--shop-color-text] text-[13px] ">
                          {`Dưới ${index}00.000đ`}
                        </span>
                      </label>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            <div className="bg-[#fff] filter-group mb-[14px]">
              <Accordion
                type="single"
                collapsible
                className="w-full"
                defaultValue="item-1"
              >
                <AccordionItem value="item-1">
                  <AccordionTrigger
                    className={
                      "px-[13px] py-[10px] border-b border-solid border-[--shop-color-border] text-[--shop-color-text] text-[[16px] font-bold"
                    }
                  >
                    Nhà cung cấp
                  </AccordionTrigger>
                  <AccordionContent className={"p-[10px]"}>
                    {Array.from({ length: 4 }).map((item) => (
                      <label className="flex items-center checkbox cursor-pointer relative gap-3">
                        <input
                          type="checkbox"
                          className="p-[6px] cursor-pointer"
                          checked={true}
                        ></input>
                        <span className="text-[--shop-color-text] text-[14px] uppercase">
                          Nelly
                        </span>
                      </label>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
        <div className="basis-3/4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <h1 className="text-[--shop-color-title] text-[24px] font-bold">
                THE FACE SHOP
              </h1>
              <span className="text-[--shop-color-text] ml-[30px]">
                <b>3</b> sản phẩm
              </span>
            </div>
            <div className="">
              {" "}
              <Select>
                <SelectTrigger className="w-[180px] border border-solid border-[--shop-color-border] rounded-none">
                  <SelectValue placeholder="Sắp xếp" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {/* <SelectLabel>Fruits</SelectLabel> */}
                    <SelectItem value="priceasc">Giá : Tăng dần</SelectItem>
                    <SelectItem value="pricedesc">Giá : Giảm dần</SelectItem>
                    <SelectItem value="asc">Tên: A-Z</SelectItem>
                    <SelectItem value="desc">Tên: Z-A</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex flex-wrap gap-[8px]">
            <div className="flex items-center border border-solid border-[#dadada] py-[2px] pr-[32px] pl-[10px] text-[13px] text-[#5d5d5d]  overflow-hidden rounded-full  mr-2 relative whitespace-nowrap my-[10px]">
              Sản phẩm:
              <b className="flex items-center justify-center whitespace-nowrap ml-2 leading-[16px]">
                Kem dưỡng mặt, Sữa rửa mặt
              </b>
              <button className="ml-[5px] cursor-pointer flex items-center  right-[4px] center-y">
                <icons.close className="text-[16px] leading-[100%] w-4 h-4"></icons.close>
              </button>
            </div>
            <div className="flex items-center border border-solid border-[#dadada] py-[2px] pr-[32px] pl-[10px] text-[13px] text-[#5d5d5d]  overflow-hidden rounded-full  mr-2 relative whitespace-nowrap my-[10px]">
              Giá:
              <b className="flex items-center justify-center whitespace-nowrap ml-2 leading-[16px]">
                Trên 500.000đ
              </b>
              <button className="ml-[5px] cursor-pointer flex items-center  right-[4px] center-y">
                <icons.close className="text-[16px] leading-[100%] w-4 h-4"></icons.close>
              </button>
            </div>
            <button className="  cursor-pointer  py-[2px] px-[10px] rounded-[12px] m-[10px] text-[#5d5d5d] border-none bg-[#fff]">
              <span className="text-[--shop-color-main] border-b border-solid border-[--shop-color-main] text-[13px]">
                Xóa hết
              </span>
            </button>
          </div>
          <div className="mt-[30px]">
            <div className="grid grid-cols-5 gap-y-3">
              {Array.from({ length: 6 }).map((_, index) => (
                <div className="px-[6px]" key={index}>
                  <ProductItem />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </BrandStyled>
  );
};
const BrandStyled = styled.div`
  @keyframes wearoff {
    0% {
      opacity: 1;
    }

    100% {
      display: none;
    }
  }
  max-width: 100vw;
  overflow-x: visible;
  flex: auto;
  min-height: 0;

  .is_wearoff {
    animation: wearoff 0.3s forwards linear;
  }
`;
export default BrandDetail;
