import * as React from "react";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
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
import {
  Dropdown,
  DropdownContent,
  DropdownTrigger,
} from "../Dropdown/Dropdown";
import { ShoppingCart, X, Minus, Plus } from "lucide-react";
import { Link } from "react-router-dom";
export function CartButtonTransition() {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 990px)");
  if (isDesktop) {
    return (
      <Dropdown open={open} onOpenChange={setOpen}>
        <DropdownTrigger className={"text-[#fff] mx-[2px]"}>
          <a className="items-center  flex relative">
            <span className="w-6 h-6">
              <ShoppingCart size={24} strokeWidth={1.5} />
            </span>
            <span className="box-text ml-[10px] text-left text-[14px] max-990:hidden whitespace-nowrap">
              Giỏ hàng
            </span>
            <span className="badge text-[12px] absolute w-[16px] h-[16px] bg-[#ff0000] rounded-full flex items-center justify-center text-[#fff] top-[-11px] left-[12px]">
              2
            </span>
          </a>
        </DropdownTrigger>
        <DropdownContent className={"py-[15px] px-[24px] w-[420px]"}>
          <div className="text-center pb-[8px]  border-b border-solid border-shop">
            <h2 className="text-[15px] uppercase font-medium text-redichi ">
              thông tin giỏ hàng
            </h2>
          </div>
          <div className="max-h-[320px] overflow-y-scroll cart-view-scroll">
            <ul className=" ">
              {Array.from({ length: 5 }).map((_, index) => (
                <li
                  className="flex px-[12px] border-b border-solid border-shop py-[20px]"
                  key={index}
                >
                  <div className="w-[75px] h-[75px] overflow-hidden border border-solid cart-item mr-[15px] flex-shrink-0">
                    <LazyLoadImage
                      src="https://product.hstatic.net/200000796751/product/2002535_5b3eede60829490499619fabe5dbd0a9_small.jpg"
                      effect="blur"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="">
                    <div className="font-semibold text-[14px] pr-[28px] text-blackni relative">
                      Bát ăn snack gốm sứ ANNE màu ngẫu nhiên H6.5xD11.5
                      <div className="absolute right-0 top-0 center-y cursor-pointer">
                        <X className="text-blackni" size={16} />
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center mt-2">
                        <button className="bg-[#f9f9f9] border border-solid border-[#f3f4f4] rounded-[3px] text-center h-[28px] w-[28px] flex items-center justify-center cursor-pointer">
                          <Minus className="text-blackni" size={16} />
                        </button>
                        <span className="text-[14px] font-bold text-[#252a2b] border border-solid border-[#f3f4f4] text-center h-[28px] w-[38px] bg-[#fff] flex items-center justify-center">
                          1
                        </span>
                        <button className="bg-[#f9f9f9] border border-solid border-[#f3f4f4] rounded-[3px] text-center h-[28px] w-[28px] flex items-center justify-center cursor-pointer">
                          <Plus className="text-blackni" size={16} />
                        </button>
                      </div>
                      <span className="text-blacknitext-[14px] font-bold">
                        29.000đ
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="  mb-[20px] flex justify-between items-center py-[10px] px-[12px] leading-6">
            <span className="text-blackni uppercase text-[14px]">
              Tổng tiền :
            </span>
            <span className="text-redni font-bold text-[16px] ">29.000đ</span>
          </div>
          <a
            href="/"
            className="block p-[10px] mt-[5px] w-full bg-redni text-[#fff] text-[13px] font-medium cursor-pointe text-center uppercase "
          >
            Xem giỏ hàng
          </a>
        </DropdownContent>
      </Dropdown>
    );
  }
  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild className="cursor-pointer text-[#fff] py-2 pl-4">
        <a className="items-center  flex relative py-[15px]">
          <span className="w-6 h-6 ">
            <ShoppingCart size={24} strokeWidth={1.5} />
          </span>
          <span className="box-text ml-[10px] text-left text-[14px] max-990:hidden">
            Giỏ hàng
          </span>
          <span className="badge text-[12px] absolute w-[16px] h-[16px] bg-[#ff0000] rounded-full flex items-center justify-center text-[#fff] top-[-2px] left-[30px]">
            2
          </span>
        </a>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left rounded-t-[10px] bg-redni">
          <DrawerTitle>
            <div className="text-[15px]  font-medium text-[#fff] flex items-center justify-between">
              <span className="text-[14px] font-normal">7 sản phẩm</span>
              <span className="font-bold">2,170,000đ</span>
              <DrawerClose className="text-[#fff]">
                <X stroke="#fff" size={20} />
              </DrawerClose>
            </div>
          </DrawerTitle>
          <DrawerDescription className={"hidden"}>
            Thông tin giỏ hàng
          </DrawerDescription>
        </DrawerHeader>
        <div className="py-[15px] ">
          <div className="max-h-[360px] overflow-y-scroll cart-view-scroll">
            <ul className=" ">
              {Array.from({ length: 5 }).map((_, index) => (
                <li
                  className="flex px-[12px] border-b border-solid border-shop py-[20px]"
                  key={index}
                >
                  <div className="w-[75px] h-[75px] overflow-hidden border border-solid cart-item mr-[15px] flex-shrink-0">
                    <LazyLoadImage
                      src="https://product.hstatic.net/200000796751/product/2002535_5b3eede60829490499619fabe5dbd0a9_small.jpg"
                      effect="blur"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-auto">
                    <div className="font-semibold text-[14px] pr-[28px] text-[#000] relative">
                      Bát ăn snack gốm sứ ANNE màu ngẫu nhiên H6.5xD11.5
                      <div className="absolute right-0 top-0 center-y cursor-pointer">
                        <X className="text-blackni" size={16} />
                      </div>
                    </div>
                    <div className="flex items-center justify-between ">
                      <div className="flex items-center mt-2">
                        <button className="bg-[#f9f9f9] border border-solid border-[#f3f4f4] rounded-[3px] text-center h-[28px] w-[28px] flex items-center justify-center cursor-pointer">
                          <Minus className="text-blackni" size={16} />
                        </button>
                        <span className="text-[14px] font-bold text-[#252a2b] border border-solid border-[#f3f4f4] text-center h-[28px] w-[38px] bg-[#fff] flex items-center justify-center">
                          1
                        </span>
                        <button className="bg-[#f9f9f9] border border-solid border-[#f3f4f4] rounded-[3px] text-center h-[28px] w-[28px] flex items-center justify-center cursor-pointer">
                          <Plus className="text-blackni" size={16} />
                        </button>
                      </div>
                      <span className="text-blacknitext-[14px] font-bold">
                        29.000đ
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="  mb-[20px] flex justify-between items-center py-[10px] leading-6 px-[12px]">
            <span className="text-blackni uppercase text-[14px]">
              Tổng tiền :
            </span>
            <span className="text-redni font-bold text-[16px] ">29.000đ</span>
          </div>
        </div>
        <DrawerFooter className="pt-2">
          <DrawerClose
            asChild
            className="block p-[10px] mt-[5px] w-full bg-redni text-[#fff] text-[13px] font-medium cursor-pointe text-center uppercase"
          >
            <Link to={"/"}>Xem giỏ hàng</Link>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
