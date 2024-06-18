import React, { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { product_images_slide } from "../../utils/scrape_data";
import icons from "../../utils/icons";
import { Concessionary, Item3, SectionItem } from "../components";
const Products = () => {
  const container_ref = useRef();
  const scroll_ref = useRef();
  const next_ref = useRef();
  const prev_ref = useRef();
  const image_ref = useRef([]);
  const [show, setShow] = useState(false);
  const [thumbIndex, setThumbIndex] = useState(0);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [showMagnifier, setShowMagnifiter] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const handleMouseHover = useCallback((e) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    setPosition({ x, y });
    setCursorPosition({
      x: e.pageX - left,
      y: e.pageY - top,
    });
  }, []);
  const addToRefs = (el) => {
    if (el && !image_ref.current.includes(el)) {
      image_ref.current.push(el);
    }
  };
  const handleNextSlide = useCallback(() => {
    let nextIndex = thumbIndex + 1;
    prev_ref.current.classList.remove("hidden");
    prev_ref.current.classList.add("block");
    if (thumbIndex === image_ref.current.length - 2) {
      next_ref.current.classList.add("hidden");
    }
    setThumbIndex((prev) => ++prev);
    scroll_ref.current.scrollTop = image_ref.current[nextIndex].offsetTop;
  }, [thumbIndex]);
  const handlePrevSlide = useCallback(() => {
    let prevIndex = thumbIndex - 1;
    next_ref.current.classList.remove("hidden");
    next_ref.current.classList.add("block");
    if (thumbIndex === 1) {
      prev_ref.current.classList.remove("block");
      prev_ref.current.classList.add("hidden");
    }
    setThumbIndex((prev) => --prev);
    scroll_ref.current.scrollTop = image_ref.current[prevIndex].offsetTop;
  }, [thumbIndex]);

  return (
    <ProductsStyled className="mt-[148px] wrap_container pt-[30px]">
      <div className="flex ">
        <div className="flex_50 px-2 flex">
          <div className="w-[100px] px-[5px] relative">
            <div>
              <div
                className=" flex items-center justify-center cursor-pointer mb-[12px]"
                ref={prev_ref}
                onClick={handlePrevSlide}
              >
                <icons.arrowup className="text-[20px] text-[#000]"></icons.arrowup>
              </div>
              <div ref={container_ref}>
                <div
                  className="overflow-y-auto  h-[50vh] no-scrollbar "
                  ref={scroll_ref}
                >
                  <div className="flex flex-col gap-[20px] relative ">
                    {product_images_slide?.map((item, i) => (
                      <div
                        key={item}
                        className={`${
                          thumbIndex === i
                            ? " border-solid border-[2px] border-[#000]"
                            : "border-solid border-[2px] border-transparent"
                        }`}
                        ref={addToRefs}
                        onClick={(e) => {
                          if (i !== 0) {
                            prev_ref.current.classList.remove("hidden");
                            prev_ref.current.classList.add("block");
                          }
                          setThumbIndex(i);
                          scroll_ref.current.scrollTop =
                            e.currentTarget.offsetTop;
                        }}
                      >
                        <img
                          src={item}
                          className="w-full h-full object-cover"
                        ></img>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div
                className=" flex items-center justify-center cursor-pointer mt-[12px]"
                ref={next_ref}
                onClick={handleNextSlide}
              >
                <icons.arrowdown className="text-[20px] text-[#000]"></icons.arrowdown>
              </div>
            </div>
          </div>
          <div className="flex_75 px-[5px]">
            <div className="relative">
              <div className="absolute  overflow-hidden  ">
                <div
                  className={`flex `}
                  style={{
                    transform: `translateX(-${thumbIndex * 100}%)`,
                    transition: "all .3s linear",
                  }}
                >
                  {product_images_slide?.map((item) => (
                    <div key={item} className="relative shrink-0 w-full">
                      <img
                        onMouseEnter={() => setShowMagnifiter(true)}
                        onMouseLeave={() => setShowMagnifiter(false)}
                        onMouseMove={handleMouseHover}
                        src={item}
                        className=" object-cover h-[50vh] mx-auto max-w-full"
                      ></img>
                      {showMagnifier && (
                        <div
                          style={{
                            position: "absolute",
                            left: `${cursorPosition.x - 100}px`,
                            top: `${cursorPosition.y - 100}px`,
                            pointerEvents: "none",
                          }}
                        >
                          <div
                            className="magnifer_image w-[200px]  h-[200px] rounded-[50%] border-white border-solid border-[2px]"
                            style={{
                              backgroundImage: `url(${item})`,
                              backgroundPosition: `${position.x}% ${position.y}%`,
                            }}
                          ></div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex_50 px-2 ">
          <div className="bread_crumb">Trang chủ & sản phẩm</div>
          <div className="product_info">
            <div className="brand_name uppercase">ahc</div>
            <div className="info_title w-[90%] leading-[130%] text-[20px] font-bold ">
              [Trải Nghiệm Combo 11 Mặt Nạ HOT Nhất] Mặt Nạ AHC + Goodal +
              Dermatory Dưỡng Da Sáng & Săn Mịn
            </div>
            <div className="flex items-center">
              <div className="flex items-center gap-[8px]">
                <icons.fillStar></icons.fillStar>
                <icons.fillStar></icons.fillStar>
                <icons.fillStar></icons.fillStar>
                <icons.fillStar></icons.fillStar>
                <icons.fillStar></icons.fillStar>
                (3)
              </div>
              <div className="devide bg-[rgba(0,0,0,.08)] w-[0.8px] mx-[15px] h-[10px]"></div>

              <div className="flex items-center gap-[8px]">
                <div className="flex items-center justify-center w-5 h-5">
                  <icons.heart_fill className="text-red-500 "></icons.heart_fill>
                </div>
                <span>1</span>
              </div>
              <div className="devide bg-[rgba(0,0,0,.06)] w-[0.8px] mx-[15px] h-[10px]"></div>
              <div>
                <span className="font-bold ">xuất sứ: </span>
                <span>hàn quốc</span>
              </div>
              <div className="devide bg-[rgba(0,0,0,.06)] w-[0.8px] mx-[15px] h-[10px]"></div>
              <div>
                <span className="font-bold ">sku: </span>
                <span>449790</span>
              </div>
            </div>
            <div className="text-[20px] font-bold">329.000đ</div>
            <div className="payment_method_item_wrapper flex items-center justify-between my-[10px]">
              <div>
                <b className="text-[16px] font-semibold mr-[3px]">Từ</b>
                <span className="text-[20px] font-bold text-[rgb(82,182,168)]">
                  30.305đ
                </span>
              </div>
              <div className="flex items-center gap-[6px]">
                <span>với</span>
                <div>
                  <img
                    src="https://image.hsv-tech.io/400x0/bbx/common/0e2ff2ff-bcd3-489b-a302-908acfb09c9a.webp"
                    className="max-w-full h-[14px]"
                  ></img>
                </div>
                <div>
                  <icons.question className="text-[rgb(119,119,119)]"></icons.question>
                </div>
                <div className="ml-[20px]">
                  <img
                    src="https://image.hsv-tech.io/400x0/bbx/common/2ab38d94-de0a-41f6-be9e-5cc51de489b5.webp"
                    className="max-w-full h-[20px]"
                  ></img>
                </div>
              </div>
            </div>
            <div className="payment_method_item_wrapper flex items-center justify-between ">
              <div>
                <b className="text-[16px] font-semibold mr-[3px]">Từ</b>
                <span className="text-[20px] font-bold text-[rgb(0,69,202)]">
                  106.333đ
                </span>
              </div>
              <div className="flex items-center gap-[6px]">
                <span>với</span>
                <div>
                  <img
                    src="https://image.hsv-tech.io/400x0/bbx/common/3a4054ce-a218-4fbb-bfab-944b6c226ff7.webp"
                    className="max-w-full h-[14px]"
                  ></img>
                </div>
                <div>
                  <icons.question className="text-[rgb(119,119,119)]"></icons.question>
                </div>
                <div className="ml-[20px] price_off">Giảm 70K</div>
              </div>
            </div>
            <div className="product_extra">
              <div className="leading-[22px] font-semibold ">
                Các sản phẩm được tặng kèm
                <div>Chọn 1 trong những quà tặng sau</div>
              </div>
              <div className="">
                <label className="flex items-center cursor-pointer">
                  <div className=" w-4 h-4 flex items-center justify-center">
                    <input
                      type="radio"
                      name="product"
                      value={1}
                      className="input_radio_hidden hidden "
                    ></input>
                    <div className=" relative   input_radio rounded-[50%] "></div>
                  </div>
                  <div className=" flex_1 px-[8px] flex items-center">
                    <div className="mr-[10px]">
                      <img
                        src="https://image.hsv-tech.io/400x0/bbx/products/5b1e3778-6e2a-45d6-b437-8ae51ba54d93.webp"
                        className="w-[45px]"
                      ></img>
                    </div>
                    <div className="flex_1">
                      <div className="font-semibold">
                        Kem Dưỡng AHC Làm Sáng Vùng Da Mắt Luminous Glow Real
                        Eye Cream For Face 30Ml
                      </div>
                      <div className="text-[12px]">30ml, more12m</div>
                    </div>
                  </div>
                </label>
                <label className="flex items-center cursor-pointer">
                  <div className=" w-4 h-4 flex items-center justify-center">
                    <input
                      type="radio"
                      name="product"
                      value={2}
                      className="input_radio_hidden hidden"
                    ></input>
                    <div className=" relative input_radio rounded-[50%]"></div>
                  </div>
                  <div className=" flex_1 px-[8px] flex items-center">
                    <div className="mr-[10px]">
                      <img
                        src="https://image.hsv-tech.io/400x0/bbx/products/5b1e3778-6e2a-45d6-b437-8ae51ba54d93.webp"
                        className="w-[45px]"
                      ></img>
                    </div>
                    <div className="flex_1">
                      <div className="font-semibold">
                        Kem Dưỡng AHC Làm Sáng Vùng Da Mắt Luminous Glow Real
                        Eye Cream For Face 30Ml
                      </div>
                      <div className="text-[12px]">30ml, more12m</div>
                    </div>
                  </div>
                </label>
              </div>
            </div>
            <div className="promotion_message">
              Chương trình áp dụng đồng bộ tại website & hệ thống cửa hàng
            </div>
            <div className="delivery_wrapper">
              <h2 className="mb-[10px] leading-[26px] text-[18px] font-bold">
                Hình thức mua hàng
              </h2>
              <div className=" flex flex-col gap-y-[10px]">
                <label className="flex items-center cursor-pointer">
                  <div className=" w-4 h-4 flex items-center justify-center">
                    <input
                      type="radio"
                      name="payment"
                      value={1}
                      className="input_radio_hidden hidden "
                    ></input>
                    <div className=" relative   input_radio rounded-[50%] "></div>
                  </div>
                  <div className=" flex_1 px-[8px] flex items-center">
                    Giao hàng
                  </div>
                </label>
                <label className="flex items-center cursor-pointer">
                  <div className=" w-4 h-4 flex items-center justify-center">
                    <input
                      type="radio"
                      name="payment"
                      value={2}
                      className="input_radio_hidden hidden"
                    ></input>
                    <div className=" relative input_radio rounded-[50%]"></div>
                  </div>
                  <div className=" flex_1 px-[8px] flex items-center">
                    <div className="flex_1 flex gap-1">
                      <strong>Click & Collect</strong>
                      <span> Mua và lấy hàng tại cửa hàng</span>
                      <div className="flex items-center justify-center group">
                        <span className="font-bold group-hover:text-[#c73231]">
                          chọn cửa hàng
                        </span>
                        <div className="flex items-center justify-center group-hover:text-[#c73231]">
                          <icons.arrowdown className="text-[20px]"></icons.arrowdown>
                        </div>
                      </div>
                    </div>
                  </div>
                </label>
              </div>
              <div className="devide bg-[rgba(0,0,0,.06)] h-[0.8px]  w-full mt-[15px] mb-[10px]"></div>
              <div className="flex items-center justify-between group cursor-pointer">
                <div className="flex items-center">
                  <div className=" text-[#c73231] mr-[12px] text-[20px] ">
                    <icons.store2></icons.store2>
                  </div>
                  <div className="font-bold mr-[12px] group-hover:text-[#c73231]">
                    18 / 20
                  </div>
                  <span className="group-hover:text-[#c73231]">
                    chi nhánh còn mặt hàng này
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="font-bold group-hover:text-[#c73231]">
                    Xem tất cả các cửa hàng
                  </span>
                  <div className="flex items-center justify-center group-hover:text-[#c73231]">
                    <icons.next className="text-[20px]"></icons.next>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-[10px] mt-[30px] flex-wrap">
              <div className="flex items-center border-[1.5px] border-solid border-[rgb(239,239,239)]  rounded-full ">
                <div className="minus flex items-center justify-center  w-10 h-[50px] cursor-pointe">
                  <icons.minus></icons.minus>
                </div>
                <div className="quantity_text text-center">1</div>
                <div className="plus flex items-center justify-center w-10 h-[50px] cursor-pointer">
                  <icons.plus></icons.plus>
                </div>
              </div>
              <div className="flex items-center btn_black py-[14px] px-[23px] rounded-full gap-3 cursor-pointer flex-auto justify-center">
                <div>
                  <icons.cart className="text-[20px]"></icons.cart>
                </div>
                <span className="text-[16px]">Thêm vào giỏ hàng</span>
              </div>
              <div className="gradient_header  py-[14px] px-[23px] rounded-full">
                Mua ngay
              </div>
              <div className="flex items-center justify-center w-[50px] h-[50px] border border-solid border-[#000] rounded-[50%] cursor-pointer">
                <icons.heartthin className="text-[24px]"></icons.heartthin>
              </div>
            </div>
            <div className="flex items-center flex-wrap gap-y-[10px] mt-[30px]">
              <div className="px-[5px] flex_50 flex items-center gap-2">
                <div>
                  <icons.emptyStar className="text-[20px]"></icons.emptyStar>
                </div>
                <div>
                  Cam kết <strong>hàng chính hãng</strong>
                </div>
              </div>
              <div className="px-[5px] flex_50 flex items-center gap-2">
                <div>
                  <icons.real className="text-[20px]"></icons.real>
                </div>
                <div>
                  Cam kết <strong>hàng chính hãng</strong>
                </div>
              </div>
              <div className="px-[5px] flex_50 flex items-center gap-2">
                <div>
                  <icons.delivertruck className="text-[20px]"></icons.delivertruck>
                </div>
                <div>
                  <strong>Miễn phí giao</strong>
                  hàng 24h
                </div>
              </div>
              <div className="px-[5px] flex_50 flex items-center gap-2">
                <div>
                  <icons.swap className="text-[20px]"></icons.swap>
                </div>
                <div>
                  Đổi/trả hàng trong <strong>7 ngày</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Concessionary />
      <div className="devide bg-[rgba(0,0,0,.08)]  mx-auto h-[0.8px] max-w-[1366px]"></div>
      <div className="mt-[50px]"></div>
      <div className="mt-[200px]">
        <div className="flex">
          <div className="flex_33 font-bold leading-[35px] text-[24px] mb-[25px]">
            Giới thiệu
          </div>
          <div className="">
            <div className={show ? "h-auto" : " h-[200px] overflow-hidden"}>
              <div className="w-full h-full relative overflow-hidden">
                <div className="p-[10px] combo">
                  <p className="font-bold ">**Combo gồm:</p>
                  <p className="combo_detail">
                    1 Mặt Nạ Vàng Chống Lão Hóa AHC Premium Hydra Gold Foil Mask{" "}
                  </p>
                  <p>
                    Mặt Nạ Giấy Làm Sáng Trắng Da AHC Premium Vital C Complex
                    Cellulose Mask
                  </p>
                  <p>
                    1 Mặt Nạ Giấy Dưỡng Ẩm Làm Dịu Da Goodal Houttuynia Cordata
                    Calming Mask 30Ml (Heartleaf)
                  </p>
                  <p>
                    Mặt Nạ Làm Sáng Da Dermatory Pro Niacin Shot Brightening
                    Ampoule Mask
                  </p>
                  <p>
                    2 Mặt Nạ Làm Sáng Da Goodal Green Tangerine Vita C Dark Spot
                    Care Serum Sheet Mask 28Ml
                  </p>
                  <p>
                    2 Mặt nạ làm dịu da Goodal Tea Tree Infused Water Mild Sheet
                    Mask
                  </p>
                </div>
                <div
                  className={`bg_cover absolute ${show ? "hidden" : ""}`}
                ></div>
              </div>
            </div>
            <div
              className="font-bold cursor-pointer mt-5 uppercase text-[18px] text-center hover:underline"
              onClick={() => {
                setShow((prev) => !prev);
              }}
            >
              {show ? "Ẩn bớt nội dung" : "Xem thêm nội dung"}
            </div>
          </div>
        </div>
      </div>
      <div className="devide bg-[rgba(0,0,0,.08)]  mx-auto h-[0.8px] max-w-[1366px] my-5 "></div>
      <div className="flex">
        <div className="flex_33 px-[15px]">
          <div className="flex items-center justify-between">
            <span className="font-bold text-[20px]">0 đánh giá</span>
            <button className="underline font-medium text-[18px]">
              viết đánh giá
            </button>
          </div>
          <div className="flex gap-2 mb-5">
            <icons.fillStar className="text-[20px] text-[#f0f0f0]"></icons.fillStar>
            <icons.fillStar className="text-[20px] text-[#f0f0f0]"></icons.fillStar>
            <icons.fillStar className="text-[20px] text-[#f0f0f0]"></icons.fillStar>
            <icons.fillStar className="text-[20px] text-[#f0f0f0]"></icons.fillStar>
            <icons.fillStar className="text-[20px] text-[#f0f0f0]"></icons.fillStar>
          </div>
          <div>
            <div className="mt-[15px] flex items-center gap-3">
              <span className="text-[18px] mr-3">5</span>
              <div className="flex-auto bg-[#dfdfdf] rounded-full h-[5px]"></div>
              <span>(0)</span>
            </div>
            <div className="mt-[15px] flex items-center gap-3">
              <span className="text-[18px] mr-3">4</span>
              <div className="flex-auto bg-[#dfdfdf] rounded-full h-[5px]"></div>
              <span>(0)</span>
            </div>
            <div className="mt-[15px] flex items-center gap-3">
              <span className="text-[18px] mr-3">3</span>
              <div className="flex-auto bg-[#dfdfdf] rounded-full h-[5px]"></div>
              <span>(0)</span>
            </div>
            <div className="mt-[15px] flex items-center gap-3">
              <span className="text-[18px] mr-3">2</span>
              <div className="flex-auto bg-[#dfdfdf] rounded-full h-[5px]"></div>
              <span>(0)</span>
            </div>
            <div className="mt-[15px] flex items-center gap-3">
              <span className="text-[18px] mr-3">1</span>
              <div className="flex-auto bg-[#dfdfdf] rounded-full h-[5px]"></div>
              <span>(0)</span>
            </div>
          </div>
        </div>
        <div className="flex_66 px-[15px] ">
          <div className="my-[32px] ">
            <div className="flex items-center justify-center">
              <icons.envelope className="text-[30px] text-[#dfdfdf]"></icons.envelope>
            </div>
            <div className="text-center text-[#dfdfdf]">No Data</div>
          </div>
        </div>
      </div>
      <div className="devide bg-[rgba(0,0,0,.08)]  mx-auto h-[0.8px] max-w-[1366px] my-5 "></div>
      <div className="flex ">
        <div className="flex_33 px-[15px]">
          <div className="font-bold text-[24px] mb-[5px]">Hỏi đáp</div>
          <div className="text-[20px] mb-5">
            Vui lòng{" "}
            <strong className="underline cursor-pointer">Đăng nhập </strong>để
            được giải đáp thắc mắc về sản phẩm
          </div>
        </div>
        <div className="flex_66 px-[15px]">
          <div className="bg-[rgb(246,246,246)] px-[3px] py-[7px] rounded-[5px] flex">
            <div className="flex items-center justify-center">
              <icons.search className="text-[20px]"></icons.search>
            </div>
            <div className="flex-auto">
              <input
                className=" w-full h-full ml-2"
                type="text"
                placeholder="Có câu hỏi? Tìm lời giải đáp nhanh chóng"
              ></input>
            </div>
          </div>
          <div>Chưa có câu hỏi nào</div>
        </div>
      </div>
      <div className="devide bg-[rgba(0,0,0,.08)]  mx-auto h-[0.8px] max-w-[1366px] my-5 "></div>
      <div className="flex">
        <div className="flex_33 px-[15px]">
          <div className="font-bold text-[20px]">Sản phẩm liên quan</div>
          <div className="font-medium text-[18px] cursor-pointer underline"></div>
        </div>
        <div className="flex_66 px-[15px]">
          <Item3 />
        </div>
      </div>
      <div className="devide bg-[rgba(0,0,0,.08)]  mx-auto h-[0.8px] max-w-[1366px] my-5 "></div>
      <SectionItem title={"Các mẫu bạn đã xem"} />
    </ProductsStyled>
  );
};
const ProductsStyled = styled.div`
  .quantity_text {
    width: 40px;
    height: 50px;
    font-weight: 700;
    font-size: 18px;
    line-height: 26px;
    padding: 13px 0px;
  }
  .delivery_wrapper {
    border: 2px solid transparent;
    background: linear-gradient(white, white) padding-box padding-box,
      linear-gradient(
          90deg,
          rgb(255, 212, 0) 0%,
          rgb(199, 49, 48) 50.52%,
          rgb(102, 54, 149) 99.61%
        )
        border-box border-box;
    padding: 15px 18px;
    margin-top: 20px;
    border-radius: 10px;
  }
  .promotion_message {
    border-radius: 5px;
    border: 1px solid rgb(255, 170, 152);
    background: rgba(255, 170, 152, 0.1);
    padding: 15px 20px;
    margin: 20px 0px;
  }
  .input_radio {
    transition: all 0.2s linear;
    border: 1px solid #d9d9d9;
    width: 16px;
    height: 16px;
  }
  .input_radio:hover {
    border-color: var(--primary-color);
  }
  .input_radio_hidden:checked + .input_radio {
    width: 8px;
    height: 8px;
    background-color: var(--primary-color);
    box-shadow: 0 0 0 4px white, 0 0 0 5px var(--primary-color);
  }

  .product_extra {
    border: 1px dashed var(--primary);
    border-radius: 10px;
    padding: 20px;
    margin-top: 20px;
    margin-bottom: 20px;
    max-height: 30vh;
    overflow: auto;
  }
  .price_off {
    background-color: rgb(0, 69, 202);
    color: rgb(255, 255, 255);
    border-radius: 6px;
    padding: 5px 10px;
    font-size: 10px;
  }
  .bread_crumb {
    color: var(--text-breadcrumb);
  }
  .brand_name {
    color: rgb(176, 16, 15);
    margin: 5px 0px;
    font-weight: 700;
  }
`;
export default Products;
