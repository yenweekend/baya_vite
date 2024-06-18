import React from "react";
import styled from "styled-components";
const DiscoveryAllBtn = () => {
  return (
    <DiscoveryAllBtnStyled className="flex items-center justify-center mb-5 hover:translate-y-[-4px] transition duration-300 ease-linear ">
      <button className="text-center rounded-[38px]  px-[30px]  h-10 w-auto flex items-center justify-center discover_all_btn">
        <span className="text-[16px] font-bold">Xem tất cả</span>
      </button>
    </DiscoveryAllBtnStyled>
  );
};
const DiscoveryAllBtnStyled = styled.div`
  &:hover {
    color: var(--primary-hover-color);
  }
  &:hover .discover_all_btn {
    border-color: var(--primary-hover-color) !important;
  }
  &:hover .discover_all_btn > span {
    color: var(--primary-hover-color);
  }
  .discover_all_btn {
    border: 1px solid #000;
    transition: all 0.2s linear;
  }
  .discover_all_btn > span {
    transition: all 0.2s linear;
  }
`;
export default DiscoveryAllBtn;
