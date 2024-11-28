import React from 'react'
const stores = [1,2,3,4,5,6,7,8,9,10];
const Store = () => {
  return (
    <div className='wrap_container mt-[160px] mb-[40px]'>
        <div className="breadcrumb">bread crumh</div>
        <h1 className='uppercase font-extrabold'>Các chi nhánh cửa hàng</h1>
        <div>22 cửa hàng</div>
        <div className='flex gap-3'>
            <div className='flex_58'>
                <div className='flex items-center flex-wrap gap-[20px]'
                >
                    {
                        stores.map(store => (
                            <div className="store p-[15px] rounded-[8px] border border-solid max-w-[calc(50%_-_10px)] " key={store}>
                                <div className="city">hà nội</div>
                                <div className="name uppercase font-bold">beauty box chùa bộc</div>
                                <div className="address_line">191 chùa bỗ, phường trung liệt, quận đống đa</div>
                                <div className="phone">000 333 444 12</div>
                                <div>
                                    <span>Đang mở cửa</span>
                                    <span>09:00 - 22:00</span>
                                </div>
                                <div className='mt-3 flex gap-3'>
                                    <a>Xem bản đồ</a>
                                    <a>Xem hình showroom</a>
                                    <a>giờ mở cửa</a>
                                    <a>chi tiết</a>
                                </div>
                            </div>

                        ))
                    }
                 
                </div>
            </div>
            <div className='flex_41 '>
                <div className='sticky  map' >
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3579.118594296479!2d105.82436707508027!3d21.008215980635924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac80478c1e8f%3A0x2930689558a1b40f!2zMTkxIFAuIENow7lhIELhu5ljLCBUcnVuZyBMaeG7h3QsIMSQ4buRbmcgxJBhLCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e1!3m2!1svi!2s!4v1723193732929!5m2!1svi!2s" width="100%" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Store
