import React from 'react'
import styled from 'styled-components'
import icons from '../../../utils/icons'
import { Select, Pagination } from 'antd'
const Product = () => {
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

    <ProductStyled >
      <div className=' top_title mt-3 rounded-[4px] px-4 py-3 flex items-center justify-between mb-3'>
        <h1 className='text-[24px] font-bold uppercase'>
            Danh sách sản phẩm 
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
            <Select
            style={{
                width: 200,
              }}
            showSearch
            placeholder="Chọn danh mục"
            optionFilterProp="label"
            onChange={handleChangeCategory}
            onSearch={handleSearchCategory}
            options={[
            {
                value: '1',
                label: 'Màu',
            },
            {
                value: '2',
                label: 'Size',
            },
            {
                value: '3',
                label: 'Dung tích',
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
                <div className='whitespace-nowrap uppercase font-bold  w-[35%]'>Tên sản phẩm</div>
                <div className='whitespace-nowrap uppercase font-bold  flex-none w-[15%]'>Giá cố định</div>
                <div className='whitespace-nowrap uppercase font-bold  flex-none w-[10%]'>Giá khuyến mại</div>
                <div className='whitespace-nowrap uppercase font-bold   flex-none w-[10%]'>Giá bán</div>
                <div className='whitespace-nowrap uppercase font-bold  media-content'>Trạng thái</div>
            </div>
            <div className='flex items-center  py-4 px-3 product'>
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
                    <div className='w-8 h-8 flex-shrink-0'>
                        <img src='https://cdn.pixabay.com/photo/2024/07/08/05/41/girl-8880144_640.png' className='w-full h-full object-cover'></img>
                    </div>
                    <div className='ellipsis_2_lines'>Apple iPhone 15 Plus 128GB Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores aperiam asperiores, voluptate modi temporibus libero impedit sunt praesentium deserunt quas excepturi a iste voluptates tempore id error harum officia quaerat!</div>
                </div>
                <div className='  flex-none w-[15%]'>
                   20.000đ
                </div>
                <div className='whitespace-nowrap  font-bold  flex-none w-[10%]'>27.790.000 đ</div>
                <div className='whitespace-nowrap  font-bold   flex-none w-[10%]'>30đ</div>
                <div className='whitespace-nowrap  font-bold  media-content flex items-center justify-between'>
                    <div>
                        <span className='whitespace-nowrap  font-bold text-[#c73231] flex items-center gap-2  w-fit px-2 py-1  rounded-[99px] state'>
                            <span className="dot w-2 h-2 rounded-[50%] bg-[#c73231] "></span>
                            <span className='text-[14px]  font-bold '>
                                Hết hạn
                            </span>
                        </span>
                    </div>
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
    </ProductStyled>
  )
}
const ProductStyled = styled.div`
.state{
    background-color: rgb(199, 50, 49,0.4);
}
.sheets{
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}

.top_title {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
}
.footer{
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    background-color: #fff;
}
.set{
    padding: 0 12px 4px;
    position: relative;
    border-bottom: 2px solid transparent;
}
.set:hover{
    border-bottom: 2px solid currentColor;

}
.set::before{
   content: "";
   position: absolute;
   width: 100%;
   height: 1.4px;
   background: #000;
   bottom: -4px;
   left: 0;
   opacity: 0;
   visibility: 0;
}
.media-content{
    flex: 1 1 auto;
    text-align: left;
    align-self: center;
    width: 0;
}
.product:not(:last-child)
{
    border-bottom: 1px solid #d6d6d6;
}


`
export default Product
