import React, { useRef} from "react";
import classNames from "classnames";
import Navigation from "../navigation/Navigation";
import { useOnClickOutside } from "usehooks-ts";
type Props = {
  open: boolean;
  setOpen(open: boolean): void;
};
const Sidebar = ({ open, setOpen }: Props) => {

  const ref = useRef<HTMLDivElement>(null);

  useOnClickOutside(ref, (e) => {
    setOpen(false)
  })
  return (
    <div
      className={classNames({
        "flex flex-col justify-between shadow-lg": true, // layout
        "bg-secondary-default text-zinc-50": true, // colors
        "md:w-full md:sticky md:top-16 md:z-0 top-0 z-20 fixed": true, // positioning
        "md:h-[calc(100vh_-_64px)] h-full w-[300px]": true, // for height and width
        "transition-transform .3s ease-in-out md:translate-x-0": true, //animations
        "-translate-x-full ": !open, //hide sidebar to the left when closed
      })}
      ref={ref}
    >
      <nav className="md:fixed top-0 md:top-16 overflow-y-auto px-3 py-5">
        {/* nav items */}
        <Navigation />
      </nav>
    </div>
  );
};

export default Sidebar;
