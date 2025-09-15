import { ReactNode } from "react";

export interface CardProps {
  children: ReactNode;
  link?: string;
}

// export interface ProjectCardKey {
//   title: string;
//   header: string;
//   content: string;
//   footer: string | ReactNode;
//   link?: string;
// }

export interface CardKeys {
  header?: string | "";
  title?: string | "";
  content?: string | "";
  footer?: string | ReactNode;
  value?: string | number;
  link?: string;
}

// export interface DashboardCardsKey {
//   header: string | "";
//   title: string;
//   content: string;
//   footer: string;
//   value: string | number;
//   link?: string;
// }
