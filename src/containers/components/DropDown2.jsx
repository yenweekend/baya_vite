import React from "react";
import styled from "styled-components";
import icons from "../../utils/icons";
import { Link } from "react-router-dom";
const DropDown2 = ({ content }) => {
  return (
    <DropDown2Styled>
      <div className="w-full h-full flex-shrink-0  menu_dropdown pt-[30px] bg-white">
        <div className="wrap_container flex ">
          <div className="dropdown_left px-[30px] flex items-start flex-wrap gap-y-[30px] flex-auto">
            {content?.content?.map((item) => (
              <div
                className="cate_item flex flex-col gap-[14px]"
                key={item?.category.title}
              >
                <div className="header_title flex justify-start ">
                  <span className=" font-bold text-[16px]">
                    {item?.category.title}
                  </span>
                </div>
                <div className="list_brand">
                  {item?.cate_type?.map((e) => (
                    <div className="mb-[5px]" key={e.title}>
                      <Link
                        className="text-[#000] no-underline text-[16px] hover:font-semibold"
                        to={e.link}
                        state={{
                          type: "category",
                        }}
                      >
                        {e.title}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="dropdown_right flex-auto px-[10px] flex items-center">
            <div className="w-full px-[8px]  overflow-hidden">
              <img
                src={content?.image}
                className="w-full h-auto object-cover "
              ></img>
            </div>
          </div>
        </div>
      </div>
    </DropDown2Styled>
  );
};
const DropDown2Styled = styled.div`
  background-color: white;
  .cate_item {
    flex: 0 0 30%;
    max-width: 30%;
  }
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
  .dropdown_right {
    flex: 0 0 33.33333%;
    max-width: 33.333333%;
  }
`;
export default DropDown2;
