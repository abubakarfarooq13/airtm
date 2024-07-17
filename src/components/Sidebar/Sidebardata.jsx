import { AiOutlineHome } from "react-icons/ai";
import { IoMdAdd } from "react-icons/io";
import { GrFormSubtract } from "react-icons/gr";
import { TbChartCircles, TbCreditCardPay } from "react-icons/tb";
import { CiDollar, CiSettings } from "react-icons/ci";
import { LuSendHorizonal } from "react-icons/lu";
import { FaRegFileAlt } from "react-icons/fa";
import { LiaHandHoldingUsdSolid } from "react-icons/lia";
import { IoShareSocialOutline } from "react-icons/io5";
import { GoInfo } from "react-icons/go";
export const Sidebarmenu = [
  {
    name: "home",
    icon: <AiOutlineHome />,
    path: "/",
  },
  {
    name: "add",
    icon: <IoMdAdd />,
    path: "/",
  },
  {
    name: "withdraw",
    icon: <GrFormSubtract />,
    path: "/",
  },
  {
    name: "pay local",
    icon: <TbCreditCardPay />,
    path: "/",
  },
  {
    name: "transfer usdc",
    icon: <CiDollar />,
    path: "/",
  },
  {
    name: "send/request",
    icon: <LuSendHorizonal />,
    path: "/",
  },
  {
    name: "activity",
    icon: <FaRegFileAlt />,
    path: "/",
  },
  {
    name: "i'm a cashier",
    icon: <TbChartCircles />,
    path: "/",
  },
  {
    name: "get paid",
    icon: <LiaHandHoldingUsdSolid />,
    path: "/",
  },
];

export const Sidebarfooter = [
  {
    name: "invite friends",
    icon: <IoShareSocialOutline />,
    path: "/",
  },
  {
    name: "help",
    icon: <GoInfo />,
    path: "/",
  },
  {
    name: "settings",
    icon: <CiSettings />,
    path: "/",
  },
];
