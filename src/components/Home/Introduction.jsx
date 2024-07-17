import { Intro } from "./details/IntroductionData";

export const Introduction = () => {
  return (
    <div className="bg-white w-full px-20">
      <div className="flex py-6 justify-between w-full">
        {Intro.map((item, index) => {
          return (
            <div key={index} className="flex p-4 shadow-xl w-full gap-2">
              <div className=" flex justify-center text-3xl">{item.icon}</div>
              <div className="flex flex-col ">
                <h1 className="uppercase font-bold">{item.name}</h1>
                <p className="text-sm text-gray-600 font-semibold">
                  {item.details}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
