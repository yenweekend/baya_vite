import React from "react";
import { Link, Outlet } from "react-router-dom";

import styled, { keyframes } from "styled-components";
import { LazyLoadImage } from "react-lazy-load-image-component";
import icons from "../../../utils/icons";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";

const menuitems = [
  {
    key: "1",
    icon: <icons.chart />,
    label: "Thống kê ",
    link: "/home",
  },
  {
    key: "sub1",
    icon: <icons.productcart />,
    label: "Sản phẩm",
    children: [
      {
        key: "sub1_1",
        label: "Tất cả sản phẩm",
        icon: <icons.plane />,
        link: "/child1",
      },
      {
        key: "sub1_2",
        label: "Thêm mới sản phẩm",
        icon: <icons.plane />,
        link: "/child2",
      },
      {
        key: "sub1_3",
        label: "Giảm giá sản phẩm",
        icon: <icons.plane />,
        link: "/child2",
      },
      {
        key: "sub1_4",
        label: "Danh sách biển thể",
        icon: <icons.plane />,
        link: "/child2",
      },
    ],
  },
  {
    key: "sub2",
    icon: <icons.tag />,
    label: "Khuyến mại",
    children: [
      {
        key: "sub2_1",
        label: "Tất cả khuyến mại",
        icon: <icons.plane />,

        link: "",
      },
      {
        key: "sub2_2",
        label: "Tạo mã giảm giá",
        icon: <icons.plane />,

        link: "",
      },
    ],
  },
  {
    key: "sub4",
    label: "Quản lý kho hàng",
    icon: <icons.manage />,
    children: [
      {
        key: "sub4_1",
        label: "Thống kê hàng tồn kho",
        icon: <icons.plane />,

        link: "/child1",
      },
      {
        key: "sub4_2",
        label: "Lịch sử nhập hàng",
        icon: <icons.plane />,

        link: "/child1",
      },
      {
        key: "sub4_3",
        label: "Lịch sử xuất hàng",
        icon: <icons.plane />,

        link: "/child1",
      },
      {
        key: "sub4_4",
        label: "Nhập thêm hàng",
        icon: <icons.plane />,

        link: "/child1",
      },
    ],
  },
  {
    key: "sub5",
    icon: <icons.customer />,
    label: "Khách hàng",
    children: [
      {
        key: "sub5_1",
        label: "Khách hàng đăng ký",
        icon: <icons.plane />,

        link: "",
      },
      {
        key: "sub5_2",
        label: "Hỗ trợ",
        icon: <icons.plane />,

        link: "",
      },
    ],
  },
  {
    key: "sub6",
    icon: <icons.shipping />,
    label: "Đơn hàng",
    children: [
      {
        key: "sub6_1",
        label: "Tất cả đơn hàng",
        icon: <icons.plane />,

        link: "",
      },
    ],
  },
];
const setitems = [
  {
    key: "set1",
    icon: <icons.support />,
    label: "Hỗ trợ ",
    link: "/home",
  },
  {
    key: "set2",
    icon: <icons.setting />,
    label: "Cài đặt",
    link: "/home",
  },
];
const Master = () => {
  const navigate = useNavigate();
  return (
    <MasterStyled>
      <div>
        <div className="nav flex fixed top-0  w-screen h-[70px] p-3 z-[2] items-center justify-between">
          <div className="logo_app pl-[20px]">
            <a href="/">
              <div className="image-wrapper">
                <LazyLoadImage
                  src="https://image.hsv-tech.io/300x0/bbx/common/50a26167-9341-4be8-8aba-9682d3b4a916.webp"
                  effect="blur"
                  className="w-[190px] h-[39px] max-w-full"
                />
              </div>
            </a>
          </div>
          <div>
            <div className="avt w-[35px] h-[35px] rounded-[50%] overflow-clip cursor-pointer">
              <img
                src="https://cdn.pixabay.com/photo/2024/05/24/19/06/bird-8785666_960_720.jpg"
                className="w-full h-full object-cover"
              ></img>
            </div>
          </div>
        </div>
        <div className="flex  h-[calc(100%-70px)] gap-3 fixed top-[70px] left-0 right-0 z-[1]">
          <div className="sidebar_left w-[240px] px-3 py-2 h-full overflow-y-auto no-scrollbar  border-solid border-r-[1.2px] border-[#ebebeb]">
            <Menu
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["1"]}
              mode="inline"
              items={menuitems}
              onClick={({ item, key, keyPath, domEvent }) => {
                console.log(item?.props?.link);
                console.log(key);
                console.log(keyPath);
                console.log(domEvent);
                // navigate(item?.props?.link);
              }}
            />
            <div className="devide w-[90%] mx-auto bg-[#d8d7dd] h-[1.6px] rounded-[4px] my-2"></div>
            <Menu
              mode="inline"
              items={setitems}
              onClick={({ item, key, keyPath, domEvent }) => {
                // navigate(item?.props?.link);
              }}
              // onSelect={({ item, key, keyPath, selectedKeys, domEvent }) => {
            />
          </div>
          <div className="flex-auto content  max-w-[calc(100%-240px)] no-scrollbar overflow-y-auto pb-[40px] pl-[2px] pr-[16px]">
            <Outlet />
          </div>
        </div>
      </div>
    </MasterStyled>
  );
};
const MasterStyled = styled.div`
  .nav {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  }
  /* .sidebar_left{
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  } */
`;
export default Master;
