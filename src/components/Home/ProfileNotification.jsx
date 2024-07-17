import { CiSettings } from "react-icons/ci";
const ProfileNotification = () => {
  return (
    <div className="px-[7%] w-full">
      <div className="bg-black text-white h-32 w-full flex ">
        <div className="flex w-full">
          <div className="flex w-full items-center px-6">
            <div className="flex">
              <CiSettings size={35} />
            </div>
            <div className="w-full  flex flex-col">
              <h1 className="">ACCOUNT SETUP 0/3: COMPLETE PROFILE</h1>
              <div className="w-full  flex items-center ">
                <hr className="border-4 rounded-full w-full" />
              </div>

              <h1 className="mt-2 leading-6">
                After completing your profile you will be able to make
                transactions
              </h1>
            </div>
          </div>
          <div className="flex items-center w-60  mr-2">
            <div className="py-1 px-6 text-nowrap text-white bg-blue-500 rounded-full">
              Complete your profile
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileNotification;
