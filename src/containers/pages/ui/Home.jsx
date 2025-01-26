import React, { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { HoverEffectButton, CouponCard } from "../../components";
import {
  category_outstanding,
  poster_notifications,
  card,
  top_keyword,
} from "../../../utils/scrape_data";
import { useMediaQuery } from "@/hooks/useMediaQuery";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { X, Minus, Plus, CircleChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import {
  ProductCardNi,
  ProductCard,
  PostCard,
  CollectionCard,
} from "../../components";
import { Carousel as CarouselAntd } from "antd";
const Home = () => {
  const isDesktop = useMediaQuery("(min-width: 990px)");

  React.useEffect(() => {
    document.title = "Siêu thị nội thất & trang trí Baya";
  }, []);
  return (
    <>
      <HomeStyled>
        <div>
          <section className="banner ">
            <div className=" min-990:px-2 flex-shrink-0 w-full">
              <CarouselAntd
                arrows
                infinite={false}
                effect={isDesktop ? "fade" : ""}
              >
                <div>
                  <a href="/">
                    <LazyLoadImage
                      src="https://theme.hstatic.net/200000796751/1001266995/14/slide_3_img.jpg?v=82"
                      effect="blur"
                    />
                  </a>
                </div>
                <div>
                  <a href="/">
                    <LazyLoadImage
                      src="https://theme.hstatic.net/200000796751/1001266995/14/slide_1_img.jpg?v=82"
                      effect="blur"
                    />
                  </a>
                </div>
                <div>
                  <a href="/">
                    <LazyLoadImage
                      src="https://theme.hstatic.net/200000796751/1001266995/14/slide_4_img.jpg?v=82"
                      effect="blur"
                    />
                  </a>
                </div>
              </CarouselAntd>
            </div>
          </section>
          <div className="flex  items-stretch overflow-y-auto no-scrollbar  max-768:pl-[-30px] mt-[15px] max-768:pr-[15px]">
            <div className=" min-990:basis-1/4 w-[70%] flex-shrink-0 min-990:px-[15px] pl-[15px]  md:w-[40%]">
              <CollectionCard />
            </div>
            <div className=" min-990:basis-1/4 w-[70%] flex-shrink-0 min-990:px-[15px] pl-[15px]  md:w-[40%]">
              {" "}
              <CollectionCard />
            </div>
            <div className=" min-990:basis-1/4 w-[70%] flex-shrink-0 min-990:px-[15px] pl-[15px]  md:w-[40%]">
              {" "}
              <CollectionCard />
            </div>
            <div className=" min-990:basis-1/4 w-[70%] flex-shrink-0 min-990:px-[15px] pl-[15px]  md:w-[40%]">
              {" "}
              <CollectionCard />
            </div>
          </div>
          <section className="bg-collectionichi home-collection p-[15px] relative">
            <div className="pr-[100px] flex items-center gap-3">
              <div className="fade-loading relative w-2 h-2 rounded-full bg-init"></div>
              <h2 className="collection-title">Đồ bếp nhập khẩu cao cấp</h2>
            </div>
            <div className="mt-[15px] ">
              <Carousel
                opts={{
                  align: "start",
                }}
                className="w-full group "
              >
                <CarouselContent>
                  {Array.from({ length: 10 }).map((_, index) => (
                    <CarouselItem
                      key={index}
                      className=" lg:basis-1/5  min-990:basis-1/4 md:basis-1/2 basis-[40%]"
                    >
                      <div className="px-[6px]">
                        <Card className={"rounded-none"}>
                          <CardContent className="flex aspect-square items-center justify-center p-0">
                            <ProductCard />
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="absolute top-[12px] right-[20px] flex items-center gap-4">
                  <CarouselPrevious
                    className={"bg-[#fff] shadow-carousel text-blackni"}
                  />
                  <CarouselNext
                    className={"bg-[#fff] shadow-carousel text-blackni"}
                  />
                </div>
              </Carousel>
            </div>
            <div className="flex items-center justify-center mt-[15px]">
              <HoverEffectButton className={"w-[320px] "}>
                <CircleChevronRight
                  size={20}
                  className="text-inherit inline"
                  strokeWidth={1}
                />
              </HoverEffectButton>
            </div>
          </section>
          <div className="coupon home-collection flex min-990:items-stretch overflow-y-auto no-scrollbar max-768:pl-[15px]  max-768:pr-[15px] ">
            <div className="min-990:basis-1/4 w-[90%] flex-shrink-0 min-990:px-[15px] pl-[15px] md:basis-1/2  [&:first-child]:pl-0 ">
              <CouponCard />
            </div>
            <div className="min-990:basis-1/4 w-[90%] flex-shrink-0 min-990:px-[15px] pl-[15px] md:basis-1/2  [&:first-child]:pl-0 ">
              <CouponCard />
            </div>
            <div className="min-990:basis-1/4 w-[90%] flex-shrink-0 min-990:px-[15px] pl-[15px] md:basis-1/2  [&:first-child]:pl-0 ">
              <CouponCard />
            </div>
          </div>

          <div className=" home-collection md:p-[15px] relative md:px-0">
            <div className="pr-[100px] flex items-center gap-3">
              <h2 className="collection-title capitalize max-768:pl-[15px]">
                Back to school - up to 60%
              </h2>
            </div>
            <div className="mt-[15px] ">
              <Carousel
                opts={{
                  align: "start",
                }}
                className="w-full group "
              >
                <CarouselContent className={""}>
                  {Array.from({ length: 10 }).map((_, index) => (
                    <CarouselItem
                      key={index}
                      className=" lg:basis-1/5  min-990:basis-1/4 md:basis-1/2 basis-[40%]"
                    >
                      <div className="px-[6px]">
                        <Card className={"rounded-none"}>
                          <CardContent className="flex aspect-square items-center justify-center p-0">
                            <ProductCard />
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="absolute top-[12px] max-768:top-[-6px] right-[20px] flex items-center gap-4">
                  <CarouselPrevious
                    className={"bg-[#fff] shadow-carousel text-blackni"}
                  />
                  <CarouselNext
                    className={"bg-[#fff] shadow-carousel text-blackni"}
                  />
                </div>
              </Carousel>
            </div>
            <div className="flex items-center justify-center mt-[15px]">
              <HoverEffectButton className={"w-[320px] "}>
                <CircleChevronRight
                  size={20}
                  className="text-inherit inline"
                  strokeWidth={1}
                />
              </HoverEffectButton>
            </div>
          </div>
          <div className="max-w-[1400px] min-990:px-[15px] home-collection">
            <div className="min-990:py-[15px] min-990:px-5 bg-[url('https://theme.hstatic.net/200000796751/1001266995/14/categorize_img.jpg?v=82')] bg-no-repeat bg-cover relative flex ">
              <div className="absolute   bg-[#000] opacity-35 inset-0"></div>
              <div className="min-990:basis-2/12 basis-1/2 md:basis-1/3 px-[15px] flex flex-col relative max-990:justify-center">
                <h3 className="text-[18px] font-semibold mb-[8px] text-catecolor min-990:text-right  text-center md:text-[20px]">
                  Xu hướng tìm kiếm
                </h3>
                <a
                  href="/collections/all"
                  className="px-[15px] py-[5px] uppercase text-[13px] text-catecolor bg-ichi font-medium block ml-auto rounded-full max-768:rounded-none mx-auto"
                >
                  Xem ngay
                </a>
              </div>
              <div className="min-990:basis-10/12 basis-1/2 md:basis-2/3 relative flex max-768:flex-col overflow-y-auto max-768:h-[160px] no-scrollbar md:flex-row md:py-[15px]">
                <div className="basis-1/2 px-[15px] flex flex-col min-990:basis-1/8 md:basis-1/3 items-center flex-shrink-0 ">
                  <div className="w-full px-[10px]">
                    <a
                      href="/collections/sofa"
                      className=" block w-full bg-[#fff] hover:shadow-scale transition-all ease-linear duration-150 rounded-full "
                    >
                      <LazyLoadImage
                        effect="opacity"
                        src="https://theme.hstatic.net/200000796751/1001266995/14/categorize_1_img.jpg?v=82"
                        className="w-full h-full "
                      />
                    </a>
                  </div>
                  <span className="text-[13px] text-[#fff] text-center mt-[15px] max-990:opacity-0">
                    Sofa
                  </span>
                </div>
                <div className="basis-1/2 px-[15px] flex flex-col min-990:basis-1/8 md:basis-1/3 items-center flex-shrink-0 ">
                  <div className="w-full px-[10px]">
                    <a
                      href="/collections/sofa"
                      className=" block w-full bg-[#fff] hover:shadow-scale transition-all ease-linear duration-150 rounded-full relative"
                    >
                      <LazyLoadImage
                        effect="opacity"
                        src="https://theme.hstatic.net/200000796751/1001266995/14/categorize_2_img.jpg?v=82"
                        className="w-full h-full"
                      />
                    </a>
                  </div>
                  <span className="text-[13px] text-[#fff] text-center mt-[15px] max-990:opacity-0">
                    Sofa
                  </span>
                </div>
                <div className="basis-1/2 px-[15px] flex flex-col min-990:basis-1/8 md:basis-1/3 items-center flex-shrink-0 ">
                  <div className="w-full px-[10px]">
                    <a
                      href="/collections/sofa"
                      className=" block w-full bg-[#fff] hover:shadow-scale transition-all ease-linear duration-150 rounded-full relative"
                    >
                      <LazyLoadImage
                        effect="opacity"
                        src="https://theme.hstatic.net/200000796751/1001266995/14/categorize_3_img.jpg?v=82"
                        className="w-full h-full"
                      />
                    </a>
                  </div>
                  <span className="text-[13px] text-[#fff] text-center mt-[15px] max-990:opacity-0">
                    Sofa
                  </span>
                </div>
                <div className="basis-1/2 px-[15px] flex flex-col min-990:basis-1/8 md:basis-1/3 items-center flex-shrink-0 ">
                  <div className="w-full px-[10px]">
                    <a
                      href="/collections/sofa"
                      className=" block w-full bg-[#fff] hover:shadow-scale transition-all ease-linear duration-150 rounded-full relative"
                    >
                      <LazyLoadImage
                        effect="opacity"
                        src="https://theme.hstatic.net/200000796751/1001266995/14/categorize_4_img.jpg?v=82"
                        className="w-full h-full"
                      />
                    </a>
                  </div>
                  <span className="text-[13px] text-[#fff] text-center mt-[15px] max-990:opacity-0">
                    Sofa
                  </span>
                </div>
                <div className="basis-1/2 px-[15px] flex flex-col min-990:basis-1/8 md:basis-1/3 items-center flex-shrink-0 ">
                  <div className="w-full px-[10px]">
                    <a
                      href="/collections/sofa"
                      className=" block w-full bg-[#fff] hover:shadow-scale transition-all ease-linear duration-150 rounded-full relative"
                    >
                      <LazyLoadImage
                        effect="opacity"
                        src="https://theme.hstatic.net/200000796751/1001266995/14/categorize_5_img.jpg?v=82"
                        className="w-full h-full"
                      />
                    </a>
                  </div>
                  <span className="text-[13px] text-[#fff] text-center mt-[15px] max-990:opacity-0">
                    Sofa
                  </span>
                </div>
                <div className="basis-1/2 px-[15px] flex flex-col min-990:basis-1/8 md:basis-1/3 items-center flex-shrink-0 ">
                  <div className="w-full px-[10px]">
                    <a
                      href="/collections/sofa"
                      className=" block w-full bg-[#fff] hover:shadow-scale transition-all ease-linear duration-150 rounded-full relative"
                    >
                      <LazyLoadImage
                        effect="opacity"
                        src="https://theme.hstatic.net/200000796751/1001266995/14/categorize_6_img.jpg?v=82"
                        className="w-full h-full"
                      />
                    </a>
                  </div>
                  <span className="text-[13px] text-[#fff] text-center mt-[15px] max-990:opacity-0">
                    Sofa
                  </span>
                </div>
                <div className="basis-1/2 px-[15px] flex flex-col min-990:basis-1/8 md:basis-1/3 items-center flex-shrink-0 ">
                  <div className="w-full px-[10px]">
                    <a
                      href="/collections/sofa"
                      className=" block w-full bg-[#fff] hover:shadow-scale transition-all ease-linear duration-150 rounded-full relative"
                    >
                      <LazyLoadImage
                        effect="opacity"
                        src="https://theme.hstatic.net/200000796751/1001266995/14/categorize_7_img.jpg?v=82"
                        className="w-full h-full"
                      />
                    </a>
                  </div>
                  <span className="text-[13px] text-[#fff] text-center mt-[15px] max-990:opacity-0">
                    Sofa
                  </span>
                </div>
                <div className="basis-1/2 px-[15px] flex flex-col min-990:basis-1/8 md:basis-1/3 items-center flex-shrink-0 ">
                  <div className="w-full px-[10px]">
                    <a
                      href="/collections/sofa"
                      className=" block w-full bg-[#fff] hover:shadow-scale transition-all ease-linear duration-150 rounded-full relative"
                    >
                      <LazyLoadImage
                        effect="opacity"
                        src="https://theme.hstatic.net/200000796751/1001266995/14/categorize_8_img.jpg?v=82"
                        className="w-full h-full"
                      />
                    </a>
                  </div>
                  <span className="text-[13px] text-[#fff] text-center mt-[15px] max-990:opacity-0">
                    Sofa
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* <section className=" home-collection ">
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
                          <ProductCard />
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </section> */}
        </div>

        <section className="home-collection ">
          <div className=" flex items-center gap-3 mb-5 justify-between max-990:flex-col max-990:justify-start max-990:items-start max-990:px-[15px]">
            <h2 className="collection-title capitalize">sản phẩm nổi bật</h2>
            <div className="">
              <button className="px-4 py-2 cursor-pointer rounded-full text-[#fff] font-bold border border-solid border-redichi ml-[20px] capitalize bg-redichi max-990:ml-0 max-990:text-[12px] max-990:px-4 ">
                sản phẩm mới
              </button>
              <button className="px-4 py-2 cursor-pointer rounded-full text-[#787878] font-bold border border-solid border-[#eae4e8] ml-[20px] capitalize max-990:text-[12px] max-990:px-4 ">
                sofa new arrival
              </button>
            </div>
          </div>
          <div className="flex items-center">
            <div className="basis-1/5 bg-collectionni max-990:hidden">
              <img
                src="https://theme.hstatic.net/200000796751/1001266995/14/home_coll_1_banner.jpg?v=82"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="min-990:basis-4/5 min-990:pl-[14px] grid grid-cols-5 grid-rows-2 gap-y-[12px] max-990:grid-cols-2 md:flex-auto">
              {Array.from({ length: 3 }).map((_, index) => (
                <div
                  className=" flex-shrink-0 flex-grow-0 px-[6px]"
                  key={index}
                >
                  <ProductCard />
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-center mt-[15px]">
            <HoverEffectButton url={"/collections/san-pham-moi-1"}>
              <strong className="text-inherit">Sản phẩm mới</strong>
            </HoverEffectButton>
          </div>
        </section>
        <section className="banner flex min-990:-mx-[15px] max-990:gap-y-3 max-990:flex-col home-collection">
          <div className="  min-990:basis-1/2 relative px-[15px] ">
            <a
              href="/collections/chan-ga-goi"
              className="w-full block banner-hover-effect overflow-hidden rounded"
            >
              <img
                src="https://theme.hstatic.net/200000796751/1001266995/14/homebanner_1_img.jpg?v=82"
                effect="opacity"
                className="object-cover"
              />
            </a>
          </div>
          <div className="  min-990:basis-1/2 relative px-[15px] ">
            <a
              href="/collections/nen-thom"
              className="w-full block banner-hover-effect overflow-hidden rounded"
            >
              <img
                src="https://theme.hstatic.net/200000796751/1001266995/14/homebanner_2_img.jpg?v=82"
                effect="opacity"
                className="object-cover"
              />
            </a>
          </div>
        </section>
        <section className="home-collection ">
          <div className="flex min-990:items-stretch w-full max-990:flex-col">
            <div className=" min-990:basis-7/10 bg-[#fff] min-990:pt-[20px] min-990:pr-[20px] flex flex-col justify-end  min-990:max-w-[70%] flex-grow-0 relative">
              <div className="">
                <h2 className="collection-title capitalize pl-[20px] max-990:pl-[15px] mb-[15px] max-990:pt-3">
                  Chút xinh xắn cho nhà tắm
                </h2>
                <div className="">
                  <Carousel
                    opts={{
                      align: "start",
                    }}
                    className="w-full group "
                  >
                    <CarouselContent>
                      {Array.from({ length: 3 }).map((_, index) => (
                        <CarouselItem
                          key={index}
                          className="min-1200:basis-1/3 min-990:basis-1/2 basis-[80%] md:basis-1/2"
                        >
                          <div className="px-[6px]">
                            <Card className={"rounded-none"}>
                              <CardContent className="flex p-0 flex-col">
                                {Array.from({ length: 3 }).map((_, index) => (
                                  <ProductCardNi key={index} />
                                ))}
                              </CardContent>
                            </Card>
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <div className="absolute top-[12px] right-[20px] flex items-center gap-4 min-1200:hidden max-990:top-[6px] max-990:right-[10px]">
                      <CarouselPrevious
                        className={"bg-[#fff] shadow-carousel text-blackni"}
                      />
                      <CarouselNext
                        className={"bg-[#fff] shadow-carousel text-blackni"}
                      />
                    </div>
                  </Carousel>
                </div>
              </div>
            </div>
            <div className=" min-990:basis-3/10 flex-shrink-0 bg-categoryni flex-col flex items-center justify-center max-990:px-[15px]">
              <a
                href="/collections/nen-thom"
                className="w-full block banner-hover-effect overflow-hidden "
              >
                <img
                  src="https://theme.hstatic.net/200000796751/1001266995/14/home_collection_3_banner.jpg?v=82"
                  alt=""
                  className="w-full h-full object-cover "
                />
              </a>
            </div>
          </div>
        </section>
        <section className="home-collection posts relative">
          <h2 className="collection-title capitalize  mb-[20px] max-990:pl-[15px]">
            Bài viết mới nhất
          </h2>
          <div className="">
            <Carousel
              opts={{
                align: "start",
              }}
              className="w-full group max-990:px-[15px]"
            >
              <CarouselContent className={""}>
                {Array.from({ length: 10 }).map((_, index) => (
                  <CarouselItem
                    key={index}
                    className=" lg:basis-1/5  min-990:basis-1/4 basis-[80%] md:basis-1/3"
                  >
                    <div className="px-[6px]">
                      <Card className={"rounded-none"}>
                        <CardContent className="flex aspect-square items-center justify-center p-0">
                          <PostCard />
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="absolute top-[3px] right-[20px] flex items-center gap-4 max-990:top-0">
                <CarouselPrevious
                  className={"bg-[#fff] shadow-carousel text-blackni"}
                />
                <CarouselNext
                  className={"bg-[#fff] shadow-carousel text-blackni"}
                />
              </div>
            </Carousel>
          </div>
        </section>
        <div className="fixed bottom-0 right-0 left-0 bg-redni text-[#fff] flex items-center justify-between py-[12px] px-[20px] min-990:hidden z-[40]">
          <span>7 sản phẩm</span>
          <span>2,170,000đ</span>
          <Drawer>
            <DrawerTrigger
              asChild
              className="cursor-pointer text-[#fff] py-2 pl-4"
            >
              <span>Xem chi tiết</span>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader className="text-left rounded-t-[10px] bg-redni">
                <DrawerTitle>
                  <div className="text-[15px]  font-medium text-[#fff] flex items-center justify-between">
                    <span className="text-[14px] font-normal basis-1/3">
                      7 sản phẩm
                    </span>
                    <span className="font-bold basis-1/3 text-center">
                      2,170,000đ
                    </span>
                    <DrawerClose className="text-[#fff] basis-1/3 text-right">
                      <X size={20} className="ml-auto" />
                    </DrawerClose>
                  </div>
                </DrawerTitle>
                <DrawerDescription className={"hidden"}>
                  Thông tin giỏ hàng
                </DrawerDescription>
              </DrawerHeader>
              <div className="py-[15px] ">
                <div className="max-h-[360px] overflow-y-scroll cart-view-scroll">
                  <ul className=" ">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <li
                        className="flex px-[12px] border-b border-solid border-shop py-[20px]"
                        key={index}
                      >
                        <div className="w-[75px] h-[75px] overflow-hidden border border-solid cart-item mr-[15px] flex-shrink-0">
                          <img
                            src="https://product.hstatic.net/200000796751/product/2002535_5b3eede60829490499619fabe5dbd0a9_small.jpg"
                            alt=""
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-auto">
                          <div className="font-semibold text-[14px] pr-[28px] text-[#000] relative">
                            Bát ăn snack gốm sứ ANNE màu ngẫu nhiên H6.5xD11.5
                            <div className="absolute right-0 top-0 center-y cursor-pointer">
                              <X className="text-blackni" size={16} />
                            </div>
                          </div>
                          <div className="flex items-center justify-between ">
                            <div className="flex items-center mt-2">
                              <button className="bg-[#f9f9f9] border border-solid border-[#f3f4f4] rounded-[3px] text-center h-[28px] w-[28px] flex items-center justify-center cursor-pointer">
                                <Minus className="text-blackni" size={16} />
                              </button>
                              <span className="text-[14px] font-bold text-[#252a2b] border border-solid border-[#f3f4f4] text-center h-[28px] w-[38px] bg-[#fff] flex items-center justify-center">
                                1
                              </span>
                              <button className="bg-[#f9f9f9] border border-solid border-[#f3f4f4] rounded-[3px] text-center h-[28px] w-[28px] flex items-center justify-center cursor-pointer">
                                <Plus className="text-blackni" size={16} />
                              </button>
                            </div>
                            <span className="text-blacknitext-[14px] font-bold">
                              29.000đ
                            </span>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="  mb-[20px] flex justify-between items-center py-[10px] leading-6">
                  <span className="text-blackni uppercase text-[14px]">
                    Tổng tiền :
                  </span>
                  <span className="text-redni font-bold text-[16px] ">
                    29.000đ
                  </span>
                </div>
              </div>
              <DrawerFooter className="pt-2">
                <DrawerClose
                  asChild
                  className="block p-[10px] mt-[5px] w-full bg-redni text-[#fff] text-[13px] font-medium cursor-pointe text-center uppercase"
                >
                  <Link to={"/"}>Xem giỏ hàng</Link>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>
      </HomeStyled>
    </>
  );
};
const HomeStyled = styled.div`
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
