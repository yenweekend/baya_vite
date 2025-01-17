import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";
const NavListItem = React.forwardRef(
  ({ className, navList, ...props }, ref) => {
    return (
      <div className=" w-full gap-3 p-4  flex">
        <ul className="basis-2/3 grid grid-cols-3 gap-y-[30px]">
          {navList.content.map((listItem) => (
            <>
              <li className="px-[15px]">
                <a
                  className="collection-text text-[--shop-color-main] font-bold uppercase"
                  href={listItem.category?.title}
                >
                  {listItem.category?.title}
                </a>
                {listItem.sub_category?.map((sub_cate) => (
                  <a
                    className={cn(
                      "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                      className
                    )}
                    href={sub_cate.link}
                  >
                    {sub_cate.title}
                  </a>
                ))}
              </li>
            </>
          ))}
        </ul>
        <div className="basis-1/3">
          <img
            src={navList.image}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    );
  }
);

export default NavListItem;
