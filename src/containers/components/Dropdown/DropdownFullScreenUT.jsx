import * as React from "react";
import { cn } from "@/lib/utils"; // Utility for conditional classNames
import useClickAway from "@/hooks/useClickAway"; // Your custom hook
const DropdownScreenUT = React.forwardRef(
  ({ className, open, onOpenChange, children, ...props }, ref) => {
    const triggerRef = React.useRef(null);
    const dropdownRef = React.useRef(null);
    // Close dropdown when clicking outside
    useClickAway(triggerRef, dropdownRef, () => {
      if (open) {
        onOpenChange(false);
      }
    });
    return (
      <div
        ref={ref}
        className={cn(" flex items-center justify-center   ", className)}
        {...props}
      >
        {React.Children.map(children, (child) => {
          if (child.type === DropdownScreenUTTrigger) {
            return React.cloneElement(child, {
              ref: triggerRef,
              onOpenChange,
              open,
            });
          }
          if (child.type === DropdownScreenUTContent) {
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
DropdownScreenUT.displayName = "DropdownScreenUT";

const DropdownScreenUTTrigger = React.forwardRef(
  ({ className, children, onOpenChange, open, ...props }, ref) => {
    React.useEffect(() => {
      if (open) {
        document.body.classList.add("locked-scroll");
        document.body.classList.add("body-showmodal");
      } else {
        document.body.classList.remove("locked-scroll");
        document.body.classList.remove("body-showmodal");
      }
    }, [open]);

    React.useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth > 990 && open) {
          onOpenChange(false);
        }
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, [open]);
    return (
      <button
        ref={ref}
        className={cn(
          " items-center justify-center flex  text-sm font-medium relative px-4",
          className
        )}
        onClick={(e) => {
          // e.stopPropagation();
          onOpenChange((prev) => !prev);
        }}
        {...props}
      >
        {children}
        <div
          className={`absolute flex items-center justify-center z-[61] top-[calc(100%-5px)] w-8 h-8 center-x ${
            open ? "opacity-[1] visible " : "opacity-0 invisible "
          }`}
        >
          <span className="w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-b-[15px] border-b-[#fff]"></span>
        </div>
      </button>
    );
  }
);
DropdownScreenUTTrigger.displayName = "DropdownScreenUTTrigger";

const DropdownScreenUTContent = React.forwardRef(
  ({ className, children, open, ...props }, ref) => (
    <>
      <div
        ref={ref}
        className={cn(
          "main-dropdown absolute z-[99]  bg-[#fff] transition-opacity duration-300  shadow-nd right-0 left-0 w-screen h-[73vh] top-[55%]",
          open
            ? "opacity-[1] visible scale-100"
            : "opacity-0 invisible scale-[0.9]",
          className
        )}
        {...props}
      >
        {children}
      </div>
    </>
  )
);

DropdownScreenUTContent.displayName = "DropdownScreenUTContent";

export { DropdownScreenUT, DropdownScreenUTTrigger, DropdownScreenUTContent };
