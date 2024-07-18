import { CiDollar } from "react-icons/ci";
import { GrFormSubtract } from "react-icons/gr";
import { IoMdAdd } from "react-icons/io";
import { LuSendHorizonal } from "react-icons/lu";
import { MdOutlineRemoveRedEye, MdOutlineElectricBolt } from "react-icons/md";
import { TbCreditCardPay } from "react-icons/tb";
const BalanceOptions = () => {
  return (
    <div className="flex w-full">
      <div className="w-[50%]">
        <div className="ml-[14%] py-6 w-56  flex flex-col gap-4">
          <h1 className="text-base font-medium text-gray-900">BALANCE</h1>
          <div className="flex w-full justify-between ">
            <div className="flex flex-col">
              {" "}
              <div className="flex gap-4">
                <h1 className="text-4xl font-bold">$0.00</h1>{" "}
                <span className="flex items-end text-lg">USDC</span>
              </div>
              <div className="flex gap-4 items-end pt-3">
                <h1 className="text-lg font-bold text-gray-600">Rs.0.00</h1>
                <span className="text-lg  text-gray-600">PKR</span>
              </div>
            </div>
            <div className="">
              <MdOutlineRemoveRedEye size={35} />
            </div>
          </div>

          <hr />
          <h1 className="text-badic font-bold text-gray-900">
            1 USDC = 283.45 PKR
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-3 w-[50%]  py-6 gap-6 pr-[7%]">
        <div className="flex items-center justify-center border rounded-md bg-white shadow-lg">
          <div className="flex flex-col gap-2 items-center">
            <IoMdAdd size={25} />
            <span>Add</span>
          </div>
        </div>
        <div className="flex items-center justify-center border rounded-md bg-white shadow-lg">
          <div className="flex flex-col gap-2 items-center">
            <GrFormSubtract size={25} />
            <span>Withdraw</span>
          </div>
        </div>
        <div className="flex items-center justify-center border rounded-md bg-white shadow-lg">
          <div className="flex flex-col gap-2 items-center">
            <LuSendHorizonal size={25} />
            <span>Send/Request</span>
          </div>
        </div>
        <div className="flex items-center justify-center border rounded-md bg-white shadow-lg">
          <div className="flex flex-col gap-2 items-center">
            <CiDollar size={25} />
            <span>Transfer USDC</span>
          </div>
        </div>
        <div className="flex items-center justify-center border rounded-md bg-white shadow-lg">
          <div className="flex flex-col gap-2 items-center">
            <TbCreditCardPay size={25} />
            <span>Pay Local</span>
          </div>
        </div>
        <div className="flex items-center justify-center border rounded-md bg-white shadow-lg">
          <div className="flex flex-col gap-2 items-center">
            <MdOutlineElectricBolt size={25} />
            <span>Auto Withdrawals</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BalanceOptions;
