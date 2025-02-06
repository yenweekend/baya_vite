import { CalendarDays, ChevronsRight, ListOrdered, X } from "lucide-react";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { getBlogDetail } from "@/apis/blog";
import { useQuery } from "@tanstack/react-query";
const BlogDetail = () => {
  const contentRef = useRef(null);
  const [open, onOpenChange] = useState(true);
  const [openList, onOpenListChange] = useState(false);
  const params = useParams();
  const { isPending, isError, error, data } = useQuery({
    queryKey: ["blog-detail", params.slug],
    queryFn: () => getBlogDetail(params.slug),
    enabled: !!params.slug,
  });
  useEffect(() => {
    if (data) {
      console.log(data);
      contentRef.current.innerHTML = data.data.data.content;
    }
  }, [data]);
  const handleScroll = useCallback((event) => {
    event.preventDefault(); // Prevent default anchor behavior

    const href = event.target.getAttribute("href"); // Get the href value (e.g., "#title")
    const id = href.replace("#", ""); // Remove the '#' to get the ID

    const element = document.getElementById(id); // Find the target element by ID
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  if (isPending) {
    return "loading";
  }
  if (isError) {
    return error;
  }

  return (
    <div className="py-[15px] px-5 bg-[#fff] shadow-card">
      <h1 className="text-redichi text-[28px] font-bold mb-[10px]" id="title">
        "Less Is More" - Xu Hướng Tối GIản Không Gian Sống
      </h1>
      <div className="flex  items-center text-[#74839f] mb-[15px]">
        <div className="flex pr-4 items-center gap-1 text-inherit text-[14px] font-normal relative">
          bởi:
          <span className="text-inherit text-[14px]  font-normal">Văn Yên</span>
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
          onOpenChange={onOpenChange}
        >
          <AccordionItem value="item-2">
            <AccordionTrigger
              iconClassName={"hidden"}
              className={"pl-[150px] relative"}
            >
              <span
                className="text-[#bcbdc1] text-[13px]   font-bold"
                onClick={() => onOpenChange((state) => !state)}
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
      <div className="content" ref={contentRef}></div>
    </div>
  );
};

export default BlogDetail;
