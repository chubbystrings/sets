import React from "react";
import Image from "next/image";
import Hamburger from "../icons/Hamburger";
import Logo from "../../public/Logomark.svg";

export default function Mobile({ setOpenSidebar }: { setOpenSidebar: () => void }) {
  const handleSideBar = () => {
    setOpenSidebar();
  }
  return (
    <div className="bg-base-default shadow-sm flex items-center justify-between py-3 md:hidden fixed top-0 w-full px-2 z-20">
      <div className="flex gap-1 items-center">
        <span>
          <Image src={Logo} alt="logo" />
        </span>
        <span className="title-large">Medusa</span>
      </div>
      <div>
        <Hamburger className="cursor-pointer" onClick={() => handleSideBar()} />
      </div>
    </div>
  );
}
