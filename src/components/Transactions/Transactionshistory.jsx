import { FaRegFileAlt } from "react-icons/fa";

const Transactionshistory = () => {
  return (
    <div className="bg-white h-72 ">
      <h1 className="text-xl font-semibold mx-20 p-3 ">Recent</h1>
      <div className="mx-20 h-full flex flex-col items-center justify-center shadow-lg ">
        <div className="flex flex-col items-center  gap-4">
          <FaRegFileAlt color="gray" size={40} />
          <p className="text-xl text-gray-500 font-semibold">
            You don&apos;t have any completed transactions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Transactionshistory;
