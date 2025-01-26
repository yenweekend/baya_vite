import React from "react";
import { cn } from "@/lib/utils";
import { History, Search as SearchIcon, TrendingUp, X } from "lucide-react";
const Search = ({ className }) => {
  return (
    <form
      className={cn(
        "h-10 relative bg-[#fff] pr-[4px]  2md:min-w-[400px] flex-auto group",
        className
      )}
      id="search-div"
    >
      <input
        placeholder="Tìm kiếm sản phẩm"
        className="pl-4 top-[50%] translate-y-[-50%] absolute w-full pr-[80px] leading-[1.5715] text-[14px] monserat_font peer"
      ></input>
      <div className="bg-redichi absolute right-[2px] top-[2px] bottom-[2px]  cursor-pointer px-3 flex items-center justify-center w-[70px]  ">
        <SearchIcon className="text-[#fff]" width={20} height={20} />
      </div>
      <div
        className="absolute  shadow-nd bg-[#fff] left-0 right-0 px-[20px] z-[99] top-[120%] opacity-0 invisible  peer-focus:opacity-100  peer-focus:visible  peer-focus:top-[102%] transition-all ease-linear duration-150"
        onMouseDown={(e) => e.preventDefault()}
      >
        <div className="border-b border-solid border-shop  py-[10px]">
          <div className="flex items-center">
            <SearchIcon className="text-blackshop" width={12} height={12} />
            <span className="text-[13px] pl-3">Từ khóa tìm kiếm:</span>
            <span className="text-[13px] pl-2 text-redichi font-bold">
              "bát"
            </span>
          </div>
        </div>
        <div className="border-b border-solid border-shop">
          <h2 className="text-[14px]  font-bold text-redichi py-[10px]">
            Xu hướng tìm kiếm
          </h2>
          <ul className="">
            {Array.from({ length: 4 }).map((_, index) => (
              <li className="py-3" key={index}>
                <a
                  href=""
                  className="flex items-center text-blacknihover:text-redichi"
                >
                  <TrendingUp className="text-inherit" width={12} height={12} />
                  <span className="text-inherit text-[13px] font-nornal pl-[12px]">
                    Đũa nhôm
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="border-b border-solid border-shop">
          <h2 className="text-[14px]  font-bold text-redichi py-[10px]">
            Tìm kiếm gần đây
          </h2>
          <ul className="">
            {Array.from({ length: 4 }).map((_, index) => (
              <li className="py-3" key={index}>
                <a
                  href=""
                  className="flex items-center text-blacknihover:text-redichi relative"
                >
                  <History className="text-inherit" width={12} height={12} />
                  <span className="text-inherit text-[13px] font-nornal pl-[12px]">
                    Đũa nhôm
                  </span>
                  <div className="absolute cursor-pointer text-blacknihover:text-redichi center-y right-0">
                    <X className="text-inherit" size={16} strokeWidth={1} />
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/* <ul>
    {Array.from({ length: 4 }).map((_, index) => (
      <li className="flex justify-between py-3 border-b border-solid border-shop">
        <div className="">
          <a
            href="/"
            className="text-[13px] hover:text-redichi transition-all ease-linear duration-300 font-normal mt-[10px] mb-[5px] block"
          >
            Combo bát đĩa Ivy 2
          </a>
          <span className="text-[13px] font-medium">
            20.000đ
          </span>
        </div>
        <div className="w-10 h-10 overflow-hidden flex-shrink-0">
          <img
            src="https://product.hstatic.net/200000796751/product/inspire_1_cbd43ca5da47491084553a1468beca9a_compact.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </li>
    ))}
  </ul>
  <a
    href="/"
    className="block py-[10px] text-[13px] text-center hover:text-redichi"
  >
    Xem thêm 30 sản phẩm
  </a> */}
      </div>
    </form>
  );
};
export default Search;
