import { ReactNode } from "react";

export interface CardProps {
  children: ReactNode;
}

export interface ProjectCardKey {
  title: string;
  header: string;
  content: string;
  footer: string | ReactNode;
}

export interface DashboardCardsKey {
  header: string | "";
  title: string;
  content: string;
  footer: string;
  value: string | number;
}
