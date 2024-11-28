import React, { useCallback, useEffect, useState } from 'react'
import icons from '../../../utils/icons'
import { DatePicker,  Radio, Divider, Button, Modal } from 'antd'
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
const dateFormat = 'YYYY-MM-DD';
const ProductSaleCreate = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [maxDate, setMaxDate] = useState()
    const [minEndDate, setMinEnddate] = useState()
    const [startTime, setStartTime] = useState()
    const [endTime, setEndTime] = useState()
    const showModal = () => {
      setIsModalOpen(true);
    };
    const handleOk = () => {
      setIsModalOpen(false);
    };
    const handleCancel = () => {
      setIsModalOpen(false);
    };
    const [saleType, setSaleType] = useState('init');
    const handleChangeStartDate = (date, dateString) => {
        setStartTime(date['$d'].getTime());
        setMinEnddate(dateString)
      };
    const handleChangeEndDate = (date, dateString) => {
        setEndTime(date['$d'].getTime());
        setMaxDate(dateString)
      };
    const handleChangeSaleType = useCallback((e) => {
        setSaleType(e.target.value);
    },[saleType]);
  useEffect(()=>{
    if(endTime && startTime)
    {
      if(endTime - startTime > 0)
        {
          console.log('ok');
          return ;
        }
        console.log("not ok");
    }
  },[endTime, startTime]);
  return (
    <div>
      <div className='flex items-center justify-between mt-3'>
        <div className='flex items-center gap-2'>
          <icons.arrowleft></icons.arrowleft> 
          <span>Quay lại</span>
        </div>
        <div className='flex items-center gap-3'>
          <button type='button' className=' rounded-[4px]  flex items-center gap-2 text-white px-3 py-2 cursor-pointer bg-[#f3a618]'>
            <icons.savepmn className='text-[20px]'></icons.savepmn>
            <span className=' '>Lưu nháp</span>
          </button>
          <button type='button' className=' rounded-[4px]  flex items-center gap-2 text-white px-3 py-2 cursor-pointer bg-[#2bc38d]' >
            <icons.savetmp className='text-[20px]'></icons.savetmp>
            <span className=' '>Lưu và hiển thị</span>
          </button>
        </div>
      </div>
      <div className='beauty_box_shadow p-[30px]'>
        <h2 className='font-bold text-[20px] my-2'>Giảm giá sản phẩm</h2>
        <div className=''>
          <form>
              <div className='flex flex-wrap gap-[24px]'>
                  <div className='w-[100%] flex flex-col gap-2 '>
                      <div className='font-bold'>Tên khuyến mãi</div>
                      <input className='outline-none border border-solid rounded-[4px] p-2' type='text' name='productname' placeholder='Khuyến mãi' required></input>
                  </div>
                  <div className='w-[calc(50%-12px)] flex flex-col gap-2 '>
                      <div className='font-bold'>Loại giảm giá</div>
                      <Radio.Group className='flex flex-col gap-[20px]' onChange={handleChangeSaleType} value={saleType}>
                          <Radio value={'init'}><div>Cố định</div></Radio>
                          <Radio value={'percent'}><div>Phần trăm</div></Radio>    
                      </Radio.Group>
                  </div>
                  <div className='w-[calc(50%-12px)] flex flex-col gap-2 '>
                      <div className='font-bold'>Giảm</div>
                      <div className='relative'>
                          <input className='outline-none border border-solid rounded-[4px] p-2 w-full pr-[20px]' type='text' name='productname' placeholder='99.99' required></input>
                          <span className='absolute font-bold text-[20px] right-[20px] top-[50%] translate-y-[-50%]'>{saleType === 'init' ? `VND` : `%`}</span>
                      </div>
                  </div>
                  <div className='w-[calc(50%-12px)] flex flex-col gap-2 '>
                  <div className='font-bold'>Thời gian bắt đầu </div>
                  <DatePicker showTime needConfirm onChange={handleChangeStartDate} minDate={dayjs(new Date().toISOString().split('T')[0], dateFormat)} maxDate={dayjs(maxDate,dateFormat)}/>
                  </div>
                  <div className='w-[calc(50%-12px)] flex flex-col gap-2 '>
                  <div className='font-bold'>Thời gian kết thúc </div>
                  <DatePicker showTime needConfirm onChange={handleChangeEndDate} minDate={dayjs(minEndDate, dateFormat)}/>
                  </div>
              </div>
          </form>
        </div>
      </div>
      <Divider/>
     <div className="beauty_box_shadow p-[30px]">
     <div className='apply '>
        <h2 className='font-bold text-[20px] my-2'>Áp dụng cho</h2>
        <div>Chọn những sản phẩm áp dụng giảm giá này</div>
        <Button className="search bg-[#7460e4] font-bold text-white px-2 py-1 rounded-[4px] mt-2 block ml-auto" onClick={showModal}>Tìm kiếm</Button>
        <div className="apply_product">
            <Modal  open={isModalOpen} onOk={handleOk} onCancel={handleCancel} >
                <div className="p-6">
                    <div className="search_for_item relative">
                      <input type='text' placeholder='Tìm kiếm' className='pr-6 rounded-[6px] outline-none border border-solid w-full py-2 px-3'></input>
                      <div className='absolute right-[20px] top-[50%] translate-y-[-50%]'>
                        <icons.search></icons.search>
                      </div>
                    </div>
                    <div className='my-2 font-bold text-[18px]' >Áp dụng cho :</div>
                    <div className='flex flex-col gap-2'>
                        <div className='flex items-center'>
                          <label className='flex-none w-[5%]'>
                              <input
                                  type="checkbox"
                                  className="hidden input_checkbox"
                              ></input>
                              <div className="input_filter relative mr-2">
                                  <div className="absolute "></div>
                              </div>
                          </label>
                          <div className=' font-bold  w-[40%] flex items-center gap-2 pr-[20px]'>
                              <div className='w-8 h-8 flex-shrink-0'>
                                  <img src='https://cdn.pixabay.com/photo/2024/07/08/05/41/girl-8880144_640.png' className='w-full h-full object-cover'></img>
                              </div>
                              <div className='ellipsis_2_lines'>Apple iPhone 15 Plus 128GB Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores aperiam asperiores, voluptate modi temporibus libero impedit sunt praesentium deserunt quas excepturi a iste voluptates tempore id error harum officia quaerat!</div>
                          </div>
                          <div className='  flex-none w-[20%] '>
                              <span className='whitespace-nowrap  font-bold text-[#2bc38d] flex items-center gap-2 stock w-fit px-2 py-1  rounded-[99px]  '>
                                  <span className="dot w-2 h-2 rounded-[50%] bg-[#2bc38d] "></span>
                                  <span className='text-[12px]'>
                                      In Stock ( 35 )
                                  </span>
                              </span>
                          </div>
                          <div className='whitespace-nowrap  font-bold  flex-none w-[15%]'>27.790.000 đ</div>
                          <div className='whitespace-nowrap  font-bold  media-content flex justify-end items-start'>
                              Single
                          </div>
                        </div>
               
                    </div>
                </div>
             </Modal>
        </div>
      </div>
      <div>
      <div className='flex items-center  py-4 px-3 product'>          
                <div className=' font-bold  w-[50%] flex items-center gap-2 pr-[90px]'>
                    <div className='w-12 h-12 flex-shrink-0 mr-6'>
                        <img src='https://cdn.pixabay.com/photo/2024/07/08/05/41/girl-8880144_640.png' className='w-full h-full object-cover'></img>
                    </div>
                    <div className='ellipsis_2_lines'>Apple iPhone 15 Plus 128GB Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores aperiam asperiores, voluptate modi temporibus libero impedit sunt praesentium deserunt quas excepturi a iste voluptates tempore id error harum officia quaerat!</div>
                </div>
                <div className='  flex-none w-[15%]'>
                    <span className='whitespace-nowrap  font-bold text-[#2bc38d] flex items-center gap-2 stock w-fit px-2 py-1  rounded-[99px]'>
                        <span className="dot w-2 h-2 rounded-[50%] bg-[#2bc38d] "></span>
                        <span className='text-[12px]'>
                            In Stock ( 35 )
                        </span>
                    </span>
                </div>
                <div className='whitespace-nowrap  font-bold  flex-none w-[10%]'>27.790.000 đ</div>
                <div className='whitespace-nowrap  font-bold  media-content flex items-center  justify-end'>
                    <div className='flex items-center'>
                        <div className='text-[24px] cursor-pointer text-[#c73231] pr-3'>
                            <icons.close></icons.close>
                        </div>
                    </div>
                </div>
            </div>
      </div>
     </div>
    </div>
  )
}

export default ProductSaleCreate
