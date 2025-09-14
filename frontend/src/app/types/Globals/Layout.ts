import { ReactNode } from "react";
import type { IconType } from "react-icons";

export interface LayoutProps {
  children: ReactNode;
}

export interface HeaderProps {
  pageName?: string;
  icon?: IconType;
  className?: string;
}
