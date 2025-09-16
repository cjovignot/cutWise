import { useTranslation } from "react-i18next";
import type { StockCardProps } from "@/features/Stock/types";

function StockCard({ title, description }: StockCardProps) {
  return (
    <div className="flex flex-col justify-between p-4 transition duration-200 bg-white shadow hover:bg-white/0 dark:hover:bg-white/10 hover:cursor-pointer min-h-20 dark:bg-white/20 rounded-3xl">
      <h3 className="mb-2 text-lg font-semibold"> {title ?? { title }}</h3>
      <p className="text-xs text-gray-600 dark:text-white">
        {" "}
        {description ?? { description }}
      </p>
    </div>
  );
}

export default function Stock() {
  const { t } = useTranslation();

  return (
    <div className="space-y-6">
      {/* <h2 className="text-xl font-bold">{t("stock.title")}</h2> */}
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-3">
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
