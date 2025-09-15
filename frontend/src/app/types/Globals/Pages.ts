import type { IconType } from "react-icons";
export interface PagesProps {
  pageName: string;
}
export interface Page {
  label: string;
  path: string;
  icon: IconType;
  navigation: boolean;
}
