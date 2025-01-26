import { CalendarDays, ChevronsRight } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
const PosterCard = ({ postData }) => {
  return (
    <div className="w-full ">
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
              src="https://file.hstatic.net/200000796751/article/blog_baya_bq_giu_can_bep_gon_gan_0f15bf82cfa945c884efdc1b49de28ec_large.jpg"
              effect="blur"
              className="w-full h-full absolute inset-0"
            />
          </div>
        </a>
      </div>
      <div className="py-[10px] px-[17px] bg-[#fff] flex flex-col">
        <h3 className="text-[16px] mb-[5px] font-bold leading-[1.2] flex items-center">
          <Link
            href={"/"}
            className="block w-0 flex-auto line-clamp-2 text-redichi font-bold"
          >
            Tips Trang Trí Góc Học Tập, Làm Việc Đẹp Và Khoa Học
          </Link>
        </h3>
        <div className="flex items-center mb-[15px] ">
          <p className="text-[#a8aeba] w-0 flex-auto line-clamp-2 text-[13px]">
            Khu vực bếp là không gian quan trọng cho việc cả gia đình tận hưởng
            bữa ăn sau một ngày dài và là nơi để
          </p>
        </div>
        <div className="flex justify-between items-center text-[#a8aeba] border-t border-solid border-[#eee] pt-[15px]  ">
          <div className="flex items-center gap-1">
            <CalendarDays stroke="#a8aeba" size={14} strokeWidth={1.4} />
            <span className="text-inherit text-[11px]">08 tháng 03, 2024</span>
          </div>
          <a className="flex items-center text-inherit text-[11px] hover:text-redichi cursor-pointer group transition-all ease-linear duration-150">
            Xem thêm
            <ChevronsRight
              className="stroke-[#a8aeba] group-hover:stroke-redichi transition-all ease-linear duration-150"
              size={14}
              strokeWidth={1.4}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default PosterCard;
