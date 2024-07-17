import BalanceOptions from "./BalanceOptions";
import { Introduction } from "./Introduction";
import ProfileNotification from "./ProfileNotification";

const Home = () => {
  return (
    <div className="">
      <ProfileNotification />
      <BalanceOptions />
      <Introduction />
    </div>
  );
};

export default Home;
