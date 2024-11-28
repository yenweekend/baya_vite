import React from "react";
import { useRef, forwardRef, useState, useCallback ,useEffect} from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Dropdown1, Dropdown2 } from "../components";
import menuDropDowns from "../../utils/dropdown";
import icons from "../../utils/icons";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {Button, Drawer}  from "antd";

const Header = ({ category}, ref) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [open, setOpen] = useState(false);
  const [openWishlist, setOpenWishlist] = useState(false);
  const brandslide_item_ref = useRef([]);
  const [items,setItems] = useState([
    {
      id: 1, 
      name: "set 5 mặt nạ giấy",
      sku: 'abcdha',
      checked: false,price: 50000,
    },
    {
      id: 2, 
      name: "sữa rửa mặt",
      sku: 'abcdha',
      checked: false,price: 3000,
    },
    {
      id: 3, 
      name: "khẩu trang",
      sku: 'abcdha',
      checked: false,price: 2000,
    },
    {
      id: 4, 
      name: "bím tóc",
      sku: 'ahhhhhf',
      checked: false,price: 2000,
    },
    {
      id: 5, 
      name: "bím tóc 1",
      sku: 'ahhhhhf',
      checked: false,price: 2000,
    },
    {
      id: 6, 
      name: "bím tóc 2",
      sku: 'ahhhhhf',
      checked: false,price: 2000,
    },
  ])
  const checkAllRef = useRef();
  const container_ref = useRef();
  const next_ref = useRef();
  const prev_ref = useRef();
  const brandslide_ref = useRef();
  const handleCheckAll = (event) => {
    setItems(items.map(item => ({ ...item, checked: event.target.checked })));
  };
  const showDrawer = () => {
    setOpen(true);
  };
  const showDrawerWishlist = () => {
    setOpenWishlist(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const onCloseuWishlist = () => {
    setOpenWishlist(false);
  };
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
  useEffect(() => {
    const isAll = items.every(item => item.checked);
    if (checkAllRef.current) {
      checkAllRef.current.checked = isAll;
    }
},[items]);
  return (
    <HeaderStyled
      className={`page_header fixed w-full top-0 right-0 left-0 h-[148px] z-[1000] bg-[#fff]`}
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
            <Link className="flex items-center cursor-pointer no-underline" to={"/register"}>
              <div>
                <icons.userthin className={`text-[30px]`}></icons.userthin>
               </div>
              <span className="title">Đăng nhập</span>
            </Link>
            <Button onClick={showDrawerWishlist}>
              <div className="cursor-pointer">
                <icons.heartthin className={`text-[24px]`}></icons.heartthin>
              </div>
            </Button>
            <Drawer title="Thứ t yêu" onClose={onCloseuWishlist} open={openWishlist} >
              <div className="p-[20px] flex flex-col gap-3">
                <div className="flex items-center gap-3 ">
                  <div className="w-[42px] h-[42px] overflow-hidden flex-shrink-0" >
                    <img src="https://image.hsv-tech.io/150x0/bbx/common/906cb875-3ec2-400d-9ed2-aab078c8eee3.webp" alt="" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex flex-col">
                    <span className="uppercase font-bold">Combo 14 Mặt Nạ Giấy Dermatory Dưỡng Da Săn Chắc, Sáng Mịn (4 Vita-A Retinal + 10 Pro Shot)</span>
                    <div className="flex justify-between mt-2">
                      <span className="">400.000đ</span>
                      <button className="" type="button">Xóa</button>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 ">
                  <div className="w-[42px] h-[42px] overflow-hidden flex-shrink-0" >
                    <img src="https://image.hsv-tech.io/150x0/bbx/common/906cb875-3ec2-400d-9ed2-aab078c8eee3.webp" alt="" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex flex-col">
                    <span className="uppercase font-bold">Combo 14 Mặt Nạ Giấy Dermatory Dưỡng Da Săn Chắc, Sáng Mịn (4 Vita-A Retinal + 10 Pro Shot)</span>
                    <div className="flex justify-between mt-2">
                      <span className="">400.000đ</span>
                      <button className="" type="button">Xóa</button>
                    </div>
                  </div>
                </div>
              
              </div>
            </Drawer>
            <Button  onClick={showDrawer}>
            <div className="cursor-pointer relative">
              <icons.bagthin className={`text-[24px]`}></icons.bagthin>
              <div className="absolute w-5 h-5 bg-[#C80036] rounded-[50%] flex items-center justify-center top-[-3px] right-[-7px] text-white text-[12px]">
                2
              </div>
            </div>
            </Button>
            <Drawer title="Giỏ hàng của tôi" onClose={onClose} open={open} >
            <div className={`w-[490px]   bg-white `} >
            <div>
              <div className="flex items-center px-[15px] mb-[30px] gap-3 mt-2">
                <div className=" rounded-full text-center bg-black text-white  text-[16px] flex-auto py-2 cursor-pointer">
                  Giao hàng (2)
                </div>
                <div className=" rounded-full text-center bg-[rgb(239,239,239)] text-black  text-[16px] flex-auto py-2 cursor-pointer">
                  Lấy tại cửa hàng (0)
                </div>
              </div>
              <div className="px-[15px]">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="hidden input_checkbox"
                    onChange={handleCheckAll}
                    ref={checkAllRef}
                  ></input>
                  <div className="input_filter relative mr-2">
                    <div className="absolute "></div>
                  </div>
                  Chọn tất cả
                </label>
              </div>
              <div className="devide bg-[rgba(0,0,0,.06)] h-[0.8px]  my-[15px]"></div>
            </div>
            <div className="pt-[15px] h-[400px]">
              <div className="flex flex-col gap-3 overflow-y-auto h-full px-[15px] scrollbar">
                {
                  items?.map((item) => (
                    <label className="flex items-center" key={item.id}>
                      <input
                        type="checkbox"
                        className="hidden input_checkbox"
                        value={item.id}
                        checked={item.checked}
                        onChange={() => {
                          setItems(items?.map((e) => {
                            return e.id === item.id ? { ...e, checked: !e.checked} : e;
                          }))
                        }}
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
                              {item.name}
                            </div>
                            <div className="flex items-center justify-center w-[22px] h-[22px] bg-[rgb(223,223,223)] rounded-[50%] cursor-pointer" onClick={(e) =>{
                              e.preventDefault();
                              setItems(items?.filter((i) => {
                                return i.id !== item.id 
                              }))
                            } }>
                              <icons.minus className="text-[16px]"></icons.minus>
                            </div>
                          </div>
                          <div>SKU: {item.sku}</div>
                          <div className="flex items-centers justify-between">
                            <div className="flex items-center border-[1.5px] border-solid border-[rgb(239,239,239)]  rounded-full ">
                              <div className="minus flex items-center justify-center   cursor-pointer">
                                <icons.minus className="text-[25px] py-[3px] px-[7px]"></icons.minus>
                              </div>
                              <div className="quantity_text text-center">1</div>
                              <div className="plus flex items-center justify-center  cursor-pointer">
                                <icons.plus className="text-[25px] py-[3px] px-[7px]"></icons.plus>
                              </div>
                            </div>
                            <div>{item.price}đ</div>
                          </div>
                        </div>
                      </div>
                    </label>

                  ))
                }
                
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
                <div className="gradient_header rounded-full h-10 px-5 py-[5px] text-center cursor-pointer mt-2" onClick={() => {
                   setPopup(false);
                }} >
                  <Link to={'/preview-order'} className=" font-medium text-[18px] text-white no-underline">
                    Tiếp tục với hình thức giao hàng
                  </Link>
                </div>
              </div>
          </div>
            </Drawer>
          </div>
        </div>
      </div>
      <div className="" ref={container_ref}>
        <div
          className="menu_otps mx-auto max-w-[1366px] w-[90%] bg-[#fff] overflow-hidden overflow-x-scroll no-scrollbar"
          ref={brandslide_ref}
        >
          <div className="flex items-center  menu_lists gap-[20px]">
            {menuDropDowns?.map((e, index) => (
       
                <div key={index} className=" nav_btn" ref={addToRefs}>
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
const HeaderStyled = styled.div`
   
`;
export default forwardRef(Header);
