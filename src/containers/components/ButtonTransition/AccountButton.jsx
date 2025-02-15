import * as React from "react";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { cn } from "@/lib/utils";
import {
  Dropdown,
  DropdownContent,
  DropdownTrigger,
} from "../Dropdown/Dropdown";
import { ChevronDown, UserRound, X } from "lucide-react";
import {
  DropdownScreen,
  DropdownScreenContent,
  DropdownScreenTrigger,
} from "@/containers/components/Dropdown/DropdownFullScreen";
import { LoginBox } from "@/containers/components";
export function AccountButton({ className }) {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 990px)");
  React.useEffect(() => {
    if (open) {
      if (isDesktop) {
        if (document.body.classList.contains("locked-scroll")) {
          document.body.classList.remove("locked-scroll");
        }
      } else {
        document.body.classList.add("locked-scroll");
      }
    } else {
      document.body.classList.remove("locked-scroll");
    }
  }, [isDesktop, open]);

  if (isDesktop) {
    return (
      <Dropdown open={open} onOpenChange={setOpen}>
        <DropdownTrigger className={"text-[#fff] mx-[2px]"}>
          <a className="items-center  flex py-[9px]">
            <span className="w-6 h-6">
              <UserRound size={30} strokeWidth={1} />
            </span>
            <span className="box-text ml-[10px] text-left font-light max-990:hidden whitespace-nowrap">
              Tài khoản của
              <span className=" flex items-center gap-1 whitespace-nowrap">
                Nguyễn Yên{" "}
                <ChevronDown className="text-[#fff]" size={16}></ChevronDown>
              </span>
            </span>
          </a>
        </DropdownTrigger>
        <DropdownContent className={"py-[15px] px-[24px] w-[400px]"}>
          <div className="text-center pb-[8px] mb-[20px] border-b border-solid border-shop ">
            <h2 className="text-[15px] uppercase font-medium text-redichi ">
              Đăng nhập tài khoản
            </h2>
            <p className="text-[#677279] font-normal text-[14px] text-center">
              Nhập email và mật khẩu của bạn:
            </p>
          </div>
          <LoginBox />
          {/* <div className="text-center pb-[8px] mb-[20px] border-b border-solid border-shop ">
                      <h2 className="text-[15px] uppercase font-medium text-redichi ">
                        Thông tin tài khoản
                      </h2>
                  
                    </div>
                    <ul>
                      <li className="mb-[8px]">
                        <span className="text-[15px] ">Yên Nguyễn</span>
                      </li>
                      <li className="relative pl-[10px] mb-[10px] after:content-[''] after:absolute after:h-[4px] after:w-[4px] after:bg-[--shop-color-text] after:rounded-full after:left-0 after:top-[5px]">
                        <a
                          href="/"
                          className="font-normal cursor-pointer text-[14px] px-[4px]"
                        >
                          Tài khoản của tôi
                        </a>
                      </li>
                      <li className="relative pl-[10px] mb-[10px] after:content-[''] after:absolute after:h-[4px] after:w-[4px] after:bg-[--shop-color-text] after:rounded-full after:left-0 after:top-[5px]">
                        <a
                          href="/"
                          className="font-normal cursor-pointer text-[14px] px-[4px]"
                        >
                          Danh sách địa chỉ
                        </a>
                      </li>
                      <li className="relative pl-[10px] mb-[10px] after:content-[''] after:absolute after:h-[4px] after:w-[4px] after:bg-[--shop-color-text] after:rounded-full after:left-0 after:top-[5px]">
                        <a
                          href="/"
                          className="font-normal cursor-pointer text-[14px] px-[4px] "
                        >
                          Đăng xuất
                        </a>
                      </li>
                    </ul> */}
        </DropdownContent>
      </Dropdown>
    );
  }
  return (
    <DropdownScreen open={open} onOpenChange={setOpen}>
      <DropdownScreenTrigger className={" flex 2md:hidden"}>
        <X
          size={20}
          className={`text-[#fff] transition-all center-x absolute ease-linear duration-150   ${
            open
              ? " visible scale-100 opacity-100 "
              : "invisible opacity-0 scale-90  "
          }`}
          strokeWidth={1.5}
        />
        <UserRound
          size={20}
          className={`text-[#fff] transition-  center-xabsolute ease-linear duration-150   ${
            open
              ? " invisible opacity-0 scale-90  "
              : "visible opacity-1 scale-100 "
          }`}
          strokeWidth={1.5}
        />
      </DropdownScreenTrigger>
      <DropdownScreenContent className={cn("", className)}>
        <div className="absolute inset-0 ">
          <div className="w-full h-full overflow-y-auto pb-[30px]">
            <div className="w-full h-full py-[15px] px-5">
              <div className="text-center pb-[8px] mb-[20px] border-b border-solid border-shop ">
                <h2 className="text-[15px] uppercase font-medium text-redichi ">
                  Đăng nhập tài khoản
                </h2>
                <p className="text-[#677279] font-normal text-[14px] text-center">
                  Nhập email và mật khẩu của bạn:
                </p>
              </div>
              <LoginBox />
            </div>
          </div>
        </div>
      </DropdownScreenContent>
    </DropdownScreen>
  );
}
