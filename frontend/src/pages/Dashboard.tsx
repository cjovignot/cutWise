// import type { DashboardProps } from "../types/Globals/Pages";
import { useTranslation } from "react-i18next";

export default function Dashboard() {
// { user }: DashboardProps
  const { t } = useTranslation();

  return (
    <>
      <h2>{t("dashboard")}</h2>
    </>
  );
}
