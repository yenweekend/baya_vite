import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import icons from "../../../utils/icons";
import { BreadCrumb } from "../../components";
import { card } from "../../../utils/scrape_data";
import { useLocation } from "react-router-dom";
const Category = () => {
  const location = useLocation();
  const [hidden, setHidden] = useState(false);
  const popover_filter_ref = useRef();
  const btn_ref = useRef();
  const clickOutSide = (e) => {
    if (
      !popover_filter_ref.current.classList.contains("hidden") &&
      !popover_filter_ref.current.contains(e.target) &&
      !btn_ref.current.contains(e.target)
    ) {
      popover_filter_ref.current.classList.add("hidden");
    }
  };
  useEffect(() => {
    console.log(location);
    document.addEventListener("mousedown", clickOutSide);
    return () => {
      document.removeEventListener("mousedown", clickOutSide);
    };
  }, []);

  return (
    <CategoryStyled className="mt-[150px]">
      <div className="wrap_container">
        <div className="flex justify-between">
          <div className="flex flex-col ">
            <BreadCrumb
              url={{
                pathname: location.pathname,
                vie: "trang điểm",
              }}
            />

            <div className="font-bold text-[25px] mt-[20px] mb-[15px] uppercase">
              trang điểm
            </div>
          </div>
          <div className="flex items-center cursor-pointer">
            <div>
              <img src="	https://beautybox.com.vn/images/scan-image.gif"></img>
            </div>
            <div>Tìm kiếm bằng hình ảnh</div>
          </div>
        </div>
      </div>
      <div className="wrap_container flex items-center justify-between mb-[10px]">
        <div className="relative flex_25 ">
          <div className="max-w-[260px] uppercase font-bold text-[20px]">
            bộ lọc
          </div>
        </div>
        <div className="flex_33">
          <div className="flex flex-wrap gap-[8px]">
            <div className="flex items-center border border-solid border-[#000] px-[11px] py-[3px] max-w-[200px] overflow-hidden rounded-full  mr-2">
              <div className="flex items-center">
                <span className="flex items-center justify-center">
                  Kem dưỡng mặt
                </span>
                <div className="ml-[5px] cursor-pointer flex items-center">
                  <icons.close className="text-[16px] leading-[100%] w-4 h-4"></icons.close>
                </div>
              </div>
            </div>
            <div className="">
              <button className=" text-[14px] cursor-pointer underline px-[11px] py-[3px] ">
                Xóa hết
              </button>
            </div>
          </div>
        </div>
        <div className="flex_41 flex items-end justify-end">
          <div className="flex  items-center gap-2">
            <div>70 kết quả</div>
            <div>Lọc theo</div>

            <div
              className="flex items-center cursor-pointer relative"
              onClick={() => {
                popover_filter_ref.current.classList.toggle("hidden");
              }}
              ref={btn_ref}
            >
              <span className="font-bold text-[16px]">Tất cả</span>
              <icons.arrowdown className="text-[16px]"></icons.arrowdown>
              <div
                className="absolute py-1 rounded-[8px]  shadow-[rgba(17,17,26,0.1)_0px_0px_16px] top-[120%] right-0 "
                ref={popover_filter_ref}
              >
                <div className="whitespace-nowrap text-[16px] font-semibold hover:bg-[#f3f3f3] px-3 py-1">
                  Giá tăng dần
                </div>
                <div className="whitespace-nowrap text-[16px] font-semibold hover:bg-[#f3f3f3] px-3 py-1">
                  Giá giảm dần
                </div>
                <div className="whitespace-nowrap text-[16px] font-semibold hover:bg-[#f3f3f3] px-3 py-1">
                  % giảm
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="wrap_container flex ">
        <div className="flex_25 ">
          <div className="max-w-[263px]">
            <div>
              <div
                className="flex items-center justify-between py-3 pr-[16px] cursor-pointer"
                onClick={() => {
                  setHidden((prev) => !prev);
                }}
              >
                <div className="text-[16px] font-bold">Giá sản phẩm</div>
                <div className="flex items-center justify-center">
                  {!hidden ? (
                    <icons.arrowup className="text-[18px] transition ease-linear duration-100"></icons.arrowup>
                  ) : (
                    <icons.arrowdown className="text-[18px] transition ease-linear duration-100"></icons.arrowdown>
                  )}
                </div>
              </div>
              <div className="">
                <div
                  className={`py-3 pr-[16px] flex flex-col gap-3  ${
                    hidden ? "is_wearoff" : ""
                  }`}
                >
                  <div>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        className="hidden input_checkbox"
                      ></input>
                      <div className="input_filter relative">
                        <div className="absolute "></div>
                      </div>
                      Dưới 500.000đ
                    </label>
                  </div>
                  <div>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        className="hidden input_checkbox"
                      ></input>
                      <div className="input_filter relative">
                        <div className="absolute "></div>
                      </div>
                      500.000₫ - 1.000.000₫
                    </label>
                  </div>
                  <div>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        className="hidden input_checkbox"
                      ></input>
                      <div className="input_filter relative">
                        <div className="absolute "></div>
                      </div>
                      1.000.000₫ - 1.500.000₫
                    </label>
                  </div>
                  <div>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        className="hidden input_checkbox"
                      ></input>
                      <div className="input_filter relative">
                        <div className="absolute "></div>
                      </div>
                      1.500.000₫ - 2.000.000₫
                    </label>
                  </div>
                  <div>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        className="hidden input_checkbox"
                      ></input>
                      <div className="input_filter relative">
                        <div className="absolute "></div>
                      </div>
                      trên 2.000.000₫
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex_75">
          <div className="w-full flex flex-wrap gap-y-4"></div>
        </div>
      </div>
      <div className="wrap_container">
        <div className="relative py-[30px]">
          <div className="flex items-center ml-[-20px] ">
            {card?.map((item) => (
              <div
                className="ml-[20px] w-[calc((100%/4)-20px] rounded-[6px] overflow-hidden cursor-pointer hover:translate-y-[-4px] transition duration-300 ease-linear"
                key={item}
              >
                <img src={item} className="w-full h-full object-cover"></img>
              </div>
            ))}
          </div>
        </div>
      </div>
    </CategoryStyled>
  );
};
const CategoryStyled = styled.div`
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
  .is_wearoff {
    animation: wearoff 0.3s forwards linear;
  }
`;
export default Category;
