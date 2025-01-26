import { CalendarDays, ChevronsRight } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
const BlogDetail = () => {
  const [open, setOpen] = useState(true);
  return (
    <div className="max-w-[1400px] mx-auto ">
      <div className="flex items-stretch">
        <div className="basis-3/4 px-5 bg-[#fff] py-[15px]">
          <h1 className="text-redichi text-[28px] font-bold mb-[10px]">
            "Less Is More" - Xu Hướng Tối GIản Không Gian Sống
          </h1>
          <div className="flex  items-center text-[#74839f] mb-[15px]">
            <div className="flex pr-4 items-center gap-1 text-inherit text-[14px] font-normal relative">
              bởi:
              <span className="text-inherit text-[14px]  font-normal">
                Văn Yên
              </span>
              <div className="absolute w-[5px] h-[5px] rounded-full bg-[#74839f] center-y right-[-2px]"></div>
            </div>
            <span className="text-inherit text-[14px]  font-normal px-4">
              08 tháng 03, 2024
            </span>
          </div>
          <div className="">
            <LazyLoadImage
              src="https://file.hstatic.net/200000796751/article/blog_baya_less_is_more_7c637f52280d4f019200a6c2344d1279.jpg"
              className=""
            />
          </div>
          <div className="py-[8px] px-[15px] border border-solid border-[#e0f1e9] shadow-card-1 rounded ">
            <Accordion
              type="single"
              collapsible
              className="w-full"
              defaultValue="item-2"
              open={open}
              onOpenChange={setOpen}
            >
              <AccordionItem value="item-2">
                <AccordionTrigger
                  iconClassName={"hidden"}
                  className={"pl-[140px] relative"}
                >
                  <span
                    className="text-[#bcbdc1] text-[13px]   font-bold"
                    onClick={() => setOpen((state) => !state)}
                  >
                    [
                    <span className="text-redichi text-[13px] cursor-pointer font-bold">
                      {open ? "Ẩn" : "Hiện"}
                    </span>
                    ]
                  </span>
                  <span
                    className="absolute text-[16px] font-bold top-[50%] translate-y-[-50%] left-0 "
                    onClick={(event) => {
                      event.preventDefault();
                    }}
                  >
                    Các nội dung chính
                  </span>
                </AccordionTrigger>
                <AccordionContent className={" border-none"}>
                  <ul className="  list-outside ml-4 ">
                    <li className="text-[14px] list-disc marker:text-redichi text-coupontext font-normal  relative ">
                      Dành cho đơn hàng từ 400k
                    </li>
                    <li className="text-[14px] list-disc marker:text-redichi text-coupontext font-normal  relative ">
                      Mã khách hàng được sử dụng tối đa 1 lần
                    </li>
                    <li className="text-[14px] list-disc marker:text-redichi text-coupontext font-normal  relative ">
                      Sao chép mã và nhập mã khuyến mãi ở trang thanh toán
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
        <div className="basis-1/4 mx-[15px] ">
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

export default BlogDetail;
