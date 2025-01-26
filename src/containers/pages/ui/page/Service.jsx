import React from "react";

const Service = () => {
  React.useEffect(() => {
    document.title = "Điều khoản dịch vụ - Baya";
  }, []);
  return (
    <div className="pb-10 pt-[10px]">
      <h1 className="text-[22px] mb-5 font-bold text-redtitle">
        Câu hỏi thường gặp
      </h1>
      <div className="content-pageDetail typeList-style">
        <p>
          <strong>Hệ thống siêu thị BAYA mở và đóng cửa lúc mấy giờ?</strong>
        </p>
        <ul className="list-outside ml-4">
          <li className="list-disc marker:text-black">
            Cửa hàng<strong> BAYA:</strong>&nbsp;9h - 21h.
          </li>
          <li className="list-disc marker:text-black">
            Thông tin các chi nhánh <strong>BAYA:</strong>{" "}
            <strong>
              <a href="https://baya.myharavan.com/pages/he-thong-cua-hang">
                <span className="text-redichi">tại đây</span>
              </a>
            </strong>
          </li>
        </ul>
        <p>&nbsp;</p>
        <p>
          <strong>Vì sao sản phẩm thường hay hết hàng?</strong>
        </p>
        <p className="text-justify font-normal">
          Chúng tôi luôn cố gắng duy trì số lượng hàng hóa có trong catalogue ở
          mức cao nhất. Tuy nhiên, số lượng đó còn tùy theo sức bán của một mặt
          hàng hoặc quá trình cung cấp hàng có bị trì hoãn hay không. Thông tin
          về lô hàng mới của những sản phẩm hết hàng luôn được cập nhật liên
          tục. Sản phẩm của BAYA được sản xuất ở khắp nơi trên thế giới và trong
          nhiều trường hợp sẽ ảnh hưởng trực tiếp đến quá trình tiếp nhận hàng
          hóa.
        </p>
        <p>&nbsp;</p>
        <p>
          <strong>
            Tôi có thể đặt hàng, thanh toán trực tuyến rồi nhận hàng trực tiếp
            tại cửa hàng không?
          </strong>
        </p>
        <p className="font-normal">
          Hiện tại chúng tôi chưa hỗ trợ hình thức mua sắm này. Tất cả sản phẩm
          của đơn hàng trực tuyến sẽ được chuyển trực tiếp từ kho đến nhà khách
          hàng nên bạn không thể nhận sản phẩm đã đặt trực tuyến tại cửa hàng.
        </p>
        <p>&nbsp;</p>
        <h3>
          <span className="text-[22px] text-redichi font-bold">
            DỊCH VỤ GIAO HÀNG
          </span>
        </h3>
        <p>
          <strong>BAYA có dịch vụ giao hàng không?</strong>
        </p>
        <p>BAYA chúng tôi có dịch vụ giao hàng tận nhà hoặc nơi làm việc.</p>
        <p>&nbsp;</p>
        <p>
          <strong>
            Làm sao để liên lạc được với nhân viên đang giao hàng cho tôi?
          </strong>
        </p>
        <p className="font-normal">
          Bạn có thể gọi vào số điện thoại của đội ngũ đang giao đơn hàng cho
          bạn được cung cấp trên trang xác nhận mua hàng.
        </p>
        <p>&nbsp;</p>
        <p>
          <strong>
            Hàng sau khi giao bị thiếu hoặc hỏng hóc. Tôi nên làm gì?
          </strong>
        </p>
        <p className="font-normal">
          Vui lòng gọi&nbsp;<a href="tel:%201900636476">1900636476</a>&nbsp;để
          được bộ phận Chăm sóc Khách hàng của BAYA giải đáp mọi thắc mắc về đơn
          hàng.
        </p>
        <p>&nbsp;</p>
        <p>
          <strong>
            Hàng được giao bị thiếu mất vài bộ phận thì phải làm sao?
          </strong>
        </p>
        <p className="font-normal">
          Đầu tiên, bạn cảm phiền kiểm tra kỹ lại các kiện hàng một lần nữa. Một
          số mặt hàng được chia thành nhiều kiện. Số kiện được ghi rõ trên thùng
          và nhãn hàng. Nếu nghi ngờ thiếu mất kiện hàng nào đó, hoặc hàng hóa
          bên trong kiện bị thiếu, vui lòng liên hệ cửa hàng đã mua hàng với hóa
          đơn gốc và tờ hướng dẫn lắp ráp để đối chiếu. Đối với hàng gia dụng bị
          thiếu bộ phận, bạn cần cung cấp số serial của sản phẩm.
        </p>
        <p>&nbsp;</p>
        <h3>
          <span className="text-[22px] text-redichi font-bold">
            CÁC DỊCH VỤ KHÁC CỦA BAYA
          </span>
        </h3>
        <p>
          <strong>BAYA có dịch vụ lắp ráp hàng tại nhà không?</strong>
        </p>
        <p className="font-normal">
          Các nhân viên kỹ thuật sẽ đến nhà bạn để lắp ráp hàng thành phẩm và bố
          trí ở nơi bạn muốn.
        </p>
        <p>&nbsp;</p>
        <p>
          <strong>
            Nếu như có sự cố xảy ra khi nhân viên kỹ thuật đang lắp hàng tại
            nhà, tôi nên làm gì?
          </strong>
        </p>
        <p className="font-normal">
          Trong quá trình lắp ráp, nếu có sự cố xin gọi Hotline&nbsp;
          <a href="tel:%201900636476">1900636476</a>&nbsp;để được bộ phận Chăm
          sóc Khách hàng của BAYA đề xuất hướng giải quyết. Quý khách vui lòng
          giữ hóa đơn và cung cấp số hóa đơn để nhân viên tra cứu.
        </p>
        <p>&nbsp;</p>
        <p>
          <strong>BAYA có dịch vụ khoan lắp và sơn theo yêu cầu không?</strong>
        </p>
        <p className="font-normal">
          Nhân viên kỹ thuật của chúng tôi không thể tự ý quyết định khoan hoặc
          sơn bất cứ thứ gì trong suốt quá trình làm việc tại nhà khách. Nếu bạn
          cần hỗ trợ khoan hoặc sơn tại nhà, hãy gọi số hotline&nbsp;
          <a href="tel:%201900636476">1900636476</a>&nbsp;để được bộ phận Chăm
          sóc Khách hàng của BAYA hướng dẫn tận tình và tìm giải pháp phù hợp.
        </p>
      </div>
    </div>
  );
};

export default Service;
