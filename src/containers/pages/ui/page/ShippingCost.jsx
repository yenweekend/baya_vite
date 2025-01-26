import React from "react";

const ShippingCost = () => {
  React.useEffect(() => {
    document.title = "Chính sách bảo mật - Baya";
  }, []);
  return (
    <div className="pb-10 pt-[10px]">
      <h1 className="text-[22px] mb-5 font-bold text-redtitle">
        Chi phí vận chuyển
      </h1>
      <p style={{ textAlign: "center" }}>
        Giá bán chưa bao gồm Chi phí vận chuyển và Chi phí lắp đặt.
      </p>
    </div>
  );
};

export default ShippingCost;
