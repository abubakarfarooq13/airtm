import { useState } from "react";
import { GoPerson } from "react-icons/go";
import { Sidebarfooter, Sidebarmenu } from "./Sidebardata";
import { RxExit } from "react-icons/rx";
const Sidebar = () => {
  const [hover, setHover] = useState(false);
  return (
    <div
      className={`relative bg-white transition-all ease-in-out duration-300 ${
        hover ? "w-56" : "w-24"
      }  min-h-screen border`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className=" flex flex-col  justify-between">
        <div className="h-36 flex flex-col items-start justify-between px-6 py-4 shadow-lg">
          <div className="flex items-center gap-3">
            <img src="https://abubakar13.vercel.app/favicon.ico" alt="logo" />
            {hover && <h1 className="uppercase font-bold  ">AIRTM</h1>}
          </div>

          <div className="flex items-center gap-3">
            <div className="rounded-full bg-black text-white p-1">
              <GoPerson size={35} />
            </div>
            {hover && (
              <h1 className="uppercase font-bold text-sm text-gray-500">
                Abubakar
              </h1>
            )}
          </div>
        </div>

        <div className="flex flex-col px-6 justify-between min-h-96 max-h-96 h-96 overflow-hidden">
          <div>
            {Sidebarmenu.map((item, index) => {
              return (
                <>
                  <div
                    key={index}
                    className="flex gap-4 px-2 py-1 items-center"
                  >
                    <div className="text-2xl">{item.icon}</div>
                    {hover && (
                      <span className="uppercase text-nowrap font-bold text-sm text-gray-500">
                        {item.name}
                      </span>
                    )}
                  </div>
                </>
              );
            })}
          </div>
          <div>
            {Sidebarfooter.map((item, index) => {
              return (
                <>
                  <div
                    key={index}
                    className="flex gap-4 px-2 py-1 items-center"
                  >
                    <div className="text-2xl">{item.icon}</div>
                    {hover && (
                      <span className="uppercase text-nowrap font-bold text-sm text-gray-500">
                        {item.name}
                      </span>
                    )}
                  </div>
                </>
              );
            })}
          </div>
        </div>

        <hr />
        <div className="py-8 flex gap-4 px-8 items-center  h-full">
          <div className="text-2xl ">
            <RxExit />
          </div>
          {hover && (
            <h1 className="uppercase font-bold text-sm text-gray-500">
              Logout
            </h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
