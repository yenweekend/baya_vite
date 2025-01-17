import React from "react";
import { Link } from "react-router-dom";
const LoadMoreBtn = ({ text, url }) => {
  return (
    <Link
      to={url}
      className="text-[14px] overflow-hidden btn-loadmore cursor-pointer"
    >
      Xem tất cả <strong className="text-[14px]">{text}</strong>
    </Link>
  );
};

export default LoadMoreBtn;
