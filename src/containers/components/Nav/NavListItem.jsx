import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { NavigationMenuLink } from "@/components/ui/navigation-menu";
const NavListItem = React.forwardRef(
  ({ className, navList, ...props }, ref) => {
    return (
      <div className=" w-full gap-3 p-4  flex">
        <ul>
          {navList?.map((sub, index) => (
            <li className="" key={index}>
              <NavigationMenuLink asChild>
                <a
                  href={sub.link}
                  className="text-blacknipy-[9px] px-[18px] opacity-[0.85]"
                >
                  {sub.title}
                </a>
              </NavigationMenuLink>
            </li>
          ))}
        </ul>
      </div>
    );
  }
);

export default NavListItem;
