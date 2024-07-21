import { AiOutlineDollarCircle } from "react-icons/ai";
import { FaRegCheckCircle } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { LuSendHorizonal } from "react-icons/lu";

export const introData = [
  {
    step: 1,
    icon: <IoMdAdd size={40} />,
    heading: "Add funds using our P2P Network",
    details: "Bring your cash and convert to USDC fast and safely.",
  },
  {
    step: 2,
    icon: <AiOutlineDollarCircle size={40} />,
    heading: "Choose how much money you want to bring",
    details:
      "Select one of the 400 available payment methods, enter the amount you want to convert to USDC, and send the request to the P2P network.",
  },
  {
    step: 3,
    icon: <LuSendHorizonal size={40} />,
    heading: "Send funds to the cashier",
    details:
      "Once your request is accepted, we&apos;ll share you their payment information to send funds.",
  },
  {
    step: 4,
    icon: <FaRegCheckCircle size={40} />,
    heading: "Get your USDC",
    details:
      "Once the cashier confirms received funds, USDC will be added to your main balance. It&apos;s time to add your first funds!",
  },
];
