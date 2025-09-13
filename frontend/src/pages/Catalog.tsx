// import type { CatalogProps } from "../types/Globals/Pages";
import { useTranslation } from "react-i18next";

export default function Catalog() {
  // { user }: CatalogProps
  const { t } = useTranslation();
  return (
    <>
      <h2>{t("catalog.title")}</h2>
    </>
  );
}
