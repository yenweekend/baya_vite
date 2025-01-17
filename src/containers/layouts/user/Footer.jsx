import React, { useRef } from "react";

const Footer = () => {
  const input_are_ref = useRef();

  return (
    <footer className="wrap-container mt-[30px]">
      <div className="middle_footer mb-[56px]">
        <div className="new_sections flex items-center justify-between  ">
          <div className="middle_footer_left ">
            <div className="text-[25px] font-bold leading-[36px] uppercase text-white ">
              nhận bản tin làm đẹp
            </div>
            <div className="text-[14px] leading-[20px] ">
              đừng bỏ lỡ hàng ngàn sản phẩm và chương trình siêu hấp dẫn
            </div>
          </div>
          <div className="text-[14px] leading-[20px] middle_footer_right rounded-[42px] overflow-hidden">
            <div className="relative input_area ml-auto " ref={input_are_ref}>
              <input
                onFocus={() => {
                  input_are_ref.current.classList.add("is_focus");
                }}
                onBlur={() => {
                  input_are_ref.current.classList.remove("is_focus");
                }}
                className="absolute input pl-[10px] text-[16px] w-[60%] overflow-hidden"
                placeholder="Điền email của bạn"
              ></input>
              <div className="follow_btn uppercase font-bold text-[25px]  absolute right-[10px] top-[50%] translate-y-[-50%] leading-[23px]  cursor-pointer">
                theo dõi
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
      <div className="flex py-[60px]">
        <div className="footer_left">
          <div className="logo max-w-[200px]">
            <img
              src="https://image.hsv-tech.io/0x120/bbx/common/376254ef-1b70-4394-9562-1152ba2dfb35.webp"
              className="w-full object-cover "
            ></img>
          </div>
          <div className="flex gap-[17px] mt-[30px] items-center">
            <div>
              <img src="https://image.hsv-tech.io/24x0/bbx/common/d41b06c0-5ef5-46f4-ac1d-41aa955b23fb.webp"></img>
            </div>
            <div>
              <img src="https://image.hsv-tech.io/24x0/bbx/common/d9884d82-b389-4c6f-beaa-429c032cb2c0.webp"></img>
            </div>
            <div>
              <img src="https://image.hsv-tech.io/24x0/bbx/common/d507bd2a-5d6b-4ebd-823e-bdeb742a6ecd.webp"></img>
            </div>
          </div>
        </div>
        <div className="footer_right flex ">
          <div className="ant-col">
            <div className="section_title">về beauty box</div>
            <div className="mt-[15px] flex flex-col gap-[12px]">
              <span>câu chuyện thương hiệu</span>
              <span>về chúng tôi</span>
              <span>liên hệ</span>
            </div>
          </div>
          <div className="ant-col">
            <div className="section_title">chính sách</div>
            <div className="mt-[15px] flex flex-col gap-[12px]">
              <span>Chính sách và quy định chung</span>
              <span>Chính sách và giao nhận thanh toán</span>
              <span>Chính sách đổi trả sản phẩm</span>
              <span>Chính sách bảo mật thông tin cá nhân</span>
              <span>Điều khoản sử dụng</span>
            </div>
          </div>
          <div className="ant-col">
            <div className="section_title">my beautybox</div>
            <div className="mt-[15px] flex flex-col gap-[12px]">
              <span>Quyền lợi thành viên</span>
              <span>Thông tin thành viên</span>
              <span>Theo dõi đơn hàng</span>
              <span>Hướng dẫn mua hàng online</span>
            </div>
          </div>

          <div className="ant-col">
            <div className="section_title">đối tác & liên kết</div>
            <div className="mt-[15px] flex flex-col gap-[12px]">
              <span>the faceshop việt nam</span>
            </div>
          </div>
        </div>
      </div>
      <div className="devide bg-[rgba(0,0,0,.06)] h-[0.8px] mx-[15px]"></div>
      <div className="footer_bottom pb-5 flex justify-between items-center">
        <div className="footer_desc font-semibold">
          ®beautybox.com.vn thuộc quyền sở hữu của Công ty CP TMDV Tổng Hợp Hoàn
          Vũ GPKD số 0309802418 cấp ngày 11/02/2010 tại Sở Kế hoạch & Đầu tư TP
          HCM | VP Miền Nam Lầu 1, G Tower 3 - 196A, Nguyễn Văn Hưởng, Phường
          Thảo Điền, Thành Phố Thủ Đức, TP.HCM--- Chi nhánh Công ty CP TMDV Tổng
          Hợp Hoàn Vũ tại Hà Nội GPKD chi nhánh số 0309802418-004 cấp ngày
          22/11/2017 | Tầng 4 tháp 2, Times Tower, 35 Lê Văn Lương, Phường Nhân
          Chính, Q. Thanh Xuân, TP.Hà Nội, Việt Nam.
        </div>
        <div>
          <div className="section_title">phương thức thanh toán</div>
          <div className="flex items-center gap-[15px] mt-[15px]">
            <div>
              <img src="https://image.hsv-tech.io/0x24/bbx/common/06414657-24ed-4da4-8a54-f207d45ab1be.webp"></img>
            </div>
            <div>
              <img src="https://image.hsv-tech.io/0x24/bbx/common/afebded0-f4e7-4c5f-aee3-aa01271174c3.webp"></img>
            </div>
            <div>
              <img src="https://image.hsv-tech.io/0x24/bbx/common/64102078-db30-4f18-a473-2582467505fd.webp"></img>
            </div>
            <div>
              <img src="https://image.hsv-tech.io/0x24/bbx/common/a19ac3f9-5d5e-43c3-aa84-49576cad1102.webp"></img>
            </div>
            <div>
              <img src="https://image.hsv-tech.io/0x24/bbx/common/3e4a7882-d755-4110-83b5-6496bf5e689c.webp"></img>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
