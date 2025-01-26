import React from "react";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import * as HoverCardFull from "@radix-ui/react-hover-card";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { CircleAlert, Copy } from "lucide-react";

export function CouponContentButton() {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 990px)");
  if (isDesktop) {
    return (
      <HoverCard openDelay={0} open={open} onOpenChange={setOpen}>
        <HoverCardTrigger asChild>
          <button
            variant="link"
            className={"absolute right-0 top-0 cursor-pointer"}
          >
            <CircleAlert
              size={20}
              className="stroke-coupontext"
              strokeWidth={1.6}
            />
          </button>
        </HoverCardTrigger>
        <HoverCardContent className="max-w-[400px] w-[360px]">
          <div className="px-8 py-3 bg-[#fafafa] flex items-center">
            <span className="text-vendor uppercase text-[12px] basis-1/3">
              Mã
            </span>
            <div className="flex-auto basis-2/3 flex items-center gap-2 pl-[20px]">
              <span className="text-[13px] font-bold text-coupontext uppercase">
                vouchert1-200k
              </span>
              <button className="w-6 h-6 rounded-full  bg-[#4ea8cd] bg-opacity-20 flex items-center justify-center">
                <Copy
                  className="stroke-[#4ea8cd]"
                  size={12}
                  strokeWidth={1.4}
                />
              </button>
            </div>
          </div>
          <div className="px-8 py-3 flex items-center">
            <span className="text-vendor font-medium text-[12px] basis-1/3">
              Hạn sử dụng
            </span>
            <span className="text-coupontext uppercase text-[13px] basis-2/3 font-medium pl-[20px]">
              31/12/2025
            </span>
          </div>
          <div className="px-8 py-3 bg-[#fafafa] flex items-center">
            <ul className="  list-outside ">
              <li className="text-[13px] list-disc marker:text-[#000] text-coupontext font-normal  relative ">
                Dành cho đơn hàng từ 400k
              </li>
              <li className="text-[13px] list-disc marker:text-[#000] text-coupontext font-normal  relative ">
                Mã khách hàng được sử dụng tối đa 1 lần
              </li>
              <li className="text-[13px] list-disc marker:text-[#000] text-coupontext font-normal  relative ">
                Sao chép mã và nhập mã khuyến mãi ở trang thanh toán
              </li>
            </ul>
          </div>
          <HoverCardFull.Arrow
            width={16}
            height={12}
            className="fill-white"
          ></HoverCardFull.Arrow>
        </HoverCardContent>
      </HoverCard>
    );
  }
  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild className="cursor-pointer text-[#fff] py-2 pl-4">
        <button
          variant="link"
          className={"absolute right-0 top-0 cursor-pointer"}
        >
          <CircleAlert
            size={20}
            className="stroke-coupontext"
            strokeWidth={1.6}
          />
        </button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left rounded-t-[10px] bg-redni">
          <DrawerTitle className={"hidden"}>
            <span>Coupon Detail</span>
          </DrawerTitle>
          <DrawerDescription className={"hidden"}>
            Thông tin coupon
          </DrawerDescription>
        </DrawerHeader>
        <div className="py-[15px] ">hello world</div>
        <DrawerFooter className="pt-2">
          <DrawerClose
            asChild
            className="block p-[10px] mt-[5px] w-full bg-redni text-[#fff] text-[13px] font-medium cursor-pointe text-center uppercase"
          >
            hello
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
