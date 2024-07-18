import PropTypes from "prop-types";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import { useState } from "react";
const Layout = () => {
  const [header, setHeader] = useState(false);

  const changeBackground = () => {
    console.log(window.scrollY);
  };
  window.addEventListener("scroll", changeBackground);
  return (
    <>
      <div className="flex">
        <div className="absolute">
          <Sidebar />
        </div>
        <div className="ml-24 w-full h-screen overflow-y-scroll  flex flex-col">
          <main className="h-full w-full ">
            <div className={!header ? "bg-home-bg" : "bg-white"}>
              <Header />
            </div>

            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
