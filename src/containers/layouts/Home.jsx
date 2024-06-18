import React, { useCallback, useEffect, useRef, useState } from "react";
import icons from "../../utils/icons";
import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";
import styled from "styled-components";
import {
  Item,
  NextButton,
  PrevButton,
  DiscoveryAllBtn,
  SectionItem,
  Concessionary,
  BrandSlide,
} from "../components";
import {
  category_outstanding,
  poster_notifications,
  card,
  top_keyword,
} from "../../utils/scrape_data";
const Home = () => {
  return (
    <>
      <HomeStyled>
        <div className={`wrap_container mt-[150px]`}>
          <div className="slider_container ">
            <div className="flex ">
              <div className="main_slider px-2 w-[calc((100%/3)*2)] flex-shrink-0">
                <div className=" w-full rounded-lg overflow-hidden relative">
                  <CCarousel
                    controls
                    transition="crossfade"
                    className="relative"
                  >
                    <CCarouselItem>
                      <CImage
                        className="d-block w-100"
                        src={`https://image.hsv-tech.io/1920x0/bbx/common/b4ca5c51-74af-49ad-8f30-aa864ead0533.webp`}
                        alt="slide 1"
                      />
                    </CCarouselItem>
                    <CCarouselItem>
                      <CImage
                        className="d-block w-100"
                        src={`https://image.hsv-tech.io/1920x0/bbx/common/cb91cb07-7449-4a2b-87a6-8c9f39372840.webp`}
                        alt="slide 2"
                      />
                    </CCarouselItem>
                    <CCarouselItem>
                      <CImage
                        className="d-block w-100"
                        src={`https://image.hsv-tech.io/1920x0/bbx/common/76eb16f9-8c61-4031-959b-be134d1b2b07.webp`}
                        alt="slide 3"
                      />
                    </CCarouselItem>
                  </CCarousel>
                </div>
              </div>
              <div className="left_poster px-2 flex flex-col justify-between ">
                <div className="w-full  rounded-lg overflow-hidden">
                  <img
                    src="https://image.hsv-tech.io/1920x0/bbx/common/ec4a06da-581b-4501-b9ee-2572cebce60c.webp"
                    className="w-full h-full object-cover"
                  ></img>
                </div>
                <div className="w-full  rounded-lg overflow-hidden">
                  <img
                    src="https://image.hsv-tech.io/1920x0/bbx/common/895b1237-c58b-48f5-87af-b55a0473302f.webp"
                    className="w-full h-full object-cover"
                  ></img>
                </div>
              </div>
            </div>
          </div>
        </div>
        <SectionItem title={"top sản phẩm bán chạy"} />
        <BrandSlide />

        <div className="pt-[30px] pb-[10px] ">
          <div className="wrap_container wrap_content rounded-[21px] pt-[33px] pb-[42px]  w-full bg-[rgb(175,227,239)] ">
            <div className="countdown px-[35px] flex items-center justify-between w-full">
              <div className="countdown_left flash_img ">
                <img
                  src="https://image.hsv-tech.io/575x0/bbx/common/165e9150-d748-49be-954f-9cd6745a42cf.webp"
                  className="w-full h-full object-contain"
                ></img>
              </div>
              <div className="countdown_time flex flex-col ">
                <span className="text-[16px] mb-[5px] leading-[23px] font-semibold">
                  Thời gian còn lại
                </span>
                <div className="countdown_area">
                  <div>
                    <span>00</span>
                    ngày
                  </div>
                  <div>
                    <span>00</span>
                    ngày
                  </div>
                  <div>
                    <span>00</span>
                    ngày
                  </div>
                  <div>
                    <span>00</span>
                    ngày
                  </div>
                </div>
              </div>
              <div className="discover">
                <div className="discover_btn cursor-pointer "> xem tất cả</div>
              </div>
            </div>
            <div className="wrap_container pt-[20px]">
              <Item width={260} />
            </div>
          </div>
        </div>
        <Concessionary />
        <div className="pt-[30px] pb-[10px] category wrap_container">
          <div className="text-center mt-[13px] mb-5">
            <span className="uppercase text-[rgba(0,0,0,.85)] text-[26px] font-bold leading-[36px] ">
              Danh mục nổi bật
            </span>
          </div>
          <div className="">
            <div className="">
              <div className="flex flex-wrap  ml-[-15px]  justify-center gap-y-[15px]">
                {category_outstanding?.map((item) => (
                  <div
                    className="category_item_slide flex flex-col ml-[15px] w-[calc((100%/8)-15px)] group hover:translate-y-[-6px] cursor-pointer  transition duration-300 ease-linear"
                    key={item.category}
                  >
                    <div className="category_image ">
                      <img
                        src={item.category_image}
                        className="w-full h-full object-cover "
                      ></img>
                    </div>
                    <div className="category  text-center">
                      <span className="text-[16px] font-medium w-full whitespace-wrap group-hover:font-bold ">
                        {item.category_title}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="wrap_container my-[30px]">
          <div className="flex ml-[-20px] items-center">
            <div className="w-[calc((100%/3)-20px)] ml-[20px] rounded-[6px] overflow-hidden shrink-0 cursor-pointer hover:translate-y-[-4px] transition duration-300 ease-linear">
              <img src="https://image.hsv-tech.io/1920x914/bbx/common/7a847e8d-7555-4911-9226-874ad7d5b122.webp"></img>
            </div>
          </div>
        </div>
        <div className="wrap_container">
          <div className="">
            <div className="text-center my-[13px] ">
              <span className="uppercase text-[rgba(0,0,0,.85)] text-[26px] font-bold leading-[36px] ">
                xu hướng làm đẹp
              </span>
            </div>
            <div className="flex items-center justify-center gap-6">
              <span className="text-[rgb(129,129,129)] leading-[23px] text-[16px] hover:font-bold hover:text-[#000] cursor-pointer py-[12px] hover:translate-y-[-4px] transition duration-300 ease-linear ">
                trang điểm
              </span>
              <span className="text-[rgb(129,129,129)] leading-[23px] text-[16px] hover:font-bold hover:text-[#000] cursor-pointer py-[12px] hover:translate-y-[-4px] transition duration-300 ease-linear mr-[12px]">
                dưỡng da
              </span>
              <span className="text-[rgb(129,129,129)] leading-[23px] text-[16px] hover:font-bold hover:text-[#000] cursor-pointer py-[12px] hover:translate-y-[-4px] transition duration-300 ease-linear mr-[12px] ">
                làm đẹp
              </span>
            </div>
            <div className="relative">
              <Item width={260} />
              <NextButton />
              <PrevButton />
            </div>
            <DiscoveryAllBtn />
          </div>
        </div>
        <SectionItem title={"gợi ý chăm da mùa hè"} />
        <div className="wrap_container">
          <div className="">
            <div className="text-center my-[13px] ">
              <span className="uppercase text-[rgba(0,0,0,.85)] text-[26px] font-bold leading-[36px] ">
                xu hướng làm đẹp
              </span>
            </div>
            <div className="flex items-center justify-center gap-[10px] flex-wrap">
              {top_keyword?.map((item) => (
                <div key={item} className=" grow-0">
                  <div className="text-[#000] leading-[23px] text-[16px] hover:font-bold  cursor-pointer   py-[10px] px-[20px] bg-[rgb(246,246,246)] rounded-[38px] grow-0">
                    {item}
                  </div>
                </div>
              ))}
            </div>
            <div className="relative py-[30px]">
              <div className="flex items-center ml-[-20px] ">
                {card?.map((item) => (
                  <div
                    className="ml-[20px] w-[calc((100%/4)-20px] rounded-[6px] overflow-hidden cursor-pointer hover:translate-y-[-4px] transition duration-300 ease-linear"
                    key={item}
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
        </div>
        <SectionItem title={"các mẫu bạn đã xem"} />
      </HomeStyled>
    </>
  );
};
const HomeStyled = styled.div`
  .brands_slide {
    scroll-behavior: smooth;
  }
  .brands_slide::-webkit-scrollbar {
    display: none;
  }

  .top_sale {
    display: block !important;
  }
  .wrap_content {
    display: block !important;
  }
  .flash_img {
    flex: 0 0 25%;
    font-weight: 700;
    font-size: 25px;
    line-height: 36px;
  }
  .countdown_area {
    padding: 10px 0px;
    width: 100%;
    -webkit-box-pack: center;
    justify-content: center;
    background: rgb(255, 255, 255);
    border-radius: 10px;
    display: flex;
  }
  .countdown_area > div > span {
    font-size: 24px;
    color: rgb(0, 104, 210);
    margin-right: 5px;
    line-height: 29px;
    font-weight: 700;
  }
  .countdown_area > div {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
  }
  .countdown_area > div::after {
    content: "";
    border-left: 1px solid rgba(0, 104, 210, 0.2);
    position: absolute;
    height: 20px;
    left: 0px;
    top: 16%;
  }
  .discover {
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    text-align: end;
    align-self: flex-end;
    flex: 0 0 25%;
  }
  .discover_btn {
    font-size: 16px;
    font-weight: 600;
    line-height: 23px;
    border-radius: 10px !important;
    background: rgb(255, 255, 255);
    color: rgb(0, 104, 210);
    padding: 12px 20px;
    height: auto;
  }
  .category_image {
    height: 100%;
    text-align: center;
    width: 100%;
    aspect-ratio: 1 / 1;
  }
  .category_item_slide {
    border: 1px solid rgb(239, 239, 239);
    border-radius: 10px;
    padding: 14px 20px 20px;
  }
`;
export default Home;
