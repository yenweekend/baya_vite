import React ,{useEffect, useRef, useState}from 'react'
import styled from "styled-components";
import icons from '../../../utils/icons';
import axios from 'axios';
import { apiUrl } from "../../../utils/constants";
import {Select, Radio, Modal, Button} from "antd";
import slugify from "../../../helpers/slugify";
const CheckOut = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
      setIsModalOpen(true);
    };
    const handleOk = () => {
      setIsModalOpen(false);
    };
    const handleCancel = () => {
      setIsModalOpen(false);
    };
    const formRef = useRef();
    const [payment, setPayment] = useState('cod');
    const [orderCity, setOrderCity] = useState();
    const [orderDistrict, setOrderDistrict] = useState();
    const [orderWard, setOrderWard] = useState();
    const [province,setProvince] = useState(null);
    const [district,setDistrict] = useState(null);
    const [ward,setWard] = useState(null);
    useEffect(() => {
       (async() => {
        try {
            const response = await axios.get(`${apiUrl}api/getprovince`);
            if(response?.data?.success)
            {
                setProvince(response?.data?.data)
                return;
            }
            console.log(response?.data?.success);
        } catch (error) {
            console.log(error);
        }
       })();
    },[]);
    const handleChange = async(value,objectValues) => {
        if(!objectValues.id)
        {
            setOrderWard(objectValues);
            return 1;
        }
        if(objectValues.id == 1)
        {
            setOrderCity(objectValues);
            setOrderDistrict(null);      
            setOrderWard(null);
        } else if (objectValues.id == 2)
        { 
            setOrderDistrict(objectValues);
            setOrderWard(null);      

        }
        try {
            const response = await axios.post(`${apiUrl}api/address`,objectValues);
            if(response?.data?.success)
            {
                if(!response?.data?.type)
                    {
                        setWard(response?.data?.data);
                        return;
                    }
                setDistrict(response?.data?.data);
                return 1;
            }
            console.log(response?.data?.message);
        } catch (error) {
            console.log(error);
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            city: orderCity.label,
            district: orderDistrict.label, 
            ward: orderWard.label,
            payment
        };
        console.log(data);
    }
    const handleChangeRadio = (e) => {
        setPayment(e.target.value);
      };
  return (
    <CheckOutStyled className='pb-[40px] pt-[160px] max-w-[1024px] w-[90%] mx-auto '>
        <div>bread crumb</div>
        <h2 className='font-bold mb-4 text-[20px]'>Thông tin thanh toán</h2>
        <form onSubmit={handleSubmit}>
            <div className='flex items-start gap-[20px]'>
                <div className='flex_625 '>
                    <h3 className='font-medium text-[18px] mb-4'>Thông tin người mua hàng</h3>
                    <div>
                        <div className='flex items-center gap-[10px] flex-wrap'>
                            <div className='flex-auto w-[calc((100%/2)-10px)] '>
                                <input className='outline-none border-solid border h-[50px] pl-5 rounded-[8px] border-[#686D76] inline-block w-full' type='text' name='firstname' ></input>
                            </div>
                            <div className='flex-auto w-[calc((100%/2)-10px)]'>
                                <input className='outline-none border-solid border h-[50px] pl-5 rounded-[8px] border-[#686D76] inline-block w-full' type='text' name='lastname'></input>
                            </div>                     
                        </div>
                        <div>
                            <div className="py-3">
                                <label className="flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        className="hidden input_checkbox"
                                        onChange={(e) => {
                                            if(e.target.checked && formRef && formRef?.current)
                                            {
                                                formRef.current.classList.remove("hidden");
                                                formRef.current.classList.add("block");
                                                return;
                                            }
                                            formRef.current.classList.add("hidden");
                                            formRef.current.classList.remove("block");
                                        }}
                                        name='recipent'                           
                                    ></input>
                                    <div className="input_filter relative mr-2">
                                        <div className="absolute "></div>
                                    </div>
                                    Người nhận là người khác
                                </label>
                            </div>
                            <div className='hidden' ref={formRef}>
                                <div className='flex items-center gap-[10px] flex-wrap ' >
                                    <div className=' w-[calc((100%/2)-10px)]'>
                                        <input className='outline-none border-solid border h-[50px] pl-5 rounded-[8px] border-[#686D76] inline-block w-full' type='text' placeholder='Tên' name='recipent_firstname'></input>
                                    </div>
                                    <div className=' w-[calc((100%/2)-10px)]'>
                                        <input className='outline-none border-solid border h-[50px] pl-5 rounded-[8px] border-[#686D76] inline-block w-full' type='text' placeholder='Họ' name='recipent_lastname'></input>
                                    </div>                                                       
                                    <div className=' w-[calc((100%/2)-10px)]'>
                                        <input className='outline-none border-solid border h-[50px] pl-5 rounded-[8px] border-[#686D76] inline-block w-full' type='text' placeholder='+84' name='recipent_phone'></input>
                                    </div>                     
                                </div>
                            </div>
                        
                        </div>
                    </div>
                    <h3 className='font-medium text-[18px] mb-4'>Thông tin người nhận hàng</h3>
                    <div>
                        <div className='flex items-center gap-[10px] flex-wrap'>
                            <div className='flex-auto w-full '>
                            <Select
                                showSearch
                                style={{
                                width: '100%',
                                height: '50px',
                                }}
                                placeholder="Tỉnh/Thành phố"
                                options={province}
                                virtual={false}
                                optionFilterProp="label"
                                filterOption={(input, option) =>
                                    (slugify(option?.label) ?? '').includes(slugify(input))    
                                }
                                onChange={handleChange}          
                                value={orderCity?.value}                    
                            />
                            
                            </div>
                            <div className='flex-auto w-[calc((100%/2)-10px)] relative'>
                            <Select
                                showSearch
                                style={{
                                width: '100%',
                                height: '50px',
                                }}
                                placeholder="Quận/huyện"
                                options={district}
                                virtual={false}
                                onChange={handleChange}
                                optionFilterProp="label"
                                filterOption={(input, option) =>
                                    (slugify(option?.label) ?? '').includes(slugify(input))    
                                  }
                                  value={orderDistrict?.value}
                            />
                            
                            </div>
                            <div className='flex-auto w-[calc((100%/2)-10px)] relative'>
                            <Select
                                
                                showSearch
                                style={{
                                width: '100%',
                                height: '50px',
                                }}
                                placeholder="Phường/xã"
                                options={ward}
                                virtual={false}
                                optionFilterProp="label"
                                onChange={handleChange}
                                filterOption={(input, option) =>
                                    (slugify(option?.label) ?? '').includes(slugify(input))    
                                  }
                                  value={orderWard?.value}
                            />
                            
                            </div>                     
                            <div className='flex-auto w-full'>
                                <input className='outline-none border-solid border h-[50px] pl-5 rounded-[8px] border-[#686D76] inline-block w-full' type='text' placeholder='Tòa nhà, số nhà, tên đường' name='addressline1'></input>
                            </div>
                            <div className='flex-auto w-full'>
                                <input className='outline-none border-solid border h-[50px] pl-5 rounded-[8px] border-[#686D76] inline-block w-full' type='text' placeholder='Tên địa chỉ (Vd: văn phòng, nhà ...)' name='addressline2'></input>
                            </div>
                        </div>
                      
                    </div>
                    <h3>Phương thức thanh toán</h3>
                    <div className='flex flex-col gap-[20px] payment_method'>
                    <Radio.Group onChange={handleChangeRadio} value={payment} className='flex flex-col gap-[20px]'>
                        <Radio value={'cod'}>  <div>Trả tiền mặt khi nhận hàng (COD)</div></Radio>
                        <Radio value={'aftee'}>    <div className='flex flex-start justify-between flex-auto'>
                                        <div>
                                            <div>AFTEE - Mua sắm thuận tiện, trả sau linh hoạt</div>
                                            <div className='text-[10px] text-[#777]'>Trả sau miên phí trong 10 giây chỉ với số điện thoại</div>
                                        </div>
                                        <div className='h-[16px]'>
                                            <img src=' https://image.hsv-tech.io/400x0/bbx/common/0a2b5b25-687c-49ba-8b01-21a90a51adcc.webp' className='w-full h-full object-cover'></img>
                                        </div>
                                    </div></Radio>
                        <Radio value={'paypal'}><div className='flex flex-start justify-between flex-auto'>
                                        <div>
                                            <div>Thẻ ATM/ Visa/ Master/ JCB/ QR Pay/ Ví điện tử khác qua Payoo</div>
                                        </div>
                                        <div className='h-[16px]'>
                                            <img src='https://beautybox.com.vn/images/payments/payoo.png' className='w-full h-full object-cover'></img>
                                        </div>
                                    </div></Radio>
                        <Radio value={'momo'}> <div className='flex flex-start justify-between flex-auto'>
                                        <div>
                                            <div>Ví MoMo</div>
                                        </div>
                                        <div className='h-[16px]'>
                                            <img src='https://beautybox.com.vn/images/payments/momo.png' className='w-full h-full object-cover'></img>
                                        </div>
                                    </div></Radio>
                    </Radio.Group>
                       
                    </div>
                  
                    
                </div>
                <div className='flex_375 '>
                    <div className="cart_wrapper px-[15px] py-[12px]">
                    <div className='text_primary font-bold mb-3 text-[18px]'>Đơn hàng</div>
                    <div className='max-h-[300px] px-[15px] overflow-y-auto flex-col flex gap-[15px] scrollbar'>
                        <div className='flex gap-3 justify-center'>
                                <div className='img w-[80px] h-[80px] rounded-[8px] border-[#686D76] overflow-hidden flex-shrink-0'>
                                    <img src='https://image.hsv-tech.io/150x0/bbx/common/56991e46-58e5-44df-9d6f-ebc17659c60c.webp' className='w-full h-full'></img>
                                </div>
                                <div>
                                    <div className="flex  justify-center">
                                        <div>
                                            <span className='ellipsis_2_lines'> Tint Bóng Peripera Căng Mướt Môi Ink Mood Glowy Tint 4g</span>
                                            <span>SKU: abcxyc</span>
                                        </div>
                                        <div className="w-[22px] h-[22px] bg-[rgba(223,223,223)] rounded-[50%] flex-shrink-0 flex items-center justify-center cursor-pointer">
                                            <icons.minus></icons.minus>
                                        </div>
                                    </div>
                                    <div>
                                    <div className='flex items-center justify-between'>
                                        <div className="flex items-center border-[1.5px] border-solid   rounded-[8px] border-[#686D76] w-fit gap-2 px-2 mt-2">
                                            <div className="minus flex items-center justify-center  cursor-pointer text-[10px]">
                                                <icons.minus></icons.minus>
                                            </div>
                                            <div className="quantity_text text-center font-bold">1</div>
                                            <div className="plus flex items-center justify-center cursor-pointer text-[10px]">
                                            <icons.plus></icons.plus>
                                            </div>
                                        </div>
                                        <span className='font-bold text_primary'>189.000d</span>
                                    </div>
                                    </div>
                                </div>
                        </div>
                        <div className='flex gap-3 justify-center'>
                                <div className='img w-[80px] h-[80px] rounded-[8px] border-[#686D76] overflow-hidden flex-shrink-0'>
                                    <img src='https://image.hsv-tech.io/150x0/bbx/common/56991e46-58e5-44df-9d6f-ebc17659c60c.webp' className='w-full h-full'></img>
                                </div>
                                <div>
                                    <div className="flex  justify-center">
                                        <div>
                                            <span className='ellipsis_2_lines'> Tint Bóng Peripera Căng Mướt Môi Ink Mood Glowy Tint 4g</span>
                                            <span>SKU: abcxyc</span>
                                        </div>
                                        <div className="w-[22px] h-[22px] bg-[rgba(223,223,223)] rounded-[50%] flex-shrink-0 flex items-center justify-center cursor-pointer">
                                            <icons.minus></icons.minus>
                                        </div>
                                    </div>
                                    <div>
                                    <div className='flex items-center justify-between'>
                                        <div className="flex items-center border-[1.5px] border-solid   rounded-[8px] border-[#686D76] w-fit gap-2 px-2 mt-2">
                                            <div className="minus flex items-center justify-center  cursor-pointer text-[10px]">
                                                <icons.minus></icons.minus>
                                            </div>
                                            <div className="quantity_text text-center font-bold">1</div>
                                            <div className="plus flex items-center justify-center cursor-pointer text-[10px]">
                                            <icons.plus></icons.plus>
                                            </div>
                                        </div>
                                        <span className='font-bold text_primary'>189.000d</span>
                                    </div>
                                    </div>
                                </div>
                        </div>
                        <div className='flex gap-3 justify-center'>
                                <div className='img w-[80px] h-[80px] rounded-[8px] border-[#686D76] overflow-hidden flex-shrink-0'>
                                    <img src='https://image.hsv-tech.io/150x0/bbx/common/56991e46-58e5-44df-9d6f-ebc17659c60c.webp' className='w-full h-full'></img>
                                </div>
                                <div>
                                    <div className="flex  justify-center">
                                        <div>
                                            <span className='ellipsis_2_lines'> Tint Bóng Peripera Căng Mướt Môi Ink Mood Glowy Tint 4g</span>
                                            <span>SKU: abcxyc</span>
                                        </div>
                                        <div className="w-[22px] h-[22px] bg-[rgba(223,223,223)] rounded-[50%] flex-shrink-0 flex items-center justify-center cursor-pointer">
                                            <icons.minus></icons.minus>
                                        </div>
                                    </div>
                                    <div>
                                    <div className='flex items-center justify-between'>
                                        <div className="flex items-center border-[1.5px] border-solid   rounded-[8px] border-[#686D76] w-fit gap-2 px-2 mt-2">
                                            <div className="minus flex items-center justify-center  cursor-pointer text-[10px]">
                                                <icons.minus></icons.minus>
                                            </div>
                                            <div className="quantity_text text-center font-bold">1</div>
                                            <div className="plus flex items-center justify-center cursor-pointer text-[10px]">
                                            <icons.plus></icons.plus>
                                            </div>
                                        </div>
                                        <span className='font-bold text_primary'>189.000d</span>
                                    </div>
                                    </div>
                                </div>
                        </div>
                        <div className='flex gap-3 justify-center'>
                                <div className='img w-[80px] h-[80px] rounded-[8px] border-[#686D76] overflow-hidden flex-shrink-0'>
                                    <img src='https://image.hsv-tech.io/150x0/bbx/common/56991e46-58e5-44df-9d6f-ebc17659c60c.webp' className='w-full h-full'></img>
                                </div>
                                <div>
                                    <div className="flex  justify-center">
                                        <div>
                                            <span className='ellipsis_2_lines'> Tint Bóng Peripera Căng Mướt Môi Ink Mood Glowy Tint 4g</span>
                                            <span>SKU: abcxyc</span>
                                        </div>
                                        <div className="w-[22px] h-[22px] bg-[rgba(223,223,223)] rounded-[50%] flex-shrink-0 flex items-center justify-center cursor-pointer">
                                            <icons.minus></icons.minus>
                                        </div>
                                    </div>
                                    <div>
                                    <div className='flex items-center justify-between'>
                                        <div className="flex items-center border-[1.5px] border-solid  rounded-[8px] border-[#686D76] w-fit gap-2 px-2 mt-2">
                                            <div className="minus flex items-center justify-center  cursor-pointer text-[10px]">
                                                <icons.minus></icons.minus>
                                            </div>
                                            <div className="quantity_text text-center font-bold">1</div>
                                            <div className="plus flex items-center justify-center cursor-pointer text-[10px]">
                                            <icons.plus></icons.plus>
                                            </div>
                                        </div>
                                        <span className='font-bold text_primary'>189.000d</span>
                                    </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div className="devide bg-[rgba(0,0,0,.06)] h-[0.8px] my-4"></div>
                    <div className='flex items-center justify-between'>
                        <span>Tổng giá trị đơn hàng</span>
                        <span>400.000đ</span>
                    </div>
                    <div className='flex items-center justify-between'>
                        <span>Giảm giá</span>
                        <span className='text-[#0992d0]'>-400.000đ</span>
                    </div>
                    <div className="devide bg-[rgba(0,0,0,.06)] h-[0.8px] my-4"></div>
                    <div className='flex items-center justify-between'>
                        <span>Phí vận chuyển</span>
                        <span className=''>0đ</span>
                    </div>
                    <div className="devide bg-[rgba(0,0,0,.06)] h-[0.8px] my-4"></div>
                    <div className='flex items-center justify-between'>
                        <span>Tổng (đã bao gồm thuế VAT)</span>
                        <span className=''>400.000đ</span>
                    </div>
                    <button className='uppercase text-white font-bold text-[18px] gradient_header px-3 py-[4px] rounded-[8px] border-[#686D76] text-center cursor-pointer mt-2 mx-auto block'>Đặt hàng</button>
                    <div className='text-center font-bold text-[14px]'>
                    *Vui lòng không hủy đơn hàng khi đã thanh toán*
                    </div>

                    </div>
                    <div className='px-[18px] py-[16px] border border-solid border-[#f0f0f0] rounded-[4px]'>
                        <div className="">
                            <div>
                                Coupon & Voucher
                            </div>
                            <div className='flex items-center '>
                                <input placeholder='Nhập mã giảm giá nếu có' type='text' className='outline-none border border-solid border-[#f0f0f0] rounded-[4px] flex-auto p-[11px] '>
                                </input>
                                <button className="h-[50px] px-[15px] py-[8px] bg-[#000] rounded-[4px] text-white">Áp dụng</button>
                            </div>
                        </div>
                    </div>
                    <div className='px-[18px] py-[16px] border-[2px]  rounded-[4px] relative mt-3  flex items-center justify-between tag_coupon text-white'>
                        <div className=' flex_625'>
                            <div className='flex items-center gap-2'>
                                <icons.coupon className='text-[20px]'></icons.coupon>
                                <span className='font-bold text-[18px]'>toasang36</span>
                                <div className="circle_top"></div>
                                <div className="circle_bottom"></div>
                            </div>
                            <div>
                                <icons.calender className='text-[16px]'></icons.calender>
                                <span>08/02/2004</span>
                            </div>
                            <div className='flex items-center gap-2'>
                                <icons.warning className='text-[28px]'></icons.warning>
                                <span className='truncate'>Giảm thêm 36000 áp dụng khuyến a=mãi đến mùng 1 tháng 9 </span>
                            </div>
                            <span>Mã khuyến mãi không khả dụng</span>
                            <Button type="primary" onClick={showModal} className='block p-0 shadow-none relative hover:translate-y-[-4px] transition-all ease-linear duration-200 condition '>
                                Điều kiện
                                <div className='underline_c absolute w-[100%] h-[1.6px] border-[#fff] border-dashed border-[1px]'></div>

                            </Button>
                            <div className="voucher">
                                <Modal  open={isModalOpen} onOk={handleOk} onCancel={handleCancel} okText={"Áp dụng"}>
                                    <div className='ticket_container p-[30px] gradient_header flex  rounded-tl-[8px]'>
                                    <div className='p-[15px] bg-[#fff] text-[#000] qr_code'>
                                        <div>mã qr</div>
                                        <div className='px-[20px] py-[5px] gradient_header rounded-full uppercase cursor-pointer'>Summer100k</div>
                                    </div>
                                    <div className='p-[15px] bg-[rgba(239,239,239)] text-[#000] rounded-tr-[6px] rounded-br-[6px]'>
                                        <div className='font-extrabold text-[28px]'>
                                        SUMMER100K - Giảm thêm 100.000đ. Áp dụng cho đơn hàng từ 1000.000đ
                                        </div>
                                        <div>Tất cá hình thức thanh toán</div>
                                        <span className='text-[#ab2328] font-bold '>100.000</span>
                                    </div>
                                    
                                    </div>
                                    <div className='p-[30px] flex flex-col gap-[30px]'>
                                        <div className='promotion_content'>
                                            <div className='font-bold text-[16px]'>Ưu đãi</div>
                                            <div className='text-[#777]'>Áp dụng cho toàn bộ sản phẩm</div>
                                        </div>
                                        <div className='promotion_content'>
                                            <div className='font-bold text-[16px]'>Có hiệu lực</div>
                                            <div className='text-[#777]'>04/01/2024-08/3102024</div>
                                        </div>
                                        <div className='promotion_content'>
                                            <div className='font-bold text-[16px]'>Thanh toán</div>
                                            <div className='text-[#777]'>Tất cả hình thức thanh toán</div>
                                        </div>
                                        <div className='promotion_content'>
                                            <div className='font-bold text-[16px]'>Xem chi tiết</div>
                                            <div className='text-[#777]'>Giảm thêm 100.000đ. Áp dụng cho đơn hàng từ 100.000đ</div>
                                        </div>
                                    </div>
                                </Modal>
                            </div>
                        </div>
                        <button type='button' className=' px-3 py-2 bg-white rounded-full text-[#ab2328] hover:translate-y-[-4px]  transition-all duration-200'>Áp dụng</button>
                        <div className='dashed'></div>

                    </div>
                </div>
            </div>
        </form>
      
    </CheckOutStyled>
  )
}
const CheckOutStyled = styled.div`


    .dashed{
    content: "";
        position: absolute;
        height: 70%;
        width: 1px;
        border: 1px dashed white ;
        right: 120px;
}
    .circle_top, .circle_bottom{

        content: "";
        position: absolute;
        height: 20px;
        width: 20px;
        border-radius: 50%;
        background-color: #fff;
    }
    .circle_top{
        right: 110px;
        top: -12px;
    }
    .circle_bottom{
        right: 110px;
        bottom: -12px;
    }

    .scrollbar::-webkit-scrollbar-track
        {
            height: 6px;
            width: 6px;
            border-radius: 10px;
            background-color: #F5F5F5;
        }

    .scrollbar::-webkit-scrollbar
    {
        height: 6px;
        width: 6px;
        background-color: #F5F5F5;
    }

    .scrollbar::-webkit-scrollbar-thumb
    {
        border-radius: 10px;
        background-color: #D62929;
    }
    .cart_wrapper{
        border: 1px solid rgb(236, 236, 236);
    box-shadow: rgba(57, 105, 179, 0.25) 0px 0px 10px;
    border-radius: 5px;
    margin-bottom: 20px;
    }
    .border{
        border: 1px solid rgba(223,223,223);
        padding: 10px 15px;
        border-radius: 5px;
    }
    .input_radio_type{
        width: 16px;
        height: 16px;
        border-radius: 50%;
        border: 1px solid #000;
        transition:all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
    .input_radio:checked + .input_radio_type{
        width: 12px;
        height: 12px;
        background-color: #C80036;
        border-radius: 50%;
        border: 1px solid transparent;
        box-shadow: 0 0 0px 2px white , 0 0 0px 3px #C80036;
    }
    .input_filter {
    cursor: pointer;
    width: 20px;
    height: 20px;
    border: 1px solid #dbdfe6;
    border-radius: 6px;
    transition: all 0.1s linear;
  }
  .input_filter > div {
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(-45deg);
    width: 10px;
    height: 6px;
    border-left: 2px solid #fff;
    border-bottom: 2px solid #fff;
  }
  .input_checkbox:checked + .input_filter {
    background-color: #c23f5b;
    border-color: #c23f5b;
  }
`
export default CheckOut
