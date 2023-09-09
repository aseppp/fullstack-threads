import { AiOutlineTag } from "react-icons/ai";
import { BiHomeCircle, BiSearchAlt, BiHeart, BiEdit } from "react-icons/bi";
import { BsFillReplyAllFill, BsPeople, BsPerson } from "react-icons/bs";
import { MdOutlinePeopleAlt } from "react-icons/md";

export const sidebarLinks = [
  {
    label: "Home",
    path: "/",
    icon: <BiHomeCircle size={"25px"} color="white" />,
  },
  {
    label: "Search",
    path: "/search",
    icon: <BiSearchAlt size={"25px"} color="white" />,
  },
  {
    label: "Activity",
    path: "/activity",
    icon: <BiHeart size={"25px"} color="white" />,
  },
  {
    label: "Create Thread",
    path: "/create-thread",
    icon: <BiEdit size={"25px"} color="white" />,
  },
  {
    label: "Comunity",
    path: "/communities",
    icon: <BsPeople size={"25px"} color="white" />,
  },
  {
    label: "Profile",
    path: "/profile",
    icon: <BsPerson size={"25px"} color="white" />,
  },
];

export const profileTabs = [
  { value: "threads", label: "Threads", icon: <BsFillReplyAllFill /> },
  { value: "replies", label: "Replies", icon: <MdOutlinePeopleAlt /> },
  { value: "tagged", label: "Tagged", icon: <AiOutlineTag /> },
];

export const communityTabs = [
  { value: "threads", label: "Threads", icon: <BsFillReplyAllFill /> },
  { value: "replies", label: "Member", icon: <MdOutlinePeopleAlt /> },
  { value: "tagged", label: "Request", icon: <AiOutlineTag /> },
];
