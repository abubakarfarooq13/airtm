import PropTypes from "prop-types";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <>
      <div className="flex">
        <div className="absolute">
          <Sidebar />
        </div>
        <div className="ml-24 w-full h-full bg-gradient-to-l from-fuchsia-100 via-indigo-300 to-violet-300">
          <Header />
          <main className="h-full w-full ">
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
