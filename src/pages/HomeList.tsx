import { NavLink, Outlet } from "react-router-dom";
import React from "react";

const HomeList = () => {
  return (
    <div className="flex">
      <div>
        <header className="h-screen relative w-full bg-sky-950 flex flex-col items-center justify-start">
          <div className="navbar navbar-expand navbar-light text-white flex w-[130px] h-14  justify-center font-light text-md">
            Construction
          </div>
        </header>
      </div>
      <div className=" flex items-center justify-center">
        <Outlet />
      </div>
    </div>
  );
};

export default HomeList;
