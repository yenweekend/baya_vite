import React from "react";
import { useRef, forwardRef, useState, useCallback } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Dropdown1, Dropdown2 } from "../components";
import menuDropDowns from "../../utils/dropdown";
import icons from "../../utils/icons";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Header = ({ props }, ref) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const brandslide_item_ref = useRef([]);
  const container_ref = useRef();
  const next_ref = useRef();
  const prev_ref = useRef();
  const brandslide_ref = useRef();
  const handleNextSlide = useCallback(() => {
    // slide wipe with length of an item
    // const barSlideWidth = brandslide_item_ref?.current[0].clientWidth;
    // slide wipe with length of container
    const barSlideWidth = container_ref.current.clientWidth;
    const newScrollPosition = scrollPosition + barSlideWidth;
    prev_ref.current.classList.remove("hidden");
    prev_ref.current.classList.add("block");
    if (
      newScrollPosition >=
      brandslide_ref.current.scrollWidth - barSlideWidth
    ) {
      next_ref.current.classList.add("hidden");
    }
    setScrollPosition(newScrollPosition);
    brandslide_ref.current.scrollLeft = newScrollPosition;
  }, [scrollPosition]);
  const handlePrevSlide = useCallback(() => {
    // const barSlideWidth = brandslide_item_ref?.current[0].clientWidth;
    next_ref.current.classList.remove("hidden");
    next_ref.current.classList.add("block");
    const barSlideWidth = container_ref.current.clientWidth;
    const newScrollPosition = scrollPosition - barSlideWidth;
    setScrollPosition(newScrollPosition);
    if (newScrollPosition <= 0) {
      prev_ref.current.classList.remove("block");
      prev_ref.current.classList.add("hidden");
    }
    brandslide_ref.current.scrollLeft = newScrollPosition;
  }, [scrollPosition]);
  const addToRefs = (el) => {
    if (el && !brandslide_item_ref.current.includes(el)) {
      brandslide_item_ref.current.push(el);
    }
  };
  return (
    <HeaderStyled
      className={`page_header fixed w-full top-0 right-0 left-0 h-[148px] z-[9999] bg-[#fff]`}
      ref={ref}
    >
      <div className="flex items-center justify-center gradient_header">
        <div className={` flex items-center py-[4px]  `}>
          <span className="header_page_text pr-10">
            Nhập summer100k giảm 100k{" "}
          </span>
          <span className="header_page_text px-10 ">
            Mua online nhận tại cửa hàng gần nhất
          </span>
          <span className="header_page_text pl-10">freeship 24h</span>
        </div>
      </div>
      <div className="wrap_container flex items-center justify-between h-[80px]">
        <div className="logo_app">
          <a href="/">
            <div className="image-wrapper">
              <LazyLoadImage
                src="https://image.hsv-tech.io/300x0/bbx/common/50a26167-9341-4be8-8aba-9682d3b4a916.webp"
                effect="blur"
                className="w-[190px] h-[39px] max-w-full"
              />
            </div>
          </a>
        </div>
        <div className="header_page_right flex items-center justify-between ">
          <div className="search_div">
            <form className="form_group relative ">
              <input
                placeholder="Combo Quà Tặng độc quyền 627k"
                className="pl-10 top-[50%] translate-y-[-50%] absolute w-full pr-[44px] leading-[1.5715] text-[14px] monserat_font "
              ></input>
              <div className="w-10 h-full bg-red-400 absolute right-0 rounded-2xl"></div>
              <div className="search_icon cursor-pointer">
                <icons.search className="absolute left-[4px] top-[50%] translate-y-[-50%] text-[24px] "></icons.search>
              </div>
            </form>
          </div>
          <div className="flex items-center pl-10 gap-3">
            <div className="flex items-center cursor-pointer">
              <div>
                <icons.store className={`text-[30px]`}></icons.store>
              </div>
              <span className="title">Hệ thống cửa hàng</span>
            </div>
            <div className="flex items-center cursor-pointer">
              <div>
                <icons.pencilthin className={`text-[30px]`}></icons.pencilthin>
              </div>
              <span className="title">Tạp chí làm đẹp</span>
            </div>
            <div className="px-[4px] mr-3 more_btn cursor-pointer">
              <icons.more className={`text-[30px]`}></icons.more>
            </div>
            <div className="flex items-center cursor-pointer">
              <div>
                <icons.userthin className={`text-[30px]`}></icons.userthin>
              </div>
              <span className="title">Đăng nhập</span>
            </div>
            <div className="cursor-pointer">
              <icons.heartthin className={`text-[30px]`}></icons.heartthin>
            </div>
            <div className="cursor-pointer relative">
              <icons.bagthin className={`text-[30px]`}></icons.bagthin>
              <div className="absolute w-5 h-5 bg-[#000] rounded-[50%] flex items-center justify-center top-[-3px] right-[-7px] text-white text-[12px]">
                2
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="" ref={container_ref}>
        <div
          className="menu_otps mx-auto max-w-[1366px] w-[90%] bg-[#fff] overflow-hidden overflow-x-scroll no-scrollbar"
          ref={brandslide_ref}
        >
          <div className="flex items-center  menu_lists gap-[20px]">
            {menuDropDowns?.map((e) => (
              <>
                <div key={e.title} className=" nav_btn" ref={addToRefs}>
                  <Link
                    className="btn_menu flex items-center justify-center whitespace-nowrap relative no-underline "
                    to={e.link}
                  >
                    <span className="text-[16px]">{e.title}</span>
                  </Link>
                  {e.dropdown ? (
                    <div
                      className={`dropdown_portal absolute z-[99999] right-auto top-[-999em]  left-[-999em]  w-screen max-h-[80vh] `}
                    >
                      {e.type === 1 ? (
                        <Dropdown1 content={e}></Dropdown1>
                      ) : (
                        <Dropdown2 content={e}></Dropdown2>
                      )}
                      <div className="absolute w-full h-[20px] bg-transparent top-[-12px]"></div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </>
            ))}
          </div>
        </div>
        <div
          className={` absolute top-[84%] translate-y-[-50%]  left-[2.5%] hidden`}
          ref={prev_ref}
          onClick={handlePrevSlide}
        >
          <div className="w-5 h-5 rounded-[50%] flex items-center justify-center cursor-pointer   bg-[rgba(0,0,0,0.565)]     shadow-[rgb(184,193,202)_0px_0px _0px]">
            <icons.prev className="text-[14px] text-[#fff]"></icons.prev>
          </div>
        </div>
        <div
          className={` absolute top-[84%] translate-y-[-50%] right-[2.5%]`}
          ref={next_ref}
          onClick={handleNextSlide}
        >
          <div className="w-5 h-5 rounded-[50%] flex items-center justify-center cursor-pointer   bg-[rgba(0,0,0,0.565)]     shadow-[rgb(184,193,202)_0px_0px _0px]">
            <icons.next className="text-[14px] text-[#fff]"></icons.next>
          </div>
        </div>
      </div>
    </HeaderStyled>
  );
};
const HeaderStyled = styled.div``;
export default forwardRef(Header);
