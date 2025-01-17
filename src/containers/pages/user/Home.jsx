import React, { useCallback, useEffect, useRef, useState } from "react";
import icons from "../../../utils/icons";
import styled from "styled-components";
import { Concessionary, BrandSlide, LoadMoreBtn } from "../../components";
import {
  category_outstanding,
  poster_notifications,
  card,
  top_keyword,
} from "../../../utils/scrape_data";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { ProductItem } from "../../components";
import { Carousel as CarouselAntd } from "antd";
const Home = () => {
  return (
    <>
      <HomeStyled>
        <div>
          <div>
            <div className="flex w-full ">
              <div className=" px-2 flex-shrink-0 w-full">
                <CarouselAntd arrows infinite={false} effect="fade">
                  <div>
                    <img
                      src={`https://image.hsv-tech.io/1920x0/bbx/common/b4ca5c51-74af-49ad-8f30-aa864ead0533.webp`}
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      src={`https://image.hsv-tech.io/1920x0/bbx/common/76eb16f9-8c61-4031-959b-be134d1b2b07.webp`}
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      src={`https://image.hsv-tech.io/1920x0/bbx/common/cb91cb07-7449-4a2b-87a6-8c9f39372840.webp`}
                      alt=""
                    />
                  </div>
                </CarouselAntd>
              </div>
            </div>
          </div>
          <section className=" home-collection ">
            <Carousel
              opts={{
                align: "start",
              }}
              className="w-full group"
            >
              <CarouselContent>
                {Array.from({ length: 10 }).map((_, index) => (
                  <CarouselItem
                    key={index}
                    className=" lg:basis-1/4 xl:basis-1/5 basis-1/4"
                  >
                    <div className="p-1">
                      <Card className={"rounded-none"}>
                        <CardContent className="flex aspect-square items-center justify-center p-0">
                          <ProductItem />
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </section>
        </div>
        <section className="home-collection ">
          <div className="flex justify-between">
            <a className="text-[--shop-color-title] text-[24px] font-medium">
              Sản phẩm nổi bật
            </a>
            <div className=""></div>
          </div>
          <div className="flex items-center">
            <div className="basis-1/5">
              <img
                src="https://theme.hstatic.net/200000796751/1001266995/14/home_coll_1_banner.jpg?v=82"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="basis-4/5 pl-[14px] grid grid-cols-5 grid-rows-2">
              {Array.from({ length: 10 }).map((_, index) => (
                <div
                  className=" flex-shrink-0 flex-grow-0 px-[6px]"
                  key={index}
                >
                  <ProductItem />
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="home-collection">
          <div className="flex items-center ">
            <div className="basis-7/10 bg-[#fff] pt-[20px] pr-[20px]">
              <a className="text-[--shop-color-title] text-[24px] font-medium">
                Chút xinh cho nhà tắm
              </a>
              <div className="grid grid-cols-3 grid-rows-3 gap-x-3 gap-y-2">
                {Array.from({ length: 9 }).map((_, index) => (
                  <div
                    className="flex items-start border-b pb-[6px] border-solid border-b-[#eae4e8] "
                    key={index}
                  >
                    <div className="w-[100px] h-[100px] overflow-hidden flex-none">
                      <img
                        src="https://product.hstatic.net/200000796751/product/ring_shower_curtain_baya_2002323_copy_c9bd1926a5714f3b871324f3f8a7b55e_small.jpg"
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-auto ">
                      <div className="flex items-center w-full">
                        <a
                          href="/"
                          className="flex-auto w-0 text-[14px] line-clamp-2"
                        >
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Quisquam aut ipsam dicta. Vero provident
                          deserunt voluptatem tempore, sequi commodi cumque.
                        </a>
                      </div>
                      <div className="">
                        <span className="text-[12px] text-[--shop-color-title]">
                          20,300đ
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="basis-3/10">
              <img
                src="https://theme.hstatic.net/200000796751/1001266995/14/home_collection_3_banner.jpg?v=82"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>
        <div className="">
          <BrandSlide />
        </div>
        <div className="pt-[30px] pb-[10px] ">
          <div className=" wrap_content rounded-[21px] pt-[33px] pb-[42px]  w-full bg-[rgb(175,227,239)] ">
            <div className="countdown px-[35px] flex items-center justify-between w-full">
              <div className="countdown_left flash_img ">
                <img
                  src="https://image.hsv-tech.io/575x0/bbx/common/165e9150-d748-49be-954f-9cd6745a42cf.webp"
                  className="w-full h-full object-contain"
                ></img>
              </div>
              <div className="countdown_time flex-col ">
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
            <div className=" pt-[20px] mx-[30px]">
              <Carousel
                opts={{
                  align: "start",
                }}
                className="w-full group"
              >
                <CarouselContent>
                  {Array.from({ length: 10 }).map((_, index) => (
                    <CarouselItem
                      key={index}
                      className=" lg:basis-1/4 xl:basis-1/5 basis-1/4"
                    >
                      <div className="p-1">
                        <Card className={"rounded-none"}>
                          <CardContent className="flex aspect-square items-center justify-center p-0">
                            <ProductItem />
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>
        </div>
        <Concessionary />
        <div className="pt-[30px] pb-[10px] category ">
          <div className="text-center mt-[13px] mb-5">
            <span className="uppercase text-[rgba(0,0,0,.85)] text-[26px] font-bold leading-[36px] ">
              Danh mục nổi bật
            </span>
          </div>
          <div className="">
            <div className="">
              <div className="flex flex-wrap  ml-[-15px]  justify-center gap-y-[15px]">
                {category_outstanding?.map((item, idx) => (
                  <div
                    className="category_item_slide flex flex-col ml-[15px] w-[calc((100%/8)-15px)] group hover:translate-y-[-6px] cursor-pointer  transition duration-300 ease-linear"
                    key={idx}
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
        <div className=" my-[30px]">
          <div className="flex ml-[-20px] items-center">
            <div className="w-[calc((100%/3)-20px)] ml-[20px] rounded-[6px] overflow-hidden shrink-0 cursor-pointer hover:translate-y-[-4px] transition duration-300 ease-linear">
              <img src="https://image.hsv-tech.io/1920x914/bbx/common/7a847e8d-7555-4911-9226-874ad7d5b122.webp"></img>
            </div>
          </div>
        </div>
        <div className="">
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
            <Carousel
              opts={{
                align: "start",
              }}
              className="w-full group"
            >
              <CarouselContent>
                {Array.from({ length: 10 }).map((_, index) => (
                  <CarouselItem
                    key={index}
                    className=" lg:basis-1/4 xl:basis-1/5 basis-1/4"
                  >
                    <div className="p-1">
                      <Card className={"rounded-none"}>
                        <CardContent className="flex aspect-square items-center justify-center p-0">
                          <ProductItem />
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
        <div className="">
          <div className="">
            <div className="text-center my-[13px] ">
              <span className="uppercase text-[rgba(0,0,0,.85)] text-[26px] font-bold leading-[36px] ">
                tìm kiếm nhiều nhất
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
        <div className="">
          <div className="">
            <div className="text-center my-[13px] ">
              <span className="uppercase text-[rgba(0,0,0,.85)] text-[26px] font-bold leading-[36px] ">
                Các sản phẩm đã xem
              </span>
            </div>
            <Carousel
              opts={{
                align: "start",
              }}
              className="w-full group"
            >
              <CarouselContent>
                {Array.from({ length: 10 }).map((_, index) => (
                  <CarouselItem
                    key={index}
                    className=" lg:basis-1/4 xl:basis-1/5 basis-1/4"
                  >
                    <div className="p-1">
                      <Card className={"rounded-none"}>
                        <CardContent className="flex aspect-square items-center justify-center p-0">
                          <ProductItem />
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
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
