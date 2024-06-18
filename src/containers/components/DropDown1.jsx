import React from "react";
import styled from "styled-components";
import icons from "../../utils/icons";
import { Link } from "react-router-dom";
const DropDown1 = ({ content }) => {
  return (
    <DropDown1Styled>
      <div className="w-full h-full flex-shrink-0  menu_dropdown pt-[30px] bg-white">
        <div className="wrap_container flex ">
          <div className="dropdown_left px-[10px] ">
            <div className="header_title flex items-center justify-between mb-[20px]">
              <span className=" font-bold text-[16px]">
                {content?.content?.titleDrop}
              </span>
              <div>
                <icons.next></icons.next>
              </div>
            </div>
            <div className="list_brand overlay no-scrollbar">
              {content?.content?.items?.map((item) => (
                <div className="mb-[20px]" key={item?.name}>
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
          </div>
          <div className="dropdown_right flex-auto px-[10px] flex items-center">
            {content?.content?.images?.map((item, index) => (
              <div
                className="w-[calc(100%/3)] px-[8px] rounded-[6px] overflow-hidden"
                key={item.image}
              >
                <Link to={item.link} className="inline-block w-full h-full">
                  <img
                    src={item.image}
                    className="w-full h-auto object-cover rounded-[6px]"
                  ></img>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DropDown1Styled>
  );
};
const DropDown1Styled = styled.div`
  background-color: white;
  .menu_dropdown::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    right: 0;
    left: 0;
    background: linear-gradient(
      90deg,
      rgb(255, 212, 0) 0%,
      rgb(199, 49, 48) 50.52%,
      rgb(102, 54, 149) 99.61%
    );
  }
  .dropdown_left {
    flex: 0 0 33.33333%;
    max-width: 33.333333%;
  }
`;
export default DropDown1;
