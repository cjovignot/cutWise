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
    title: t(card.title),
    header: t(card.header),
    content: t(card.content),
    footer: t(card.footer),
    value: card.value ?? null, // optionnel si certaines cartes ont des valeurs dynamiques
  }));

  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
      {dashboardCards.map((card, index) => (
        <Card key={index}>
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
