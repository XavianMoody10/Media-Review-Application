import React, { useContext } from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import TheatersOutlinedIcon from "@mui/icons-material/TheatersOutlined";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import { Link } from "react-router-dom";
import { SideNavigationContext } from "../../contexts/SideNavigationProvider";
import { motion } from "motion/react";

export const SideNavigation = () => {
  const { sideNavigationIsOpen } = useContext(SideNavigationContext);

  return (
    <motion.aside
      initial={{ x: "-100%" }}
      animate={{ x: sideNavigationIsOpen ? 0 : "-100%" }}
      className=" fixed h-screen top-0 left-0 border border-gray-200 z-20 bg-white"
    >
      <nav>
        <ul>
          <li>
            <Link
              to={"/"}
              className=" block p-2 m-2 border border-gray-200 rounded-sm duration-150 hover:bg-black hover:text-white"
            >
              <HomeOutlinedIcon sx={{ fontSize: 35 }} />
            </Link>
          </li>

          <li>
            <Link
              to={"/library/movies?page=1"}
              className=" block p-2 m-2 border border-gray-200 rounded-sm duration-150 hover:bg-black hover:text-white"
            >
              <TheatersOutlinedIcon sx={{ fontSize: 35 }} />
            </Link>
          </li>

          <li>
            <Link
              to={"/library/tv_shows?page=1"}
              className=" block p-2 m-2 border border-gray-200 rounded-sm duration-150 hover:bg-black hover:text-white"
            >
              <LiveTvOutlinedIcon sx={{ fontSize: 35 }} />
            </Link>
          </li>
        </ul>
      </nav>
    </motion.aside>
  );
};
