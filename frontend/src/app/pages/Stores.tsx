import { useTranslation } from "react-i18next";

export default function Stores() {
  const { t } = useTranslation();
  return (
    <>
      <h2>{t("stores.title")}</h2>
    </>
  );
}
