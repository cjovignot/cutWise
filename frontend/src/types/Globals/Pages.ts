// src/types/Globals/Pages.ts
import type { User } from "./User";

export interface DashboardProps {
  user: User;
}

export interface CatalogProps {
  user: User;
}

export interface SettingsProps {
  user: User;
}

export interface OrdersProps {
  user: User;
}

export interface PagesProps {
  pageName: string;
}
