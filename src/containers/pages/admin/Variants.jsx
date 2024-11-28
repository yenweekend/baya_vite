import React from 'react'
import icons from '../../../utils/icons'
import { Select, Pagination } from 'antd'
import CouponCode from '../../components/CouponCode'
const Variants = () => {
    const onChange = (value) => {
        console.log(`selected ${value}`);
      };
    const handleChangeCategory = (value) => {
        console.log(`selected ${value}`);
      };
    const handleSearchCategory = (value) => {
        console.log(`search ${value}`)
    }
    const handleChangePagination = (page, pageSize) => {
        console.log(page); 
        console.log(pageSize); 
    }
  return (
    <div>
        <div className=' top_title mt-3 rounded-[4px] px-4 py-3 flex items-center justify-between mb-3'>
        <h1 className='text-[24px] font-bold uppercase'>
            Danh sách biến thể
        </h1>
        <div className='flex items-center gap-3' >
            <div className='flex items-center gap-2 cursor-pointer'>
                <div className='font-bold '>Dữ liệu mới nhất</div>
                <div className='text-[24px] font-bold'>
                    <icons.reload></icons.reload>
                </div>
            </div>
            <div className='font-bold text-[18px] px-4 py-2 border border-solid rounded-[4px]'>
                July 12, 2024 16:04 PM
            </div>
        </div>
        </div>
        <div className="flex items-center justify-between">
        <div className='flex items-center '>
            <div className='  hover:text-[#a2a3d1] cursor-pointer set'>
                <span>Tất cả sản phẩm</span>
                <span>( 19 )</span>
            </div>
            <div className=' hover:text-[#a2a3d1] cursor-pointer set'>
                <span>Hiển thị</span>
                <span>( 19 )</span>
            </div>
            <div className=' hover:text-[#a2a3d1] cursor-pointer set'>
                <span>Nháp </span>
                <span>( 0 )</span>
            </div>
            <div className=' hover:text-[#a2a3d1] cursor-pointer set'>
                <span>Thùng rác</span>
                <span>( 0 )</span>
            </div>
        </div>
        <div  className='flex items-center bg-[#5760fb] rounded-[8px] px-3 py-2 gap-2 cursor-pointer'>
            <div className='text-white'>
                <icons.plus ></icons.plus>
            </div>
            <span className='text-white font-semibold'>Thêm mới</span>
        </div>
        </div>
        <div className='flex items-center justify-between'>
        <div className=''>
            <span className='font-bold mr-2'>Chức năng: </span>
            <button type='button' className='text-[#c73231] font-semibold'>Thêm vào thùng rác (0)</button>
        </div>
        <div className='flex items-center gap-3 filter_otp mt-3'>
            <div>
            <Select
            style={{
                width: 200,
              }}
            showSearch
            placeholder="Lọc theo"
            optionFilterProp="label"
            onChange={onChange}
            options={[
            {
                value: 'jack',
                label: 'Jack',
            },
            {
                value: 'lucy',
                label: 'Lucy',
            },
            {
                value: 'tom',
                label: 'Tom',
            },
            ]}
  />
            </div>
         
            <div>
                <div className='flex items-center relative border border-solid rounded-[4px] h-[35px] pl-[20px] pr-[10px]'>
                    <input type="text" placeholder='Tìm kiếm...' className='outline-none  ' />
                    <div className='absolute right-[10px]'>
                        <icons.search></icons.search>   
                    </div>
                </div>
            </div>
        </div>       
      </div>
        <div className='sheets mt-3  border border-solid rounded-[6px]'>
            <div className='flex items-center bg-[#ebebeb] py-2 px-3'>
                <label className='flex-none w-[5%]'>
                    <input
                        type="checkbox"
                        className="hidden input_checkbox"
                    ></input>
                    <div className="input_filter relative mr-2">
                        <div className="absolute "></div>
                    </div>
                </label>
                <div className='whitespace-nowrap uppercase font-bold  w-[35%]'>Tên khuyễn mãi</div>
                <div className='whitespace-nowrap uppercase font-bold  flex-none w-[18%]'>mã khuyến mãi</div>
                <div className='whitespace-nowrap uppercase font-bold  flex-none w-[12%]'>Đã sử dụng</div>
                <div className='whitespace-nowrap uppercase font-bold   flex-none w-[10%]'>Giá trị</div>
                <div className='whitespace-nowrap uppercase font-bold  media-content'>Trạng thái</div>
            </div>
            <div className='flex items-center  py-3 px-3 '>
                <label className='flex-none w-[5%]'>
                    <input
                        type="checkbox"
                        className="hidden input_checkbox"
                    ></input>
                    <div className="input_filter relative mr-2">
                        <div className="absolute "></div>
                    </div>
                </label>
                <div className=' font-bold  w-[35%] flex items-center gap-2 pr-[90px]'>
                    <div className="ellipsis_2_lines ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo culpa dolorem in placeat ab vitae cupiditate odit aut eaque maxime? Id sapiente accusamus consequatur error illum, eos nemo incidunt quo!</div>
                </div>
                <div className='  flex-none w-[18%]'>
                    <CouponCode code="SALE2024" /> 
                </div>
                <div className='whitespace-nowrap  font-bold  flex-none w-[12%] '>56</div>
                <div className='whitespace-nowrap  font-bold   flex-none w-[10%]'>-22.000đ</div>
                <div className='whitespace-nowrap  font-bold  media-content flex items-center justify-between'>
                    <span className='whitespace-nowrap  font-bold text-[#2bc38d] flex items-center gap-2 stock w-fit px-2 py-1  rounded-[99px] bg-[rgb(43,195,141,0.4)]'>
                            <span className="dot w-2 h-2 rounded-[50%] bg-[#2bc38d] "></span>
                            <span className='text-[12px] font-bold'>
                                Đang hoạt động
                            </span>
                    </span>
                    <div className='flex items-center'>
                        <div className='text-[24px] cursor-pointer text-[#9fa4b1] pr-3'>
                            <icons.update></icons.update>
                        </div>
                        <div className='devide w-[1.4px] h-[20px] bg-[#d6d6d6]'></div>
                        <div className='text-[24px] cursor-pointer text-[#9fa4b1] pl-3'>
                            <icons.bin></icons.bin>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex items-center  py-3 px-3 '>
                <label className='flex-none w-[5%]'>
                    <input
                        type="checkbox"
                        className="hidden input_checkbox"
                    ></input>
                    <div className="input_filter relative mr-2">
                        <div className="absolute "></div>
                    </div>
                </label>
                <div className=' font-bold  w-[35%] flex items-center gap-2 pr-[90px]'>
                    <div className="ellipsis_2_lines ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo culpa dolorem in placeat ab vitae cupiditate odit aut eaque maxime? Id sapiente accusamus consequatur error illum, eos nemo incidunt quo!</div>
                </div>
                <div className='  flex-none w-[18%]'>
                <CouponCode code="OFFPEAK2024" />
                </div>
                <div className='whitespace-nowrap  font-bold  flex-none w-[12%]'>56</div>
                <div className='whitespace-nowrap  font-bold   flex-none w-[10%]'>-22.000đ</div>
                <div className='whitespace-nowrap  font-bold  media-content flex items-center justify-between'>
                    <span className='whitespace-nowrap  font-bold text-[#c73231] flex items-center gap-2 stock w-fit px-2 py-1  rounded-[99px] bg-[rgb(199,50,49,0.4)]'>
                            <span className="dot w-2 h-2 rounded-[50%] bg-[#c73231] "></span>
                            <span className='text-[12px] font-bold'>
                                Hết hạn
                            </span>
                    </span>
                    <div className='flex items-center'>
                        <div className='text-[24px] cursor-pointer text-[#9fa4b1] pr-3'>
                            <icons.update></icons.update>
                        </div>
                        <div className='devide w-[1.4px] h-[20px] bg-[#d6d6d6]'></div>
                        <div className='text-[24px] cursor-pointer text-[#9fa4b1] pl-3'>
                            <icons.bin></icons.bin>
                        </div>
                    </div>
                </div>
            </div>
           
        </div>
        <div className='pagination mt-4  w-[100%] flex  justify-end'>
            <Pagination  total={20} defaultPageSize={3}  onChange={handleChangePagination} defaultCurrent={1}
            showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} sản phẩm`}
            showSizeChanger
            pageSizeOptions={[3,5,10,15]}
            />         
        </div>
        <div className="flex items-center justify-between mt-5 px-4 py-2 footer">
            <div className="policy flex items-center gap-3">
                <span>Các điều khoản và điều kiện</span>
                <span>Chính sách bảo mật</span>
                <span>Hỗ trợ</span>
            </div>
            <div className="contact flex items-center gap-2">
                <div><icons.fb></icons.fb></div>
                <div><icons.github></icons.github></div>
            </div>
        </div>
    </div>
    
  )
}
export default Variants
