import React, { useRef, useState, useCallback, useEffect } from "react";
import menuDropDowns from "../../utils/navigation";
import icons from "../../utils/icons";
import { Link } from "react-router-dom";
import PrevButton from "./PrevButton";
import NextButton from "./NextButton";
const SliderCustom = ({ data }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const next_ref = useRef();
  const prev_ref = useRef();
  const container_ref = useRef();
  const brandslide_ref = useRef();
  const handleNextSlide = useCallback(() => {
    // slide wipe with length of an item
    // const barSlideWidth = brandslide_item_ref?.current[0].clientWidth;
    // slide wipe with length of container
    const barSlideWidth = container_ref.current.clientWidth;
    const newScrollPosition = scrollPosition + barSlideWidth;
    prev_ref.current.classList.remove("hidden");
    prev_ref.current.classList.add("block");
    if (
      newScrollPosition >=
      brandslide_ref.current.scrollWidth - barSlideWidth
    ) {
      next_ref.current.classList.add("hidden");
    }
    setScrollPosition(newScrollPosition);
    brandslide_ref.current.scrollLeft = newScrollPosition;
  }, [scrollPosition]);
  const handlePrevSlide = useCallback(() => {
    // const barSlideWidth = brandslide_item_ref?.current[0].clientWidth;
    next_ref.current.classList.remove("hidden");
    next_ref.current.classList.add("block");
    const barSlideWidth = container_ref.current.clientWidth;
    const newScrollPosition = scrollPosition - barSlideWidth;
    setScrollPosition(newScrollPosition);
    if (newScrollPosition <= 0) {
      prev_ref.current.classList.remove("block");
      prev_ref.current.classList.add("hidden");
    }
    brandslide_ref.current.scrollLeft = newScrollPosition;
  }, [scrollPosition]);

  return (
    <div className="relative" ref={container_ref}>
      <div
        className="menu_otps w-full  overflow-hidden overflow-x-scroll no-scrollbar"
        ref={brandslide_ref}
      >
        <div className="flex items-center  menu_lists gap-[20px]"></div>
      </div>
      <div
        className={` absolute top-[50%] translate-y-[-50%]  left-[-20px] hidden`}
        ref={prev_ref}
        onClick={handlePrevSlide}
      >
        <PrevButton />
      </div>
      <div
        className={` absolute top-[50%] translate-y-[-50%] right-[30px]`}
        ref={next_ref}
        onClick={handleNextSlide}
      >
        <NextButton />
      </div>
    </div>
  );
};

export default SliderCustom;
