import React, {useEffect, useRef, useState} from "react";
import { BrandSlide, EachBrand } from "../../components";
import { brand_each_data } from "../../../utils/scrape_data";
import axios from "axios";
import { apiUrl } from "../../../utils/constants";
import { fetchTodo } from "../../../redux-toolkit/slice/brandSlice";
import { useDispatch, useSelector } from "react-redux";
const navHeight = 148;
const ListBrands = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.brand.loading);
  const listBrands = useSelector((state) => state.brand.listBrands);
   const [listBrand, setListBrand] = useState(null);
   const [firstLetterBrand, setFirstLetterBrand] = useState(null);
   const getBrandList = () => {
    dispatch(fetchTodo());
   }
  useEffect(() => {
    // (async() => {
    //     try {
    //       const rs = await axios.get(`${apiUrl}api/getbrand`);
    //       if(rs?.data?.success)
    //         {
    //           setListBrand(Object.entries(rs?.data?.data));
    //           setFirstLetterBrand(Object.keys(rs?.data?.data));
    //           return 1;
    //         }
    //       console.log("failed get product");
    //       return 1;
    //     } catch (error) {
    //       console.log(error);
    //       return 1;
    //     }
    // })();
    getBrandList();
  },[]);
    useEffect(() => {
      if(listBrands != null)
      {

        setListBrand(Object.entries(listBrands));
        setFirstLetterBrand(Object.keys(listBrands));
      }
    },[listBrands]);
  return (
    <div className="mt-[148px] wrap_container">
      <BrandSlide />
      <div>
        <div className="font-bold text-[24px] uppercase text-center mb-[30px]">
          Tất cả thương hiệu
        </div>
        <div className=" flex flex-wrap justify-between">
          {firstLetterBrand?.map((letter) => (
             <a
             key={letter}
             href={`#${letter == "#" ? "number" : letter}-section`}
             className="font-semibold text-[18px] w-[30px] text-[#000]  no-underline text-center cursor-pointer"
             onClick={(e) => {
              e.preventDefault();
              const section = document.querySelector(`#${letter == "#" ? "number" : letter}-section`);
              const sectionToTop = section.offsetTop;
              window.scrollTo(0, sectionToTop);
             }}
           >
             {letter}
           </a>
          ))}
        </div>
      </div>
 
      {
        listBrand?.map((brand) => (
          <div key={brand[0]} id={`${brand[0] == "#" ? "number" : brand[0]}-section`} >
          <EachBrand data={brand} />
          </div>
        ))
      }
     
    </div>
  );
};

export default ListBrands;
