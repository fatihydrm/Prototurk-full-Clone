import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function Akis() {
  return (
    <div className='overflow-auto h-full w-full flex-1 flex flex-col items-start pb-10 px-5 2xl:px-40 xl:px-24 lg:px-14 md:px-5 sm:px-5 dark:bg-dark'>
      <div className='flex-1 flex flex-col items-start container mx-auto py-8'>
        <h1 className='text-3xl text-[#32445a] font-bold dark:text-white'>
          Akiş
        </h1>
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
}

export default Akis;
