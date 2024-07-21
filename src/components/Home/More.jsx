import marketing2 from "/images/marketing-primary-right.jpg";
import marketing from "/images/marketing-primary.jpg";
const More = () => {
  return (
    <div className="bg-white py-2 mt-20">
      <div className="mx-20 flex gap-4">
        <div className="flex w-full h-64  bg-home-bg shadow-lg rounded-md overflow-hidden">
          <div className="w-[70%] py-6 px-6">
            <h1 className="text-lg font-bold">Get paid in airtm</h1>
            <p className="text-gray-600">
              With our partners, you can make dollars and get paid directly to
              your Airtm account. Income opportunities include payments from
              $1-$200.
            </p>
            <button className="text-blue-600 font-semibold text-xl">
              Learn more{" "}
            </button>
          </div>
          <div className=" bg-cover bg-center overflow-hidden w-[40%]">
            <img className="w-full h-full " src={marketing} alt="get-paid" />
          </div>
        </div>
        <div className="flex w-full h-64  bg-home-bg shadow-lg rounded-md overflow-hidden">
          <div className="w-[70%] py-6 px-6">
            <h1 className="text-lg font-bold">INVITE FRIENDS & WIN $$$</h1>
            <p className="text-gray-600">
              Join the ranks of Freecash users making more than $1.000 a month
              in extra cash!
            </p>
            <button className="text-blue-600 font-semibold text-xl ">
              Start now{" "}
            </button>
          </div>
          <div className=" bg-cover w-[40%]  bg-center overflow-hidden">
            <img className="w-full h-full " src={marketing2} alt="get-paid" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default More;
