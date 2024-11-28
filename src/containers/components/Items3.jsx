import React, { useRef } from "react";
import styled from "styled-components";
import TagSale from "./TagSale";
import icons from "../../utils/icons";
const Items3 = () => {
  return (
    <>
      <Items3Styled className={`item group flex_33 px-[5px]`}>
        <div className="item_thumb w-full rounded-t-lg overflow-hidden relative cursor-pointer">
          <img
            src="https://image.hsv-tech.io/600x600/bbx/common/74685e3a-71a1-4779-8896-ec20c117fc40.webp"
            className="w-full h-full object-cover"
          ></img>
          <div className="absolute w-10 h-10 rounded-[50%] bg-[#000] top-[10px] left-[10px] "></div>
          <div className="absolute top-[10px] right-[10px] cursor-pointer">
            <icons.heartthin className="text-[24px]"></icons.heartthin>
          </div>
          <div
            className="absolute quick_seen_btn btn_black_gradient top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] font-bold hidden group-hover:block w-auto whitespace-nowrap "
            onMouseOver={(e) => {
              e.target.classList.add("is_hover");
            }}
            onMouseLeave={(e) => {
              e.target.classList.remove("is_hover");
            }}
          >
            Xem nhanh
          </div>
        </div>
        <div className="bg-white rounded-b-lg px-[14px] pb-[10px]">
          <div className="brand_text uppercase text-center pt-[5px]">
            <span>ahc</span>
          </div>
          <div className="items_desc text-center">
            Trải Nghiệm Combo 11 Mặt Nạ HOT Nhất Mặt Nạ AHC + Goodal + Dermatory
            Dưỡng Da Sáng & Săn Mịn
          </div>
          <div className="price text-center">
            <div className="cur_price  font-bold">291.000đ</div>
            <div className="flex items-center justify-center">
              <div className="prev_price ml-[10px] opacity-50 ">717.000đ</div>
              <div>
                <TagSale />
              </div>
            </div>
          </div>
          <div className="rate flex items-center justify-center my-[6px]">
            <icons.emptyStar className="mr-[5px] text-[20px]"></icons.emptyStar>
            <icons.emptyStar className="mr-[5px] text-[20px]"></icons.emptyStar>
            <icons.emptyStar className="mr-[5px] text-[20px]"></icons.emptyStar>
            <icons.emptyStar className="mr-[5px] text-[20px]"></icons.emptyStar>
            <icons.emptyStar className="mr-[5px] text-[20px]"></icons.emptyStar>
            <span className="count_rate">(0)</span>
          </div>
          <div className="stock h-5 w-full rounded-full bg-[rgba(199,49,48,0.314)] relative overflow-hidden">
            <div
              className={`absolute stock_bar left-0  w-[20%]  whitespace-nowrap flex items-center `}
            >
              <span className="pl-2 text-white text-[12px]">
                còn 13 sản phẩm
              </span>
            </div>
          </div>
          <div className="w-fit px-3 py-2 rounded-[99px] font-bold border border-solid mx-auto mt-2 cursor-pointer">Thêm</div>
        </div>
      </Items3Styled>
    </>
  );
};
const Items3Styled = styled.div`
  .item_thumb {
    width: 100%;
    aspect-ratio: 1 / 1;
    overflow: hidden;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    position: relative;
  }
  .brand_text > span {
    width: 100%;
    margin-bottom: 0px;
    font-size: var(--font-size-m);
    font-family: var(--font-family);
    cursor: pointer;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0em;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
  }
  .items_desc {
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    font-size: 12px;
  }
  .prev_price {
    position: relative;
  }
  .prev_price::after {
    background-color: #000;
    position: absolute;
    content: "";
    width: 100%;
    height: 0.8px;
    opacity: 0.8;
    top: 50%;
    transform: translate(-50%, -50%);
    left: 50%;
  }
  .stock_bar {
    transition: all 0.4s cubic-bezier(0.08, 0.82, 0.17, 1) 0s;
    height: 20px;
    background: repeating-linear-gradient(
      -45deg,
      rgba(199, 49, 48, 0.6),
      rgba(199, 49, 48, 0.6) 10px,
      rgb(199, 49, 48) 10px,
      rgb(199, 49, 48) 20px
    );
  }
  .quick_seen_btn {
    height: 40px;
    padding: 8px 15px;
  }
  .quick_seen_btn.is_hover {
    background: linear-gradient(
      90deg,
      rgb(255, 212, 0) 0%,
      rgb(199, 49, 48) 50.52%,
      rgb(102, 54, 149) 99.61%
    ) !important;
    opacity: 1;
  }
`;
export default Items3;
