import React, { useState, useRef, useEffect, useCallback } from "react";
import styled from "styled-components";
import Tree from "antd/es/tree/Tree";
import {
  Select,
  Radio,
  Image,
  Upload,
  Button,
  Divider,
  Input,
  Space,
  Tag,
} from "antd";
import { CkEditor } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { variantSelector } from "../../redux-toolkit/selector/variant.selector";
import {
  addVariant,
  removeVariantForProduct,
  updateVariantForProduct,
} from "../../redux-toolkit/slice/variantSlice";
const treeData = [
  {
    title: "Linh kiện  máy tính",
    key: "1",
    children: [
      {
        title: "ram",
        key: "3",
      },
      {
        title: "rom",
        key: "4",
      },
      {
        title: "parent 1-2",
        key: "0-0-2",
        children: [
          {
            title: "leaf",
            key: "0-0-2-0",
          },
          {
            title: "leaf",
            key: "0-0-2-1",
          },
        ],
      },
    ],
  },
  {
    title: "Chăm sóc sức khỏe",
    key: "11",
    children: [
      {
        title: "sản phẩm chức năng",
        key: "111",
      },
      {
        title: "khẩu trang",
        key: "112",
      },
      {
        title: "dầu gội",
        key: "7",
        children: [
          {
            title: "dầu dưỡng",
            key: "0-0",
          },
          {
            title: "sữa tắm",
            key: "2-1",
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
  const dispatch = useDispatch();
  const variant = useSelector(variantSelector);
  // const vr = useSelector(variantMainSelector);
  const [variantNames, setVariantNames] = useState([
    {
      value: "size",
      id: 1,
    },
    {
      value: "màu",
      id: 2,
    },
    {
      value: "mùi hương",
      id: 3,
    },
  ]);
  const [variantName, setVariantName] = useState(null);
  const [variantValues, setVariantValues] = useState([]);
  const [variantValue, setVariantValue] = useState(null);
  const [defaultVariantValue, setDefaultVariantValue] = useState([]);
  const [defaultVariantName, setDefaultVariantName] = useState();
  const inputVariantNameRef = useRef(null);
  const inputVariantValueRef = useRef(null);
  const onChangeVariantName = (event) => {
    setVariantName(event.target.value);
  };
  const addNameVariant = (e) => {
    e.preventDefault();
    setVariantNames([
      ...variantNames,
      { value: variantName || `New item`, id: Math.random() },
    ]);
    setVariantName("");
    setTimeout(() => {
      inputVariantNameRef.current?.focus();
    }, 0);
  };
  const onChangeVariantValue = (event) => {
    setVariantValue(event.target.value);
  };
  const addValueVariant = (e) => {
    e.preventDefault();
    setVariantValues([
      ...variantValues,
      { value: variantValue || `New item ` },
    ]);
    setVariantValue("");
    setTimeout(() => {
      inputVariantValueRef.current?.focus();
    }, 0);
  };
  // image upload
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [fileList, setFileList] = useState([]);
  const [formData, setFormData] = useState({
    productname: "",
    price: "",
    origin: "",
  });
  const [error, setError] = useState({
    productname: "",
    price: "",
    origin: "",
  });
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
        background: "none",
      }}
      type="button"
    >
      <div
        style={{
          marginTop: 8,
        }}
      >
        Tải ảnh
      </div>
    </button>
  );
  const [type, setType] = useState("single");
  const onSelect = (selectedKeys, info) => {
    console.log("selected", selectedKeys, info);
  };
  const handleChangeRadio = (e) => {
    setType(e.target.value);
  };
  const handleSaveVariant = useCallback(() => {
    const flag = variant.find(
      (item) => item.value === defaultVariantName.value
    );
    if (flag != null) {
      const data = defaultVariantValue.filter((item) => {
        return flag.attr_values.every((e) => e.value !== item.value);
      });
      // dispatch(updateVariantForProduct({...defaultVariantName, attr_values: [...flag.attr_values, ...data]}))
      dispatch(
        updateVariantForProduct({ attr_id: flag.value, attr_values: data })
      );
      return;
    }
    dispatch(
      addVariant({ ...defaultVariantName, attr_values: defaultVariantValue })
    );
    setDefaultVariantName(null);
    setDefaultVariantValue([]);
  }, [defaultVariantName, defaultVariantValue]);
  const handleSaveNewProduct = useCallback(() => {
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
  }, [formData]);
  const handleInputProduct = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <NewProductsStyled>
      <div className="flex items-center justify-between mt-3">
        <div className="flex items-center gap-2">
          <span>Quay lại</span>
        </div>
      </div>
      <div className="flex mt-3 gap-3">
        <div className="flex-none w-full form px-3 py-3">
          <div className="mb-3 font-bold">Tổng quan</div>
          <form>
            {/* <div className='flex items-center flex-wrap gap-[24px]'>
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
            </div> */}
            <div>
              <div className="font-bold my-2">Chi tiết sản phẩm</div>
              <CkEditor />
            </div>
          </form>
        </div>
      </div>
    </NewProductsStyled>
  );
};
const NewProductsStyled = styled.div`
  .category,
  .form {
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
      rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    border-radius: 4px;
    .scrollbar_category::-webkit-scrollbar-track {
      width: 3px;
      border-radius: 10px;
      background-color: #f5f5f5;
    }

    .scrollbar_category::-webkit-scrollbar {
      width: 3px;
      background-color: #f5f5f5;
    }

    .scrollbar_category::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background-color: #7460e4;
    }
  }
`;
export default NewProducts;
