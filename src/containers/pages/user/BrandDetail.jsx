import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import icons from "../../../utils/icons";
import { Item, Filter, Item4 } from "../../components";
import { card } from "../../../utils/scrape_data";
import axios from "axios";
import { apiUrl } from "../../../utils/constants";
import { useParams } from "react-router-dom";
import { setToastify } from "../../../redux-toolkit/slice/homeSlice";
import { useDispatch } from "react-redux";
const BrandDetail = () => {
  const dispatch = useDispatch();
  const [brandDetail, setBrandDetail] = useState(null);
  const [products, setProducts] = useState(null);
  const params = useParams();
  const [show, setShow] = useState(false);
  const [hidden, setHidden] = useState(false);
  const desc_ref = useRef();
  // const popover_filter_ref = useRef();
  // const btn_ref = useRef();
  // const clickOutSide = (e) => {
  //   if (
  //     !popover_filter_ref.current.classList.contains("hidden") &&
  //     !popover_filter_ref.current.contains(e.target) &&
  //     !btn_ref.current.contains(e.target)
  //   ) {
  //     popover_filter_ref.current.classList.add("hidden");
  //   }
  // };
  // useEffect(() => {
  //   document.addEventListener("mousedown", clickOutSide);
  //   return () => {
  //     document.removeEventListener("mousedown", clickOutSide);
  //   };
  // }, []);
  // useEffect(() => {
  //   (async() => {
  //     const res = await axios.get(" http://localhost:3001/api/getbrand");
  //     if(res?.data?.success)
  //       {
  //         // remove class hidden from default description of beautybox.com.vn
  //         const desc = res.data.message.description.replace('hidden', "");
  //         const newDiv = document.createElement('div');
  //         newDiv.innerHTML = desc;
  //         const btn = newDiv.querySelector("button");
  //         if(btn)
  //           {
  //             btn.remove();
  //           }
  //         desc_ref.current.innerHTML = newDiv.innerHTML;
  //       }else
  //       {
  //         console.log('get brand failed');
  //       }
  //         // remove class hidden from default description of beautybox.com.vn

  //   })();
  // },[]);
  useEffect(() => {
    (async() => {
        try {
          const rs = await axios.get(`${apiUrl}api/getbranddetail/${params.slug}`);
          if(rs?.data?.success)
            {
              setBrandDetail(rs?.data?.data?.brandDetail);
              const desc = rs?.data?.data?.brandDetail.description.replace('hidden', "");
              setProducts(rs?.data?.data?.products);
              const newDiv = document.createElement('div');
              newDiv.innerHTML = desc;
              const btn = newDiv.querySelector("button");
              if(btn)
                {
                  btn.remove();
                }
              desc_ref.current.innerHTML = newDiv.innerHTML;
              return 1;
            }
          dispatch(setToastify({
            success: true,
            text: `Đã thêm playlist" <span class="bold_text">${rs?.data?.message}</span>"thành công`,
          }))
          console.log(rs?.data?.message);
          return 1;
        } catch (error) {
          console.log(error);
          return 1;
        }
    })();
  },[params]);
  return (
    <BrandStyled className="pt-[150px]">
      <div className="wrap_container">
        <div className="mt-[80px]">
          {
            brandDetail?.avatar ?   <div className="logo_brand relative flex items-center justify-center">
            <div className="brand_section w-[123px] h-[123px] overflow-hidden rounded-[15px]">
              <img
                src={brandDetail?.avatar}
                className="max-w-full block"
              ></img>
            </div>
          </div>  : ""
          }
         
          <h1 className="text-[24px] font-bold leading-[35px] text-center mt-3">
            {brandDetail?.name}
          </h1>
          <div className="flex items-center justify-center gap-3">
            <div>70 sản phẩm</div>
            <div className="w-[1px] bg-[rgba(0,0,0,.06)] h-[18px] "></div>
            <div>7.8K lượt mua</div>
          </div>
          <div className=" max-w-[994px] mb-[35px] mx-auto relative w-[90%] mt-3">
            <div className={` brand_content  ${show ? "h-auto" : "h-[110px]"}`}>
              <div className="relative cursor-pointer">
                <div
                  className={`content  overflow-hidden max-w-[994px] ${
                    show ? "h-auto" : "h-[50px]"
                  }` }
                  ref={desc_ref}
                >
                  
                </div>
                <div
                  className={`bg_cover absolute ${show ? "hidden" : ""}`}
                ></div>
              </div>
              <div
                className="text-[16px] font-bold text-center cursor-pointer"
                onClick={() => {
                  setShow((prev) => !prev);
                }}
              >
                {show ? "Ẩn bớt nội dung" : "Xem thêm"}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="wrap_container flex items-center justify-between mb-[10px]">
        <div className="relative flex_25 ">
          <div className="max-w-[260px]">
            <div className="py-[11.5px] px-[11px] h-[45px] relative border border-solid rounded-[42px]">
              <div className="absolute">
                <icons.search className="text-[24px]"></icons.search>
              </div>
              <div className="pl-[30px]">
                <input
                  className="block w-full"
                  placeholder="Tìm kiếm trong bộ sưu tập"
                ></input>
              </div>
            </div>
          </div>
        </div>
        <div className="flex_33">
          <div className="flex flex-wrap gap-[8px]">
            <div className="flex items-center border border-solid border-[#000] px-[11px] py-[3px] max-w-[200px] overflow-hidden rounded-full  mr-2">
              <div className="flex items-center">
                <span className="flex items-center justify-center">
                  Kem dưỡng mặt
                </span>
                <div className="ml-[5px] cursor-pointer flex items-center">
                  <icons.close className="text-[16px] leading-[100%] w-4 h-4"></icons.close>
                </div>
              </div>
            </div>
            <div className="">
              <button className=" text-[14px] cursor-pointer underline px-[11px] py-[3px] ">
                Xóa hết
              </button>
            </div>
          </div>
        </div>
        <div className="flex_41 flex items-end justify-end">
          <div className="flex  items-center gap-2">
           
            <div>70 kết quả</div>
            <div >Lọc theo</div>

            {/* <div
              className="flex items-center cursor-pointer relative"
              onClick={() => {
                popover_filter_ref.current.classList.toggle("hidden");
              }}
              ref={btn_ref}
            >
              <span className="font-bold text-[16px]">Tất cả</span>
              <icons.arrowdown className="text-[16px]"></icons.arrowdown>
              <div
                className="absolute py-1 rounded-[8px]  shadow-[rgba(17,17,26,0.1)_0px_0px_16px] top-[120%] right-0 "
                ref={popover_filter_ref}
              >
                <div className="whitespace-nowrap text-[16px] font-semibold hover:bg-[#f3f3f3] px-3 py-1">
                  Giá tăng dần
                </div>
                <div className="whitespace-nowrap text-[16px] font-semibold hover:bg-[#f3f3f3] px-3 py-1">
                  Giá giảm dần
                </div>
                <div className="whitespace-nowrap text-[16px] font-semibold hover:bg-[#f3f3f3] px-3 py-1">
                  % giảm
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <div className="wrap_container flex ">
        <div className="flex_25 ">
          <div className="max-w-[263px]">
            <div>
              <div
                className="flex items-center justify-between py-3 pr-[16px] cursor-pointer"
                onClick={() => {
                  setHidden((prev) => !prev);
                }}
              >
                <div className="text-[16px] font-bold">Giá sản phẩm</div>
                <div className="flex items-center justify-center">
                  {!hidden ? (
                    <icons.arrowup className="text-[18px] transition ease-linear duration-100"></icons.arrowup>
                  ) : (
                    <icons.arrowdown className="text-[18px] transition ease-linear duration-100"></icons.arrowdown>
                  )}
                </div>
              </div>
              <div className="">
                <div
                  className={`py-3 pr-[16px] flex flex-col gap-3  ${
                    hidden ? "is_wearoff" : ""
                  }`}
                >
                  <div>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        className="hidden input_checkbox"
                      ></input>
                      <div className="input_filter relative">
                        <div className="absolute "></div>
                      </div>
                      Dưới 500.000đ
                    </label>
                  </div>
                  <div>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        className="hidden input_checkbox"
                      ></input>
                      <div className="input_filter relative">
                        <div className="absolute "></div>
                      </div>
                      500.000₫ - 1.000.000₫
                    </label>
                  </div>
                  <div>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        className="hidden input_checkbox"
                      ></input>
                      <div className="input_filter relative">
                        <div className="absolute "></div>
                      </div>
                      1.000.000₫ - 1.500.000₫
                    </label>
                  </div>
                  <div>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        className="hidden input_checkbox"
                      ></input>
                      <div className="input_filter relative">
                        <div className="absolute "></div>
                      </div>
                      1.500.000₫ - 2.000.000₫
                    </label>
                  </div>
                  <div>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        className="hidden input_checkbox"
                      ></input>
                      <div className="input_filter relative">
                        <div className="absolute "></div>
                      </div>
                      trên 2.000.000₫
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <Filter
              title={"Danh mục"}
              filterWith={[
                "Kem dưỡng mặt",
                "Sữa rửa mặt",
                "Serum",
                "Chống nắng",
              ]}
            />
            <Filter
              title={"Loại sản phẩm"}
              filterWith={[
                "mặt nạ ngủ",
                "nước cân bằng",
                "sửa rửa mặt",
                "tinh chất",
                "mặt nạ giấy",
                "kem mắt",
                "kem dưỡng da",
                "bộ chăm sóc da",
                "sáp chống nắng",
                "serum/kem chống nắng",
                "sữa dưỡng da",
              ]}
            />
            <Filter
              title={"Dung tích"}
              filterWith={[
                "50ml",
                "30ml",
                "60ml",
                "10ml",
                "180ml",
                "130ml",
                "25ml",
                "28ml",
              ]}
            />
          </div>
        </div>
        <div className="flex_75">
          <div className="w-full flex flex-wrap gap-y-4">
            {
              products?.map((product) => (

                <Item4 key={product.id}  product={product}/>
              ))
            }
            {/* <Item4 />
            <Item4 />
            <Item4 />
            <Item4 /> */}
          </div>
        </div>
      </div>
      <div className="wrap_container">
        <div className="relative py-[30px]">
          <div className="flex items-center ml-[-20px] ">
            {card?.map((item) => (
              <div
                className="ml-[20px] w-[calc((100%/4)-20px] rounded-[6px] overflow-hidden cursor-pointer hover:translate-y-[-4px] transition duration-300 ease-linear"
                key={item}
              >
                <img src={item} className="w-full h-full object-cover"></img>
              </div>
            ))}
          </div>
        </div>
      </div>
    </BrandStyled>
  );
};
const BrandStyled = styled.div`
  @keyframes wearoff {
    0% {
      opacity: 1;
    }

    100% {
      display: none;
    }
  }
  max-width: 100vw;
  overflow-x: visible;
  flex: auto;
  min-height: 0;

  .is_wearoff {
    animation: wearoff 0.3s forwards linear;
  }
`;
export default BrandDetail;
