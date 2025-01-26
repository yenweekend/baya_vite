import React, { useCallback, useEffect, useRef, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Header from "./Header";
import Footer from "./Footer";
import { useSelector } from "react-redux";
import { X } from "lucide-react";
let lastScrollTop = 0;
let resizeTimeout;
let scrollTimeout;

const Master = () => {
  const handleScroll = (event) => {
    const navbar = document.querySelector(".nav-bar");
    if (
      document.body.classList.contains("locked-scroll") ||
      document.body.classList.contains("body-showmodal") ||
      document.body.classList.contains("body-resize")
    ) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    let scrollTop = document.documentElement.scrollTop;
    if (scrollTop > 280) {
      navbar.classList.add("loadSticky");
      if (scrollTop < 400) {
        navbar.classList.remove("stickyUp");
        navbar.classList.remove("hSticky");
        navbar.classList.remove("stickyNav");
      } else if (scrollTop > lastScrollTop) {
        //scroll down => show nav
        navbar.classList.add("stickyNav");
        navbar.classList.add("hSticky");
        navbar.classList.remove("stickyUp");
      } else {
        //scroll up
        navbar.classList.remove("hSticky");
        navbar.classList.add("stickyUp");
      }
    } else {
      navbar.classList.remove("loadSticky");
    }

    lastScrollTop = scrollTop;
  };
  useEffect(() => {
    // window.scrollTo(0, 0);

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      // Add the "body-resize" class when resizing
      document.body.classList.add("body-resize");

      // Clear the existing timeout to reset the debouncing
      clearTimeout(resizeTimeout);

      // Set a new timeout to remove the class after 1000ms
      resizeTimeout = setTimeout(() => {
        document.body.classList.remove("body-resize");
      }, 1000); // 1000ms delay after resize stops
    };

    // Add the resize event listener
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener and timeout on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimeout); // Clean up timeout if the component unmounts
    };
  }, []);

  return (
    <>
      <div className="baya-container max-990:overflow-x-hidden pb-[60px]">
        <div className="flex items-center justify-center relative ">
          <img
            src="https://theme.hstatic.net/200000796751/1001266995/14/topbar_img.jpg?v=82"
            alt="Ưu đãi lớn"
            className="w-full object-cover"
          />
          <button className="center-y right-[8px] w-6 h-6 flex items-center justify-center">
            <X size={24} stroke="#fff" />
          </button>
        </div>
        <Header />
        <div className=" pb-[30px]  mx-auto 2md:max-w-[1366px] relative w-[90%]  md:max-w-[720px]  max-990:w-[100%] xl:w-[100%] min-1350:max-w-[1366px] xl:px-[15px]">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Master;
