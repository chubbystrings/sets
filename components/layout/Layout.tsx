"use client"
import React, { useState } from "react";
import Navigation from "../navigation/Navigation";
import Mobile from "../navigation/Mobile";
import Sidebar from "../sidebar/SideBar";

import { Inter } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ["latin"] });

export default function Layout({  children }: {  children: React.ReactNode }) {

  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <>
      <main className={`h-full grid grid-cols-1 md:grid-cols-5 ${ inter.className} `}>
        <Mobile setOpenSidebar={() => setOpenSidebar((prev) => !prev)} />
        <section className="py-5 px-5 min-h-screen overflow-y-auto no-scrollbar hidden md:block">
          <Navigation />
        </section>

        <section
          className={`col-span-4 bg-secondary-default px-2 md:px-8 pt-[70px] md:pb-5 md:pt-5 flex flex-col gap-6 h-full overflow-y-auto no-scrollbar`}
        >
          {children}
        </section>
      </main>
      <Sidebar open={openSidebar} setOpen={setOpenSidebar} />
    </>
  );
}
