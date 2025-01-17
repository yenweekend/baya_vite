import React, { useCallback, useEffect, useRef, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";
import { LazyLoadImage } from "react-lazy-load-image-component";
import icons from "../../../utils/icons";
import "react-lazy-load-image-component/src/effects/blur.css";
import Header from "./Header";
import Footer from "./Footer";
import { useSelector } from "react-redux";
let lastScrollTop = 0;

const Master = () => {
  const top_page_ref = useRef();
  const to_top_ref = useRef();
  const handleScroll = () => {
    if (document.documentElement.scrollTop > 1000) {
      to_top_ref.current.classList.remove("hidden");
      to_top_ref.current.classList.add("block");
    } else {
      to_top_ref.current.classList.remove("block");
      to_top_ref.current.classList.add("hidden");
    }
    const navbar = document.querySelector(".nav-bar");
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop && scrollTop > 250) {
      navbar.style.top = "-248px";
      navbar.style.opacity = 0;
    } else {
      navbar.style.top = "0px";
      navbar.style.opacity = 1;
    }
    lastScrollTop = scrollTop;
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <MasterStyled ref={top_page_ref}>
        <Header />
        <div className="wrap-container">
          <Outlet />
        </div>
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
      </MasterStyled>
    </>
  );
};
const MasterStyled = styled.div`
  .home-collection {
    margin-top: 30px;
  }
  .primary_color {
    color: var(--primary);
  }
  .text_primary {
    color: var(--text-primary);
  }

  .ellipsis_1_lines {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
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
      top: 238px;
      left: 0;
      display: none;
    }
    100% {
      opacity: 1;
      top: 238px;
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

  .wrap-container {
    box-sizing: content-box;
    margin-left: auto;
    transition: background-color 400ms linear 0s;
    margin-right: auto;
    max-width: 1366px;
    position: relative;
    width: 80%;
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

  .nav-list::-webkit-scrollbar {
    display: none;
  }
`;

export default Master;
