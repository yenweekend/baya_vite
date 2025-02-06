import React, { useEffect, useRef, useState } from "react";
import {
  ChevronRight,
  UserRound,
  Minus,
  Plus,
  ShoppingCart,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { message } from "antd";
const CheckOut = () => {
  const [couponValue, setCouponValue] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields },
  } = useForm({
    defaultValues: {
      payment: "",
    },
  });

  const onSubmit = (data) => {
    console.log("Dữ liệu đã gửi:", data);
  };
  const handleSubmitCoupon = (event) => {
    console.log("Dữ liệu đã gửi:", couponValue);
  };
  return (
    <CheckoutWrapper>
      <div className="2md:w-[80%] px-[5%] mx-auto flex checkout w-[100%] 2md:flex-row flex-col 2md:items-stretch pb-[30px]">
        <div className="basis-[60%] pt-[56px] 2md:pr-[66px]   2md:border-[#eee] 2md:border-r-[2px]">
          <h1 className="">
            <a
              href="/"
              className="text-[28px]  text-blackni"
              style={{
                fontFamily: " Helvetica Neue, sans-serif",
              }}
            >
              Baya
            </a>
          </h1>
          <div className="2md:hidden">
            <Accordion
              type="single"
              collapsible
              className="w-full border-none"
              defaultValue="item-1"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger
                  className={
                    " py-[10px]  text-[13px] font-bold text-[#338dbc] border-y  border-[#eee] pl-2 pr-[80px] border-none relative"
                  }
                >
                  <div className="flex items-center gap-2 ">
                    <ShoppingCart size={20} stroke="#338dbc" />
                    Hiển thị thông tin đơn hàng
                    <span className="absolute right-2 center-y text-[#333]">
                      68.000đ
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className={"p-[10px] border-none"}>
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
                            <span className="text-[#8f9bb3]  text-[14px]">
                              59,000đ
                            </span>
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
                  <div className="border-b border-b-solid border-b-[#d9d9d9] py-[15px] flex items-stretch gap-2">
                    <div className="form-group">
                      <div
                        className="relative h-10"
                        style={{
                          boxShadow: "0 0 0 1px #d9d9d9",
                        }}
                      >
                        <input
                          type="text"
                          autoComplete="off"
                          id="coupon-field"
                          name="coupon-field"
                          onChange={(event) =>
                            setCouponValue(event.target.value)
                          }
                          className="peer w-full h-full py-[10px] px-5"
                        />
                        <label
                          htmlFor="coupon-field"
                          className={`absolute text-vendor transition-all ease-linear duration-75  bg-[#fff] px-2 h-10 
                    ${
                      couponValue.trim().length > 0
                        ? "left-2 -top-3 text-[14px] h-[20px] leading-[20px]"
                        : "text-[16px] top-0 left-3 peer-focus:left-2  peer-focus:-top-3 peer-focus:text-[14px]  peer-focus:h-[20px] peer-focus:leading-[20px] leading-[40px]"
                    }
                `}
                        >
                          Mã giảm giá
                        </label>
                      </div>
                    </div>
                    <button
                      onClick={handleSubmitCoupon}
                      type="button"
                      className="bg-[#338dbc] px-5 whitespace-nowrap text-[#fff] font-medium"
                    >
                      Sử dụng
                    </button>
                  </div>
                  <div className="border-b border-b-solid border-b-[#d9d9d9] py-[15px]">
                    <div className="flex items-center justify-between">
                      <span className="text-[14px] text-[#8f9bb3]">
                        Tạm tính
                      </span>
                      <span className="text-[14px] text-[#8f9bb3]">
                        500,000đ
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[14px] text-[#8f9bb3]">
                        Phí vận chuyển
                      </span>
                      <span className="text-[14px] text-[#8f9bb3]">0đ</span>
                    </div>
                  </div>
                  <div className="border-b border-b-solid py-[15px]">
                    <div className="flex items-center justify-between">
                      <span className="text-[14px] text-[#8f9bb3]">
                        Tổng cộng
                      </span>
                      <span className=" text-blackni text-[20px]">
                        <span className="text-[14px] uppercase text-vendor mr-3">
                          VND
                        </span>
                        500,000đ
                      </span>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <ul className="mt-[15px]  items-center mb-[15px] 2md:flex hidden">
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
                htmlFor="delivery-method"
                className="checkbox-payment  flex items-center cursor-pointer"
              >
                <input
                  type="checkbox"
                  id="delivery-method"
                  name="delivery-method"
                  value={"delivery-method"}
                  checked={true}
                  className="appearance-none outline-none p-[9px] relative "
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
                    type="radio"
                    id="code"
                    {...register("payment", {
                      required: {
                        value: true,
                        message: "Vui lòng chọn phương thức thanh toán",
                      },
                    })}
                    value={"code"}
                    className="appearance-none relative outline-none p-[9px]   "
                  />
                  <div className="flex items-center">
                    <div className="w-10 h-10 overflow-hidden flex-shrink-0 flex ml-[10px]">
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
                  htmlFor="momo"
                  className="checkbox-payment  flex items-center cursor-pointer"
                >
                  <input
                    type="radio"
                    id="momo"
                    {...register("payment", {
                      required: {
                        value: true,
                        message: "Vui lòng chọn phương thức thanh toán",
                      },
                    })}
                    value={"momo"}
                    className="appearance-none relative outline-none p-[9px]  "
                  />
                  <div className="flex items-center">
                    <div className="w-10 h-10 overflow-hidden flex-shrink-0 flex ml-[10px]">
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
                  htmlFor="vnpay"
                  className="checkbox-payment  flex items-center cursor-pointer"
                >
                  <input
                    type="radio"
                    id="vnpay"
                    {...register("payment", {
                      required: {
                        value: true,
                        message: "Vui lòng chọn phương thức thanh toán",
                      },
                    })}
                    value={"vnpay"}
                    className="appearance-none relative outline-none p-[9px]  "
                  />
                  <div className="flex items-center ">
                    <div className="w-10 h-10 overflow-hidden flex-shrink-0 flex ml-[10px]">
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
            {errors.payment && (
              <p className="text-[13px] text-redni font-medium mt-2">
                {errors.payment.message}
              </p>
            )}
          </div>
          <div className="flex items-center justify-between mt-[30px]">
            <a
              href="/"
              className="py-5 px-6 text-[14px] font-medium bg-redichi text-[#fff] text-center"
            >
              Giỏ hàng
            </a>
            <button
              onClick={handleSubmit(onSubmit)}
              className="text-[#fff] text-center py-5 px-6 text-[14px] font-medium bg-[#338dbc]"
            >
              Hoàn tất thanh toán
            </button>
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
        <div className="basis-[40%] pt-[56px] 2md:pl-10 max-990:hidden">
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
          <div className="border-b border-b-solid border-b-[#d9d9d9] py-[15px] flex items-stretch gap-2">
            <div className="form-group">
              <div
                className="relative h-10"
                style={{
                  boxShadow: "0 0 0 1px #d9d9d9",
                }}
              >
                <input
                  type="text"
                  autoComplete="off"
                  name="coupon"
                  onChange={(event) => setCouponValue(event.target.value)}
                  id="coupon"
                  className="peer w-full h-full py-[10px] px-5"
                />
                <label
                  htmlFor="coupon"
                  className={`absolute text-vendor transition-all ease-linear duration-75  bg-[#fff] px-2 h-10 
                    ${
                      couponValue.trim().length > 0
                        ? "left-2 -top-3 text-[14px] h-[20px] leading-[20px]"
                        : "text-[16px] top-0 left-3 peer-focus:left-2  peer-focus:-top-3 peer-focus:text-[14px]  peer-focus:h-[20px] peer-focus:leading-[20px] leading-[40px]"
                    }
                `}
                >
                  Mã giảm giá
                </label>
              </div>
            </div>
            <button
              onClick={handleSubmitCoupon}
              type="button"
              className="bg-[#338dbc] px-5 whitespace-nowrap text-[#fff] font-medium"
            >
              Sử dụng
            </button>
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
    </CheckoutWrapper>
  );
};
const CheckoutWrapper = styled.div`
  background-color: #fff;
  width: 100%;
  min-height: 100vh;
  ul,
  li,
  a,
  div,
  span,
  p,
  h1,
  h2,
  h3 {
    font-family: "Helvetica Neue", sans-serif;
    font-weight: 500;
    line-height: 1.45;
    text-align: left;
  }
`;
export default CheckOut;
