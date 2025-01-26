import React from "react";
import { useRef, useState, useCallback, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  MailCheck,
  Menu,
  PhoneCall,
  Search,
  UserRound,
  X,
} from "lucide-react";
import { Search as SearchDiv } from "@/containers/components";
import navigationComponents from "@/utils/navigation";
import {
  DropdownScreen,
  DropdownScreenContent,
  DropdownScreenTrigger,
} from "@/containers/components/Dropdown/DropdownFullScreen";
import {
  DropdownScreenUT,
  DropdownScreenUTContent,
  DropdownScreenUTTrigger,
} from "@/containers/components/Dropdown/DropdownFullScreenUT";
import {
  Dropdown,
  DropdownContent,
  DropdownTrigger,
} from "@/containers/components/Dropdown/Dropdown";
import { Separator } from "@/components/ui/separator";

import { CartButtonTransition } from "../../components/ButtonTransition/CartButton";
import { AccountButton } from "../../components/ButtonTransition/AccountButton";

import { LoginBox } from "@/containers/components";
const Header = () => {
  const [openHamburger, setOpenHamburger] = React.useState(false);
  const [items, setItems] = useState([
    {
      id: 1,
      name: "set 5 mặt nạ giấy",
      sku: "abcdha",
      checked: false,
      price: 50000,
    },
    {
      id: 2,
      name: "sữa rửa mặt",
      sku: "abcdha",
      checked: false,
      price: 3000,
    },
    {
      id: 3,
      name: "khẩu trang",
      sku: "abcdha",
      checked: false,
      price: 2000,
    },
    {
      id: 4,
      name: "bím tóc",
      sku: "ahhhhhf",
      checked: false,
      price: 2000,
    },
    {
      id: 5,
      name: "bím tóc 1",
      sku: "ahhhhhf",
      checked: false,
      price: 2000,
    },
    {
      id: 6,
      name: "bím tóc 2",
      sku: "ahhhhhf",
      checked: false,
      price: 2000,
    },
  ]);

  return (
    <header className={`min-990:min-h-[204px] min-h-[160px] z-[50]  relative`}>
      <div className="nav-bar z-[60] ">
        <div className="bg-primary ">
          <div className=" flex items-center justify-between nav min-990:pt-[18px] py-[10px] px-[15px] max-w-[1400px] mx-auto ">
            <DropdownScreenUT
              open={openHamburger}
              onOpenChange={setOpenHamburger}
            >
              <DropdownScreenUTTrigger
                className={"w-[30px] h-[30px] block min-990:hidden"}
              >
                <X
                  size={30}
                  className={`text-[#fff] transition-all ease-linear duration-150 absolute inset-0  ${
                    openHamburger
                      ? " visible scale-100 opacity-100"
                      : "invisible opacity-0 scale-90"
                  }`}
                  strokeWidth={1.5}
                />
                <Menu
                  size={30}
                  className={`text-[#fff] transition-all ease-linear duration-150 absolute inset-0  ${
                    openHamburger
                      ? " invisible opacity-0 scale-90"
                      : "visible opacity-1 scale-100"
                  }`}
                  strokeWidth={1.5}
                />
              </DropdownScreenUTTrigger>
              <DropdownScreenUTContent>
                <div className="absolute inset-0 ">
                  <div className="w-full h-full overflow-y-auto pb-[30px]">
                    <ul className="flex flex-col items-start ">
                      {navigationComponents.map((nav, index) => (
                        <li
                          className="border-b border-solid border-[#eee] uppercase has-submenu flex-auto group flex items-center justify-between w-full cursor-pointer text-blacknihover:text-redichi pr-[8px]"
                          data-root-menu={index}
                          key={nav.link}
                          onClick={(e) => {
                            const exist = document.querySelector(".menu-open");
                            if (exist) {
                              exist.classList.remove("menu-open");
                            }
                            const id =
                              e.currentTarget.getAttribute("data-root-menu");
                            const element = document.getElementById(id);
                            element.classList.add("menu-open");
                          }}
                        >
                          <Link
                            to={nav.link}
                            className="p-[15px]  flex items-center text-inherit uppercase font-bold text-[14px] "
                          >
                            {nav.title}
                          </Link>
                          <ChevronRight
                            className="text-inherit "
                            size={18}
                            strokeWidth={1.5}
                          />
                        </li>
                      ))}
                    </ul>
                    <h2 className="text-redichi text-[14px] uppercase ml-[15px] font-bold mt-[20px]">
                      bạn cần hỗ trợ
                    </h2>
                    <div className="flex items-center p-[15px]">
                      <span className="w-6 h-6">
                        <PhoneCall size={24} stroke="#333" />
                      </span>
                      <span className="ml-[30px] text-[#333] text-[13px] font-bold">
                        1900 63 64 76
                      </span>
                    </div>
                    <div className="flex items-center p-[15px]">
                      <span className="w-6 h-6">
                        <MailCheck size={24} stroke="#333" />
                      </span>
                      <span className="ml-[30px] text-[#333] text-[13px] font-bold">
                        webshop@baya.vn
                      </span>
                    </div>
                  </div>
                  {navigationComponents.map((nav, index) => (
                    <div
                      className="list-child absolute inset-0 bg-[#fff] p-[15px] transition-transform ease-linear duration-150 translate-x-[100%]"
                      id={index}
                    >
                      <div
                        className="uppercase text-blackniborder-b border-solid border-[#eee] flex items-center py-[15px] pl-[6px] cursor-pointer"
                        onClick={() => {
                          const parent = document.getElementById(index);
                          parent.classList.remove("menu-open");
                        }}
                      >
                        <span className="w-5 h-5 mr-2">
                          <ChevronLeft size={20} strokeWidth={2} />
                        </span>
                        quay về
                      </div>
                      <a className="text-blacknifont-bold text-[13px] border-b border-solid border-[#eee] py-[15px] block pl-[10px] hover:text-redichi cursor-pointer">
                        Xem tất cả "{nav.title}"
                      </a>
                      <ul>
                        {nav.subNav.map((sub) => (
                          <li
                            className="p-[15px] w-full border-b border-solid border-[#eee] group"
                            key={sub.title}
                          >
                            <Link
                              href={sub.link}
                              className="text-blacknifont-normal text-[13px] group-hover:text-redichi"
                            >
                              - {sub.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </DropdownScreenUTContent>
            </DropdownScreenUT>
            <div className="px-[15px]">
              <a
                href="/"
                className="text-[#fff] w-[99px] h-[70px] overflow-hidden block"
              >
                <img
                  src="https://theme.hstatic.net/200000796751/1001266995/14/logo.png?v=82"
                  alt="BAYA"
                  className="w-full h-full object-cover"
                />
              </a>
            </div>
            <nav className=" second-menu hidden max-990:hidden ">
              <ul className="flex flex-wrap items-center justify-center">
                {navigationComponents.map((nav) => (
                  <li
                    className="mx-[15px] uppercase has-submenu relative group "
                    key={nav.link}
                  >
                    <Link
                      to={nav.link}
                      className="py-[25px] px-[4px]  flex items-center text-[#fff] normal-case opacity-85 "
                    >
                      {nav.title}
                      <ChevronDown
                        className="text-[#fff] group-hover:rotate-180 transition-transform duration-100 ease-linear"
                        size={16}
                      />
                    </Link>
                    <ul className="absolute submenu z-[99] shadow-st min-w-[220px] bg-[#fff] invisible opacity-0 transition-all ease-linear duration-300 top-[150%]  group-hover:visible group-hover:opacity-100 group-hover:top-[100%]">
                      {nav.subNav.map((subnav) => (
                        <li key={subnav.link}>
                          <Link
                            to={subnav.link}
                            className="text-blackniopacity-[0.85] text-left text-[14px] px-[18px] py-[9px] border-b border-solid border-[--shop-color-border] block w-full normal-case font-normal hover:text-redichi"
                          >
                            {subnav.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="px-[15px] flex items-start justify-between flex-auto  ">
              <div className="flex-auto hidden flex-col gap-3 max-w-[680px] mx-auto  min-990:flex search-div">
                <SearchDiv />
                <div className=" items-center gap-5 hidden min-990:flex">
                  <div className="flex items-center gap-2">
                    <div className="w-[25px] h-5 overflow-hidden">
                      <img
                        src="https://theme.hstatic.net/200000796751/1001266995/14/header_03_policy_1_ico.png?v=82"
                        alt="Giao hàng"
                      />
                    </div>
                    <span className="text-[12px] text-[#fff]">
                      {" "}
                      Giao hàng toàn quốc
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-[25px] h-5 overflow-hidden">
                      <img
                        src="https://theme.hstatic.net/200000796751/1001266995/14/header_03_policy_2_ico.png?v=82"
                        alt="Giao hàng"
                      />
                    </div>
                    <span className="text-[12px] text-[#fff]">
                      {" "}
                      Hệ thống cửa hàng BAYA
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-[25px] h-5 overflow-hidden">
                      <img
                        src="https://theme.hstatic.net/200000796751/1001266995/14/header_03_policy_3_ico.png?v=82"
                        alt="Giao hàng"
                      />
                    </div>
                    <span className="text-[12px] text-[#fff]">
                      {" "}
                      Hotline: 1900 63 64 76 (9-21h)
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-stretch ml-auto ">
                {/* <Dropdown
                  className={"search-btn hidden"}
                  open={openSearch}
                  onOpenChange={setOpenSearch}
                >
                  <DropdownTrigger className={"text-[#fff] mx-[2px]"}>
                    <a className="items-center  flex ">
                      <span className="w-6 h-6">
                        <Search size={24} strokeWidth={1.5} />
                      </span>
                    </a>
                  </DropdownTrigger>
                  <DropdownContent className={"py-[15px] px-[24px] w-[400px]"}>
                    <SearchDiv className={"min-990:min-w-[240px]"} />
                  </DropdownContent>
                </Dropdown> */}
                <Separator
                  orientation="vertical"
                  className={
                    "my-auto hidden min-990:block h-[25px] bg-[#ffffff33]"
                  }
                />
                <AccountButton />
                <Separator
                  orientation="vertical"
                  className={
                    "my-auto hidden min-990:block h-[25px] bg-[#ffffff33]"
                  }
                />
                <CartButtonTransition />
              </div>
            </div>
          </div>
          <div className="border-t border-solid border-[rgba(255,255,255,0.2)] block min-990:hidden mx-[20px] py-[10px]">
            <SearchDiv />
          </div>
        </div>
        <div className="px-[15px] bg-[#f2f2f2] nav-menu hidden min-990:block ">
          <nav>
            <ul className="flex flex-wrap items-center justify-center">
              {navigationComponents.map((nav) => (
                <li
                  className="mx-[15px] uppercase has-submenu relative group"
                  key={nav.link}
                >
                  <Link
                    to={nav.link}
                    className="py-[15px] px-[4px] text-st flex items-center text-redichi"
                  >
                    {nav.title}
                    <ChevronDown
                      className="text-redichi group-hover:rotate-180 transition-transform duration-100 ease-linear"
                      size={16}
                    />
                  </Link>
                  <ul className="absolute submenu z-[99] shadow-st min-w-[220px] bg-[#fff] invisible opacity-0 transition-all ease-linear duration-300 top-[150%]  group-hover:visible group-hover:opacity-100 group-hover:top-[100%]">
                    {nav.subNav.map((subnav) => (
                      <li key={subnav.link}>
                        <Link
                          to={subnav.link}
                          className="text-blackniopacity-[0.85] text-left text-[14px] px-[18px] py-[9px] border-b border-solid border-[--shop-color-border] block w-full normal-case font-normal hover:text-redichi"
                        >
                          {subnav.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
export default Header;
