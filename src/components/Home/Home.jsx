import Transactionshistory from "../Transactions/Transactionshistory";
import BalanceOptions from "./BalanceOptions";
import { Introduction } from "./Introduction";
import More from "./More";
import ProfileNotification from "./ProfileNotification";

const Home = () => {
  return (
    <div className="bg-home-bg">
      <ProfileNotification />
      <BalanceOptions />
      <div>
        <Introduction />
        <Transactionshistory />
        <More />
      </div>
    </div>
  );
};

export default Home;
