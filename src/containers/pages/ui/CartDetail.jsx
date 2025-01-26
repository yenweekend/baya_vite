import React from "react";
import { Minus, Plus } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Textarea } from "@/components/ui/textarea";

import { Card, CardContent } from "@/components/ui/card";
import { CouponCard } from "@/containers/components";
const items = [
  {
    id: 1,
    name: "set 5 mặt nạ giấy",
    sku: "abcdha",
    checked: false,
    price: 50000,
  },
  {
    id: 2,
    name: "sữa rửa mặt",
    sku: "abcdha",
    checked: false,
    price: 3000,
  },
  {
    id: 3,
    name: "khẩu trang",
    sku: "abcdha",
    checked: false,
    price: 2000,
  },
  {
    id: 4,
    name: "bím tóc",
    sku: "ahhhhhf",
    checked: false,
    price: 2000,
  },
  {
    id: 5,
    name: "bím tóc 1",
    sku: "ahhhhhf",
    checked: false,
    price: 2000,
  },
  {
    id: 6,
    name: "bím tóc 2",
    sku: "ahhhhhf",
    checked: false,
    price: 2000,
  },
];
const CartDetail = () => {
  const [productSelected, setProductSelected] = React.useState([]);
  const handleSelectWhole = React.useCallback(
    (event) => {
      if (event.target.checked) {
        setProductSelected(items);
      } else {
        setProductSelected([]);
      }
    },
    [items]
  );
  const handleSelectProduct = React.useCallback((event, productItem) => {
    setProductSelected((state) => {
      if (event.target.checked) {
        return [...state, productItem];
      } else {
        return state.filter((item) => item.id !== productItem.id);
      }
    });
  }, []);
  return (
    <div className="max-w-[1400px] px-[15px] mx-auto flex items-stretch">
      <div className="basis-2/3  shadow-card px-[15px]">
        <div className="bg-[#fff]">
          <h1 className="text-[20px] text-redtitle font-bold px-5 py-3 border-b border-b-shop">
            Giỏ hàng của bạn
          </h1>
          <div className="p-[15px]">
            <p className="text-[16px] text-blackichi mb-[15px]">
              Bạn đang có <strong> 8 sản phẩm</strong> trong giỏ hàng
            </p>
            <div className="border-[2px] border-shop rounded-[8px] px-[10px] py-[8px] flex flex-col">
              {items.map((item, index) => (
                <div
                  className="py-[15px] px-[10px] flex border-b-shop border-b [&:last-child]:border-b-transparent"
                  key={index}
                >
                  <label className="flex items-center checkbox relative mr-[10px]">
                    <input
                      type="checkbox"
                      className="p-[6px] cursor-pointer relative"
                      value={item.id}
                      checked={productSelected.some(
                        (product) => product.id === item.id
                      )}
                      onChange={(event) => {
                        handleSelectProduct(event, item);
                      }}
                    ></input>
                  </label>
                  <div className="w-[80px] h-[80px] block relative">
                    <a
                      className="w-full h-full"
                      href="/"
                      onClick={(e) => e.preventDefault()} // Prevent navigation on click
                    >
                      <img
                        src="https://product.hstatic.net/200000796751/product/solana_outdoor_chair_baya_2001350_d5007deca8444f47a4f5454c1162dcaa_medium.jpg"
                        alt=""
                        className="h-full w-full object-cover border border-solid border-shop"
                      />
                    </a>
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <div
                          className="absolute w-5 h-5 bg-[#8f9bb3] text-[#fff] flex items-center justify-center text-[8px] rounded-full top-[-7px] left-[-10px] cursor-pointer"
                          onClick={(e) => {
                            e.stopPropagation();
                          }}
                        >
                          Xóa
                        </div>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle className={"hidden"}>
                            Are you absolutely sure?
                          </AlertDialogTitle>
                          <AlertDialogDescription className={"text-center"}>
                            Bạn chắc chắn muốn bỏ sản phẩm này ra khỏi giỏ hàng?
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter
                          className={
                            "flex items-center justify-center gap-[15px]"
                          }
                        >
                          <AlertDialogCancel className={"uppercase rounded"}>
                            Hủy
                          </AlertDialogCancel>
                          <AlertDialogAction className={"uppercase rounded"}>
                            đồng ý
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </div>
                  <div className="flex-auto px-[18px] flex flex-col">
                    <a href="" className="text-blackni text-[15px] mb-[10px]">
                      Bộ 9 Kẹp Miệng Túi Nhựa Xanh Ngọc/ Xám RECIPE
                    </a>
                    <span className="text-[#8f9bb3] font-semibold text-[14px]">
                      59,000đ
                    </span>
                  </div>
                  <div className="ml-auto flex items-end flex-col">
                    <span className="text-[16px] text-blackni font-semibold mb-2">
                      59,000đ
                    </span>
                    <div className="flex items-center mx-auto">
                      <div className=" flex items-center justify-center  border border-solid border-[#f3f4f4] w-7 h-7 bg-[#f3f4f4] cursor-pointer group">
                        <Minus
                          size={16}
                          strokeWidth={3}
                          className="stroke-[#a4aaaf] group-hover:stroke-blacknitransition-all ease-linear duration-150"
                        />
                      </div>
                      <div className="border border-solid border-[#f3f4f4] w-7 h-7 flex items-center justify-center text-[14px] font-bold text-[#333]">
                        1
                      </div>
                      <div className=" flex items-center justify-center border border-solid border-[#f3f4f4] w-7 h-7 bg-[#f3f4f4] cursor-pointer group">
                        <Plus
                          size={16}
                          strokeWidth={3}
                          className="stroke-[#a4aaaf] group-hover:stroke-blacknitransition-all ease-linear duration-150"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="px-[15px] pb-[15px]">
            <div className="p-[15px] mt-5 bg-[#f3f4f4]">
              <label
                htmlFor="note"
                className="text-blackni font-semibold text-[16px]"
              >
                Ghi chú đơn hàng
              </label>
              <Textarea placeholder="Type your message here." id="note" />
            </div>
          </div>
        </div>
      </div>
      <div className="basis-1/3 shadow-card  px-[15px] ">
        <div className="sticky top-0">
          <div className="bg-[#fff] p-[15px]">
            <h1 className="text-[20px] text-redtitle font-bold px-5 py-3 border-b border-b-shop">
              Thông tin đơn hàng
            </h1>
            <div className="py-[10px] mb-[10px] border-b border-b-shop flex justify-between items-center">
              <span className="text-[16px] text-blackni font-semibold">
                Tổng tiền:
              </span>
              <span className="text-[24px] text-redni font-bold">
                6,444,000đ
              </span>
            </div>
            <ul className="  list-outside px-[15px]">
              <li className="text-[13px] list-disc marker:text-vendor text-coupontext font-normal  relative ">
                Phí vận chuyển sẽ được tính ở trang Thanh toán.
              </li>
              <li className="text-[13px] list-disc marker:text-vendor text-coupontext font-normal  relative ">
                Mã giảm giá được nhập ở trang Thanh toán
              </li>
            </ul>
            <a
              href="/"
              className="block text-center uppercase font-bold cursor-pointer text-[#fff] bg-redni py-[8px] px-[10px] mt-3"
            >
              thanh toán
            </a>
          </div>
          <div className="bg-[#fff] px-[15px] pb-[15px] pt-[42px] relative mt-[15px]">
            <Carousel
              opts={{
                align: "start",
              }}
              className="w-full group "
            >
              <CarouselContent>
                {Array.from({ length: 3 }).map((_, index) => (
                  <CarouselItem key={index}>
                    <div className="px-[6px]">
                      <Card className={"rounded-none"}>
                        <CardContent className="flex p-0 flex-col gap-[15px]">
                          {Array.from({ length: 2 }).map((_, index) => (
                            <CouponCard />
                          ))}
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="absolute top-[4px] right-[20px] flex items-center gap-4  ">
                <CarouselPrevious
                  className={"bg-[#fff] shadow-carousel text-blackni"}
                />
                <CarouselNext
                  className={"bg-[#fff] shadow-carousel text-blackni"}
                />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartDetail;
