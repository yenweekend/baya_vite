import { useEffect } from "react";

const useClickAway = (dropdownRef, targetRef, onClickAway) => {
  useEffect(() => {
    const handleClick = (event) => {
      event.stopPropagation();
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        !targetRef.current.contains(event.target)
      ) {
        onClickAway();
      }
    };
    const handleScroll = () => {
      onClickAway();
    };

    document.addEventListener("mousedown", handleClick);
    window.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      window.addEventListener("scroll", handleScroll);
    };
  }, [dropdownRef, onClickAway]);
};

export default useClickAway;
