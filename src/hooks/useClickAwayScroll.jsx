import { useEffect } from "react";

const useClickAwayScroll = (dropdownRef, targetRef, onClickAway) => {
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
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClick);
    };
  }, [dropdownRef, onClickAway]);
};

export default useClickAwayScroll;
