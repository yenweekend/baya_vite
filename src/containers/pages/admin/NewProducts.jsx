import React, { useState, useRef, useEffect, useCallback } from 'react'
import styled from 'styled-components'
import icons from '../../../utils/icons'
import Tree from 'antd/es/tree/Tree';
import { Select, Radio,Image, Upload, Button, Divider,Input,Space,Tag} from 'antd';
import {CkEditor} from "../../components/";
import { useDispatch, useSelector } from 'react-redux';
import {  variantSelector } from '../../../redux-toolkit/selector/variant.selector';
import { addVariant, removeVariantForProduct, updateVariantForProduct } from '../../../redux-toolkit/slice/variantSlice';
const treeData = [
  {
    title: 'Linh kiện  máy tính',
    key: '1',
    children: [
      {
        title: 'ram',
        key: '3',
      },
      {
        title: 'rom',
        key: '4',
       
      },
      {
        title: 'parent 1-2',
        key: '0-0-2',
        children: [
          {
            title: 'leaf',
            key: '0-0-2-0',
          },
          {
            title: 'leaf',
            key: '0-0-2-1',
          },
        ],
      },
    ],
  },
  {
    title: 'Chăm sóc sức khỏe',
    key: '11',
    children: [
      {
        title: 'sản phẩm chức năng',
        key: '111',
      },
      {
        title: 'khẩu trang',
        key: '112',
       
      },
      {
        title: 'dầu gội',
        key: '7',
        children: [
          {
            title: 'dầu dưỡng',
            key: '0-0',
          },
          {
            title: 'sữa tắm',
            key: '2-1',
          },
        ],
      },
    ],
  },

];
const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
const tagRender = (props) => {
  const { label, value, closable, onClose } = props;
  const onPreventMouseDown = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };
  return (
    <Tag
      color={value}
      onMouseDown={onPreventMouseDown}
      closable={closable}
      onClose={onClose}
      style={{
        marginInlineEnd: 4,
      }}
    >
      {label}
    </Tag>
  );
};
const NewProducts = () => {
  const dispatch  = useDispatch();
  const variant = useSelector(variantSelector);
  // const vr = useSelector(variantMainSelector);
  const [variantNames, setVariantNames] = useState([
    {
      value: 'size',
      id: 1
    },
    {
      value: 'màu',
      id: 2
    },
    {
      value:'mùi hương',
      id: 3
    },
  ])
  const [variantName, setVariantName] = useState(null);
  const [variantValues, setVariantValues] = useState([]);
  const [variantValue,setVariantValue] = useState(null);
  const [defaultVariantValue, setDefaultVariantValue] = useState([]);
  const [defaultVariantName, setDefaultVariantName] = useState();
  const inputVariantNameRef = useRef(null);
  const inputVariantValueRef = useRef(null);
  const onChangeVariantName = (event) => {
    setVariantName(event.target.value);
  };
  const addNameVariant = (e) => {
    e.preventDefault();
    setVariantNames([...variantNames, {value : variantName || `New item`, id: Math.random()}]);
    setVariantName('');
    setTimeout(() => {
      inputVariantNameRef.current?.focus();
    }, 0);
  };
  const onChangeVariantValue = (event) => {
    setVariantValue(event.target.value);
  };
  const addValueVariant = (e) => {
    e.preventDefault();
    setVariantValues([...variantValues, {value : variantValue || `New item `}]);
    setVariantValue('');
    setTimeout(() => {
      inputVariantValueRef.current?.focus();
    }, 0);
  };
  // image upload
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [fileList, setFileList] = useState([]);
  const [formData, setFormData] = useState({
    productname: "",
    price: "",
    origin: ""
  });
  const [error, setError] = useState({
    productname:"",
    price: "",
    origin:""
  })
  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
  };
  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);
  const uploadButton = (
    <button
      style={{
        border: 0,
        background: 'none',
      }}
      type="button"
    >
      <icons.image/>
      <div
        style={{
          marginTop: 8,
        }}
      >
        Tải ảnh
      </div>
    </button>
  );
  const [type, setType] = useState('single');
  const onSelect = (selectedKeys, info) => {
    console.log('selected', selectedKeys, info);
  };
  const handleChangeRadio = (e) => {
    setType(e.target.value);
  };
  const handleSaveVariant = useCallback(() => {
    const flag = variant.find((item) => item.value === defaultVariantName.value);
    if(flag != null)
    {
      const data = defaultVariantValue.filter((item)=> {
        return flag.attr_values.every((e) => e.value !== item.value);
      })
      // dispatch(updateVariantForProduct({...defaultVariantName, attr_values: [...flag.attr_values, ...data]}))
      dispatch(updateVariantForProduct({attr_id: flag.value, attr_values: data}))
      return;
    }
    dispatch(addVariant({...defaultVariantName, attr_values: defaultVariantValue}))
    setDefaultVariantName(null)
    setDefaultVariantValue([])
  },[defaultVariantName, defaultVariantValue]);
  const handleSaveNewProduct =useCallback( () => {
    const objKeys = Object.keys(formData);
    let newErrors = {}; // Temporary object to store errors
    objKeys.forEach((value) => {
      if (formData[value].length === 0) {
        newErrors[value] = `Vui lòng điền vào trường ${value}`;
      } else {
        newErrors[value] = ""; // Clear any previous error for this field
      }
    });
  setError(newErrors); 
  },[formData]);
  const handleInputProduct = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
useEffect(()=>{
console.log(error)
},[error])
  return (
    <NewProductsStyled>
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
          <button type='button' className=' rounded-[4px]  flex items-center gap-2 text-white px-3 py-2 cursor-pointer bg-[#2bc38d]' onClick={handleSaveNewProduct}>
            <icons.savetmp className='text-[20px]'></icons.savetmp>
            <span className=' '>Lưu và hiển thị</span>
          </button>
        </div>
      </div>
        <div className='flex mt-3 gap-3'>
          <div className='flex-none w-[65%] form px-3 py-3'>
            <div className='mb-3 font-bold'>Tổng quan</div>
            <form>
              <div className='flex items-center flex-wrap gap-[24px]'>
                <div className='w-[100%] flex flex-col gap-2 '>
                  <div className='font-bold'>Tên sản phẩm</div>
                  <input className='outline-none border border-solid rounded-[4px] p-2' type='text' name='productname' placeholder='Tên sản phẩm' onChange={handleInputProduct} required></input>
                  <span className='text-red-600'>
                  {
                    error.productname.length > 0 &&  error.productname
                  }
                  </span>
                </div>
                <div className='w-[calc(50%-12px)] flex flex-col gap-2'>
                  <div className='font-bold'>Giá sản phẩm</div>
                  <input className='outline-none border border-solid rounded-[4px] p-2' type='text' name='price' placeholder='Giá sản phẩm' onChange={handleInputProduct} required></input>
                   <span className='text-red-600'>
                  {
                    error.price.length > 0 &&  error.price
                  }

                  </span>
                </div>
                <div className='w-[calc(50%-12px)] flex flex-col gap-2'>
                  <div className='font-bold'>Nguồn gốc</div>
                  <input className='outline-none border border-solid rounded-[4px] p-2' type='text' name='origin' placeholder='Nguồn gốc' onChange={handleInputProduct} required></input>
                   <span className='text-red-600'>
                  {
                    error.origin.length > 0 &&  error.origin
                  }

                  </span>
                </div>
              </div>
              <div>
              <div className='font-bold mt-3 mb-2  ml-2'>Hình ảnh</div>
              <>
                <Upload
                  action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
                  listType="picture-card"
                  fileList={fileList}
                  onPreview={handlePreview}
                  onChange={handleChange}
                  multiple={true}
                >
                  {fileList.length >= 8 ? null : uploadButton}
                </Upload>
                {previewImage && (
                  <Image
                    wrapperStyle={{
                      display: 'none',
                    }}
                    preview={{
                      visible: previewOpen,
                      onVisibleChange: (visible) => setPreviewOpen(visible),
                      afterOpenChange: (visible) => !visible && setPreviewImage(''),
                    }}
                    src={previewImage}
                  />
                )}
              </>
            </div>
              <div>
                <div className='font-bold my-2'>Chi tiết sản phẩm</div>
                <CkEditor
                  
                />
              </div>
            </form>
          </div>
          <div className='flex-auto px-3 category pb-3'>
            <div className='pb-3'>
              <div className='max-h-[400px] overflow-y-auto scrollbar_category'>
                <div className='mt-2 font-bold'>Chọn danh mục</div>
              <Tree
              style={{
                paddingRight: '20'
              }}
              defaultExpandedKeys={['0-0-0']}
              onSelect={onSelect}
              treeData={treeData}
              switcherIcon={<icons.arrowdown />}
            />
              </div>
            </div>
            <Select
              showSearch
              style={{
                width: '100%',
                height: '40px',
                }}
              placeholder="Thương hiệu"
              optionFilterProp="label"
              filterSort={(optionA, optionB) =>
                (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
              }
              options={[
                {
                  value: '1',
                  label: 'Not Identified',
                },
                {
                  value: '2',
                  label: 'Closed',
                },
                {
                  value: '3',
                  label: 'Communicated',
                },
                {
                  value: '4',
                  label: 'Identified',
                },
                {
                  value: '5',
                  label: 'Resolved',
                },
                {
                  value: '6',
                  label: 'Cancelled',
                },
              ]}
            />
            <div className=" mt-5">
              <div className='mb-2 font-bold'>Loại sản phẩm</div>
              <Radio.Group  className='flex flex-col gap-[6px] pl-4' value={type} onChange={handleChangeRadio}>
                        <Radio value={'single'}>  <div>Sản phẩm đơn</div></Radio>
                        <Radio value={'variant'}><div > Sản phẩm có biến thể </div></Radio>
               </Radio.Group>   
            </div>
            {
              type === 'variant' && (<div className="create-variant mt-3">
                <div className="title font-bold">Biến thể</div>
                <ul>
                  {
                    variant?.map((item) => (
                      <li className='flex items-center gap-3 mb-2 justify-between'>
                        <div className='font-bold mr-3'>{item.label} :</div>
                        <div className='flex items-center flex-wrap gap-2'>
                          {
                            item.attr_values?.map((e) => (
                            <div className='border border-solid px-2 py-1 rounded-[4px] relative' >
                              {e.label}
                              <div className='absolute right-[-8px] top-[-8px] w-[14px] h-[14px] bg-[#c73231] rounded-[50%] text-white text-[16px] flex items-center justify-center cursor-pointer'
                              onClick={() => {
                                dispatch(removeVariantForProduct({attr_id: item.value, attr_value_id : e.value}))
                              }}
                              >
                                <icons.close></icons.close>
                              </div>
                            </div>
                            ))
                          }
                        </div>
                      </li>
                    ))
                  } 
                </ul>
                <ul>
                  <li>
                    <div className='flex items-center gap-[10px]'>
                      <div className="variant w-[calc(40%_-_5px)]">
                        <div  className="mb-2 font-bold ml-2">Tên</div>
                        <div className=''>
                        <Select
                          style={{
                            width: '100%',
                          }}
                          placeholder="tên biến thể"
                          dropdownRender={(menu) => (
                            <>
                              {menu}
                              <Divider
                                style={{
                                  margin: '8px 0',
                                }}
                              />
                              <Space
                                style={{
                                  padding: '0 8px 4px',
                                }}
                              >
                                <Input
                                  style={{
                                    // width: '200px'
                                  }}
                                  placeholder="tên mới"
                                  ref={inputVariantNameRef}
                                  value={variantName}
                                  onChange={onChangeVariantName}
                                  onKeyDown={(e) => e.stopPropagation()}
                                />
                                <Button type="text" icon={<icons.plus />} onClick={addNameVariant}>
                                  Thêm
                                </Button>
                              </Space>
                            </>
                          )}
                          options={variantNames.map((item) => ({
                            label: item.value,
                            value: item.id,
                          }))}
                          onChange={(val, lab) => {
                            const {value, label} = lab
                            setDefaultVariantName( {value, label} )
                            setDefaultVariantValue([]);
                              if(val === 1)
                              {
                                setVariantValues([
                                  {
                                  value: 'xl'
                                  },
                                  {
                                  value: 'xxl'
                                  },
                                  {
                                  value: 'l'
                                  },
                              ])
                              } else if(val === 2)
                              {
                                setVariantValues([
                                  {
                                  value: '#000'
                                  },
                                  {
                                  value: 'blue'
                                  },
                                  {
                                  value: 'red'
                                  },
                              ])
                              } else if(val === 3)
                              {
                                setVariantValues([
                                  {
                                  value: 'bưởi'
                                  },
                                  {
                                  value: 'táo'
                                  },
                                  {
                                  value: 'bạc hà'
                                  },
                              ])
                              }
                          }}
                          value={defaultVariantName?.label}
                        />
                        </div>
                      </div>
                      <div className="variant_value w-[calc(60%_-_5px)]">
                        <div  className="mb-2 font-bold ml-2">Giá trị</div>
                        <div className=''>
                        <Select
                          mode="multiple"
                          // tagRender={tagRender}
                          style={{
                            width: '100%',
                          }}
                          dropdownRender={(menu) => (
                            variantValues?.length > 0 && 
                            <>
                              {menu}
                              <Divider
                                style={{
                                  margin: '8px 0',
                                }}
                              />
                              <Space
                                style={{
                                  padding: '0 8px 4px',
                                }}
                              >
                                <Input
                                  style={{
                                    // width: '200px'
                                  }}
                                  placeholder="tên mới"
                                  ref={inputVariantValueRef}
                                  value={variantValue}
                                  onChange={onChangeVariantValue}
                                  onKeyDown={(e) => e.stopPropagation()}
                                />
                                <Button type="text" icon={<icons.plus />} onClick={addValueVariant}>
                                  Thêm
                                </Button>
                              </Space>
                            </>
                          )}
                          options={variantValues.map((item, index) => ({
                            label: item.value,
                            value: index
                          }))}
                          onChange={(val, lab) => {
                            const data = lab?.map((item) => {
                              return {label: item.label, value: item.value};
                            })
                            setDefaultVariantValue(data)
                          }}
                          value={defaultVariantValue}
                        />
                        </div>
                      </div>
                    </div>
                    <span className='text-[#c80036] cursor-pointer underline ml-2' onClick={handleSaveVariant}>Lưu biến thể</span>
                  </li>
                </ul>
              </div>)
            }
          </div>
          <div>    
          </div>
        </div>
    </NewProductsStyled>
  )
}
const NewProductsStyled = styled.div`
.category,.form{
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  border-radius: 4px;
  .scrollbar_category::-webkit-scrollbar-track {
  width:3px;
  border-radius: 10px;
  background-color: #f5f5f5;
}

.scrollbar_category::-webkit-scrollbar {
  width:3px;
  background-color: #f5f5f5;
}

.scrollbar_category::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: #7460e4;
}
}

`
export default NewProducts
