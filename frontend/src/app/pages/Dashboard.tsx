import {
  Card,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/common/Card";
import { useTranslation } from "react-i18next";
import { dashboardCardKeys } from "@/utils/dashboardCardsMap";

export default function Dashboard() {
  const { t } = useTranslation();

  // On mappe les clés pour obtenir directement les textes traduits
  const dashboardCards = dashboardCardKeys.map((card) => ({
    title: card.title ? t(card.title) : undefined,
    header: card.header ? t(card.header) : undefined,
    content: card.content ? t(card.content) : undefined,
    footer: typeof card.footer === "string" ? t(card.footer) : card.footer,
    value: card.value ? card.value : undefined,
    link: card.link ? card.link : undefined,
  }));

  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
      {dashboardCards.map((card, index) => (
        <Card link={card.link} key={index}>
          <CardTitle>{card.title}</CardTitle>
          <CardContent>
            {card.value ? (
              <p className="text-3xl font-bold">{card.value}</p>
            ) : (
              card.content
            )}
          </CardContent>
          <CardFooter>{card.footer}</CardFooter>
        </Card>
      ))}
    </div>
  );
}
