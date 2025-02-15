import React, { useState, useRef } from "react";
import { FreeMode, Navigation, Thumbs, Controller } from "swiper/modules";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
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
const Slick = () => {
  const [thumbsSwiper, setThumbsSwiper] = React.useState(null);
  const swipeRef = useRef(null);
  const toSlide = (number) => {
    swipeRef.current?.swiper.slideTo(number);
  };
  return (
    <div className="flex">
      <div className="2md:basis-45 flex-grow-0 w-full">
        <div className="flex flex-col bg-[#fff]">
          <div className=" sticky top-0 flex items-start">
            <div className="flex-grow-0 2md:w-[80px] pt-3 w-[76px] flex-shrink-0 px-3 ">
              <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView="auto"
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiperGallery mt-0 "
                direction="vertical"
              >
                {images.map((img, index) => (
                  <SwiperSlide
                    key={`v-${index}`}
                    style={{
                      position: "relative",
                      paddingBottom: "100%",
                    }}
                  >
                    <LazyLoadImage src={img} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className=" pb-[100%] w-full relative">
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
                      thumbs={{ swiper: thumbsSwiper }}
                      modules={[FreeMode, Navigation, Thumbs]}
                      className="mySwiper2"
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
  );
};

export default Slick;
