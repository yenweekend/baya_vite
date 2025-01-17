import React, { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { product_images_slide } from "../../../utils/scrape_data";
import icons from "../../../utils/icons";
import { Concessionary } from "../../components";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { LoadMoreBtn } from "../../components";
import { useQuery } from "@tanstack/react-query";
import { getProductDetail } from "../../../apis/product.api";
import { Button } from "../../components";
const sl =
  "son-thoi-hieu-ung-li-min-dear-dahlia-lip-paradise-effortless-matte-lipstick-32g";
const ProductDetail = () => {
  const params = useParams();
  const container_ref = useRef();
  const scroll_ref = useRef();
  const next_ref = useRef();
  const prev_ref = useRef();
  const desc_ref = useRef();
  const image_ref = useRef([]);
  const [image, setImages] = useState([]);
  const [attributeAvailable, setAttrbuteAvailable] = useState([]);
  const [slug, setSlug] = useState(params.slug);
  const [show, setShow] = useState(false);
  const [thumbIndex, setThumbIndex] = useState(0);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [showMagnifier, setShowMagnifiter] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [selectedAttributes, setSelectedAttributes] = useState({});
  const [productVariant, setProductVariant] = useState(null);
  const addToRefs = (el) => {
    if (el && !image_ref.current.includes(el)) {
      image_ref.current.push(el);
    }
  };

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
  const handleAttributeChange = useCallback((attributeName, value) => {
    setSelectedAttributes((prev) => ({
      ...prev,
      [attributeName]: value,
    }));
  }, []);
  useEffect(() => {
    if (image_ref && image_ref.current.length > 0) {
      scroll_ref.current.scrollTop = image_ref.current[thumbIndex].offsetTop;
    }
  }, [thumbIndex, image_ref]);

  useEffect(() => {
    setSlug(params.slug);
  }, [params]);

  const { isLoading, error, data } = useQuery({
    queryKey: ["productDetailData", slug],
    queryFn: () => getProductDetail(slug),
    enabled: !!slug,
  });
  useEffect(() => {
    if (data) {
      const images = [...data.data.data.productDetail["Images"]];
      const variantImages = data.data.data["productDetail"][
        "ProductVariants"
      ].map((variant) => {
        return { img_url: variant.thumbnail, id: variant.id };
      });
      setImages([...images, ...variantImages]);
    }
  }, [data]);
  useEffect(() => {
    if (data) {
      if (
        Object.keys(selectedAttributes).length ===
        data.data.data["attributes"].length
      ) {
        const variantMatches = data.data.data["variants"].filter((variant) =>
          Object.entries(selectedAttributes).every(
            ([key, value]) => variant.attributes[key] === value
          )
        );
        // one variant matches
        setProductVariant(variantMatches[0]);
      } else {
        if (data && Object.keys(selectedAttributes).length > 0) {
          const variantMatches = data.data.data["variants"].filter((variant) =>
            Object.entries(selectedAttributes).every(
              ([key, value]) => variant.attributes[key] === value
            )
          );
          setAttrbuteAvailable(variantMatches);
          // if(variantMatches.length === 1)
          // {
          //   setProductVariant(variantMatches[0]);
          // }
        }
      }
    }
  }, [selectedAttributes, data]);
  useEffect(() => {
    if (productVariant && image) {
      let thumbIndex;
      thumbIndex = image.findIndex((item) => item?.id === productVariant.id);
      setThumbIndex(thumbIndex);
    }
  }, [productVariant, image]);

  if (isLoading) {
    return "Loading";
  }
  if (error) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <ProductsStyled className="mt-[30px]">
      <div className="flex gap-[12px]">
        <div className="basis-1/2 bg-[#fff] p-[15px] flex">
          <div className="w-[100px] px-[5px] relative">
            <div>
              <div
                className=" flex items-center justify-center cursor-pointer mb-[12px] hidden"
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
                    {image?.map((item, i) => (
                      <div
                        key={i}
                        className={`${
                          thumbIndex === i
                            ? " border-solid border-[2px] border-[#000]"
                            : "border-solid border-[2px] border-transparent"
                        } cursor-pointer`}
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
                          src={item?.img_url}
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
                  {image?.map((item, index) => (
                    <div key={index} className="relative shrink-0 w-full">
                      <img
                        onMouseEnter={() => setShowMagnifiter(true)}
                        onMouseLeave={() => setShowMagnifiter(false)}
                        onMouseMove={handleMouseHover}
                        src={item?.img_url}
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
                              backgroundImage: `url(${item?.img_url})`,
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
        <div className="basis-1/2 bg-[#fff]  p-[15px]">
          <div className="product_info">
            <div className="">
              <Link
                to={`/brand/${data.data.data["productDetail"]?.Brand?.slug}`}
                className="brand_name uppercase no-underline"
              >
                {data.data.data["productDetail"]?.Brand?.name}
              </Link>
            </div>
            <div className="info_title leading-[130%] text-[20px] font-bold my-[5px]">
              {data.data.data["productDetail"]?.name}
            </div>
            <div className="flex flex-wrap items-center product-origin mb-[15px]">
              <div className="text-[--shop-color-text] text-[13px] font-normal capitalize">
                xuất sứ:
                <b className="text-[--shop-color-main]"> Hàn Quốc</b>
              </div>
              <div className="devide bg-[rgba(0,0,0,.06)] w-[0.8px] mx-[15px] h-[10px]"></div>
              <div className="text-[--shop-color-text] text-[13px] font-normal capitalize">
                Mã sản phẩm:
                <b className="text-[--shop-color-main]"> 2022604763</b>
              </div>
              <div className="devide bg-[rgba(0,0,0,.06)] w-[0.8px] mx-[15px] h-[10px]"></div>

              <div className="text-[--shop-color-text] text-[13px] font-normal capitalize">
                Tình trạng:
                <b className="text-[--shop-color-main]"> Còn hàng</b>
              </div>
            </div>
            <div className="h-[60px] w-full bg-[#fafafa]  flex items-center p-8">
              <span className="text-[--shop-color-text] mr-[100px] font-bold">
                Giá:{" "}
              </span>
              <strong className="text-[#ff0000] text-[32px]">20.000đ</strong>
            </div>
            <div className="variants mt-3">
              {data.data.data["attributes"].map((attrs) =>
                attrs.attributeSlug === "mau" ? (
                  <>
                    <div className="mb-[15px]">
                      <div className="mb-2" key={attrs.attributeSlug}>
                        <span className=" text-[14px] font-bold mr-2">
                          {attrs.attributeName}:{" "}
                        </span>
                        <span className="text-[14px]">
                          M109 MONICA - đỏ mận
                        </span>
                      </div>
                      <div className="flex items-center flex-wrap gap-2 mt-2 ">
                        {attrs["values"].map((attr_value) => (
                          <div
                            className={`${
                              Object.keys(selectedAttributes).length === 0
                                ? ""
                                : Object.keys(selectedAttributes).length ===
                                    1 &&
                                  Object.keys(selectedAttributes)[0] ===
                                    attrs.attributeName
                                ? ""
                                : attributeAvailable.some((item) =>
                                    Object.values(item.attributes).includes(
                                      attr_value.value
                                    )
                                  )
                                ? ""
                                : "opacity-25 cursor-not-allowed"
                            }`}
                            key={attr_value.value}
                            onClick={(e) => {
                              handleAttributeChange(
                                attrs.attributeName,
                                attr_value.value
                              );
                            }}
                          >
                            <div
                              className={`w-[30px] h-[30px] rounded-full cursor-pointer border border-transparent transition-all ease-linear duration-75  ${
                                Object.values(selectedAttributes).some(
                                  (item) => item === attr_value.value
                                )
                                  ? "translate-y-[-2px] selected-color "
                                  : ""
                              }`}
                              style={{
                                backgroundColor: `${attr_value.value}  `,
                              }}
                            ></div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="mb-[15px]">
                      <div className=" mb-2" key={attrs.attributeSlug}>
                        <span className=" text-[14px] font-bold mr-2">
                          {attrs.attributeName}:{" "}
                        </span>
                      </div>
                      <div className="variants flex  gap-3">
                        {attrs["values"].map((attr_value) => (
                          <>
                            <div
                              className={`flex gap-2 items-center justify-normal ${
                                Object.values(selectedAttributes).some(
                                  (item) => item === attr_value.value
                                )
                                  ? "selected "
                                  : "border border-solid border-black"
                              } transition-all ease-linear duration-100  px-4 py-2 cursor-pointer relative overflow-hidden ${
                                Object.keys(selectedAttributes).length === 0
                                  ? ""
                                  : Object.keys(selectedAttributes).length ===
                                      1 &&
                                    Object.keys(selectedAttributes)[0] ===
                                      attrs.attributeName
                                  ? ""
                                  : attributeAvailable.some((item) =>
                                      Object.values(item.attributes).includes(
                                        attr_value.value
                                      )
                                    )
                                  ? ""
                                  : "opacity-25 cursor-not-allowed"
                              }`}
                              key={attr_value.value}
                              onClick={(e) => {
                                handleAttributeChange(
                                  attrs.attributeName,
                                  attr_value.value
                                );
                              }}
                            >
                              <>
                                {attr_value.value}
                                {Object.values(selectedAttributes).some(
                                  (item) => item === attr_value.value
                                ) ? (
                                  <div className="absolute w-6 h-6 rounded-[50%] bg-[#E4003A] bottom-[-6px] right-[-6px]">
                                    <icons.check
                                      color="white"
                                      className="absolute top-[2px] left-[2px] text-[18px] font-bold"
                                    ></icons.check>
                                  </div>
                                ) : (
                                  ""
                                )}
                              </>
                            </div>
                          </>
                        ))}
                      </div>
                    </div>
                  </>
                )
              )}
            </div>
            <LoadMoreBtn />

            <div className="product_extra ">
              <div className="leading-[22px] font-semibold ">
                Các sản phẩm được tặng kèm
                <div>Chọn 1 trong những quà tặng sau</div>
              </div>
              <div className="flex flex-col overflow-y-auto no-scrollbar max-h-[30vh]">
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
            <div className="flex items-center mt-[15px]">
              <span className="text-[--shop-color-text] font-bold text-[14px] mr-[100px]">
                Số lượng
              </span>
              <div className="flex items-center  w-[120px]  ">
                <div className=" flex items-center justify-center  border border-solid border-[#f3f4f4] w-10 h-10 cursor-pointe">
                  <icons.minus></icons.minus>
                </div>
                <div className="border border-solid border-[#f3f4f4] w-10 h-10 flex items-center justify-center text-[14px] font-bold">
                  1
                </div>
                <div className=" flex items-center justify-center border border-solid border-[#f3f4f4] w-10 h-10 cursor-pointer">
                  <icons.plus></icons.plus>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-[10px] mt-[30px] flex-wrap">
              <div className="flex items-center  py-[10px] px-[25px]  gap-3 cursor-pointer flex-auto justify-center bg-[#ff0000] text-[#fff]">
                <div>
                  <icons.cart className="text-[20px]"></icons.cart>
                </div>
                <span className="text-[16px]">Thêm vào giỏ hàng</span>
              </div>
              <Button>Mua ngay</Button>
            </div>
            <div className="flex items-center flex-wrap gap-y-[10px] mt-[30px]">
              <div className="px-[5px] basis-1/2 flex items-center gap-2">
                <div>
                  <icons.emptyStar className="text-[20px] text-[--shop-color-main]"></icons.emptyStar>
                </div>
                <div>
                  Cam kết <strong>hàng chính hãng</strong>
                </div>
              </div>
              <div className="px-[5px] basis-1/2 flex items-center gap-2">
                <div>
                  <icons.real className="text-[20px] text-[--shop-color-main]"></icons.real>
                </div>
                <div>
                  Cam kết <strong>hàng chính hãng</strong>
                </div>
              </div>
              <div className="px-[5px] basis-1/2 flex items-center gap-2">
                <div>
                  <icons.delivertruck className="text-[20px] text-[--shop-color-main]"></icons.delivertruck>
                </div>
                <div>
                  <strong>Miễn phí giao</strong>
                  hàng 24h
                </div>
              </div>
              <div className="px-[5px] basis-1/2 flex items-center gap-2">
                <div>
                  <icons.swap className="text-[20px] text-[--shop-color-main]"></icons.swap>
                </div>
                <div>
                  Đổi/trả hàng trong <strong>7 ngày</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
                <div className="w-full h-full" ref={desc_ref}></div>
                {/* <div className="p-[10px] combo">
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
                </div> */}
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
        <div className="flex_66 px-[15px]"></div>
      </div>
      <div className="devide bg-[rgba(0,0,0,.08)]  mx-auto h-[0.8px] max-w-[1366px] my-5 "></div>
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
  .selected {
    border: 1px solid #e4003a;
    transform: translateY(-3px);
    transition: all 0.3s linear;
    color: #e4003a;
  }
  .selected-color {
    box-shadow: 0 0 0 3px #fff, 0 0 0 4px red;
  }
`;
export default ProductDetail;
