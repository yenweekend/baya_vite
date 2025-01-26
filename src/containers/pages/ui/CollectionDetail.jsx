import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
} from "@/components/ui/select";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { ProductCard } from "@/containers/components";
import { ArrowDownAZ, Filter, X } from "lucide-react";
import { useMediaQuery } from "@/hooks/useMediaQuery";

const CollectionDetail = () => {
  const [open, onOpenChange] = useState(false);
  React.useEffect(() => {
    if (open) {
      document.body.classList.add("locked-scroll");
    } else {
      document.body.classList.remove("locked-scroll");
    }
  }, [open]);
  const isDesktop = useMediaQuery("(min-width: 990px)");
  return (
    <div className="flex items-stretch">
      <div
        className={`filter-parent transition-all duration-300 ease-linear   ${
          open && !isDesktop ? "filter-show" : ""
        }`}
      >
        <div className="filter-header pl-[15px] pr-[50px] py-3 bg-redichi text-[#fff] flex items-center gap-2 text-[16px] uppercase font-bold relative 2md:hidden">
          <Filter size={20} className="stroke-[#fff]" strokeWidth={2} />
          Bộ lọc
          <button
            className="absolute right-3 center-y cursor-pointer"
            onClick={() => {
              onOpenChange(false);
            }}
          >
            <X stroke="#fff" size={20} />
          </button>
        </div>
        <div className="max-990:overflow-y-auto h-[calc(100vh-110px)]  2md:sticky 2md:top-[30px]">
          <div className="flex flex-col  2md:px-0 px-[15px] ">
            <div className=" bg-[#fff] 2md:shadow-card">
              <Accordion
                type="single"
                collapsible
                className="w-full"
                defaultValue="collection"
              >
                <AccordionItem value="collection">
                  <AccordionTrigger
                    className={
                      " text-[16px] font-bold  py-[10px] px-[15px] border-b border-b-[#e9e9e9] border-solid"
                    }
                  >
                    Danh mục sản phẩm
                  </AccordionTrigger>
                  <AccordionContent
                    className={" border-b border-b-shop 2md:border-none"}
                  >
                    <ul className="pl-4">
                      <li className="text-[15px]    hover:text-redichi   py-[5px]     transition-all ease-linear duration-150 ">
                        <a
                          href="/blogs/tin-tuc"
                          className="text-inherit  text-[14px]"
                        >
                          {" "}
                          Được mua nhiều gần đây
                        </a>
                      </li>
                      <li className="text-[15px]    hover:text-redichi   py-[5px]    transition-all ease-linear duration-150 ">
                        <a
                          href="/blogs/nguon-cam-hung"
                          className="text-inherit  text-[14px]"
                        >
                          {" "}
                          Sản phẩm mới
                        </a>
                      </li>
                      <li className="text-[15px]    hover:text-redichi   py-[5px]    transition-all ease-linear duration-150 ">
                        <a
                          href="/blogs/nguon-cam-hung"
                          className="text-inherit  text-[14px]"
                        >
                          {" "}
                          Tất cả sản phẩm
                        </a>
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            <div className=" bg-[#fff] 2md:hidden">
              <Accordion
                type="single"
                collapsible
                className="w-full"
                defaultValue="collection"
              >
                <AccordionItem value="collection">
                  <AccordionTrigger
                    className={
                      " text-[16px] font-bold  py-[10px] px-[15px] border-b border-b-[#e9e9e9] border-solid"
                    }
                  >
                    Sắp xếp
                  </AccordionTrigger>
                  <AccordionContent
                    className={" border-b border-b-shop 2md:border-none"}
                  >
                    <ul className="pl-4 mt-[15px]">
                      <li className="text-[15px]    hover:text-redichi  mb-3     transition-all ease-linear duration-150 ">
                        <label
                          htmlFor="price-asc"
                          className="checkbox flex items-center gap-3 cursor-pointer group"
                        >
                          <input
                            type="checkbox"
                            id="price-asc"
                            className="appearance-none outline-none p-2 relative"
                          />
                          <span className="text-[14px] text-blackni font-normal group-hover:text-redichi ">
                            Giá: Tăng dần
                          </span>
                        </label>
                      </li>
                      <li className="text-[15px]    hover:text-redichi  mb-3     transition-all ease-linear duration-150 ">
                        <label
                          htmlFor="price-desc"
                          className="checkbox flex items-center gap-3 cursor-pointer group"
                        >
                          <input
                            type="checkbox"
                            id="price-desc"
                            className="appearance-none outline-none p-2 relative"
                          />
                          <span className="text-[14px] text-blackni font-normal group-hover:text-redichi ">
                            Giá: Giảm dần
                          </span>
                        </label>
                      </li>
                      <li className="text-[15px]    hover:text-redichi  mb-3     transition-all ease-linear duration-150 ">
                        <label
                          htmlFor="title-asc"
                          className="checkbox flex items-center gap-3 cursor-pointer group"
                        >
                          <input
                            type="checkbox"
                            id="title-asc"
                            className="appearance-none outline-none p-2 relative"
                          />
                          <span className="text-[14px] text-blackni font-normal group-hover:text-redichi ">
                            Tên: A-Z
                          </span>
                        </label>
                      </li>
                      <li className="text-[15px]    hover:text-redichi  mb-3     transition-all ease-linear duration-150 ">
                        <label
                          htmlFor="title-desc"
                          className="checkbox flex items-center gap-3 cursor-pointer group"
                        >
                          <input
                            type="checkbox"
                            id="title-desc"
                            className="appearance-none outline-none p-2 relative"
                          />
                          <span className="text-[14px] text-blackni font-normal group-hover:text-redichi ">
                            Tên: Z-A
                          </span>
                        </label>
                      </li>
                      <li className="text-[15px]    hover:text-redichi  mb-3     transition-all ease-linear duration-150 ">
                        <label
                          htmlFor="out-of-fashion"
                          className="checkbox flex items-center gap-3 cursor-pointer group"
                        >
                          <input
                            type="checkbox"
                            id="out-of-fashion"
                            className="appearance-none outline-none p-2 relative"
                          />
                          <span className="text-[14px] text-blackni font-normal group-hover:text-redichi ">
                            Cũ nhất
                          </span>
                        </label>
                      </li>
                      <li className="text-[15px]    hover:text-redichi  mb-3     transition-all ease-linear duration-150 ">
                        <label
                          htmlFor="latest"
                          className="checkbox flex items-center gap-3 cursor-pointer group"
                        >
                          <input
                            type="checkbox"
                            id="latest"
                            className="appearance-none outline-none p-2 relative"
                          />
                          <span className="text-[14px] text-blackni font-normal group-hover:text-redichi ">
                            Mới nhất
                          </span>
                        </label>
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            <div className="bg-[#fff] 2md:shadow-card mt-[15px] ">
              <Accordion
                type="single"
                collapsible
                className="w-full"
                defaultValue="filter-1"
              >
                <AccordionItem value="filter-1">
                  <AccordionTrigger
                    className={
                      " text-[16px] font-bold  py-[10px] px-[15px] border-b border-b-[#e9e9e9] border-solid"
                    }
                  >
                    Nhà cung cấp
                  </AccordionTrigger>
                  <AccordionContent
                    className={" border-b border-b-shop 2md:border-none"}
                  >
                    <ul className="pl-4 mt-[15px]">
                      <li className="text-[15px]    hover:text-redichi  mb-3     transition-all ease-linear duration-150 ">
                        <label
                          htmlFor="brand-1"
                          className="checkbox flex items-center gap-3 cursor-pointer group"
                        >
                          <input
                            type="checkbox"
                            id="brand-1"
                            className="appearance-none outline-none p-2 relative"
                          />
                          <span className="text-[14px] text-blackni font-normal group-hover:text-redichi uppercase">
                            WIN
                          </span>
                        </label>
                      </li>
                      <li className="text-[15px]    hover:text-redichi  mb-3     transition-all ease-linear duration-150 ">
                        <label
                          htmlFor="brand-2"
                          className="checkbox flex items-center gap-3 cursor-pointer group"
                        >
                          <input
                            type="checkbox"
                            id="brand-2"
                            className="appearance-none outline-none p-2 relative"
                          />
                          <span className="text-[14px] text-blackni font-normal group-hover:text-redichi uppercase">
                            Chufa
                          </span>
                        </label>
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            <div className="bg-[#fff] 2md:shadow-card mt-[15px] ">
              <Accordion
                type="single"
                collapsible
                className="w-full"
                defaultValue="filter-1"
              >
                <AccordionItem value="filter-1">
                  <AccordionTrigger
                    className={
                      " text-[16px] font-bold  py-[10px] px-[15px] border-b border-b-[#e9e9e9] border-solid"
                    }
                  >
                    Giá
                  </AccordionTrigger>
                  <AccordionContent
                    className={" border-b border-b-shop 2md:border-none"}
                  >
                    <ul className="pl-4 mt-[15px]">
                      <li className="text-[15px]    hover:text-redichi  mb-3     transition-all ease-linear duration-150 ">
                        <label
                          htmlFor="p1"
                          className="checkbox flex items-center gap-3 cursor-pointer group"
                        >
                          <input
                            type="checkbox"
                            id="p1"
                            className="appearance-none outline-none p-2 relative"
                          />
                          <span className="text-[14px] text-blackni font-normal group-hover:text-redichi uppercase">
                            Dưới 1.000.000₫
                          </span>
                        </label>
                      </li>
                      <li className="text-[15px]    hover:text-redichi  mb-3     transition-all ease-linear duration-150 ">
                        <label
                          htmlFor="p2"
                          className="checkbox flex items-center gap-3 cursor-pointer group"
                        >
                          <input
                            type="checkbox"
                            id="p2"
                            className="appearance-none outline-none p-2 relative"
                          />
                          <span className="text-[14px] text-blackni font-normal group-hover:text-redichi uppercase">
                            1.000.000₫ - 2.000.000₫
                          </span>
                        </label>
                      </li>
                      <li className="text-[15px]    hover:text-redichi  mb-3     transition-all ease-linear duration-150 ">
                        <label
                          htmlFor="p3"
                          className="checkbox flex items-center gap-3 cursor-pointer group"
                        >
                          <input
                            type="checkbox"
                            id="p3"
                            className="appearance-none outline-none p-2 relative"
                          />
                          <span className="text-[14px] text-blackni font-normal group-hover:text-redichi uppercase">
                            2.000.000₫ - 3.000.000₫
                          </span>
                        </label>
                      </li>
                      <li className="text-[15px]    hover:text-redichi  mb-3     transition-all ease-linear duration-150 ">
                        <label
                          htmlFor="p4"
                          className="checkbox flex items-center gap-3 cursor-pointer group"
                        >
                          <input
                            type="checkbox"
                            id="p4"
                            className="appearance-none outline-none p-2 relative"
                          />
                          <span className="text-[14px] text-blackni font-normal group-hover:text-redichi uppercase">
                            3.000.000₫ - 4.000.000₫
                          </span>
                        </label>
                      </li>
                      <li className="text-[15px]    hover:text-redichi  mb-3     transition-all ease-linear duration-150 ">
                        <label
                          htmlFor="p5"
                          className="checkbox flex items-center gap-3 cursor-pointer group"
                        >
                          <input
                            type="checkbox"
                            id="p5"
                            className="appearance-none outline-none p-2 relative"
                          />
                          <span className="text-[14px] text-blackni font-normal group-hover:text-redichi uppercase">
                            Trên 4.000.000₫
                          </span>
                        </label>
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
        <div className="filter-footer mx-[15px] h-[60px] border-t border-t-[#eee]">
          <button className="bg-[#f3f4f6] border border-solid border-[#e6e7eb] py-[10px] px-[15px] basis-1/2 cursor-pointer">
            Hủy
          </button>
          <button className="bg-redichi text-[#fff] py-[10px] px-[15px] basis-1/2 cursor-pointer">
            Áp dụng
          </button>
        </div>
      </div>
      <div className="2md:basis-3/4 px-[15px] w-full">
        <div className="">
          <LazyLoadImage
            src="https://theme.hstatic.net/200000796751/1001266995/14/collection_banner.jpg?v=82"
            effect="blur"
            className="w-full"
          />
        </div>
        <div className="mt-[15px]">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <h2 className="text-[24px] font-bold text-redtitle">
                Tất cả sản phẩm
              </h2>
              <span className="pl-[30px] text-[14px] font-normal">
                <strong className="text-[14px]">21 </strong>
                sản phẩm
              </span>
            </div>
            <div className="2md:block hidden">
              <Select>
                <SelectTrigger className="w-[200px] bg-[#fff] border border-solid border-shop font-bold relative pl-[40px] ">
                  <div className="absolute left-3">
                    <ArrowDownAZ
                      size={20}
                      className="stroke-blackni"
                      strokeWidth={1.4}
                    />
                  </div>
                  <SelectValue placeholder="Sắp xếp" />
                </SelectTrigger>
                <SelectContent className={"bg-[#fff] shadow-card"}>
                  <SelectGroup>
                    <SelectItem value="apple"> Apple</SelectItem>
                    <SelectItem value="banana"> Banana</SelectItem>
                    <SelectItem value="blueberry"> Blueberry</SelectItem>
                    <SelectItem value="grapes"> Grapes</SelectItem>
                    <SelectItem value="pineapple"> Pineapple</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="2md:hidden block">
              <div
                className="max-w-[200px] bg-[#fff] border border-solid border-shop font-bold relative  flex items-center gap-2 px-3 py-2 cursor-pointer"
                onClick={() => {
                  onOpenChange(true);
                }}
              >
                <Filter
                  size={20}
                  className="stroke-blackni"
                  strokeWidth={1.4}
                />
                Bộ lọc
              </div>
            </div>
          </div>
          <div className="flex items-center flex-wrap gap-3">
            <div className="flex items-center pl-[10px] pr-8 border-solid border border-shop rounded-full relative py-[2px] bg-[#fff]">
              <span className="text-blackni text-[13px] font-normal">
                Nhà cung cấp:{" "}
              </span>
              <strong className="text-[#5d5d5d] text-[13px] pl-2">
                Chufo,wind
              </strong>
              <span className="absolute right-2 cursor-pointer">
                <X size={20} className="stroke-blackni" strokeWidth={1.2} />
              </span>
            </div>
            <div className="flex items-center pl-[10px] pr-8 border-solid border border-shop rounded-full relative py-[2px] bg-[#fff]">
              <span className="text-blackni text-[13px] font-normal">Giá</span>
              <strong className="text-[#5d5d5d] text-[13px] pl-2">
                Trên 1.000.000đ
              </strong>
              <span className="absolute right-2 cursor-pointer">
                <X size={20} className="stroke-blackni" strokeWidth={1.2} />
              </span>
            </div>
            <button className=" px-3 cursor-pointer text-center  border-solid border border-shop rounded-full relative py-[2px] bg-[#fff] text-redtitle underline">
              Xóa hết
            </button>
          </div>
          <div className=" xl:grid-cols-5 mt-[15px] grid  grid-rows-2 gap-y-[12px] md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 md:flex-auto  grid-cols-2">
            {Array.from({ length: 14 }).map((_, index) => (
              <div className=" flex-shrink-0 flex-grow-0 px-[6px]" key={index}>
                <ProductCard />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionDetail;
