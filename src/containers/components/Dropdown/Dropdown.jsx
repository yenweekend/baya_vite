import * as React from "react";
import { cn } from "@/lib/utils"; // Utility for conditional classNames
import useClickAwayScroll from "@/hooks/useClickAwayScroll"; // Your custom hook
const Dropdown = React.forwardRef(
  ({ className, open, onOpenChange, children, ...props }, ref) => {
    const triggerRef = React.useRef(null);
    const dropdownRef = React.useRef(null);
    useClickAwayScroll(triggerRef, dropdownRef, () => {
      if (open) {
        onOpenChange(false);
      }
    });

    return (
      <div
        ref={ref}
        className={cn(
          "relative  text-left items-center justify-center flex ",
          className
        )}
        {...props}
      >
        {React.Children.map(children, (child) => {
          if (child.type === DropdownTrigger) {
            return React.cloneElement(child, {
              ref: triggerRef,
              onOpenChange,
              open,
            });
          }
          if (child.type === DropdownContent) {
            return React.cloneElement(child, {
              ref: dropdownRef,
              open,
            });
          }
          return child;
        })}
      </div>
    );
  }
);
Dropdown.displayName = "Dropdown";

const DropdownTrigger = React.forwardRef(
  ({ className, children, onOpenChange, open, ...props }, ref) => {
    React.useEffect(() => {
      if (open) {
        document.body.classList.add("body-showmodal");
      } else {
        document.body.classList.remove("body-showmodal");
      }
    }, [open]);
    return (
      <button
        ref={ref}
        className={cn(
          "items-center justify-center flex  text-sm font-medium 2md:px-4 px-1",
          className
        )}
        onClick={(e) => {
          onOpenChange((prev) => !prev);
        }}
        {...props}
      >
        {children}
      </button>
    );
  }
);
DropdownTrigger.displayName = "DropdownTrigger";

const DropdownContent = React.forwardRef(
  ({ className, children, open, ...props }, ref) => (
    <>
      <div
        ref={ref}
        className={cn(
          "absolute z-10 mt-2 w-[250px] right-0 bg-white transition-opacity duration-300 dropdown shadow-nd top-[140%]",
          open
            ? "opacity-[1] visible scale-100"
            : "opacity-0 invisible scale-[0.9]",
          className
        )}
        {...props}
      >
        {children}
      </div>
      <div
        className={`absolute z-[61] right-[20px] bottom-[-20px] ${
          open ? "opacity-[1] visible top-[100%]" : "opacity-0 invisible "
        }`}
      >
        <span className="w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-b-[15px] border-b-[#fff]"></span>
      </div>
    </>
  )
);

DropdownContent.displayName = "DropdownContent";

export { Dropdown, DropdownTrigger, DropdownContent };
