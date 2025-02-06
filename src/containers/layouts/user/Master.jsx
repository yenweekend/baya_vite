import React, { useCallback, useEffect, useRef, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Header from "./Header";
import Footer from "./Footer";
import { useSelector } from "react-redux";
let prevScrollpos = window.pageYOffset;
let resizeTimeout;

const Master = () => {
  const [showBanner, setShowBanner] = useState(true);
  const [marginTop, setMarginTop] = useState(null);
  const handleScroll = (event) => {
    if (
      document.body.classList.contains("locked-scroll") ||
      document.body.classList.contains("body-showmodal") ||
      document.body.classList.contains("body-resize")
    ) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    let currentScrollPos = document.documentElement.scrollTop;
    if (currentScrollPos < 252) {
      document.getElementById("header").classList.remove("showSticky");
      document.getElementById("header").style.top = "0";
      document.getElementById("header").style.opacity = 1;
      document.getElementById("header").style.visibility = "visible";
    } else {
      if (currentScrollPos > 780) {
        document.getElementById("header").classList.add("showSticky");
        if (prevScrollpos < currentScrollPos) {
          // scroll down
          document.getElementById("header").style.top = "-10%";
          document.getElementById("header").style.opacity = 0;
          document.getElementById("header").style.visibility = "hidden";
        } else {
          document.getElementById("header").style.top = "0";
          document.getElementById("header").style.opacity = 1;
          document.getElementById("header").style.visibility = "visible";
        }
      } else {
        document.getElementById("header").style.top = "-60%";
        document.getElementById("header").style.opacity = 0;
        document.getElementById("header").style.visibility = "hidden";
      }
    }
    prevScrollpos = currentScrollPos;
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      document.body.classList.add("body-resize");
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        document.body.classList.remove("body-resize");
      }, 1000); // 1000ms delay after resize stops
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimeout);
    };
  }, []);

  return (
    <>
      <div className="baya-container max-990:overflow-x-hidden pb-[60px]">
        <Header
          setMarginTop={setMarginTop}
          setShowBanner={setShowBanner}
          showBanner={showBanner}
        />
        <div
          className={` pb-[30px]  mx-auto 2md:max-w-[1366px] relative w-[90%]  md:max-w-[720px]  max-990:w-[100%] xl:w-[100%] min-1350:max-w-[1366px] xl:px-[15px]`}
          style={{
            marginTop: `${marginTop}px`,
          }}
        >
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Master;
