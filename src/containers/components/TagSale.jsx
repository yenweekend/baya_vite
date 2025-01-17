import React from "react";
import styled from "styled-components";
const TagSale = () => {
  return (
    <TagSaleStyled className="sale_tag ">
      <span className="text-[#fff] text-[12px]">-59%</span>
      <div className="triangle"></div>
    </TagSaleStyled>
  );
};
const TagSaleStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 19px;
  width: auto;
  background-color: rgb(199, 49, 48);
  border-radius: 0px 4px 4px 0px;
  border-left: 1px solid rgb(199, 49, 48);
  margin-left: 19px;
  color: #fff;
  font-weight: 700;
  font-size: 12px;
  padding: 0px 5px;
  position: relative;
  .triangle {
    position: absolute;
    border-top: 10.8px solid transparent;
    border-right: 10.8px solid rgb(199, 49, 48);
    border-bottom: 10.8px solid transparent;
    left: -10px;
    top: 50%;
    transform: translateY(-50%);
    border-radius: 4px;
  }
`;
export default TagSale;
