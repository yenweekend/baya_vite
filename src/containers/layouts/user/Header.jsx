import React from "react";
import { useRef, useState, useCallback, useEffect } from "react";
import { Dropdown } from "../../components";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ListItem, ListItem2 } from "../../components";
import navigationList from "@/utils/navigation";
import icons from "@/utils/icons";
const components = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const brandslide_item_ref = useRef([]);
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
  const [productSelected, setProductSelected] = useState([]);
  const container_ref = useRef();
  const next_ref = useRef();
  const prev_ref = useRef();
  const brandslide_ref = useRef();
  const handleSelectWhole = useCallback(
    (event) => {
      if (event.target.checked) {
        setProductSelected(items);
      } else {
        setProductSelected([]);
      }
    },
    [items]
  );
  const handleSelectProduct = useCallback((event, productItem) => {
    setProductSelected((state) => {
      if (event.target.checked) {
        return [...state, productItem];
      } else {
        return state.filter((item) => item.id !== productItem.id);
      }
    });
  }, []);
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
      className={`nav-bar sticky w-full top-0 right-0 left-0 h-[auto]  z-[50] transition-all ease-linear duration-300`}
    >
      <div className="bg-[--primary-bg] ">
        {/* <div className="flex items-center justify-center ">
          <img
            src="https://theme.hstatic.net/200000796751/1001266995/14/topbar_img.jpg?v=82"
            alt="Ưu đãi lớn"
            className="w-full object-cover"
          />
        </div> */}
        <div className="wrap-container flex items-center justify-between py-[20px]">
          <div className="pr-[200px]">
            <a
              href="/"
              className="text-[#fff] logo-text text-[20px] font-extrabold whitespace-nowrap"
            >
              Beauty Cos
            </a>
          </div>
          <div className=" flex items-start justify-between flex-auto gap-[100px]">
            <div className="flex-auto flex flex-col gap-3">
              <form className="h-10  relative bg-[#fff] pr-[4px] rounded-[6px] min-w-[400px] flex-auto">
                <input
                  placeholder="Combo Quà Tặng độc quyền 627k"
                  className="pl-4 top-[50%] translate-y-[-50%] absolute w-full pr-[44px] leading-[1.5715] text-[14px] monserat_font "
                ></input>

                <div className="bg-[--primary-bg] absolute right-[2px] top-[2px] bottom-[2px] rounded-[4px]  cursor-pointer px-3 flex items-center justify-center">
                  <icons.search className=" text-[24px]  text-[#fff]"></icons.search>
                </div>
              </form>
              <div className="flex items-center gap-5 ">
                <div className="flex items-center gap-3">
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
                <div className="flex items-center gap-3">
                  <div className="w-[25px] h-5 overflow-hidden">
                    <img
                      src="https://theme.hstatic.net/200000796751/1001266995/14/header_03_policy_2_ico.png?v=82"
                      alt="Giao hàng"
                    />
                  </div>
                  <span className="text-[12px] text-[#fff]">
                    {" "}
                    Hệ thống cửa hàng
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-[25px] h-5 overflow-hidden">
                    <img
                      src="https://theme.hstatic.net/200000796751/1001266995/14/header_03_policy_3_ico.png?v=82"
                      alt="Giao hàng"
                    />
                  </div>
                  <span className="text-[12px] text-[#fff]"> Hotline</span>
                </div>
              </div>
            </div>
            <div className="flex items-center pl-10 gap-6 ">
              <Link
                className="flex items-center cursor-pointer no-underline"
                to={"/register"}
              >
                <div>
                  <icons.userthin
                    className={`text-[30px] text-[#fff]`}
                  ></icons.userthin>
                </div>
                <span className="text-[#fff] text-[14px]">Đăng nhập</span>
              </Link>
              <div className="bg-[rgba(255,255,255,0.2)] w-[1px] h-[20px] "></div>
              <Dropdown
                icon={
                  <icons.cart className="text-[#fff] text-[20px] flex-shrink-0"></icons.cart>
                }
                badge={3}
                text={"Giỏ hàng"}
              >
                <div className={`w-full bg-white `}>
                  <div></div>
                  <div className="pt-[15px] h-[400px]">
                    <div className="flex flex-col gap-3 overflow-y-auto h-full  ">
                      {items.map((item) => (
                        <div className="" key={item.id}>
                          <div
                            className={`flex items-center gap-3 px-[15px] py-[15px] border-b `}
                          >
                            <div className="flex-auto flex items-start">
                              <div className="h-[72px]  w-[72px] border-[#ededed] border flex-shrink-0  ">
                                <img src="	https://image.hsv-tech.io/150x0/bbx/common/626d1395-e9a8-4819-8e28-48069bd9f93f.webp"></img>
                              </div>
                              <div className="flex-auto ml-[10px] flex flex-col justify-between h-[72px]">
                                <div className="">
                                  <div className="flex justify-between items-center">
                                    <div className="mr-[10px] ellipsis_2_lines text-[14px] font-medium">
                                      {item.name}
                                    </div>
                                    <div
                                      className="flex items-center justify-center w-[16px] h-[16px] bg-[rgb(223,223,223)] rounded-[50%] cursor-pointer flex-shrink-0"
                                      onClick={(e) => {
                                        e.preventDefault();
                                        setItems(
                                          items?.filter((i) => {
                                            return i.id !== item.id;
                                          })
                                        );
                                      }}
                                    >
                                      <icons.minus className="text-[12px]"></icons.minus>
                                    </div>
                                  </div>
                                  <span className="text-[12px] font-light">
                                    SKU: {item.sku}
                                  </span>
                                </div>
                                <div className="flex items-centers justify-between">
                                  <div className="flex items-center border-[1.5px] border-solid border-[rgb(239,239,239)]   ">
                                    <div className="minus flex items-center justify-center py-[6px] bg-[#ededed] px-[6px]   cursor-pointer">
                                      <icons.minus className="text-[12px] "></icons.minus>
                                    </div>
                                    <div className=" text-center px-[8px]">
                                      1
                                    </div>
                                    <div className="plus flex items-center justify-center py-[6px] bg-[#ededed] px-[6px]  cursor-pointer">
                                      <icons.plus className="text-[12px] "></icons.plus>
                                    </div>
                                  </div>
                                  <div>{item.price}đ</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="devide bg-[rgba(0,0,0,.06)] h-[0.8px]  my-[15px]"></div>
                  <div className="">
                    <div className="flex items-center justify-between">
                      <div>Giao hàng</div>
                      <div>500.000đ</div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>Click & Collect</div>
                      <div>0đ</div>
                    </div>

                    <button
                      className="bg-[--primary-bg] rounded-full  px-5 py-[5px] text-center cursor-pointer mt-2 flex items-center ml-auto "
                      onClick={() => {
                        setPopup(false);
                      }}
                    >
                      <Link
                        to={"/preview-order"}
                        className=" font-medium text-[18px] text-white no-underline"
                      >
                        Xem giỏ hàng
                      </Link>
                    </button>
                  </div>
                </div>
              </Dropdown>
              <div className="bg-[rgba(255,255,255,0.2)] w-[1px] h-[20px] "></div>
              <Sheet>
                <SheetTrigger>
                  <div className="flex items-center gap-2 relative">
                    <icons.heartthin className=" flex-shrink-0 text-[#fff] text-[16px]"></icons.heartthin>
                    <span className="text-[#fff] text-[14px] whitespace-nowrap">
                      Yêu thích
                    </span>
                    <div className="badge absolute w-[20px] h-[20px] bg-[#ff0000] rounded-full flex items-center justify-center text-[#fff] top-[-12px] left-[9px]">
                      2
                    </div>
                  </div>
                </SheetTrigger>
                <SheetContent className={"w-[490px]"}>
                  <SheetHeader>
                    <SheetTitle>Sản phẩm yêu thích </SheetTitle>
                    <div className={`w-full bg-white `}>
                      <div>
                        <div className="px-[15px] flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <label className="flex items-center checkbox cursor-pointer relative">
                              <input
                                type="checkbox"
                                className="p-[6px] cursor-pointer"
                                onChange={handleSelectWhole}
                              ></input>
                            </label>
                            <span>Chọn tất cả</span>
                          </div>
                        </div>
                        <div className="devide bg-[rgba(0,0,0,.06)] h-[0.8px]  my-[15px]"></div>
                      </div>
                      <div className="pt-[15px] h-[400px]">
                        <div className="flex flex-col gap-3 overflow-y-auto h-full  ">
                          {items?.slice(0, 1).map((item) => (
                            <div className="" key={item.id}>
                              <div
                                className={`flex items-center gap-3 ${
                                  productSelected.some((p) => p.id === item.id)
                                    ? " border-[#0cc021]"
                                    : "border-t-transparent border-x-transparent border-b"
                                } px-[15px] py-[15px] border `}
                              >
                                <label className="flex items-center checkbox relative">
                                  <input
                                    type="checkbox"
                                    className="p-[6px] cursor-pointer relative"
                                    value={item.id}
                                    checked={productSelected.some(
                                      (product) => product.id === item.id
                                    )}
                                    onChange={(event) => {
                                      handleSelectProduct(event, item);
                                    }}
                                  ></input>
                                </label>
                                <div className="flex-auto flex items-start">
                                  <div className="h-[72px]  w-[72px] border-[#ededed] border flex-shrink-0  ">
                                    <img src="	https://image.hsv-tech.io/150x0/bbx/common/626d1395-e9a8-4819-8e28-48069bd9f93f.webp"></img>
                                  </div>
                                  <div className="flex-auto ml-[10px] flex flex-col justify-between h-[72px]">
                                    <div className="">
                                      <div className="flex justify-between items-center">
                                        <div className="mr-[10px] ellipsis_2_lines text-[14px] font-medium">
                                          {item.name}
                                        </div>
                                        <div
                                          className="flex items-center justify-center w-[16px] h-[16px] bg-[rgb(223,223,223)] rounded-[50%] cursor-pointer flex-shrink-0"
                                          onClick={(e) => {
                                            e.preventDefault();
                                            setItems(
                                              items?.filter((i) => {
                                                return i.id !== item.id;
                                              })
                                            );
                                          }}
                                        >
                                          <icons.minus className="text-[12px]"></icons.minus>
                                        </div>
                                      </div>
                                      <span className="text-[12px] font-light">
                                        SKU: {item.sku}
                                      </span>
                                    </div>
                                    <div className="flex items-centers justify-between">
                                      <div className="flex items-center border-[1.5px] border-solid border-[rgb(239,239,239)]   ">
                                        <div className="minus flex items-center justify-center py-[6px] bg-[#ededed] px-[6px]   cursor-pointer">
                                          <icons.minus className="text-[12px] "></icons.minus>
                                        </div>
                                        <div className=" text-center px-[8px]">
                                          1
                                        </div>
                                        <div className="plus flex items-center justify-center py-[6px] bg-[#ededed] px-[6px]  cursor-pointer">
                                          <icons.plus className="text-[12px] "></icons.plus>
                                        </div>
                                      </div>
                                      <div>{item.price}đ</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="devide bg-[rgba(0,0,0,.06)] h-[0.8px]  my-[15px]"></div>
                    </div>
                  </SheetHeader>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
      <div className="px-[80px] bg-[--shop-color-bg]">
        <NavigationMenu>
          {/* <NavigationMenuList> */}
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full group"
          >
            <NavigationMenuList>
              <CarouselContent>
                {navigationList.map((navItem) => (
                  <CarouselItem className="basis-auto bg-none">
                    {!navItem.dropdown ? (
                      <NavigationMenuItem>
                        <NavigationMenuLink
                          asChild
                          className={"text-[--shop-color-main] uppercase"}
                        >
                          <div className="h-[40px] flex items-center px-4 py-2">
                            <a href={navItem?.link} className="leading-[20px]">
                              {navItem.title}
                            </a>
                          </div>
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                    ) : navItem.type === 2 ? (
                      <NavigationMenuItem>
                        <NavigationMenuTrigger
                          className={
                            "bg-none text-[--shop-color-main] uppercase"
                          }
                        >
                          <NavigationMenuLink asChild>
                            <a href={navItem.link}>{navItem.title}</a>
                          </NavigationMenuLink>
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ListItem navList={navItem} />
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                    ) : (
                      <NavigationMenuItem>
                        <NavigationMenuTrigger
                          className={
                            "bg-none text-[--shop-color-main] uppercase"
                          }
                        >
                          <NavigationMenuLink asChild>
                            <a href={navItem.link}>{navItem.title}</a>
                          </NavigationMenuLink>
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ListItem2 navList={navItem} />
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                    )}
                  </CarouselItem>
                ))}
              </CarouselContent>
            </NavigationMenuList>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          {/* </NavigationMenuList> */}
        </NavigationMenu>
      </div>
      {/* <div className="bg-[#f2f2f2] relative group" ref={container_ref}>
        <div
          className=" mx-auto max-w-[1366px] w-[90%] overflow-hidden overflow-x-scroll no-scrollbar"
          ref={brandslide_ref}
        >
          <div className="flex items-center  nav-list gap-[20px]">
            {menuDropDowns?.map((e, index) => (
              <div key={index} className="nav_btn py-[6px] " ref={addToRefs}>
                <Link
                  className="px-3 h-[35px] flex items-center justify-center whitespace-nowrap relative no-underline group/rotate"
                  to={e.link}
                  title={e.name}
                >
                  <span className="text-[16px] text-[#c4123f] uppercase">
                    {e.title}
                  </span>
                  <icons.arrowdown className="text-[12px] text-[#c4123f] group-hover/rotate:rotate-180 transition-all ease-linear duration-150 flex-shrink-0"></icons.arrowdown>
                </Link>
                {e.dropdown ? (
                  <div
                    className={`dropdown_portal fixed z-[99999] right-auto top-[-999em]  left-[-999em]  w-screen max-h-[80vh] `}
                  >
                    {e.type === 1 ? (
                      <Dropdown1 content={e}></Dropdown1>
                    ) : (
                      <Dropdown2 content={e}></Dropdown2>
                    )}
                  </div>
                ) : (
                  ""
                )}
              </div>
            ))}
          </div>
        </div>
        <div
          className={`top-[50%] absolute translate-y-[-50%] left-[2.5%] opacity-0 translate-x-[6px] group-hover:translate-x-0 transition-all ease-linear duration-200 group-hover:opacity-[1] hidden`}
          ref={prev_ref}
          onClick={handlePrevSlide}
        >
          <div className="w-5 h-5 bg-[--primary-bg] flex items-center justify-center cursor-pointer  ">
            <icons.prev className="text-[14px] text-[#fff]"></icons.prev>
          </div>
        </div>
        <div
          className={` top-[50%] absolute translate-y-[-50%] right-[2.5%] opacity-0 translate-x-[6px] group-hover:translate-x-0 transition-all ease-linear duration-200 group-hover:opacity-[1]`}
          ref={next_ref}
          onClick={handleNextSlide}
        >
          <div className="w-5 h-5 bg-[--primary-bg] flex items-center justify-center cursor-pointer  ">
            <icons.next className="text-[14px] text-[rgb(255,255,255)]"></icons.next>
          </div>
        </div>
      </div> */}
    </HeaderStyled>
  );
};
const HeaderStyled = styled.div``;
export default Header;
