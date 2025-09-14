import { RxDashboard } from "react-icons/rx";
import { FaBoxOpen, FaCog, FaShoppingCart } from "react-icons/fa";
import type { IconType } from "react-icons";

export const pages: { label: string; path: string; icon: IconType }[] = [
  { label: "dashboard", path: "/", icon: RxDashboard },
  { label: "projects", path: "/projects", icon: FaBoxOpen },
  { label: "orders", path: "/orders", icon: FaShoppingCart },
  { label: "stock", path: "/stock", icon: FaBoxOpen },
  { label: "settings", path: "/settings", icon: FaCog },
];
