export interface Theme {
  id: string;
  label: string;
  primary: string;
}

export type ThemeMode = "light" | "dark";
export type Language = "fr" | "en";

export interface Preferences {
  themeMode: ThemeMode;
  themeColor: string;
  language: Language;
  avatarUrl?: string;
}
