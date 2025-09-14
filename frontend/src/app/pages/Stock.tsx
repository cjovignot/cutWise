import { useTranslation } from "react-i18next";
import type { StockCardProps } from "@/features/Stock/types";

function StockCard({ title, description }: StockCardProps) {
  return (
    <div className="flex flex-col p-4 bg-white border shadow rounded-2xl">
      <h3 className="mb-2 text-lg font-semibold">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}

export default function Stock() {
  const { t } = useTranslation();

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold">{t("stock.title")}</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <StockCard
          title={t("stock.raw_wood")}
          description={t("stock.raw_wood_desc")}
        />
        <StockCard
          title={t("stock.scraps")}
          description={t("stock.scraps_desc")}
        />
      </div>
    </div>
  );
}
