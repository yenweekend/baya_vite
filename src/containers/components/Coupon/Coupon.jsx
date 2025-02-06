import React from "react";
import { cn } from "@/lib/utils";
import { message } from "antd";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { CouponContentButton } from "../ButtonTransition/CouponContentButton";

const Coupon = ({ className, data }) => {
  const [copied, setCopied] = React.useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  const handleCopy = (code) => {
    if (!copied) {
      navigator.clipboard
        .writeText(code)
        .then(() => {
          setCopied(true);
          messageApi.open({
            type: "success",
            content: "Mã giảm giá đã được sao chép!",
            className: "custom-class",
            style: {
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            },
          });
        })
        .catch(() => {
          messageApi.open({
            type: "error",
            content: "Không thể sao chép mã giảm giá, vui lòng thử lại.",
            className: "custom-class",
            style: {
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            },
          });
        });
    }
  };
  return (
    <>
      {contextHolder}

      <div
        className={cn(
          "bg-coupon  w-full border border-solid border-[rgba(0,0,0,0.08)] rounded-[15px] flex ",
          className
        )}
      >
        <div className="basis-3/10 p-2 border-r border-dashed border-shop coupon-left">
          <div className="w-full pb-[100%] relative bg-couponlight rounded-[12px] overflow-hidden">
            <div className="absolute inset-0 p-[10px]">
              <LazyLoadImage
                src="https://theme.hstatic.net/200000796751/1001266995/14/home_coupon_1_img.png?v=82"
                effect="opacity"
                className="w-full h-full "
              />
            </div>
          </div>
        </div>
        <div className="basis-7/10 text-coupontext flex justify-between flex-col p-[10px]">
          <div className="relative">
            <h3 className="text-inherit text-[14px] mb-[2px] font-bold">
              Giảm từ 200.000đ
            </h3>
            <p className="text-[12px] font-medium text-inherit">
              Đơn hàng từ 400k
            </p>

            <CouponContentButton />
          </div>
          <div className="flex items-center justify-between max-990:gap-2">
            <div className="text-coupontext ">
              <span className="text-[10px]  font-normal text-inherit  block">
                Mã:{" "}
                <strong className="text-inherit text-[11px] font-bold uppercase">
                  vouchert1-50k
                </strong>
              </span>
              <span className="text-[10px] text-inherit font-normal block">
                HSD: 31/01/2025
              </span>
            </div>
            <button
              className="bg-redbtn px-[12px]  py-[3px] cursor-pointer text-[12px] text-[#fff] rounded-full flex-shrink-0"
              onClick={() => {
                handleCopy("abc");
              }}
            >
              {copied ? "Đã sao chép" : " Sao chép mã"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Coupon;
