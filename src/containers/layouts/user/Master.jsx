import React, { useCallback, useEffect, useRef, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";
import { LazyLoadImage } from "react-lazy-load-image-component";
import icons from "../../../utils/icons";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Header, Footer } from "../../components";
import axios from "axios";
import { apiUrl } from "../../../utils/constants";
import {toastifySelector} from "../../../redux-toolkit/selector/home.selector";
import { useSelector } from "react-redux";

const Master = () => {
  const toastRef = useRef();
  const page_header_ref = useRef();
  const top_page_ref = useRef();
  const to_top_ref = useRef();
  const toastify = useSelector(toastifySelector);
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
  const toast = useCallback((toastify) => {
    const toast = document.createElement("li");
    const autoRemoveId = setTimeout(() => {
      toastRef?.current?.removeChild(toast);
    }, [4000]);
    toast.onclick = (event) => {
      if (event.target.closest(".close_toast")) {
        toastRef.current.removeChild(toast);
        clearTimeout(autoRemoveId);
      }
    };
    toast.classList.add("toast_bg");
    toast.innerHTML = `<span>${toastify.text}</span>
    <i class="fa-solid fa-xmark close_toast"></i>
   `;
    toast.style.animation = `slideInLeft ease .3s forwards, fadeOut linear 1s 3s forwards`;
    toastRef.current.appendChild(toast);
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    if (toastify != null) {
      toast(toastify);
    }
  }, [toastify]);

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
        <ToastStyled ref={toastRef}></ToastStyled>
      </MasterStyled>

    </>
  );
};
const MasterStyled = styled.div`
  
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
  .primary_color{
    color: var(--primary);
  }
  .text_primary{
    color: var( --text-primary);
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
const ToastStyled = styled.ul`
  position: absolute;
  z-index: 9999;
  bottom: 90px;
  left: 0;
  width: 360px;
  transform: translateX(-100%);
  .close_toast {
    color: var(--text-primary);
    width: 20px;
    height: 20px;
    cursor: pointer;
  }
  .toast_bg {
    width: 100%;
    padding: 10px 20px;
    border-radius: 4px;
    background-color: blue;
    box-shadow: 0 2px 5px blue;
  }
  li {
    width: 100%;
    padding: 10px 20px;
    border-radius: 4px;
    background-color: blue;
    box-shadow: 0 2px 5px black;
    transform: translateX(100%);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  li span {
    color:white;
    line-height: 1.3;
    font-size: 14px;
  }
  .bold_text {
    font-weight: 500;
  }
  @keyframes fadeOut {
    to {
      opacity: 0;
    }
  }
  @keyframes slideInLeft {
    from {
      opacity: 0;
      transform: translateX(0);
    }
    to {
      opacity: 1;
      transform: translateX(100%);
    }
  }
`;

export default Master;
