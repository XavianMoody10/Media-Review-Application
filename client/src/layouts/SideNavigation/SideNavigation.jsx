import React from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import TheatersOutlinedIcon from "@mui/icons-material/TheatersOutlined";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import { Link } from "react-router-dom";

export const SideNavigation = () => {
  return (
    <aside className=" fixed h-screen top-0 left-0 border border-gray-200">
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
              to={"/library/movies"}
              className=" block p-2 m-2 border border-gray-200 rounded-sm duration-150 hover:bg-black hover:text-white"
            >
              <TheatersOutlinedIcon sx={{ fontSize: 35 }} />
            </Link>
          </li>

          <li>
            <Link
              to={"/library/tv_shows"}
              className=" block p-2 m-2 border border-gray-200 rounded-sm duration-150 hover:bg-black hover:text-white"
            >
              <LiveTvOutlinedIcon sx={{ fontSize: 35 }} />
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};
