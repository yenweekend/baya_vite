import React, { useEffect } from "react";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
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
import { X, Minus, Plus, ChevronsRight, ShoppingCart, Eye } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Modal } from "antd";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { CloseButton } from "..";
const productDetail = {
  slug: "abc",
  Images: [
    {
      img_url:
        "https://product.hstatic.net/200000796751/product/rosabella_seat_cushion_baya_2001472_1_2e09cb893a7b4f05ae8c81557217dc29_large.jpg",
    },
    {
      img_url:
        "https://product.hstatic.net/200000796751/product/337399379_681684177064513_1057752549673553224_n_0f39ace7e84447019db75b9d2a7dbe98_large.jpg",
    },
  ],
  Brand: {
    name: "FACE SHOP",
  },
  name: "Sofa hai chỗ PORTLAND 1m6",
};
const images = [
  "https://product.hstatic.net/200000796751/product/2002531.5_70d2def5b3144bac9b5f4c9ac526e5a9_master.jpg",
  "https://product.hstatic.net/200000796751/product/2002531.2_7e7692a23b814190996c2252338bcf0b_master.jpg",
  "https://product.hstatic.net/200000796751/product/2002531.2_7e7692a23b814190996c2252338bcf0b_master.jpg",
  "https://product.hstatic.net/200000796751/product/2002531.3_8ad76c5474d64991b0ee42ebdfd4fd5a_master.jpg",
];
const Slider = ({ className, imageDatas }) => {
  const [thumbsSwiper, setThumbsSwiper] = React.useState(null);

  return (
    <>
      <div className={cn("p-3 ", className)}>
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
            position: "relative",
            paddingBottom: "100%",
          }}
          loop={false}
          spaceBetween={10}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiperBig"
        >
          {images.map((img) => (
            <SwiperSlide>
              <LazyLoadImage
                effect="opacity"
                src={img}
                className={"h-full w-full object-cover absolute inset-0"}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="mt-6 px-4">
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={false}
          spaceBetween={10}
          slidesPerView={6}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper"
        >
          {images.map((img) => (
            <SwiperSlide>
              <LazyLoadImage src={img} effect="opacity" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};
export { Slider };
const QuickView = ({ className, children, data }) => {
  const [open, setOpen] = React.useState(false);
  const [selectedGift, setSelectedGift] = React.useState(null);

  const handleGiftChange = (e) => {
    setSelectedGift(e.target.value);
  };

  const isDesktop = useMediaQuery("(min-width: 990px)");
  if (isDesktop) {
    return (
      <>
        <div onClick={() => setOpen(true)} className={cn("", className)}>
          {children}
        </div>
        <Modal
          open={open}
          onOk={() => setOpen(false)}
          onCancel={() => setOpen(false)}
          className="quick_view"
        >
          <div className="p-3 flex  ">
            <div className="basis-1/2 pr-[12px] flex-grow-0 overflow-hidden px-3 pt-3 flex flex-col ">
              <Slider className={"border-none"} />
            </div>
            <div className="basis-1/2 bg-[#fff] px-3">
              <div className="flex justify-end " onClick={() => setOpen(false)}>
                <CloseButton />
              </div>
              <div className="product_info">
                <div className=" leading-[130%] text-[20px] font-bold my-[5px] text-redichi">
                  {data?.title}
                </div>
                <div className="flex flex-wrap items-center product-origin mb-[15px]">
                  <div className="text-[--shop-color-text] text-[13px] font-normal capitalize">
                    thương hiệu
                    <b className="text-[--shop-color-main]"> Hàn Quốc</b>
                  </div>
                  <div className="devide bg-[rgba(0,0,0,.06)] w-[0.8px] mx-[15px] h-[10px]"></div>
                  <div className="text-[--shop-color-text] text-[13px] font-normal capitalize">
                    Mã sản phẩm:
                    <b className="text-[--shop-color-main]"> 2022604763</b>
                  </div>
                  <div className="devide bg-[rgba(0,0,0,.06)] w-[0.8px] mx-[15px] h-[10px]"></div>

                  <div className="text-[--shop-color-text] text-[13px] font-normal capitalize">
                    Tình trạng:
                    <b className="text-[--shop-color-main]"> Còn hàng</b>
                  </div>
                </div>
                <div className="h-[60px] w-full bg-[#fafafa]  flex items-center p-8">
                  <span className="text-[--shop-color-text]   font-bold">
                    Giá:
                    <strong className="text-[#ff0000] text-[18px] ml-[40px]">
                      20.000đ
                    </strong>
                  </span>
                  <span className="price-delete ml-[10px] text-[#878c8f] line-through font-light relative text-[13px]">
                    717.000đ
                  </span>
                  <span className="sale-percent  w-10 rounded-sm px-[5px] bg-redni text-[#fff] block ml-auto">
                    -5%
                  </span>
                </div>
                <div className=" my-[15px]">
                  <div className="flex items-center">
                    <div className="text-blacknifont-bold text-[14px] flex-col flex pr-[20px]">
                      <span className="font-bold text-[13px]">Màu sắc :</span>
                      <span className="font-bold text-[13px] text-[#4ea8cd]">
                        Hồng
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <label
                        htmlFor="slug"
                        className="radio-attr py-[7px] px-[10px] border border-solid  bg-[#fff] text-redichi cursor-pointer relative"
                      >
                        <input
                          type="radio"
                          name="slug"
                          id="slug"
                          value={"slug"}
                          className={"appearance-none	"}
                        />
                        Xanh
                      </label>
                      <label
                        htmlFor="slug-2"
                        className="radio-attr py-[7px] px-[10px] border border-solid  bg-[#fff] text-redichi cursor-pointer relative"
                      >
                        <input
                          type="radio"
                          name="slug"
                          id="slug-2"
                          value={"slug-2"}
                          className={"appearance-none	"}
                        />
                        Hồng
                      </label>
                    </div>
                  </div>
                </div>
                <div className="">
                  <Accordion
                    type="single"
                    collapsible
                    className="w-full border-none"
                    defaultValue="item-1"
                  >
                    <AccordionItem value="item-1">
                      <AccordionTrigger
                        className={
                          " py-[10px]  text-[13px] font-bold text-redichi bg-[#fafafa] px-[6px] border-none"
                        }
                      >
                        Quà tặng
                      </AccordionTrigger>
                      <AccordionContent className={"p-[10px] border-none"}>
                        <div className="flex flex-col max-h-[30vh]">
                          {[1, 2].map((giftId) => (
                            <label
                              key={giftId}
                              className="flex items-center cursor-pointer overflow-hidden radio py-[6px] border-b border-solid border-[#eee] pl-[4px] hover:bg-[#fafafa] transition-all duration-150 ease-linear"
                              htmlFor={`gift-${giftId}`}
                            >
                              <input
                                type="radio"
                                name="gift"
                                value={giftId}
                                id={`gift-${giftId}`}
                                className="p-[6px]"
                                checked={selectedGift === String(giftId)}
                                onChange={handleGiftChange}
                              />
                              <div className="flex-auto w-[300px] px-[8px] flex items-center ">
                                <div className="mr-[10px] basis-1/6 border border-solid border-[#eee] p-[4px]">
                                  <div className="pb-[100%] relative ">
                                    <div className="absolute inset-0">
                                      <LazyLoadImage
                                        src="https://image.hsv-tech.io/400x0/bbx/products/5b1e3778-6e2a-45d6-b437-8ae51ba54d93.webp"
                                        effect="blur"
                                        className="w-full h-full object-cover"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="flex-shrink-0 basis-5/6 pr-[30px]
                                 relative"
                                >
                                  <a
                                    href="/"
                                    className="text-blacknitext-[10px] font-normal flex items-center cursor-pointer absolute right-0 bottom-0 hover:text-redni group underline"
                                  >
                                    Xem chi tiết{" "}
                                    <ChevronsRight
                                      size={16}
                                      className="stroke-blacknigroup-hover:stroke-second"
                                      strokeWidth={0.6}
                                    />
                                  </a>
                                  <span className="font-semibold text-[13px] hover:text-redichi line-clamp-1 ">
                                    Đệm Trang Trí Vải Cotton Nhiều Màu ROSABELLA{" "}
                                    {giftId}
                                  </span>
                                  <a
                                    href="/thuong-hieu"
                                    className="text-vendor hover:text-redichi uppercase text-[13px] "
                                  >
                                    <span className="text-[12px] text-vendor normal-case">
                                      thương hiệu:{" "}
                                    </span>
                                    Anna
                                  </a>
                                </div>
                              </div>
                            </label>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
                <div className="flex items-center mt-[15px]">
                  <span className="text-[--shop-color-text] font-bold text-[14px] mr-[100px]">
                    Số lượng:
                  </span>
                  <div className="flex items-center  w-[120px]  ">
                    <div className=" flex items-center justify-center  border border-solid border-[#f3f4f4] w-8 h-8 bg-[#f3f4f4] cursor-pointer group">
                      <Minus
                        size={16}
                        strokeWidth={3}
                        className="stroke-[#a4aaaf] group-hover:stroke-blacknitransition-all ease-linear duration-150"
                      />
                    </div>
                    <div className="border border-solid border-[#f3f4f4] w-8 h-8 flex items-center justify-center text-[14px] font-bold">
                      1
                    </div>
                    <div className=" flex items-center justify-center border border-solid border-[#f3f4f4] w-8 h-8 bg-[#f3f4f4] cursor-pointer group">
                      <Plus
                        size={16}
                        strokeWidth={3}
                        className="stroke-[#a4aaaf] group-hover:stroke-blacknitransition-all ease-linear duration-150"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex items-center  py-[10px] px-[25px]  gap-3 cursor-pointer flex-auto justify-center bg-[#ff0000] text-[#fff] mt-[15px]">
                  <span className="w-6 h-6 ">
                    <ShoppingCart size={24} stroke="#fff" />
                  </span>
                  <span className="text-[16px]">Thêm vào giỏ hàng</span>
                </div>
                <a
                  href="/"
                  className="text-blacknitext-[14px]  flex items-center cursor-pointer mt-[15px] hover:text-redni group underline"
                >
                  Xem chi tiết sản phẩm
                  <ChevronsRight
                    size={16}
                    className="stroke-blacknigroup-hover:stroke-redni pt-[2px]"
                    strokeWidth={2}
                  />
                </a>
              </div>
            </div>
          </div>
        </Modal>
      </>
    );
  }
  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild className={cn("", className)}>
        {children}
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left rounded-t-[10px]  border-b border-solid border-[#eee] relative">
          <DrawerTitle>
            <div className=" max-768:w-[90%] flex items-center">
              <p className="line-clamp-2 text-[15px]  font-medium text-redichi text-center ">
                {data?.title}
              </p>
            </div>
          </DrawerTitle>
          <DrawerClose asChild>
            <div className="absolute w-8 h-8 center-y right-[6px] flex items-center justify-center cursor-pointer">
              <CloseButton />
            </div>
          </DrawerClose>
          <DrawerDescription className={"hidden"}>
            Thông tin sản phẩm
          </DrawerDescription>
        </DrawerHeader>
        <div className="h-[60vh] overflow-y-auto pb-[12px]">
          <div className=" flex flex-col ">
            <div className="  flex-grow-0 overflow-hidden  pt-3 flex-col ">
              <Slider className={"border-none"} />
            </div>
            <div className=" bg-[#fff] px-3">
              <div className="product_info">
                <div className=" leading-[130%] text-[20px] font-bold my-[5px] text-redichi">
                  {productDetail.name}
                </div>
                <div className="flex flex-wrap items-center product-origin mb-[15px]">
                  <div className="text-[--shop-color-text] text-[13px] font-normal capitalize">
                    thương hiệu
                    <b className="text-[--shop-color-main]"> Hàn Quốc</b>
                  </div>
                  <div className="devide bg-[rgba(0,0,0,.06)] w-[0.8px] mx-[15px] h-[10px]"></div>
                  <div className="text-[--shop-color-text] text-[13px] font-normal capitalize">
                    Mã sản phẩm:
                    <b className="text-[--shop-color-main]"> 2022604763</b>
                  </div>
                  <div className="devide bg-[rgba(0,0,0,.06)] w-[0.8px] mx-[15px] h-[10px]"></div>

                  <div className="text-[--shop-color-text] text-[13px] font-normal capitalize">
                    Tình trạng:
                    <b className="text-[--shop-color-main]"> Còn hàng</b>
                  </div>
                </div>
                <div className="h-[60px] w-full bg-[#fafafa]  flex items-center p-8">
                  <span className="text-[--shop-color-text]  font-bold">
                    Giá:
                    <strong className="text-[#ff0000] text-[18px] ml-[40px]">
                      20.000đ
                    </strong>
                  </span>
                  <span className="price-delete ml-[10px] text-[#878c8f] line-through font-light relative text-[13px]">
                    717.000đ
                  </span>
                  <span className="sale-percent  w-10 rounded-sm px-[5px] bg-redni text-[#fff] block ml-auto">
                    -5%
                  </span>
                </div>
                <div className="variants mt-3"></div>
                <div className="">
                  <Accordion
                    type="single"
                    collapsible
                    className="w-full border-none"
                    defaultValue="item-1"
                  >
                    <AccordionItem value="item-1">
                      <AccordionTrigger
                        className={
                          " py-[10px]  text-[13px] font-bold text-redichi bg-[#fafafa] px-[6px] border-none"
                        }
                      >
                        Quà tặng
                      </AccordionTrigger>
                      <AccordionContent className={"p-[10px] border-none"}>
                        <div className="flex flex-col max-h-[30vh] ">
                          {[1, 2].map((giftId) => (
                            <label
                              key={giftId}
                              className="flex items-center cursor-pointer overflow-hidden radio py-[6px] border-b border-solid border-[#eee] pl-[4px] hover:bg-[#fafafa] transition-all duration-150 ease-linear"
                              htmlFor={`gift-${giftId}`}
                            >
                              <input
                                type="radio"
                                name="gift"
                                value={giftId}
                                id={`gift-${giftId}`}
                                className="p-[6px]"
                                checked={selectedGift === String(giftId)}
                                onChange={handleGiftChange}
                              />
                              <div className="flex-auto w-[300px] px-[8px] flex items-center ">
                                <div className="w-[45px]">
                                  <div className="pb-[100%] relative ">
                                    <div className="absolute inset-0">
                                      <LazyLoadImage
                                        src="https://image.hsv-tech.io/400x0/bbx/products/5b1e3778-6e2a-45d6-b437-8ae51ba54d93.webp"
                                        effect="blur"
                                        className="w-full h-full object-cover"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="flex-shrink-0 flex-auto pr-[30px]
                                 relative"
                                >
                                  <a
                                    href="/"
                                    className="text-blacknitext-[10px] font-normal flex items-center cursor-pointer absolute right-0 bottom-0 hover:text-redni group underline"
                                  >
                                    Xem chi tiết{" "}
                                    <ChevronsRight
                                      size={16}
                                      className="stroke-blacknigroup-hover:stroke-second"
                                      strokeWidth={0.6}
                                    />
                                  </a>
                                  <span className="font-semibold text-[13px] hover:text-redichi line-clamp-1 ">
                                    Đệm Trang Trí Vải Cotton Nhiều Màu ROSABELLA{" "}
                                    {giftId}
                                  </span>
                                  <a
                                    href="/thuong-hieu"
                                    className="text-vendor hover:text-redichi uppercase text-[13px] "
                                  >
                                    <span className="text-[12px] text-vendor normal-case">
                                      thương hiệu:{" "}
                                    </span>
                                    Anna
                                  </a>
                                </div>
                              </div>
                            </label>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
                <a
                  href="/"
                  className="text-blacknitext-[14px]  flex items-center cursor-pointer mt-[15px] hover:text-redni group underline"
                >
                  Xem chi tiết sản phẩm
                  <ChevronsRight
                    size={16}
                    className="stroke-blacknigroup-hover:stroke-redni pt-[2px]"
                    strokeWidth={2}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <DrawerFooter className="pt-2 flex items-center flex-row border-t z-[9999]">
          <div className="flex justify-center">
            <div className="flex items-center mx-auto">
              <div className=" flex items-center justify-center  border border-solid border-[#f3f4f4] w-10 h-10 bg-[#f3f4f4] cursor-pointer group">
                <Minus
                  size={16}
                  strokeWidth={3}
                  className="stroke-[#a4aaaf] group-hover:stroke-blacknitransition-all ease-linear duration-150"
                />
              </div>
              <div className="border border-solid border-[#f3f4f4] w-10 h-10 flex items-center justify-center text-[14px] font-bold">
                1
              </div>
              <div className=" flex items-center justify-center border border-solid border-[#f3f4f4] w-10 h-10 bg-[#f3f4f4] cursor-pointer group">
                <Plus
                  size={16}
                  strokeWidth={3}
                  className="stroke-[#a4aaaf] group-hover:stroke-blacknitransition-all ease-linear duration-150"
                />
              </div>
            </div>
          </div>
          <DrawerClose className="block p-[10px]  w-full bg-redni text-[#fff] text-[13px] font-medium cursor-pointe text-center uppercase ">
            <span>Thêm vào giỏ</span>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default QuickView;
