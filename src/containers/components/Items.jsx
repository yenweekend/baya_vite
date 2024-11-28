import React, { useEffect, useRef , useState} from "react";
import styled from "styled-components";
import TagSale from "./TagSale";
import icons from "../../utils/icons";
import { Button, Modal,Carousel, Rate } from 'antd';
import { Link, useNavigate } from "react-router-dom";

const Items = ({ width, detail }) => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [viewMore, setViewMore] = useState({});
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <ItemsStlyed className={`max-w-[${width}px] group  product shrink-0`}>
        <div className="item_thumb w-full rounded-t-lg overflow-hidden relative cursor-pointer">
          <div className="  imgs w-full h-full overflow-hidden relative group " onClick={() => {
            navigate(`/product/${detail.slug}`);
          }}>
            <div className="flex items-center group-hover:translate-x-[-260px] transition-all ease-linear duration-300">
            {
              detail["Images"].slice(0,2).map((img, idx) => (
            <div className={`img_wrap w-full h-full  flex items-center shrink-0  `} key={idx}>
              <img
                  src={img.img_url}
                  className="w-full h-full object-cover"
                ></img>
            </div>

              ))
            }
            </div> 
          </div>
          <div className="absolute w-10 h-10 rounded-[50%] bg-[#000] top-[10px] left-[10px] "></div>
          <div className="absolute top-[10px] right-[10px] cursor-pointer">
            <icons.heartthin className="text-[24px]"></icons.heartthin>
          </div>
          <Button
          type="primary" onClick={showModal}
            className="absolute quick_seen_btn btn_black_gradient top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] font-bold hidden group-hover:block "
            onMouseOver={(e) => {
              e.target.classList.add("is_hover");
            }}
            onMouseLeave={(e) => {
              e.target.classList.remove("is_hover");
            }}
          >
            Xem nhanh
          </Button>
             
          <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel} className="quick_view">
            <div className="p-6 flex  ">
                <div className="flex_41 pr-[12px]">
                <Carousel arrows infinite={false}>
                    {
                      detail["Images"].map((img, idx) => (
                        <div className="product_img pb-[100%] overflow-hidden relative" key={idx} >
                          <div className="absolute inset-0" >
                            <img src={img.img_url} alt="" className="img object-cover w-full h-full" />
                          </div>
                        </div>

                      ))
                    }
                </Carousel>
                </div>
                <div className="flex_58 px-[12px] ">
                    <div className="product_info">
                <div className="">
                  <Link to={`/brand/abc}`} className="brand_name uppercase no-underline text-[rgb(176,16,15)] font-bold">{detail["Brand"]["name"]}</Link>
                </div>
                <div className="info_title w-[90%] leading-[130%] text-[20px] font-bold ">
                  {detail.name}
                </div>
                <div className="flex items-center">
                  <div className="flex items-center gap-[8px]">
                  <Rate disabled defaultValue={2}/>
                  <span className="ml-2">(3)</span>
                  </div>
                  <div className="devide bg-[rgba(0,0,0,.08)] w-[0.8px] mx-[15px] h-[10px]"></div>

                  <div className="flex items-center gap-[8px]">
                    <div className="flex items-center justify-center w-5 h-5">
                      <icons.heart_fill className="text-red-500 "></icons.heart_fill>
                    </div>
                    <span>1</span>
                  </div>
                  <div className="devide bg-[rgba(0,0,0,.06)] w-[0.8px] mx-[15px] h-[10px]"></div>
                  <div>
                    <span className="font-bold ">xuất sứ: </span>
                    <span>hàn quoốc</span>
                  </div>
                  <div className="devide bg-[rgba(0,0,0,.06)] w-[0.8px] mx-[15px] h-[10px]"></div>
                  <div>
                    <span className="font-bold ">sku: </span>
                    <span>jj3355j</span>
                  </div>
                </div>
                <div className="text-[20px] font-bold">19.000đ</div>
                <div className="payment_method_item_wrapper flex items-center justify-between my-[10px] border border-solid rounded-[8px] p-2">
                  <div>
                    <b className="text-[16px] font-semibold mr-[3px]">Từ</b>
                    <span className="text-[20px] font-bold text-[rgb(82,182,168)]">
                      30.305đ
                    </span>
                  </div>
                  <div className="flex items-center gap-[6px]">
                    <span>với</span>
                    <div>
                      <img
                        src="https://image.hsv-tech.io/400x0/bbx/common/0e2ff2ff-bcd3-489b-a302-908acfb09c9a.webp"
                        className="max-w-full h-[14px]"
                      ></img>
                    </div>
                    <div>
                      <icons.question className="text-[rgb(119,119,119)]"></icons.question>
                    </div>
                    <div className="ml-[20px]">
                      <img
                        src="https://image.hsv-tech.io/400x0/bbx/common/2ab38d94-de0a-41f6-be9e-5cc51de489b5.webp"
                        className="max-w-full h-[20px]"
                      ></img>
                    </div>
                  </div>
                </div>
                <div className="payment_method_item_wrapper flex items-center justify-between  border border-solid rounded-[8px] p-2">
                  <div>
                    <b className="text-[16px] font-semibold mr-[3px]">Từ</b>
                    <span className="text-[20px] font-bold text-[rgb(0,69,202)]">
                      106.333đ
                    </span>
                  </div>
                  <div className="flex items-center gap-[6px]">
                    <span>với</span>
                    <div>
                      <img
                        src="https://image.hsv-tech.io/400x0/bbx/common/3a4054ce-a218-4fbb-bfab-944b6c226ff7.webp"
                        className="max-w-full h-[14px]"
                      ></img>
                    </div>
                    <div>
                      <icons.question className="text-[rgb(119,119,119)]"></icons.question>
                    </div>
                    <div className="ml-[20px] price_off">Giảm 70K</div>
                  </div>
                </div>
                {/* {productDetail?.AttributeValues.length > 0 ?
                <div className="variant">
                  <div className=" flex gap-2 items-center justify-normal">
                    <p className="attr_name font-bold my-2">
                    {productDetail?.AttributeValues[0].Attribute.name}:
                    </p>
                    <p className="my-2 text-[#E4003A]">
                    {selectProduct?.AttributeValue?.title != null ? selectProduct?.AttributeValue?.title : ""}
                    </p>
                  </div>
                  
                  <div className="variants flex gap-3">
                    {
                      productDetail?.AttributeValues?.map((attr_value, index) => (
                        <>
                        <div className={`${thumbIndex === productDetail?.Images?.length + index ? 'selected' :"border border-solid border-black" } rounded-[99px]  px-4 py-2 cursor-pointer relative overflow-hidden`}  
                              key={attr_value?.value} 
                              onClick={() => {
                              setThumbIndex(productDetail?.Images?.length + index);
                              setSelectProduct(productDetail?.ProductVariants[index]);
                            }}
                      >
                          {attr_value?.value}
                          {
                            thumbIndex === productDetail?.Images.length + index ? <div className="absolute w-6 h-6 rounded-[50%] bg-[#E4003A] bottom-[-2px] right-0">
                            <icons.check color="white" className="absolute top-[2px] left-[2px] text-[18px] font-bold" ></icons.check>
                          </div> : ""
                          }
                        </div>
                        
                        </>
                      ))
                      
                    }
                    
                  </div>
                </div>
                : ""} */}
                
                <div className="product_extra">
                  <div className="leading-[22px] font-semibold ">
                    Các sản phẩm được tặng kèm
                    <div>Chọn 1 trong những quà tặng sau</div>
                  </div>
                  <div className="">
                    <label className="flex items-center cursor-pointer">
                      <div className=" w-4 h-4 flex items-center justify-center">
                        <input
                          type="radio"
                          name="product"
                          value={1}
                          className="input_radio_hidden hidden "
                        ></input>
                        <div className=" relative   input_radio rounded-[50%] "></div>
                      </div>
                      <div className=" flex_1 px-[8px] flex items-center">
                        <div className="mr-[10px]">
                          <img
                            src="https://image.hsv-tech.io/400x0/bbx/products/5b1e3778-6e2a-45d6-b437-8ae51ba54d93.webp"
                            className="w-[45px]"
                          ></img>
                        </div>
                        <div className="flex_1">
                          <div className="font-semibold">
                            Kem Dưỡng AHC Làm Sáng Vùng Da Mắt Luminous Glow Real
                            Eye Cream For Face 30Ml
                          </div>
                          <div className="text-[12px]">30ml, more12m</div>
                        </div>
                      </div>
                    </label>
                    <label className="flex items-center cursor-pointer">
                      <div className=" w-4 h-4 flex items-center justify-center">
                        <input
                          type="radio"
                          name="product"
                          value={2}
                          className="input_radio_hidden hidden"
                        ></input>
                        <div className=" relative input_radio rounded-[50%]"></div>
                      </div>
                      <div className=" flex_1 px-[8px] flex items-center">
                        <div className="mr-[10px]">
                          <img
                            src="https://image.hsv-tech.io/400x0/bbx/products/5b1e3778-6e2a-45d6-b437-8ae51ba54d93.webp"
                            className="w-[45px]"
                          ></img>
                        </div>
                        <div className="flex_1">
                          <div className="font-semibold">
                            Kem Dưỡng AHC Làm Sáng Vùng Da Mắt Luminous Glow Real
                            Eye Cream For Face 30Ml
                          </div>
                          <div className="text-[12px]">30ml, more12m</div>
                        </div>
                      </div>
                    </label>
                  </div>
                </div>
                <div className="promotion_message">
                  Chương trình áp dụng đồng bộ tại website & hệ thống cửa hàng
                </div>
                <div className="delivery_wrapper">
                  <h2 className="mb-[10px] leading-[26px] text-[18px] font-bold">
                    Hình thức mua hàng
                  </h2>
                  <div className=" flex flex-col gap-y-[10px]">
                    <label className="flex items-center cursor-pointer">
                      <div className=" w-4 h-4 flex items-center justify-center">
                        <input
                          type="radio"
                          name="payment"
                          value={1}
                          className="input_radio_hidden hidden "
                        ></input>
                        <div className=" relative   input_radio rounded-[50%] "></div>
                      </div>
                      <div className=" flex_1 px-[8px] flex items-center">
                        Giao hàng
                      </div>
                    </label>
                    <label className="flex items-center cursor-pointer">
                      <div className=" w-4 h-4 flex items-center justify-center">
                        <input
                          type="radio"
                          name="payment"
                          value={2}
                          className="input_radio_hidden hidden"
                        ></input>
                        <div className=" relative input_radio rounded-[50%]"></div>
                      </div>
                      <div className=" flex_1 px-[8px] flex items-center">
                        <div className="flex_1 flex gap-1">
                          <strong>Click & Collect</strong>
                          <span> Mua và lấy hàng tại cửa hàng</span>
                          <div className="flex items-center justify-center group">
                            <span className="font-bold group-hover:text-[#c73231]">
                              chọn cửa hàng
                            </span>
                            <div className="flex items-center justify-center group-hover:text-[#c73231]">
                              <icons.arrowdown className="text-[20px]"></icons.arrowdown>
                            </div>
                          </div>
                        </div>
                      </div>
                    </label>
                  </div>
                  <div className="devide bg-[rgba(0,0,0,.06)] h-[0.8px]  w-full mt-[15px] mb-[10px]"></div>
                  <div className="flex items-center justify-between group cursor-pointer">
                    <div className="flex items-center">
                      <div className=" text-[#c73231] mr-[12px] text-[20px] ">
                        <icons.store2></icons.store2>
                      </div>
                      <div className="font-bold mr-[12px] group-hover:text-[#c73231]">
                        18 / 20
                      </div>
                      <span className="group-hover:text-[#c73231]">
                        chi nhánh còn mặt hàng này
                      </span>
                    </div>
                    <div className="flex items-center">
                      <span className="font-bold group-hover:text-[#c73231]">
                        Xem tất cả các cửa hàng
                      </span>
                      <div className="flex items-center justify-center group-hover:text-[#c73231]">
                        <icons.next className="text-[20px]"></icons.next>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-[10px] mt-[30px] flex-wrap">
                  <div className="flex items-center border-[1.5px] border-solid border-[rgb(239,239,239)]  rounded-full ">
                    <div className="minus flex items-center justify-center  w-10 h-[50px] cursor-pointe">
                      <icons.minus></icons.minus>
                    </div>
                    <div className="quantity_text text-center">1</div>
                    <div className="plus flex items-center justify-center w-10 h-[50px] cursor-pointer">
                      <icons.plus></icons.plus>
                    </div>
                  </div>
                  <div className="flex items-center btn_black py-[14px] px-[23px] rounded-full gap-3 cursor-pointer flex-auto justify-center">
                    <div>
                      <icons.cart className="text-[20px]"></icons.cart>
                    </div>
                    <span className="text-[16px]">Thêm vào giỏ hàng</span>
                  </div>
                  <div className="gradient_header  py-[14px] px-[23px] rounded-full">
                    Mua ngay
                  </div>
                  <div className="flex items-center justify-center w-[50px] h-[50px] border border-solid border-[#000] rounded-[50%] cursor-pointer">
                    <icons.heartthin className="text-[24px]"></icons.heartthin>
                  </div>
                </div>
                <div className="flex items-center flex-wrap gap-y-[10px] mt-[30px]">
                  <div className="px-[5px] flex_50 flex items-center gap-2">
                    <div>
                    </div>
                    <div>
                      Cam kết <strong>hàng chính hãng</strong>
                    </div>
                  </div>
                  <div className="px-[5px] flex_50 flex items-center gap-2">
                    <div>
                      <icons.real className="text-[20px]"></icons.real>
                    </div>
                    <div>
                      Cam kết <strong>hàng chính hãng</strong>
                    </div>
                  </div>
                  <div className="px-[5px] flex_50 flex items-center gap-2">
                    <div>
                      <icons.delivertruck className="text-[20px]"></icons.delivertruck>
                    </div>
                    <div>
                      <strong>Miễn phí giao</strong>
                      hàng 24h
                    </div>
                  </div>
                  <div className="px-[5px] flex_50 flex items-center gap-2">
                    <div>
                      <icons.swap className="text-[20px]"></icons.swap>
                    </div>
                    <div>
                      Đổi/trả hàng trong <strong>7 ngày</strong>
                    </div>
                  </div>
                </div>
                    </div>
                </div>
            </div>
          </Modal>
        </div>
        <div className="bg-white rounded-b-lg px-[14px] pb-[10px]">
          <div className="brand_text uppercase text-center pt-[5px]">
            <span>{detail["Brand"]["name"]}</span>
          </div>
          <div className="items_desc text-center">
          {detail.name}
          </div>
          <div className="price flex items-center justify-center">
            <div className="cur_price  font-bold">291.000đ</div>
            <div className="prev_price ml-[10px] opacity-50 ">717.000đ</div>
            <div>
              <TagSale />
            </div>
          </div>
          <div className="rate flex items-center justify-center my-[6px]">
          <Rate disabled defaultValue={0}/>
          <span className="ml-2">(0)</span>
          </div>
          <div className="stock h-5 w-full rounded-full bg-[rgba(199,49,48,0.314)] relative overflow-hidden">
            <div
              className={`absolute stock_bar left-0  w-[20%]  whitespace-nowrap flex items-center `}
            >
              <span className="pl-2 text-white text-[12px]">
                còn 13 sản phẩm
              </span>
            </div>
          </div>
        </div>
      </ItemsStlyed>
    </>
  );
};
const ItemsStlyed = styled.div`
  .item_thumb {
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
    font-size: var(--font-size-m);
    font-family: var(--font-family);
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
  .stock_bar {
    transition: all 0.4s cubic-bezier(0.08, 0.82, 0.17, 1) 0s;
    height: 20px;
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
  .quick_seen_btn.is_hover {
    background: linear-gradient(
      90deg,
      rgb(255, 212, 0) 0%,
      rgb(199, 49, 48) 50.52%,
      rgb(102, 54, 149) 99.61%
    ) !important;
    opacity: 1;
  }

`;
export default Items;
