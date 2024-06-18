import React from "react";
import { BrandSlide, EachBrand } from "../components";
import { brand_each_data } from "../../utils/scrape_data";
const ListBrands = () => {
  return (
    <div className="mt-[148px] wrap_container">
      <BrandSlide />
      <div>
        <div className="font-bold text-[24px] uppercase text-center mb-[30px]">
          Tất cả thương hiệu
        </div>
        <div class=" flex flex-wrap justify-between">
          <a
            href="#A-section"
            class="font-semibold text-[18px] w-[30px] text-[#000]  no-underline text-center"
          >
            A
          </a>
          <a
            href="#B-section"
            class="font-semibold text-[18px] w-[30px] text-[#000]  no-underline text-center"
          >
            B
          </a>
          <a
            href="#C-section"
            class="font-semibold text-[18px] w-[30px] text-[#000]  no-underline text-center"
          >
            C
          </a>
          <a
            href="#D-section"
            class="font-semibold text-[18px] w-[30px] text-[#000]  no-underline text-center"
          >
            D
          </a>
          <a
            href="#E-section"
            class="font-semibold text-[18px] w-[30px] text-[#000]  no-underline text-center"
          >
            E
          </a>
          <a
            href="#F-section"
            class="font-semibold text-[18px] w-[30px] text-[#000]  no-underline text-center"
          >
            F
          </a>
          <a
            href="#G-section"
            class="font-semibold text-[18px] w-[30px] text-[#000]  no-underline text-center"
          >
            G
          </a>
          <a
            href="#H-section"
            class="font-semibold text-[18px] w-[30px] text-[#000]  no-underline text-center"
          >
            H
          </a>
          <a
            href="#I-section"
            class="font-semibold text-[18px] w-[30px] text-[#000]  no-underline text-center"
          >
            I
          </a>
          <a
            href="#J-section"
            class="font-semibold text-[18px] w-[30px] text-[#000]  no-underline text-center"
          >
            J
          </a>
          <a
            href="#K-section"
            class="font-semibold text-[18px] w-[30px] text-[#000]  no-underline text-center"
          >
            K
          </a>
          <a
            href="#L-section"
            class="font-semibold text-[18px] w-[30px] text-[#000]  no-underline text-center"
          >
            L
          </a>
          <a
            href="#M-section"
            class="font-semibold text-[18px] w-[30px] text-[#000]  no-underline text-center"
          >
            M
          </a>
          <a
            href="#N-section"
            class="font-semibold text-[18px] w-[30px] text-[#000]  no-underline text-center"
          >
            N
          </a>
          <a
            href="#O-section"
            class="font-semibold text-[18px] w-[30px] text-[#000]  no-underline text-center"
          >
            O
          </a>
          <a
            href="#P-section"
            class="font-semibold text-[18px] w-[30px] text-[#000]  no-underline text-center"
          >
            P
          </a>
          <a
            href="#Q-section"
            class="font-semibold text-[18px] w-[30px] text-[#000]  no-underline text-center"
          >
            Q
          </a>
          <a
            href="#R-section"
            class="font-semibold text-[18px] w-[30px] text-[#000]  no-underline text-center"
          >
            R
          </a>
          <a
            href="#S-section"
            class="font-semibold text-[18px] w-[30px] text-[#000]  no-underline text-center"
          >
            S
          </a>
          <a
            href="#T-section"
            class="font-semibold text-[18px] w-[30px] text-[#000]  no-underline text-center"
          >
            T
          </a>
          <a
            href="#U-section"
            class="font-semibold text-[18px] w-[30px] text-[#000]  no-underline text-center"
          >
            U
          </a>
          <a
            href="#V-section"
            class="font-semibold text-[18px] w-[30px] text-[#000]  no-underline text-center"
          >
            V
          </a>
          <a
            href="#W-section"
            class="font-semibold text-[18px] w-[30px] text-[#000]  no-underline text-center"
          >
            W
          </a>
          <a
            href="#X-section"
            class="font-semibold text-[18px] w-[30px] text-[#000]  no-underline text-center"
          >
            X
          </a>
          <a
            href="#Y-section"
            class="font-semibold text-[18px] w-[30px] text-[#000]  no-underline text-center"
          >
            Y
          </a>
          <a
            href="#Z-section"
            class="font-semibold text-[18px] w-[30px] text-[#000]  no-underline text-center"
          >
            Z
          </a>
          <a
            href="#number-section"
            class="font-semibold text-[18px] w-[30px] text-[#000]  no-underline text-center"
          >
            #
          </a>
        </div>
      </div>
      <EachBrand data={brand_each_data[0]} />
    </div>
  );
};

export default ListBrands;
