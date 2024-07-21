import PropTypes from "prop-types";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import { useState } from "react";
const Layout = () => {
  const [header, setHeader] = useState(false);
  const changeBackground = () => {
    console.log("hello");
    if (window.scrollY > 80) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };
  window.addEventListener(
    "scroll",
    () => {
      changeBackground();
    },
    false
  );

  return (
    <>
      <div className="flex">
        <div className="absolute z-10">
          <Sidebar />
        </div>
        <div className="ml-24 w-full h-screen overflow-y-scroll  flex flex-col">
          {" "}
          <div
            className={
              !header
                ? "bg-home-bg fix sticky top-0 "
                : "bg-white fix sticky top-0 shadow-md shadow-gray-400"
            }
          >
            <Header />
          </div>
          <main className="h-full w-full">
            {" "}
            <Outlet />
            {console.log(window.scrollY)}
            <div className="h-screen"></div>
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
