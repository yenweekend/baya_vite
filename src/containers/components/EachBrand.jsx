import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const EachBrand = ({ data }) => {
  return (
    <>
      <EachBrandStyled>
        <div className="flex_16 px-[15px] font-bold text-[24px]">
          {data?.section_title}
        </div>
        <div className="flex_83 px-[15px] flex flex-wrap gap-y-[20px]">
          {data?.brand_name?.map((item) => (
            <div className="flex_25 px-[10px] " key={item?.name}>
              <Link
                to={item.link}
                state={{
                  type: "brand",
                }}
                className=" text-[16px] text-[#000] font-medium no-underline"
              >
                {item.name}
              </Link>
            </div>
          ))}
        </div>
      </EachBrandStyled>
    </>
  );
};
const EachBrandStyled = styled.div`
  display: flex;
  border-bottom: 1px solid rgb(239, 239, 239);
  padding-left: 8px;
  padding-top: 40px;
  padding-bottom: 40px;
`;
export default EachBrand;
