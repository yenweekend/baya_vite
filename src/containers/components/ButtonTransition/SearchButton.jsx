import * as React from "react";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Search as SearchDiv } from "@/containers/components";
import {
  Dropdown,
  DropdownContent,
  DropdownTrigger,
} from "../Dropdown/Dropdown";
import { X, Search } from "lucide-react";
import {
  DropdownScreen,
  DropdownScreenContent,
  DropdownScreenTrigger,
} from "@/containers/components/Dropdown/DropdownFullScreen";
export function SearchButton() {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 990px)");
  if (isDesktop) {
    return (
      <Dropdown open={open} onOpenChange={setOpen}>
        <DropdownTrigger className={"text-[#fff] mx-[2px]"}>
          <a className="items-center  flex py-[9px] ">
            <span className="w-6 h-6">
              <Search size={24} strokeWidth={1.5} />
            </span>
          </a>
        </DropdownTrigger>
        <DropdownContent className={"py-[15px] px-[24px] w-[400px]"}>
          <SearchDiv className={"2md:min-w-[240px]"} />
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
        <Search
          size={20}
          className={`text-[#fff] transition-  center-xabsolute ease-linear duration-150   ${
            open
              ? " invisible opacity-0 scale-90  "
              : "visible opacity-1 scale-100 "
          }`}
          strokeWidth={1.5}
        />
      </DropdownScreenTrigger>
      <DropdownScreenContent className={"top-[calc(100%-72px)]"}>
        <div className="absolute inset-0 ">
          <div className="w-full h-full overflow-y-auto pb-[30px]">
            <div className="w-full h-[300px] bg-blue-500"></div>
          </div>
        </div>
      </DropdownScreenContent>
    </DropdownScreen>
  );
}
