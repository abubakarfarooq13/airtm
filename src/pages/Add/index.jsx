import Intro from "./Intro";
import Notification from "./Notification";

const Add = () => {
  return (
    <div className="flex justify-center items-center w-full">
      <div className="w-full flex flex-col gap-4">
        <Notification />
        <Intro />
      </div>
    </div>
  );
};

export default Add;
