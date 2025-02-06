import { CalendarDays, ChevronsRight } from "lucide-react";
import React from "react";
import { Link, useParams } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import moment from "moment";
import { getBlog } from "@/apis/blog";
import { useQuery } from "@tanstack/react-query";
import extractFirstPTag from "@/helpers/extractEntryContent";
import { Outlet } from "react-router-dom";
const Master = () => {
  //   const { slug } = useParams();
  //   const { isPending, isError, error, data } = useQuery({
  //     queryKey: ["blogs", slug],
  //     queryFn: () => getBlog(slug),
  //     enabled: !!slug,
  //   });
  //   if (isPending) {
  //     return "loading";
  //   }
  //   if (isError) {
  //     return error;
  //   }
  return (
    <div className="max-w-[1400px] mx-auto ">
      <div className="flex xl:items-stretch xl:flex-row flex-col">
        <div className="xl:basis-3/4 xl:pr-[15px] max-990:px-3  ">
          <Outlet />
        </div>
        <div className="xl:basis-1/4 xl:mx-[15px] xl:-mt-[15px] mt-[15px] ">
          <div className="sticky top-[30px]">
            <div className=" bg-[#fff] shadow-card">
              <Accordion
                type="single"
                collapsible
                className="w-full"
                defaultValue="item-2"
              >
                <AccordionItem value="item-2">
                  <AccordionTrigger
                    className={
                      " text-[16px] font-bold text-redichi py-[15px] px-5 border-b-[1.6px] border-b-[#e9e9e9] border-solid"
                    }
                  >
                    Bài viết mới nhất
                  </AccordionTrigger>
                  <AccordionContent className={" border-none"}>
                    <ul className=" ">
                      <li className="text-[15px] border-b-[#eee] border-b border-b-solid  py-[15px]   [&:last-child]:border-b-transparent px-5 flex">
                        <div className="relative w-[90px] h-[90px] mr-[10px]">
                          <a href="/" className="overflow-hidden">
                            <LazyLoadImage
                              src="https://product.hstatic.net/200000796751/product/433463625_747151210839345_2721418643196135114_n_b0ed348dfa8640b1a64e5169f207204c_grande.jpg"
                              effect="opacity"
                              className="h-full w-full object-cover"
                            />
                          </a>
                          <span
                            className="h-7 w-7 rounded-full bg-ichi flex items-center justify-center text-[#fff] text-[12px] absolute  border-[2px] solid border-[#fff]"
                            style={{
                              left: 0,
                              transform: "translate(-50%,-50%)",
                              top: "50%",
                            }}
                          >
                            1
                          </span>
                        </div>
                        <div className="flex flex-col flex-auto">
                          <div className="flex items-center">
                            <a
                              href="/"
                              className="cursor-pointer flex-auto w-0 line-clamp-2 text-redtitle text-[13px] mb-[5px] "
                            >
                              Bí Quyết Trang Trí Nội Thất Cho Không Gian Tết Ấm
                              Cúng
                            </a>
                          </div>
                          <span className="text-[12px] text-blackni font-normal">
                            Nguồn cảm hứng
                            <span className="text-[#a8aeba] text-[12px] block">
                              13.11.2024
                            </span>
                          </span>
                        </div>
                      </li>
                      <li className="text-[15px] border-b-[#eee] border-b border-b-solid  py-[15px]   [&:last-child]:border-b-transparent px-5 flex">
                        <div className="relative w-[90px] h-[90px] mr-[10px]">
                          <a href="/" className="overflow-hidden">
                            <LazyLoadImage
                              src="https://file.hstatic.net/200000796751/file/340773628_914405713137378_132217_a2ea90d95131407f8499681d29371458_grande.jpg"
                              effect="opacity"
                              className="h-full w-full object-cover"
                            />
                          </a>
                          <span
                            className="h-7 w-7 rounded-full bg-ichi flex items-center justify-center text-[#fff] text-[12px] absolute  border-[2px] solid border-[#fff]"
                            style={{
                              left: 0,
                              transform: "translate(-50%,-50%)",
                              top: "50%",
                            }}
                          >
                            1
                          </span>
                        </div>
                        <div className="flex flex-col flex-auto">
                          <div className="flex items-center">
                            <a
                              href="/"
                              className="cursor-pointer flex-auto w-0 line-clamp-2 text-redtitle text-[13px] mb-[5px] "
                            >
                              Bỏ Túi 4 Lưu Ý Khi Chọn Mua Sofa Cho
                            </a>
                          </div>
                          <span className="text-[12px] text-blackni font-normal">
                            Nguồn cảm hứng
                            <span className="text-[#a8aeba] text-[12px] block">
                              13.11.2024
                            </span>
                          </span>
                        </div>
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            <div className=" bg-[#fff] shadow-card mt-[30px]">
              <Accordion
                type="single"
                collapsible
                className="w-full"
                defaultValue="item-1"
              >
                <AccordionItem value="item-1">
                  <AccordionTrigger
                    className={
                      " text-[16px] font-bold text-redichi py-[15px] px-5 border-b-[1.6px] border-b-[#e9e9e9] border-solid"
                    }
                  >
                    Danh mục bài viết
                  </AccordionTrigger>
                  <AccordionContent className={" border-none"}>
                    <ul className=" ">
                      <li className="text-[15px] border-b-[#eee] border-b border-b-solid  py-[15px] hover:text-redichi  [&:last-child]:border-b-transparent px-5    hover:marker:text-redni transition-all ease-linear duration-150 ">
                        <a
                          href="/blogs/tin-tuc"
                          className="text-inherit  text-[14px]"
                        >
                          {" "}
                          Bài viết
                        </a>
                      </li>
                      <li className="text-[15px] border-b-[#eee] border-b border-b-solid  py-[15px] hover:text-redichi  [&:last-child]:border-b-transparent px-5    hover:marker:text-redni transition-all ease-linear duration-150 ">
                        <a
                          href="/blogs/nguon-cam-hung"
                          className="text-inherit  text-[14px]"
                        >
                          {" "}
                          Nguồn cảm hứng
                        </a>
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Master;
