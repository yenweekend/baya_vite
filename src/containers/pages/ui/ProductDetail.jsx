import React, { useCallback, useEffect, useRef, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import icons from "@/utils/icons";
import { product_images_slide } from "../../../utils/scrape_data";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { HoverEffectBox, CouponCard } from "../../components";
import { useQuery } from "@tanstack/react-query";
import { getProductDetail } from "../../../apis/product.api";
import FancyBoxWrapper from "@/helpers/fancybox";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Minus,
  Plus,
  ChevronsRight,
  X,
  Facebook,
  Twitter,
  Link as LinkIcon,
} from "lucide-react";
const images = [
  "https://product.hstatic.net/200000796751/product/2002531.5_70d2def5b3144bac9b5f4c9ac526e5a9_master.jpg",
  "https://product.hstatic.net/200000796751/product/2002531.2_7e7692a23b814190996c2252338bcf0b_master.jpg",
  "https://product.hstatic.net/200000796751/product/2002531.2_7e7692a23b814190996c2252338bcf0b_master.jpg",
  "https://product.hstatic.net/200000796751/product/2002531.3_8ad76c5474d64991b0ee42ebdfd4fd5a_master.jpg",
];
const ProductDetail = () => {
  const params = useParams();
  const [thumbsSwiper, setThumbsSwiper] = React.useState(null);
  const [selectedGift, setSelectedGift] = React.useState(null);
  const [readMore, setReadMore] = useState(false);
  const handleGiftChange = (e) => {
    setSelectedGift(e.target.value);
  };
  const [attributeAvailable, setAttrbuteAvailable] = useState([]);
  const [slug, setSlug] = useState(params.slug);
  const [selectedAttributes, setSelectedAttributes] = useState({});
  const [productVariant, setProductVariant] = useState(null);

  const handleAttributeChange = useCallback((attributeName, value) => {
    setSelectedAttributes((prev) => ({
      ...prev,
      [attributeName]: value,
    }));
  }, []);

  // useEffect(() => {
  //   setSlug(params.slug);
  // }, [params]);

  // const { isLoading, error, data } = useQuery({
  //   queryKey: ["productDetailData", slug],
  //   queryFn: () => getProductDetail(slug),
  //   enabled: !!slug,
  // });
  // useEffect(() => {
  //   if (data) {
  //     const images = [...data.data.data.productDetail["Images"]];
  //     const variantImages = data.data.data["productDetail"][
  //       "ProductVariants"
  //     ].map((variant) => {
  //       return { img_url: variant.thumbnail, id: variant.id };
  //     });
  //     setImages([...images, ...variantImages]);
  //   }
  // }, [data]);
  // useEffect(() => {
  //   if (data) {
  //     if (
  //       Object.keys(selectedAttributes).length ===
  //       data.data.data["attributes"].length
  //     ) {
  //       const variantMatches = data.data.data["variants"].filter((variant) =>
  //         Object.entries(selectedAttributes).every(
  //           ([key, value]) => variant.attributes[key] === value
  //         )
  //       );
  //       // one variant matches
  //       setProductVariant(variantMatches[0]);
  //     } else {
  //       if (data && Object.keys(selectedAttributes).length > 0) {
  //         const variantMatches = data.data.data["variants"].filter((variant) =>
  //           Object.entries(selectedAttributes).every(
  //             ([key, value]) => variant.attributes[key] === value
  //           )
  //         );
  //         setAttrbuteAvailable(variantMatches);
  //         // if(variantMatches.length === 1)
  //         // {
  //         //   setProductVariant(variantMatches[0]);
  //         // }
  //       }
  //     }
  //   }
  // }, [selectedAttributes, data]);
  // useEffect(() => {
  //   if (productVariant && image) {
  //     let thumbIndex;
  //     thumbIndex = image.findIndex((item) => item?.id === productVariant.id);
  //     setThumbIndex(thumbIndex);
  //   }
  // }, [productVariant, image]);

  // if (isLoading) {
  //   return "Loading";
  // }
  // if (error) {
  //   return <span>Error: {error.message}</span>;
  // }

  return (
    <div className="mt-[30px] mb-[55px] pb-[30px]">
      <FancyBoxWrapper
        options={{
          Carousel: {
            infinite: false,
          },
          Images: {
            zoom: true,
          },
          // Custom CSS transition on opening
          showClass: "f-fadeIn",
        }}
      ></FancyBoxWrapper>
      <div className="flex gap-[12px] items-stretch">
        <div className="basis-45  flex-grow-0">
          <div className=" pb-[100%] w-full h-0 sticky top-0 bg-[#fff]">
            <div className="absolute w-full h-full flex flex-col justify-between">
              <div className=" w-full  flex  flex-row-reverse  ">
                {" "}
                .
                <div
                  className={
                    "  overflow-hidden flex-auto pr-[6px] pl-[12px] py-[6px]"
                  }
                >
                  <Swiper
                    style={{
                      "--swiper-navigation-color": "#fff",
                      "--swiper-pagination-color": "#fff",
                    }}
                    loop={false}
                    spaceBetween={10}
                    navigation={true}
                    thumbs={{ swiper: thumbsSwiper }}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper2"
                  >
                    {images.map((img) => (
                      <SwiperSlide
                        style={{
                          width: "100%",
                          paddingBottom: "100%",
                          position: "relative",
                        }}
                      >
                        <a
                          href={img}
                          className="h-full absolute inset-0 object-cover w-full"
                          data-fancybox="gallery"
                        >
                          <img
                            src={img}
                            className={"h-full  object-cover "}
                            effect="blur"
                          />
                        </a>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
                <div className="flex-grow-0 min-990:w-[80px] pt-3 w-[76px] flex-shrink-0 px-3 ">
                  <Swiper
                    onSwiper={setThumbsSwiper}
                    loop={false}
                    spaceBetween={10}
                    slidesPerView={6}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiperGallery h-full mt-0 "
                    direction="vertical"
                  >
                    {images.map((img) => (
                      <SwiperSlide
                        style={{
                          position: "relative",
                          paddingBottom: "100%",
                        }}
                      >
                        <LazyLoadImage src={img} />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
              <div className="flex items-center justify-center">
                Chia sẻ:
                <a
                  href="/"
                  className="ml-[5px] w-[30px] h-[30px] rounded-full bg-[#25479b] flex items-center justify-center"
                >
                  <Facebook size={16} fill="#fff" stroke="#fff" />
                </a>
                <a
                  href="/"
                  className="ml-[5px] w-[30px] h-[30px] rounded-full bg-[#0084ff] flex items-center justify-center"
                >
                  <icons.messenger
                    fill="#fff"
                    stroke="#fff"
                    size={16}
                  ></icons.messenger>
                </a>
                <a
                  href="/"
                  className="ml-[5px] w-[30px] h-[30px] rounded-full bg-[#55acee] flex items-center justify-center"
                >
                  <Twitter size={16} fill="#fff" stroke="#fff" />
                </a>
                <a
                  href="/"
                  className="ml-[5px] w-[30px] h-[30px] rounded-full bg-[#cd242a] flex items-center justify-center"
                >
                  <icons.pinterest
                    fill="#fff"
                    stroke="#fff"
                    size={16}
                  ></icons.pinterest>
                </a>
                <button
                  href="/"
                  className="ml-[5px] w-[30px] h-[30px] rounded-full bg-[#929292] flex items-center justify-center"
                >
                  <LinkIcon size={16} stroke="#fff" />
                </button>
              </div>
            </div>
          </div>
          <div className=""></div>
        </div>
        <div className="basis-55 ">
          <div className=" bg-[#fff]   p-[15px]">
            <div className=" leading-[130%] text-[20px] font-bold  text-redichi">
              Đệm Trang Trí Vải Cotton Nhiều Màu ROSABELLA
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
            <div className=" w-full bg-[#fafafa]  flex items-center p-[15px] mb-[15px]">
              <div className="flex items-center basis-2/3 ">
                <span className="text-[--shop-color-text]  text-[14px] font-bold w-[20%]">
                  Giá:
                </span>
                <strong className="text-[#ff0000] text-[26px] ml-[40px]">
                  20.000đ
                </strong>
                <span className="price-delete ml-[10px] text-[#878c8f] line-through font-light relative text-[13px]">
                  717.000đ
                </span>
              </div>
              <span className=" bsale-percent  w-10 rounded-sm px-[5px] bg-redni text-[#fff] block ml-auto">
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
              >
                <AccordionItem value="item-1">
                  <AccordionTrigger
                    className={
                      " p-[10px]  text-[13px] font-bold text-redni border border-solid border-redni pr-[6px] "
                    }
                  >
                    Quà tặng
                  </AccordionTrigger>
                  <AccordionContent className={" border-none"}>
                    <div className="flex flex-col max-h-[30vh] border border-solid border-redni border-t-transparent">
                      {[1, 2].map((giftId) => (
                        <label
                          key={giftId}
                          className="flex items-center cursor-pointer overflow-hidden radio py-[6px] border-b border-solid border-[#eee] hover:bg-[#fafafa] transition-all duration-150 ease-linear pl-[20px]"
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
                            <div className="mr-[10px] basis-1/12  p-[4px]">
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
                              className="flex-shrink-0 basis-11/12 pr-[30px]
                                 relative"
                            >
                              <a
                                href="/"
                                className="text-blacknitext-[10px] font-normal flex items-center cursor-pointer absolute right-0 bottom-0 hover:text-redni group underline text-[12px]"
                              >
                                Xem chi tiết{" "}
                                <ChevronsRight
                                  size={14}
                                  className="stroke-blacknigroup-hover:stroke-second"
                                  strokeWidth={0.6}
                                />
                              </a>
                              <span className="font-semibold text-[13px] text-redni line-clamp-1 ">
                                Đệm Trang Trí Vải Cotton Nhiều Màu ROSABELLA{" "}
                                {giftId}
                              </span>
                              <a
                                href="/thuong-hieu"
                                className="text-redichi hover:text-redichi uppercase text-[11px] "
                              >
                                <span className="text-[10px] text-vendor normal-case">
                                  Thương hiệu:{" "}
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
            <div className="warranty flex items-center gap-3 mt-[15px]">
              <div className="basis-1/3 flex items-center gap-2">
                <div className="w-[30px] h-[30px]">
                  <img
                    src="https://theme.hstatic.net/200000796751/1001266995/14/product_deliverly_1_ico.png?v=82"
                    alt=""
                  />
                </div>
                <span className="text-vendor text-[14px]">1 năm bảo hành</span>
              </div>
              <div className="basis-1/3 flex items-center gap-2">
                <div className="w-[30px] h-[30px]">
                  <img
                    src="https://theme.hstatic.net/200000796751/1001266995/14/product_deliverly_2_ico.png?v=82"
                    alt=""
                  />
                </div>
                <span className="text-vendor text-[14px]">1 năm bảo hành</span>
              </div>
              <div className="basis-1/3 flex items-center gap-2">
                <div className="w-[30px] h-[30px]">
                  <img
                    src="	https://theme.hstatic.net/200000796751/1001266995/14/product_deliverly_3_ico.png?v=82"
                    alt=""
                  />
                </div>
                <span className="text-vendor text-[14px]">
                  Hotline: <strong>1900 63 64 76 </strong>
                  (9-21h)
                </span>
              </div>
            </div>
            <div className="flex items-center mt-[15px] gap-3">
              <div className="basis-1/2 ">
                <HoverEffectBox className={"w-full rounded"}>
                  <span className="text-inheirt text-[14px] font-bold">
                    Thêm vào giỏ hàng
                  </span>
                </HoverEffectBox>
              </div>
              <div className="basis-1/2 ">
                <button className="text-[14px] text-[#fff] font-bold bg-redni w-full px-[25px] py-[10px] rounded">
                  Mua ngay
                </button>
              </div>
            </div>
          </div>
          <div className="bg-[#fff] mt-[15px] p-[15px]">
            <div className="grid grid-cols-2 gap-[15px]">
              <CouponCard />
              <CouponCard />
              <CouponCard />
            </div>
          </div>
          <div className="bg-[#fff] mt-[15px] p-[15px]">
            <Tabs defaultValue="description" className="w-full">
              <TabsList className="bg-none w-full flex justify-start border-b-[2px] border-[#ededed]">
                <TabsTrigger
                  value="description"
                  className={
                    "text-[14px] font-bold text-black pb-[19px] uppercase border-b-[2px] border-transparent mr-[20px]"
                  }
                >
                  Mô tả sản phẩm
                </TabsTrigger>
                <TabsTrigger
                  value="judgement"
                  className={
                    "text-[14px] font-bold text-black pb-[19px] uppercase border-b-[2px] border-transparent"
                  }
                >
                  Đánh giá
                </TabsTrigger>
              </TabsList>
              <TabsContent value="description" className={" pt-[20px]"}>
                <div className="">
                  <div
                    className={` overflow-hidden transition-all ease-linear duration-300 h-[220px] ${
                      readMore ? "h-auto" : ""
                    }`}
                  >
                    Giường có ngăn kéo, cất đồ gọn gang Đầu giường có lưng tựa
                    để người tựa vào nghỉ ngơi thoải mái trên giường ----------
                    Sản phẩm Giường Bộ sưu tập DOMINIK Kích cỡ L200xW160xH80 Màu
                    sắc Dark-wood-Dark-grey Chất liệu MFC Xuất xứ Việt Nam Đơn
                    vị PCS ---------- Tránh đặt sản phẩm dưới ánh sáng mặt trời
                    trực tiếp và những nơi có độ ẩm cao. Lau bụi bằng vải sạch,
                    mềm, khô, không có xơ. Làm sạch nhẹ nhàng bằng xà phòng nhẹ.
                    Lau khô ngay bằng vải mềm, tránh ẩm ướt còn sót lại. Làm
                    sạch vết tràn ngay lập tức bằng cách thấm thay vì lau. Nâng
                    để di chuyển đồ đạc, tránh xô đẩy Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Aliquam repellendus id
                    laboriosam, dolorem, expedita eligendi blanditiis eos
                    numquam molestias, possimus et unde! Quis fuga impedit
                    repudiandae dignissimos consequuntur! Quisquam, magnam
                    corporis officia atque tempore ipsum commodi facilis
                    repellendus minus quasi alias incidunt sed quo repellat
                    ullam. Modi eius sapiente at dolorem exercitationem
                    perspiciatis harum autem iure placeat! Enim voluptates
                    blanditiis ipsam et nesciunt quisquam quasi quidem, nostrum
                    in sint, quae, iusto beatae iure asperiores facere soluta.
                    Atque facere similique nulla provident mollitia numquam
                    dolorum eos saepe alias voluptas architecto ipsum
                    blanditiis, minus sunt ratione itaque dolore? Sed culpa
                    numquam debitis.
                    <p>&nbsp;</p>
                  </div>
                  <div className={`desc-btn ${readMore ? "mt-[30px]" : ""}`}>
                    <button
                      className="border border-solid border-redichi rounded text-redichi text-[13px] capitalize flex items-center py-[6px] px-[15px] mx-auto gap-2"
                      onClick={() => setReadMore((state) => !state)}
                    >
                      {readMore ? (
                        <>
                          <Minus size={14} />
                          Rút gọn nội dung
                        </>
                      ) : (
                        <>
                          <Plus size={14} />
                          Xem thêm nội dung
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="judgement">đánh giá</TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 right-0 left-0  text-[#fff] bg-[#fff] flex items-center justify-between py-[12px] px-[20px] min-990:hidden pt-2  border-t z-[50]">
        <div className="flex items-center w-[720px] mx-auto gap-4">
          <div className="flex justify-center ">
            <div className="flex items-center mx-auto">
              <div className=" flex items-center justify-center  border border-solid border-[#f3f4f4] w-10 h-10 bg-[#f3f4f4] cursor-pointer group">
                <Minus
                  size={16}
                  strokeWidth={3}
                  className="stroke-[#a4aaaf] group-hover:stroke-blacknitransition-all ease-linear duration-150"
                />
              </div>
              <div className="border border-solid border-[#f3f4f4] w-10 h-10 flex items-center justify-center text-[14px] font-bold text-[#000]">
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

          <Drawer>
            <DrawerTrigger
              asChild
              className="cursor-pointer text-[#fff] py-2 pl-4"
            >
              <button className="block p-[10px] flex-auto bg-redni text-[#fff] text-[13px] font-medium cursor-pointe text-center uppercase rounded cursor-pointer">
                <span>Thêm vào giỏ</span>
              </button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader className="text-left rounded-t-[10px] bg-redni">
                <DrawerTitle>
                  <div className="text-[15px]  font-medium text-[#fff] flex items-center justify-between">
                    <span className="text-[14px] font-normal basis-1/3">
                      7 sản phẩm
                    </span>
                    <span className="font-bold basis-1/3 text-center">
                      2,170,000đ
                    </span>
                    <DrawerClose className="text-[#fff] basis-1/3 text-right">
                      <X size={20} className="ml-auto" />
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
                          <img
                            src="https://product.hstatic.net/200000796751/product/2002535_5b3eede60829490499619fabe5dbd0a9_small.jpg"
                            alt=""
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
                <div className="  mb-[20px] flex justify-between items-center py-[10px] px-[12px] leading-6">
                  <span className="text-blackni uppercase text-[14px]">
                    Tổng tiền :
                  </span>
                  <span className="text-redni font-bold text-[16px] ">
                    29.000đ
                  </span>
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
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
