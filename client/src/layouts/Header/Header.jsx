import React, { useContext } from "react";
import { Squash as Hamburger } from "hamburger-react";
import { SideNavigationContext } from "../../contexts/SideNavigationProvider";

export const Header = () => {
  const { sideNavigationIsOpen, setSideNavigationIsOpen } = useContext(
    SideNavigationContext
  );

  return (
    <header className="p-3">
      <div className=" flex justify-end max-w-[1500px] mx-auto border border-gray-200 bg-white">
        <Hamburger
          size={25}
          toggled={sideNavigationIsOpen}
          toggle={setSideNavigationIsOpen}
        />
      </div>
    </header>
  );
};
