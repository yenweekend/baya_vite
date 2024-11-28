import React ,{useState} from 'react'
import CouponCode from "../../../components/CouponCode"
import { Button, Modal } from 'antd';
import icons from '../../../../utils/icons';
const DiscountEdit = () => {
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
  return (
    <div className='flex mt-4 gap-3 mr-[20px] items-start'>
      <div className="flex_70  beauty_box_shadow p-[20px]">
        <div className="font-bold text-[20px]">Thông tin mã giảm giá</div>
        <form className="form">
            <div className='flex flex-wrap gap-[24px] '>
                <div className="flex w-[100%] flex-col gap-2">
                    <div className="font-bold">Tiêu đề giảm giá</div>
                    <input type='text' placeholder='Tiêu đề' className='outline-none border-solid border rounded-[4px] px-3 py-2'/>
                </div>
                <div className="flex w-[100%] flex-col gap-2 ">
                    <div className="font-bold">Mã giảm giá</div>
                    <div className="flex items-center w-full gap-2">
                        <input type='text' placeholder='Tiêu đề' className='outline-none border-solid border rounded-[4px] px-3 py-2   w-full inline-block '/>
                        <button className="whitespace-nowrap right-[30px] bg-[#7460e4] rounded-[8px] text-white px-4 py-2" type='button'>Tạo mã ngẫu nhiên</button>
                    </div>
                </div>
                <div className="flex w-[100%] flex-col gap-2 ">
                    <div className="font-bold">Mô tả</div>
                    <input type='text' placeholder='Mô tả' className='outline-none border-solid border rounded-[4px] px-3 py-2   '/>
                </div>
                <div className="flex w-[calc((100%/3)-24px)]  flex-col gap-2 ">
                    <div className="font-bold">Loại giảm giá</div>
                    <input type='text' placeholder='Loại giảm giá' className='outline-none border-solid border rounded-[4px] px-3 py-2 '/>
                </div>
                <div className="flex w-[calc((100%/3)-24px)]  flex-col gap-2 ">
                    <div className="font-bold">Phương thức giảm giá</div>
                    <input type='text' placeholder='Phương thức' className='outline-none border-solid border rounded-[4px] px-3 py-2 '/>
                </div>
                <div className="flex w-[calc((100%/3)-24px)]  flex-col gap-2 ">
                    <div className="font-bold">Giảm</div>
                    <input type='text' placeholder='Phương thức' className='outline-none border-solid border rounded-[4px] px-3 py-2 '/>
                </div>
                <div className="flex w-[calc((100%/3)-24px)]  flex-col gap-2 ">
                    <div className="font-bold">Sô lượng</div>
                    <input type='text' placeholder='số lượng' className='outline-none border-solid border rounded-[4px] px-3 py-2 ' value={100}/>
                </div>
                <div className="flex w-[calc((100%/3)-24px)]  flex-col gap-2 ">
                    <div className="font-bold">Sử dụng tối đa</div>
                    <input type='text' placeholder='tối đa' className='outline-none border-solid border rounded-[4px] px-3 py-2 ' value={10}/>
                </div>
                <div className="flex w-[calc((100%/3)-24px)]  flex-col gap-2 ">
                    <div className="font-bold">Số tiền tối thiểu</div>
                    <input type='text' placeholder='số tiền tối thiểu' className='outline-none border-solid border rounded-[4px] px-3 py-2 ' value={2000}/>
                </div>
            </div>
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
            <button className="whitespace-nowrap right-[30px] bg-[#7460e4] rounded-[8px] text-white px-4 py-2" type='button'>Lưu lại</button>
        </form>
      </div>
      <div className="flex_30 beauty_box_shadow p-[20px]">
        <div className="font-bold text-[20px]">Tóm tắt mã</div>
        <div className='flex justify-end'>
          <CouponCode code={'abcd#gg'}/>
        </div>
        <div className='font-bold text-[16px]'>Loại và phương thức</div>
        <ul className="list flex flex-col gap-2">
          <li className="flex items-center justify-between">
            <span className=' font-semibold'>tên :</span>
            <span className=' font-semibold'>value</span>
          </li>
          <li className="flex items-center justify-between">
            <span className=' font-semibold'>Ngày bắt đầu :</span>
            <span className=' font-semibold'>value</span>
          </li>
          <li className="flex items-center justify-between">
            <span className=' font-semibold'>Ngày kết thúc :</span>
            <span className=' font-semibold'>value</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default DiscountEdit
