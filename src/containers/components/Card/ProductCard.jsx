import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { ShoppingCart } from "lucide-react";
import QuickView from "../Button/QuickView";
const productDetail = {
  slug: "abc",
  Images: [
    {
      img_url:
        "https://product.hstatic.net/200000796751/product/z6192936196928_5b74d6b043ae5037aa3360d13da83cf9_2ef26af446854e86b3cd24df07d7ee89_large.jpg",
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
const ProductCard = ({ tagSale = null, productData }) => {
  return (
    <>
      <ProductCardStyled className={` w-full shrink-0 bg-[#fff] shadow-card`}>
        <div className="product-item-thumb w-full  relative cursor-pointer group/item">
          <div className=" w-full h-full  relative group/image p-[5px]">
            <div className="w-full h-full overflow-hidden">
              <div className=" flex items-center group-hover/image:translate-x-[-100%] transition-all ease-linear duration-300">
                {productDetail["Images"].slice(0, 2).map((img, idx) => (
                  <div
                    className={` w-full h-full  flex items-center shrink-0  `}
                    key={idx}
                  >
                    <div className="pb-[100%] relative w-full">
                      <div className="absolute inset-0">
                        <LazyLoadImage
                          src={img.img_url}
                          effect="blur"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <span className="sale-percent absolute w-10 rounded-sm px-[5px] bg-redni text-[#fff] top-[10px] left-[10px]">
              -5%
            </span>
          </div>
          <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  opacity-0 invisible scale-90 group-hover/item:opacity-[1] group-hover/item:visible group-hover/item:scale-100  rounded-full flex items-center justify-center view-quick text-[#5d5d5d] transition-all ease-linear duration-150 btn-quickview">
            <QuickView />
          </div>
          {/* <Eye className="text-inherit" /> */}
        </div>
        <div className="px-[14px] pb-[10px]">
          <div className="">
            <div className="  text-vendor text-center">
              <a href="/" className="text-inherit text-[12px]">
                {productDetail["Brand"]["name"]}
              </a>
            </div>
            <div className="flex items-center ">
              <a
                href="/"
                className="w-0 flex-auto line-clamp-2 text-[14px] text-blacknifont-medium text-center"
              >
                {productDetail.name}
              </a>
            </div>
            <div className="price flex items-center justify-center flex-wrap pb-[10px]">
              <span className="price  font-bold text-redni">291.000đ</span>
              <span className="price-delete ml-[10px] text-[#878c8f] line-through font-light relative">
                717.000đ
              </span>
            </div>
          </div>
          <div className="cursor-pointer flex items-center justify-between gap-2 h-8 border border-solid border-transparent hover:border-[--shop-color-main] transition-all ease-linear duration-150 rounded-full pl-[15px] ">
            <span className="text-[13px] font-bold uppercase flex-auto text-center">
              Thêm vào giỏ{" "}
            </span>
            <span className="w-8 h-8 bg-primary  rounded-full flex items-center justify-center">
              <ShoppingCart size={16} strokeWidth={1.5} stroke="#fff" />
            </span>
          </div>
        </div>
      </ProductCardStyled>
    </>
  );
};
const ProductCardStyled = styled.div`
  .product-item-thumb {
    width: 100%;
    aspect-ratio: 1 / 1;
    overflow: hidden;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    position: relative;
  }
  .brand_text > span {
    width: 100%;
    margin-bottom: 0px;

    cursor: pointer;
    font-style: normal;
    font-weight: 600;
    line-height: 18px;
    letter-spacing: 0em;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .items_desc {
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    font-size: 12px;
  }
  .prev_price {
    position: relative;
  }
  .prev_price::after {
    background-color: #000;
    position: absolute;
    content: "";
    width: 100%;
    height: 0.8px;
    opacity: 0.8;
    top: 50%;
    transform: translate(-50%, -50%);
    left: 50%;
  }
  .stock-bar {
    transition: all 0.4s cubic-bezier(0.08, 0.82, 0.17, 1) 0s;
    background: repeating-linear-gradient(
      -45deg,
      rgba(199, 49, 48, 0.6),
      rgba(199, 49, 48, 0.6) 10px,
      rgb(199, 49, 48) 10px,
      rgb(199, 49, 48) 20px
    );
  }
  .quick_seen_btn {
    height: 40px;
    padding: 8px 15px;
  }
`;
export default ProductCard;
