import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { NavigationMenuLink } from "@/components/ui/navigation-menu";
const NavListItem2 = React.forwardRef(
  ({ className, navList, ...props }, ref) => {
    return (
      <div className=" w-full gap-3 p-4 flex">
        <ul className="basis-1/3 ">
          <li className="px-[15px]">
            <a className="collection-text " href={navList.link}>
              {navList.titleDrop}
            </a>
            {navList.content.items?.map((item) => (
              <NavigationMenuLink asChild>
                <a
                  className={cn(
                    "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                    className
                  )}
                  href={item.link}
                >
                  {item.name}
                </a>
              </NavigationMenuLink>
            ))}
          </li>
        </ul>
        <div className="basis-2/3">
          <div className="flex gap-[12px]">
            {navList.content.images?.map((pos) => (
              <a href={pos.link} className="basis-1/3">
                <img
                  src={pos.image}
                  className="w-full h-full object-cover"
                ></img>
              </a>
            ))}
          </div>
        </div>
      </div>
    );
  }
);

export default NavListItem2;
