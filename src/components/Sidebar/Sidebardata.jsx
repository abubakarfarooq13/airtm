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
    path: "/add",
  },
  {
    name: "withdraw",
    icon: <GrFormSubtract />,
    path: "/withdraw",
  },
  {
    name: "pay local",
    icon: <TbCreditCardPay />,
    path: "/pay-local",
  },
  {
    name: "transfer usdc",
    icon: <CiDollar />,
    path: "/transfer-usdc",
  },
  {
    name: "send/request",
    icon: <LuSendHorizonal />,
    path: "/send-request",
  },
  {
    name: "activity",
    icon: <FaRegFileAlt />,
    path: "/activity",
  },
  {
    name: "i'm a cashier",
    icon: <TbChartCircles />,
    path: "/i-m-a-cashier",
  },
  {
    name: "get paid",
    icon: <LiaHandHoldingUsdSolid />,
    path: "/get-paid",
  },
];

export const Sidebarfooter = [
  {
    name: "invite friends",
    icon: <IoShareSocialOutline />,
    path: "/invite-friends",
  },
  {
    name: "help",
    icon: <GoInfo />,
    path: "/help",
  },
  {
    name: "settings",
    icon: <CiSettings />,
    path: "/settings",
  },
];
