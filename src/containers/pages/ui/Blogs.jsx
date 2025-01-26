import { CalendarDays, ChevronsRight } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
const Blogs = () => {
  return (
    <div className="max-w-[1400px] mx-auto ">
      <div className="flex items-stretch">
        <div className="basis-3/4 pr-[30px]">
          <h1 className="text-redichi text-[28px] font-bold mb-5">
            Nguồn cảm hứng
          </h1>
          <div className="flex mx-[-15px] items-stretch flex-wrap gap-y-[30px]">
            <div className="basis-1/2 px-[15px]  ">
              <div className="shadow-card h-full">
                <div className="w-full h-full flex flex-col justify-between">
                  <div className="overflow-hidden">
                    <a
                      className="post-image w-full relative pb-[100%] block banner-hover-effect hover:rotate-[-3deg] hover:scale-110 transition-all ease-linear duration-300"
                      href="/"
                    >
                      <div
                        className="absolute inset-0
          "
                      >
                        <LazyLoadImage
                          src="https://file.hstatic.net/200000796751/article/blog_baya_tt_noi_that_cho_kg_tet_am_cung_7a6ea0bed99949b6ba1e22c67f3eef42_grande.jpg"
                          effect="blur"
                          className="w-full h-full absolute inset-0"
                        />
                      </div>
                    </a>
                  </div>
                  <div className="py-[10px] px-[17px] bg-[#fff] flex flex-col flex-auto">
                    <h3 className="text-[16px] mb-[5px] font-bold leading-[1.2] flex items-center">
                      <Link
                        href={"/"}
                        className="block w-0 flex-auto line-clamp-2 text-redichi font-bold text-[20px]"
                      >
                        Bí Quyết Trang Trí Nội
                      </Link>
                    </h3>
                    <div
                      className="mt-auto
                    "
                    >
                      <div className="flex items-center mb-[15px] ">
                        <p className="text-blackni font-normal w-0 flex-auto line-clamp-2 text-[16px]">
                          Tết Nguyên Đán không chỉ là dịp để sum họp gia đình mà
                          còn là cơ hội để làm mới không gian sống của chúng ta.
                          Việc trang trí nội thất sao cho vừa mang...
                        </p>
                      </div>
                      <div className="flex  items-center text-[#a8aeba] border-t border-solid border-[#eee] pt-[15px]   ">
                        <div className="flex pr-4 items-center gap-1 text-inherit text-[13px] font-normal relative">
                          bởi:
                          <span className="text-inherit text-[13px]  font-normal">
                            Văn Yên
                          </span>
                          <div className="absolute w-[5px] h-[5px] rounded-full bg-[#a8aeba] center-y right-[-2px]"></div>
                        </div>
                        <span className="text-inherit text-[13px]  font-normal px-4">
                          08 tháng 03, 2024
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="basis-1/2 px-[15px]  ">
              <div className="shadow-card h-full">
                <div className="w-full h-full flex flex-col justify-between">
                  <div className="overflow-hidden">
                    <a
                      className="post-image w-full relative pb-[100%] block banner-hover-effect hover:rotate-[-3deg] hover:scale-110 transition-all ease-linear duration-300"
                      href="/"
                    >
                      <div
                        className="absolute inset-0
          "
                      >
                        <LazyLoadImage
                          src="https://file.hstatic.net/200000796751/article/blog_baya_vintage_va_retro_cd57fb8114b74988bc115873094b4ba2_grande.jpg"
                          effect="blur"
                          className="w-full h-full absolute inset-0"
                        />
                      </div>
                    </a>
                  </div>
                  <div className="py-[10px] px-[17px] bg-[#fff] flex flex-col flex-auto">
                    <h3 className="text-[16px] mb-[5px] font-bold leading-[1.2] flex items-center">
                      <Link
                        href={"/"}
                        className="block w-0 flex-auto line-clamp-2 text-redichi font-bold text-[20px]"
                      >
                        Sự Khác Biệt Giữa Phong Cách Thiết Kế Nội Thất Vintage
                        và Retro
                      </Link>
                    </h3>
                    <div
                      className="mt-auto
                    "
                    >
                      <div className="flex items-center mb-[15px] ">
                        <p className="text-blackni font-normal w-0 flex-auto line-clamp-2 text-[16px]">
                          Khi nói đến thiết kế nội thất, hai từ "vintage" và
                          "retro" thường được sử dụng thay thế cho nhau. Tuy
                          nhiên, mặc dù
                        </p>
                      </div>
                      <div className="flex  items-center text-[#a8aeba] border-t border-solid border-[#eee] pt-[15px]   ">
                        <div className="flex pr-4 items-center gap-1 text-inherit text-[13px] font-normal relative">
                          bởi:
                          <span className="text-inherit text-[13px]  font-normal">
                            Văn Yên
                          </span>
                          <div className="absolute w-[5px] h-[5px] rounded-full bg-[#a8aeba] center-y right-[-2px]"></div>
                        </div>
                        <span className="text-inherit text-[13px]  font-normal px-4">
                          08 tháng 03, 2024
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="basis-1/2 px-[15px]  ">
              <div className="shadow-card h-full">
                <div className="w-full h-full flex flex-col justify-between">
                  <div className="overflow-hidden">
                    <a
                      className="post-image w-full relative pb-[100%] block banner-hover-effect hover:rotate-[-3deg] hover:scale-110 transition-all ease-linear duration-300"
                      href="/"
                    >
                      <div
                        className="absolute inset-0
          "
                      >
                        <LazyLoadImage
                          src="https://file.hstatic.net/200000796751/article/blog_baya_vintage_va_retro_cd57fb8114b74988bc115873094b4ba2_grande.jpg"
                          effect="blur"
                          className="w-full h-full absolute inset-0"
                        />
                      </div>
                    </a>
                  </div>
                  <div className="py-[10px] px-[17px] bg-[#fff] flex flex-col flex-auto">
                    <h3 className="text-[16px] mb-[5px] font-bold leading-[1.2] flex items-center">
                      <Link
                        href={"/"}
                        className="block w-0 flex-auto line-clamp-2 text-redichi font-bold text-[20px]"
                      >
                        Sự Khác Biệt Giữa Phong Cách Thiết Kế Nội Thất Vintage
                        và Retro
                      </Link>
                    </h3>
                    <div
                      className="mt-auto
                    "
                    >
                      <div className="flex items-center mb-[15px] ">
                        <p className="text-blackni font-normal w-0 flex-auto line-clamp-2 text-[16px]">
                          Khi nói đến thiết kế nội thất, hai từ "vintage" và
                          "retro" thường được sử dụng thay thế cho nhau. Tuy
                          nhiên, mặc dù
                        </p>
                      </div>
                      <div className="flex  items-center text-[#a8aeba] border-t border-solid border-[#eee] pt-[15px]   ">
                        <div className="flex pr-4 items-center gap-1 text-inherit text-[13px] font-normal relative">
                          bởi:
                          <span className="text-inherit text-[13px]  font-normal">
                            Văn Yên
                          </span>
                          <div className="absolute w-[5px] h-[5px] rounded-full bg-[#a8aeba] center-y right-[-2px]"></div>
                        </div>
                        <span className="text-inherit text-[13px]  font-normal px-4">
                          08 tháng 03, 2024
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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

export default Blogs;
