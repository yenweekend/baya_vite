import React, { useEffect, useRef, useState } from "react";
import { ChevronRight, UserRound, Minus, Plus } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
//  ul,
// li,
// a,
// div,
// span,
// p,
// h1,
// h2,
// h3 {
//   font-family: "Helvetica Neue", sans-serif;
//   font-size: 14px;
//   font-weight: 500;
//   line-height: 1.45;
//   text-align: left;
// }

const CheckOut = () => {
  return (
    <div className="bg-[#fff] w-full min-h-screen">
      <div className="xl:w-[80%] px-[5%] mx-auto flex checkout w-[90%] items-stretch">
        <div className="basis-[60%] pt-[56px] pr-[66px]   border-[#eee] border-r-[2px]">
          <h1
            className=""
            style={{
              fontFamily: " Helvetica Neue, sans-serif",
            }}
          >
            <a href="/" className="text-[28px]  text-blackni">
              Baya
            </a>
          </h1>
          <ul className="mt-[15px] flex items-center mb-[15px]">
            <li className=" [&:first-child]:pl-0 px-[15px] relative flex items-center">
              <div className="absolute -right-[9px] center-y">
                <ChevronRight size={14} className="stroke-vendor " />
              </div>
              <a href="/" className=" text-[12px] font-light">
                Giỏ hàng
              </a>
            </li>
            <li className=" [&:first-child]:pl-0 px-[15px] text-[12px] relative font-light">
              <div className="absolute -right-[9px] center-y">
                <ChevronRight size={14} className="stroke-vendor " />
              </div>
              Thông tin giao hàng
            </li>
            <li className=" [&:first-child]:pl-0 px-[15px] text-[12px] relative font-light text-vendor">
              Phương thức thanh toán
            </li>
          </ul>
          <div className=" ">
            <h1 className="text-[20px] font-semibold text-blackni mb-5">
              Phương thức vận chuyển
            </h1>
            <div className="p-[18px] border border-solid border-[#d9d9d9]">
              <label
                htmlFor="code"
                className="checkbox-payment  flex items-center cursor-pointer"
              >
                <input
                  type="checkbox"
                  id="code"
                  name="pay"
                  value={"code"}
                  className="appearance-none outline-none p-[9px]  "
                />
                <span className=" text-[14px] text-[#737373] ml-[10px]">
                  Phí vận chuyển báo sau
                </span>
              </label>
            </div>
          </div>
          <div className=" ">
            <h1 className="text-[20px] font-semibold text-blackni mb-5">
              Phương thức thanh toán
            </h1>
            <div className="flex flex-col">
              <div className="p-[18px] border  [&:nth-child(-n+2)]:border-b-transparent  border-solid border-[#d9d9d9]">
                <label
                  htmlFor="code"
                  className="checkbox-payment  flex items-center cursor-pointer"
                >
                  <input
                    type="checkbox"
                    id="code"
                    name="pay"
                    value={"code"}
                    checked={true}
                    className="appearance-none outline-none p-[9px]  relative "
                  />
                  <div className="flex items-center">
                    <div className="w-10 h-10 overflow-hidden flex ml-[10px]">
                      <img
                        src="	https://hstatic.net/0/0/global/design/seller/image/payment/cod.svg?v=6"
                        alt=""
                        className="w-full h-ful object-cover border border-solid border-[#d9d9d9] rounded"
                      />
                    </div>
                    <span className=" text-[14px] text-[#737373] ml-[10px]">
                      Thanh toán khi giao hàng (COD)
                    </span>
                  </div>
                </label>
              </div>
              <div className="p-[18px] border  [&:nth-child(-n+2)]:border-b-transparent  border-solid border-[#d9d9d9]">
                <label
                  htmlFor="code"
                  className="checkbox-payment  flex items-center cursor-pointer"
                >
                  <input
                    type="checkbox"
                    id="code"
                    name="pay"
                    value={"code"}
                    className="appearance-none outline-none p-[9px]  "
                  />
                  <div className="flex items-center">
                    <div className="w-10 h-10 overflow-hidden flex ml-[10px]">
                      <img
                        src="	https://hstatic.net/0/0/global/design/seller/image/payment/momo.svg?v=6"
                        alt=""
                        className="w-full h-ful object-cover border border-solid border-[#d9d9d9] rounded"
                      />
                    </div>
                    <span className=" text-[14px] text-[#737373] ml-[10px]">
                      Ví MOMO
                    </span>
                  </div>
                </label>
              </div>
              <div className="p-[18px] border  [&:nth-child(-n+2)]:border-b-transparent  border-solid border-[#d9d9d9]">
                <label
                  htmlFor="code"
                  className="checkbox-payment  flex items-center cursor-pointer"
                >
                  <input
                    type="checkbox"
                    id="code"
                    name="pay"
                    value={"code"}
                    className="appearance-none outline-none p-[9px]  "
                  />
                  <div className="flex items-center ">
                    <div className="w-10 h-10 overflow-hidden flex ml-[10px]">
                      <img
                        src="https://hstatic.net/0/0/global/design/seller/image/payment/vnpay_new.svg?v=6"
                        alt=""
                        className="w-full h-ful object-cover border border-solid border-[#d9d9d9] rounded"
                      />
                    </div>
                    <div className=" ml-[10px]">
                      <span className=" text-[14px] text-[#737373] ">
                        Thẻ ATM/Visa/Master/JCB/QR Pay qua cổng VNPAY
                      </span>
                      <img
                        src="https://hstatic.net/0/0/global/design/seller/image/payment/atm_visa_master_jcb.svg?v=6"
                        alt=""
                      />
                    </div>
                  </div>
                </label>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between mt-[30px]">
            <a
              href="/"
              className="py-5 px-6 text-[14px] font-medium bg-redichi text-[#fff] text-center"
            >
              Giỏ hàng
            </a>
            <a
              href="/"
              className="text-[#fff] text-center py-5 px-6 text-[14px] font-medium bg-[#338dbc]"
            >
              Hoàn tất thanh toán
            </a>
          </div>
        </div>
        {/* <div className="basis-[60%] pt-[56px] pr-[66px]   border-[#eee] border-r-[2px]">
          <h1
            className="text-[28px]  text-blackni"
            style={{
              fontFamily: " Helvetica Neue, sans-serif",
            }}
          >
            Baya
          </h1>
          <ul className="mt-[15px] flex items-center mb-[15px]">
            <li className=" [&:first-child]:pl-0 px-[15px] relative flex items-center">
              <div className="absolute -right-[9px] center-y">
                <ChevronRight size={14} className="stroke-vendor " />
              </div>
              <a href="/" className=" text-[12px] font-light">
                Giỏ hàng
              </a>
            </li>
            <li className=" [&:first-child]:pl-0 px-[15px] text-[12px] relative font-light">
              <div className="absolute -right-[9px] center-y">
                <ChevronRight size={14} className="stroke-vendor " />
              </div>
              Thông tin giao hàng
            </li>
            <li className=" [&:first-child]:pl-0 px-[15px] text-[12px] relative font-light text-vendor">
              Phương thức thanh toán
            </li>
          </ul>
          <div className=" ">
            <h1 className="text-[20px] font-semibold text-blackni">
              Thông tin giao hàng
            </h1>
            <div className="flex items-center gap-3 mt-[15px]">
              <div className="w-[50px] h-[50px] overflow-hidden flex-shrink-0 bg-[#d8d8d8] flex items-center justify-center">
                <UserRound size={26} stroke="#fff" />
              </div>
              <div className="flex flex-col items-start">
                <span className="text-vendor">
                  Yên Nguyễn (nguyenvanyen@gmail.com)
                </span>
                <button>Đăng xuất</button>
              </div>
            </div>
          </div>
          <div className="mt-[15px]  ">
            <form className="">
              <div className="flex items-center -mx-[6px]">
                <div className="basis-1/3 px-[6px]">
                  <Select>
                    <SelectTrigger
                      iconClassName={"hidden"}
                      className="w-full rounded-none border border-solid border-[#d9d9d9] bg-[#fff] pt-[21px] pb-[6px] pr-[40px] pl-[10px] relative text-[14px] "
                    >
                      <div className="absolute right-0 center-y w-[40px] h-full  flex items-center justify-center">
                        <span className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-[#828282] "></span>
                        <div className="absolute left-0 w-[0.3px] h-[20px] bg-vendor center-y"></div>
                      </div>
                      <label
                        htmlFor="province"
                        className="mt-[4px] px-[10px] text-[10px] text-vendor absolute top-0 right-0 left-0 text-left"
                      >
                        Tỉnh / thành
                      </label>
                      <SelectValue placeholder="Chọn tỉnh / thành" />
                    </SelectTrigger>
                    <SelectContent
                      className={"border border-solid border-[#d9d9d9] "}
                    >
                      <SelectItem value="light">Light</SelectItem>
                      <SelectItem value="dark">Dark</SelectItem>
                      <SelectItem value="system">System</SelectItem>
                      <SelectItem value="system1">System</SelectItem>
                      <SelectItem value="system2">System</SelectItem>
                      <SelectItem value="system3">System</SelectItem>
                      <SelectItem value="system4">System</SelectItem>
                      <SelectItem value="system5">System</SelectItem>
                      <SelectItem value="system6">System</SelectItem>
                      <SelectItem value="system7">System</SelectItem>
                      <SelectItem value="system8">System</SelectItem>
                      <SelectItem value="system9">System</SelectItem>
                      <SelectItem value="system55">System</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="basis-1/3 px-[6px]">
                  <Select>
                    <SelectTrigger
                      iconClassName={"hidden"}
                      className="w-full rounded-none border border-solid border-[#d9d9d9] bg-[#fff] pt-[21px] pb-[6px] pr-[40px] pl-[10px] relative text-[14px] "
                    >
                      <div className="absolute right-0 center-y w-[40px] h-full  flex items-center justify-center">
                        <span className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-[#828282] "></span>
                        <div className="absolute left-0 w-[0.3px] h-[20px] bg-vendor center-y"></div>
                      </div>
                      <label
                        htmlFor="ward"
                        className="mt-[4px] px-[10px] text-[10px] text-vendor absolute top-0 right-0 left-0 text-left"
                      >
                        Quận / huyện
                      </label>
                      <SelectValue placeholder="Chọn quận / huyện" />
                    </SelectTrigger>
                    <SelectContent
                      className={"border border-solid border-[#d9d9d9] "}
                    >
                      <SelectItem value="light">Light</SelectItem>
                      <SelectItem value="dark">Dark</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="basis-1/3 px-[6px]">
                  <Select>
                    <SelectTrigger
                      iconClassName={"hidden"}
                      className="w-full rounded-none border border-solid border-[#d9d9d9] bg-[#fff] pt-[21px] pb-[6px] pr-[40px] pl-[10px] relative text-[14px] "
                    >
                      <div className="absolute right-0 center-y w-[40px] h-full  flex items-center justify-center">
                        <span className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-[#828282] "></span>
                        <div className="absolute left-0 w-[0.3px] h-[20px] bg-vendor center-y"></div>
                      </div>
                      <label
                        htmlFor="province"
                        className="mt-[4px] px-[10px] text-[10px] text-vendor absolute top-0 right-0 left-0 text-left"
                      >
                        Phường / xã
                      </label>
                      <SelectValue placeholder="Chọn phường / xã" />
                    </SelectTrigger>
                    <SelectContent
                      className={"border border-solid border-[#d9d9d9] "}
                    >
                      <SelectItem value="light">Light</SelectItem>
                      <SelectItem value="dark">Dark</SelectItem>
                      <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </form>
          </div>
          <div className="flex items-center justify-between mt-[15px]">
            <a
              href="/"
              className="py-5 px-6 text-[14px] font-medium bg-redichi text-[#fff] text-center"
            >
              Giỏ hàng
            </a>
            <a
              href="/"
              className="text-[#fff] text-center py-5 px-6 text-[14px] font-medium bg-[#338dbc]"
            >
              Tiếp tục với hình thức thanh toán
            </a>
          </div>
        </div> */}
        <div className="basis-[40%] pt-[56px] pl-10">
          <div className="flex flex-col border-b border-b-solid border-b-[#d9d9d9]">
            {Array.from({ length: 6 }).map((_, index) => (
              <>
                <div className="flex pb-[15px]">
                  <div className="w-[60px] h-[60px] block relative flex-shrink-0">
                    <img
                      src="https://product.hstatic.net/200000796751/product/solana_outdoor_chair_baya_2001350_d5007deca8444f47a4f5454c1162dcaa_medium.jpg"
                      alt=""
                      className="h-full w-full object-cover border border-solid border-shop flex-shrink-0"
                    />

                    <div
                      className="absolute w-5 h-5 bg-[#8f9bb3] text-[#fff] flex items-center justify-center text-[12px] rounded-full top-[-7px] right-[-10px] cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                    >
                      {index + 3}
                    </div>
                  </div>
                  <div className=" px-[18px] flex flex-col w-[60%]">
                    <a href="" className="text-blackni text-[14px] ">
                      Bộ 9 Kẹp Miệng Túi Nhựa Xanh Ngọc/ Xám RECIPE
                    </a>
                    <span className="text-[#8f9bb3]  text-[14px]">59,000đ</span>
                  </div>
                  <div className="ml-auto flex items-center justify-center">
                    <span className="text-[14px] text-[#4b4b4b]  mb-2">
                      59,000đ
                    </span>
                  </div>
                </div>
              </>
            ))}
          </div>
          <div className="border-b border-b-solid border-b-[#d9d9d9] py-[15px]">
            <div className="flex items-center justify-between">
              <span className="text-[14px] text-[#8f9bb3]">Tạm tính</span>
              <span className="text-[14px] text-[#8f9bb3]">500,000đ</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[14px] text-[#8f9bb3]">Phí vận chuyển</span>
              <span className="text-[14px] text-[#8f9bb3]">0đ</span>
            </div>
          </div>
          <div className="border-b border-b-solid py-[15px]">
            <div className="flex items-center justify-between">
              <span className="text-[14px] text-[#8f9bb3]">Tổng cộng</span>
              <span className=" text-blackni text-[20px]">
                <span className="text-[14px] uppercase text-vendor mr-3">
                  VND
                </span>
                500,000đ
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
