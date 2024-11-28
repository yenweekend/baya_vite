import React, { useRef, useCallback, useState } from "react";
import brandImages from "../../utils/brand_images";
import icons from "../../utils/icons";
const BrandSlide = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const brandslide_item_ref = useRef([]);
  const container_ref = useRef();
  const next_ref = useRef();
  const prev_ref = useRef();
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
  const addToRefs = (el) => {
    if (el && !brandslide_item_ref.current.includes(el)) {
      brandslide_item_ref.current.push(el);
    }
  };
  return (
    <div>
      <div className="pt-5">
        <div className="relative " ref={container_ref}>
          <div
            className=" flex items-center  gap-[20px] overflow-auto brands_slide no-scrollbar py-[4px]"
            ref={brandslide_ref}
          >
            {brandImages?.map((item, index) => (
              <div
                className="brand_item shrink-0 cursor-pointer  hover:translate-y-[-4px] transition duration-300 ease-linear"
                key={index}
                ref={addToRefs}
              >
                <img src={item}></img>
              </div>
            ))}
          </div>
          <div
            className="absolute flex items-center justify-center w-12 h-12 rounded-[50%] top-[50%] translate-y-[-50%] right-[30px] bg-[rgba(0,0,0,0.41)] cursor-pointer shadow-3xl"
            onClick={handleNextSlide}
            ref={next_ref}
          >
            <icons.next className="text-white text-[20px]"></icons.next>
          </div>
          <div
            className="absolute flex items-center justify-center w-12 h-12 rounded-[50%] top-[50%] translate-y-[-50%] left-[30px] bg-[rgba(0,0,0,0.41)] cursor-pointer shadow-3xl hidden "
            onClick={handlePrevSlide}
            ref={prev_ref}
          >
            <icons.prev className="text-white text-[20px]"></icons.prev>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandSlide;
