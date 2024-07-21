import Transactionshistory from "../Transactions/Transactionshistory";
import BalanceOptions from "./BalanceOptions";
import Footer from "./Footer";
import { Introduction } from "./Introduction";
import More from "./More";
import ProfileNotification from "./ProfileNotification";

const Home = () => {
  return (
    <div className="bg-home-bg bg-cover bg-no-repeat pt-8">
      <ProfileNotification />
      <BalanceOptions />
      <div className="bg-white">
        <Introduction />
        <Transactionshistory />
        <More />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
