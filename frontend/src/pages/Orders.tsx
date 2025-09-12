import { useTranslation } from "react-i18next";

export default function Orders() {
  const { t } = useTranslation();
  return (
    <>
      <h2>{t("orders")}</h2>
    </>
  );
}
