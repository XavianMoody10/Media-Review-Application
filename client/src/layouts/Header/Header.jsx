import React from "react";
import { Squash as Hamburger } from "hamburger-react";

export const Header = () => {
  return (
    <header className=" fixed top-0 w-full p-3 bg-white">
      <div className=" flex justify-end max-w-[1300px] mx-auto border border-gray-200">
        <Hamburger size={25} />
      </div>
    </header>
  );
};
