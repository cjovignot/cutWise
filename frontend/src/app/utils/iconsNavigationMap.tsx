import { RxDashboard } from "react-icons/rx";
import {
  FaBoxOpen,
  FaCog,
  // FaShoppingCart,
  FaFileUpload,
} from "react-icons/fa";
import { IoIosFolderOpen } from "react-icons/io";
import { GiWoodPile } from "react-icons/gi";

import type { Page } from "@/types/Globals/Pages";
// import type { IconType } from "react-icons";

export const pages: Page[] = [
  { label: "dashboard", path: "/", icon: RxDashboard, navigation: true },
  {
    label: "projects",
    path: "/projects",
    icon: IoIosFolderOpen,
    navigation: true,
  },
  { label: "stock", path: "/stock", icon: GiWoodPile, navigation: true },
  {
    label: "addProject",
    path: "/projects/addProject",
    icon: FaFileUpload,
    navigation: false,
  },
  {
    label: "analyzer3D",
    path: "/projects/analyzer3D",
    icon: FaFileUpload,
    navigation: false,
  },
  { label: "settings", path: "/settings", icon: FaCog, navigation: true },
  // { label: "orders", path: "/orders", icon: FaShoppingCart, navigation: true },
];
