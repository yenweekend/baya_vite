import React, { useMemo } from "react";
import { useState } from "react";
import icons from "../../utils/icons";
import styled from "styled-components";
const Filter = ({ title, filterWith }) => {
  const [hidden, setHidden] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const index = useMemo(() => {
    if (showMore) {
      return filterWith.length;
    } else {
      return 5;
    }
  }, [showMore, filterWith]);
  return (
    <FilterStyled>
      <div
        className="flex items-center justify-between py-3 pr-[16px] cursor-pointer"
        onClick={() => {
          setHidden((prev) => !prev);
        }}
      >
        <div className="text-[16px] font-bold">{title}</div>
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
            <div className="py-[11.5px] px-[11px] h-[35px] relative border border-solid rounded-[4px] flex items-center">
              <div className="absolute flex items-center justify-center">
                <icons.search className="text-[18px]"></icons.search>
              </div>
              <div className="pl-[30px]">
                <input
                  className="block w-full text-[12px]"
                  placeholder="Tìm "
                ></input>
              </div>
            </div>
          </div>
          <div className="max-h-[300px] overflow-y-auto filter_with scrollbar_custom">
            <div className="flex flex-col gap-3">
              {filterWith?.slice(0, index).map((item) => (
                <div key={item}>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      className="hidden input_checkbox"
                    ></input>
                    <div className="input_filter relative">
                      <div className="absolute "></div>
                    </div>
                    {item}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {!showMore && filterWith.length > 5 && (
        <button
          className="cursor-pointer"
          type="button"
          onClick={() => {
            setShowMore((prev) => !prev);
          }}
        >
          <span className="underline">Xem thêm</span>
        </button>
      )}
    </FilterStyled>
  );
};
const FilterStyled = styled.div`
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
  .bg_cover {
    position: absolute;
    background-image: linear-gradient(transparent, rgb(255, 255, 255));
    width: 100%;
    height: 100%;
    top: 0px;
  }
  .input_filter {
    cursor: pointer;
    width: 20px;
    height: 20px;
    border: 1px solid #dbdfe6;
    border-radius: 6px;
    transition: all 0.1s linear;
  }
  .input_filter > div {
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(-45deg);
    width: 10px;
    height: 6px;
    border-left: 2px solid transparent;
    border-bottom: 2px solid transparent;
    transition: all .2s linear ;
  }

  .is_wearoff {
    animation: wearoff 0.3s forwards linear;
  }
`;
export default Filter;
