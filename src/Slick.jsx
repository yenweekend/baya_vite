import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, FreeMode, Navigation } from "swiper/modules";
const images = [
  "https://product.hstatic.net/200000796751/product/2002531.5_70d2def5b3144bac9b5f4c9ac526e5a9_master.jpg",
  "https://product.hstatic.net/200000796751/product/2002531.2_7e7692a23b814190996c2252338bcf0b_master.jpg",
  "https://product.hstatic.net/200000796751/product/z6192936196928_5b74d6b043ae5037aa3360d13da83cf9_2ef26af446854e86b3cd24df07d7ee89_large.jpg",
  "https://product.hstatic.net/200000796751/product/2002531.3_8ad76c5474d64991b0ee42ebdfd4fd5a_master.jpg",
  "https://product.hstatic.net/200000796751/product/2002527.2_acffaf6d910445b1b29e0593ff392ba5_large.jpg",
  "https://product.hstatic.net/200000796751/product/2002594.1_28576b72d7804b78b9313b3615ac8000_large.png",
  "https://product.hstatic.net/200000796751/product/2002532.2_55e3a75b8ebd475a834b313a76afa437_large.jpg",
  "https://product.hstatic.net/200000796751/product/inspire_1_6aa84a7e4479464e83f5dfa859f385fb_large.jpg",
  "https://product.hstatic.net/200000796751/product/inspire_13_bb588c2be67b45dc963a70157cef55a9_large.png",
];
export default function Slick() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const swipeRef = useRef(null);
  const swiperThumbRef = useRef(null);
  const toSlide = (number) => {
    if (swiperThumbRef && swiperThumbRef.current) {
      setCurrentIdx(number);
      const imageHeight =
        swiperThumbRef.current.querySelector("img").clientHeight;
      swiperThumbRef.current.style.transform = `translateY(-${
        imageHeight * number
      }px)`;
    }
    swipeRef.current?.swiper.slideTo(number, 200);
  };

  return (
    <>
      <div className="flex">
        <div className="2md:basis-45 flex-grow-0 w-full mt-[100px]">
          <div className="flex flex-col bg-[#fff] ">
            <div className=" sticky top-0 flex items-stretch">
              <div className="flex-grow-0 2md:w-[80px] pt-3 w-[76px] flex-shrink-0 px-3 relative overflow-hidden ">
                <div className="absolute inset-0  px-3 overflow-y-auto no-scrollbar my-3">
                  <div
                    className=" flex flex-col transition-all ease-linear duration-300 "
                    ref={swiperThumbRef}
                  >
                    {images.map((img, idx) => (
                      <div
                        className={`${
                          currentIdx === idx
                            ? "border-redichi"
                            : "border-[#eee]"
                        } [&:not(last-child)]:mb-4 border border-solid  transition-all ease-linear duration-150 cursor-pointer`}
                        key={idx}
                        onClick={() => toSlide(idx)}
                      >
                        <img
                          src={img}
                          alt=""
                          className="h-full w-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="w-full">
                <div className=" pb-[100%] w-full relative ">
                  <div className="absolute w-full h-full ">
                    <div className=" w-full  flex  flex-row-reverse  ">
                      <div
                        className={
                          "overflow-hidden flex-auto pr-[6px] pl-[12px] py-[6px]"
                        }
                      >
                        <Swiper
                          ref={swipeRef}
                          style={{
                            "--swiper-navigation-color": "#fff",
                            "--swiper-pagination-color": "#fff",
                          }}
                          loop={false}
                          spaceBetween={10}
                          navigation={true}
                          modules={[FreeMode, Navigation]}
                          className="mySwiper2"
                          onSlideChange={(swiper) => {
                            if (swiperThumbRef && swiperThumbRef.current) {
                              setCurrentIdx(swiper.activeIndex);

                              const imageHeight =
                                swiperThumbRef.current.querySelector(
                                  "img"
                                ).clientHeight;
                              swiperThumbRef.current.style.transform = `translateY(-${
                                imageHeight * swiper.activeIndex
                              }px)`;
                            }
                          }}
                        >
                          {images.map((img) => (
                            <SwiperSlide
                              style={{
                                width: "100%",
                                paddingBottom: "100%",
                                position: "relative",
                              }}
                            >
                              <a
                                // href={img}
                                className="h-full absolute inset-0 object-cover w-full"
                                data-fancybox="gallery"
                              >
                                <img
                                  src={img}
                                  className={"h-full  object-cover "}
                                  effect="blur"
                                />
                              </a>
                            </SwiperSlide>
                          ))}
                        </Swiper>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <button className="p-3 bg-red-400 " onClick={() => toSlide(0)}>
            click 1
          </button>
          <button className="p-3 bg-red-400 " onClick={() => toSlide(1)}>
            click 2
          </button>
          <button className="p-3 bg-red-400 " onClick={() => toSlide(2)}>
            click 0
          </button>
        </div>
      </div>
    </>
  );
}
