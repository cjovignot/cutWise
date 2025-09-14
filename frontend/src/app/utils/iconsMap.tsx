import { RxDashboard } from "react-icons/rx";
import { FaBoxOpen, FaCog, FaShoppingCart } from "react-icons/fa";
import type { IconType } from "react-icons";

export const pages: { label: string; path: string; icon: IconType }[] = [
  { label: "dashboard", path: "/", icon: RxDashboard },
  { label: "orders", path: "/orders", icon: FaShoppingCart },
  { label: "catalog", path: "/catalog", icon: FaBoxOpen },
  { label: "settings", path: "/settings", icon: FaCog },
];
