import React, { useCallback, useEffect, useRef, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";
import { LazyLoadImage } from "react-lazy-load-image-component";
import icons from "../../utils/icons";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Header, Footer } from ".";
const Master = () => {
  const page_header_ref = useRef();
  const top_page_ref = useRef();
  const to_top_ref = useRef();
  const handleScroll = () => {
    if (document.documentElement.scrollTop > 2500) {
      to_top_ref.current.classList.remove("hidden");
      to_top_ref.current.classList.add("block");
    } else {
      to_top_ref.current.classList.remove("block");
      to_top_ref.current.classList.add("hidden");
    }
    if (top_page_ref.current.getBoundingClientRect().y === 150) {
      page_header_ref.current.classList.remove("is_scroll");
    } else {
      page_header_ref.current.classList.add("is_scroll");
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const location = useLocation();

  return (
    <>
      <MasterStyled className={`layout_master`} ref={top_page_ref}>
        <Header ref={page_header_ref} />
        <Outlet />
        <Footer />
        <div
          className="fixed bottom-2 right-2 hidden "
          onClick={() => {
            window.scrollTo(0, 0);
          }}
          ref={to_top_ref}
        >
          <div className="w-10 h-10 rounded-[50%] gradient_header  flex items-center justify-center cursor-pointer fade_loading relative ">
            <icons.arrowup className="text-[24px] "></icons.arrowup>
          </div>
        </div>
        {/* <div className="fixed z-[99999] inset-0 ">
          <div className="absolute inset-0 bg-[rgba(0,0,0,.45)]"></div>
          <div className="w-[490px] absolute top-0 right-0 h-full bg-white">
            <div className="py-[10px] px-[23px] flex items-center justify-between border-b border-solid border-b-[#f0f0f0]">
              <div className="text-[24px] font-bold">Giỏ hàng của tôi</div>
              <div className="flex justify-center items-center cursor-pointer">
                <icons.close className="text-[24px] "></icons.close>
              </div>
            </div>
            <div className="pt-[15px] pb-5">
              <div className="flex items-center px-[15px] mb-[30px] gap-3 ">
                <div className=" rounded-full text-center bg-black text-white  text-[16px] flex-auto py-2 cursor-pointer">
                  Giao hàng (2)
                </div>
                <div className=" rounded-full text-center bg-[rgb(239,239,239)] text-black  text-[16px] flex-auto py-2 cursor-pointer">
                  Lấy tại cửa hàng (0)
                </div>
              </div>
              <div className="px-[15px] overflow-y-auto">
                <div>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="hidden input_checkbox"
                    ></input>
                    <div className="input_filter relative mr-2">
                      <div className="absolute "></div>
                    </div>
                    Chọn tất cả
                  </label>
                </div>
                <div className="devide bg-[rgba(0,0,0,.06)] h-[0.8px]  my-[15px]"></div>
                <div>
                  <div>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="hidden input_checkbox"
                      ></input>
                      <div className="input_filter relative mr-2">
                        <div className="absolute "></div>
                      </div>
                      <div className="flex-auto flex items-start">
                        <div className="h-[80px] w-[80px] ">
                          <img src="	https://image.hsv-tech.io/150x0/bbx/common/626d1395-e9a8-4819-8e28-48069bd9f93f.webp"></img>
                        </div>
                        <div className="flex-auto ml-[10px]">
                          <div className="flex justify-between items-center">
                            <div className="mr-[10px] ellipsis_2_lines ">
                              set 5 mặt nạ giấy
                            </div>
                            <div className="flex items-center justify-center w-[22px] h-[22px] bg-[rgb(223,223,223)] rounded-[50%]">
                              <icons.minus className="text-[16px]"></icons.minus>
                            </div>
                          </div>
                          <div>SKU: ec24-bbdsf-fsa</div>
                          <div className="flex items-centers justify-between">
                            <div className="flex items-center border-[1.5px] border-solid border-[rgb(239,239,239)]  rounded-full ">
                              <div className="minus flex items-center justify-center   cursor-pointe">
                                <icons.minus className="text-[25px] py-[3px] px-[7px]"></icons.minus>
                              </div>
                              <div className="quantity_text text-center">1</div>
                              <div className="plus flex items-center justify-center  cursor-pointer">
                                <icons.plus className="text-[25px] py-[3px] px-[7px]"></icons.plus>
                              </div>
                            </div>
                            <div>500.000đ</div>
                          </div>
                        </div>
                      </div>
                    </label>
                  </div>
                </div>
              </div>
              <div className="devide bg-[rgba(0,0,0,.06)] h-[0.8px]  my-[15px]"></div>
              <div className=" px-[23px] pb-[20px]">
                <div className="flex items-center justify-between">
                  <div>Giao hàng</div>
                  <div>500.000đ</div>
                </div>
                <div className="flex items-center justify-between">
                  <div>Click & Collect</div>
                  <div>0đ</div>
                </div>
                <div className="gradient_header rounded-full h-10 px-5 py-[5px] text-center font-medium text-[18px] cursor-pointer">
                  Tiếp tục với hình thức giao hàng
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </MasterStyled>
    </>
  );
};
const MasterStyled = styled.div`
  .ellipsis_2_lines {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .input_filter {
    cursor: pointer;
    width: 20px;
    height: 20px;
    border: 1px solid #dbdfe6;
    border-radius: 6px;
    transition: all 0.1s linear;
  }
  .input_filter > div {
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(-45deg);
    width: 10px;
    height: 6px;
    border-left: 2px solid #fff;
    border-bottom: 2px solid #fff;
  }
  .input_checkbox:checked + .input_filter {
    background-color: #c23f5b;
    border-color: #c23f5b;
  }
  @keyframes appear {
    0% {
      opacity: 0;
      top: -999em;
      left: -999em;
      display: none;
    }
    75% {
      opacity: 0;
      top: 148px;
      left: 0;
      display: none;
    }
    100% {
      opacity: 1;
      top: 148px;
      left: 0;
      display: block;
    }
  }
  .nav_btn:hover > .dropdown_portal {
    animation: appear 0.4s forwards linear;
  }
  .dropdown_portal {
    transition: top 1s linear;
  }
  .overlay {
    max-height: calc(-141px + 80vh);
    overflow: hidden auto;
  }
  .fade_loading:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    background: linear-gradient(
      90deg,
      rgb(255, 212, 0) 0%,
      rgb(199, 49, 48) 50.52%,
      rgb(102, 54, 149) 99.61%
    );
    animation: fade 1s forwards infinite linear;
  }

  @keyframes fade {
    to {
      transform: scale(2);
      opacity: 0;
    }
  }
  .brand_item {
    width: 217px;
    aspect-ratio: 2.05 / 1;
    border-radius: 8px;
    overflow: hidden;
  }
  .bg_cover {
    position: absolute;
    background-image: linear-gradient(transparent, rgb(255, 255, 255));
    width: 100%;
    height: 100%;
    top: 0px;
  }
  .btn_black {
    color: rgb(255, 255, 255);
    background: var(--bg-black) !important;
    border: 1px solid var(--bg-black) !important;
  }
  .payment_method_item_wrapper {
    border: 1px solid rgb(239, 239, 239);
    border-radius: 10px;
    padding: 10px 20px;
  }
  .flex_1 {
    flex: 1 1 0%;
  }
  .flex_01 {
    flex: 0 1 0%;
  }
  .flex_25 {
    flex: 0 0 25%;
    max-width: 25%;
  }
  .flex_50 {
    flex: 0 0 50%;
    max-width: 50%;
  }
  .flex_75 {
    flex: 0 0 75%;
    max-width: 75%;
  }
  .flex_33 {
    flex: 0 0 33.33333%;
    max-width: 33.333%;
    padding: 0 15px;
  }
  .flex_66 {
    flex: 0 0 66.66666%;
    max-width: 66.66666%;
    padding: 0 15px;
  }
  .flex_16 {
    flex: 0 0 16.66666667%;
    max-width: 16.66666667%;
  }
  .flex_83 {
    flex: 0 0 83.33333333%;
    max-width: 83.33333333%;
  }
  .flex_41 {
    flex: 0 0 41.66666667%;
    max-width: 41.66666667%;
  }
  .footer_desc {
    max-width: 500px;
    margin-right: 20px;
    padding: 20px 0px;
  }
  .section_title {
    font-size: var(--font-size-m);
    text-transform: uppercase;
    font-weight: 600;
  }
  .footer_left,
  .footer_right {
    padding-left: 12px;
    padding-right: 12px;
  }
  .middle_footer_left,
  .ant-col {
    display: block;
    flex: 0 0 25%;
    max-width: 25%;
  }
  .ant-col {
    padding: 0 15px;
  }
  .ant-col span {
    font-weight: 500;
    cursor: pointer;
  }
  .ant-col span:hover {
    font-weight: 700;
    color: #000;
  }
  .footer_right {
    flex: 0 0 75%;
    max-width: 75%;
  }
  .follow_btn {
    height: 40px;
    padding: 8px 15px;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 23px;
    border: none;
    box-shadow: none;
    text-transform: uppercase;
    background: rgba(0, 0, 0, 0);
    color: rgb(255, 255, 255);
    display: inline-block;
  }
  .follow_btn:hover {
    color: rgb(255, 212, 0);
  }
  .input_area {
    padding: 10.5px 11px;
    max-width: 400px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 42px;
    border: none;
    height: 45px;
    border: 2px solid transparent;
  }
  .input_area.is_focus {
    border: 2px solid #d9d9d9;
  }
  .input {
    background: rgba(0, 0, 0, 0);
    border: none;
    outline: none;
    text-overflow: ellipsis;
    color: #000;
  }
  .input::placeholder {
    color: #fff;
    font-size: 16px;
  }
  .middle_footer_left {
    max-width: 50%;
    flex: 0 0 50%;
  }
  .middle_footer_right {
    max-width: 50%;
    flex: 0 0 50%;
  }
  .middle_footer {
    padding: 24px 100px;
    background: linear-gradient(
      90deg,
      rgb(255, 212, 0) 0%,
      rgb(199, 49, 48) 50.52%,
      rgb(102, 54, 149) 99.61%
    );
    border: none;
    color: rgb(255, 255, 255) !important;
    border-radius: 15px;
  }

  .dropdown_item.is_dropdown {
    display: block !important;
  }
  .btn_black_gradient {
    border-radius: 26px;
    border: none;
    background: rgb(0, 0, 0) !important;
    color: rgb(255, 255, 255) !important;
    box-shadow: 0 2px 0 rgba(0, 0, 0, 0.015);
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    opacity: 0.8;
  }
  .page_header.is_scroll {
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
      rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  }
  .wrap_container {
    box-sizing: content-box;
    margin-left: auto;
    transition: background-color 400ms linear 0s;

    color: rgb(0, 0, 0);
    margin-right: auto;
    max-width: 1366px;
    position: relative;
    width: 90%;
  }
  .gradient_header {
    background: linear-gradient(
      90deg,
      rgb(255, 212, 0) 0%,
      rgb(199, 49, 48) 50.52%,
      rgb(102, 54, 149) 99.61%
    );
    border: none;
    color: rgb(255, 255, 255) !important;
  }
  .header_page_text {
    font-size: var(--font-size-s);
    font-family: var(--font-family);
    font-variant: tabular-nums;
    line-height: 1.5715;
    font-feature-settings: "tnum", "tnum";
    position: relative;
  }
  .header_page_text:not(:last-child)::after {
    position: absolute;
    content: "";
    width: 3px;
    height: 3px;
    background: white;
    border-radius: 100rem;
    right: 0px;
    top: 50%;
    transform: translateY(-50%);
  }
  .form_group {
    height: 40px;
    padding-right: 4px;
    background: rgb(246, 246, 246);
    transition: background-color 800ms linear 0s;
    border-radius: 42px;
    width: 400px;
    max-width: 400px;
    border: 1px solid transparent;
  }
  .monserat_font {
    font-family: var(--font-family);
  }
  .title {
    margin-left: 5px;
    font-family: var(--font-family);
    text-align: left;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: 17px;
    color: rgb(0, 0, 0);
    transition: background-color 400ms linear 0s;
  }
  .more_btn {
    position: relative;
  }
  .more_btn::after {
    position: absolute;
    content: "";
    width: 0.8px;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.35);
    right: -12px;
    top: 50%;
    transform: translateY(-50%);
  }

  .btn_menu {
    cursor: pointer;
    height: 35px;
    padding: 0px 20px;
    border: 1px solid rgb(239, 239, 239);
    border-radius: 8px;
    background: rgb(255, 255, 255);
    color: rgb(0, 0, 0);
    transition: background-color 400ms linear 0s;
  }
  .btn_menu > span {
    font-size: 16px;
  }
  .btn_menu:hover {
    background-color: rgb(239, 239, 239);
  }

  .menu_lists::-webkit-scrollbar {
    display: none;
  }
`;
export default Master;
