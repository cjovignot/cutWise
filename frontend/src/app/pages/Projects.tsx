import {
  Card,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/common/Card";
import { useTranslation } from "react-i18next";
import { projectCardKeys } from "@/utils/projectsCardsMap";

export default function Projects() {
  const { t } = useTranslation();
  const projectCards = projectCardKeys.map((card) => ({
    title: t(card.title),
    header: t(card.header),
    content: t(card.content),
    footer: card.footer,
  }));

  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
      {projectCards.map((card) => (
        <Card>
          <CardTitle>{card.title}</CardTitle>
          <CardContent>{card.content}</CardContent>
          <CardFooter>{card.footer}</CardFooter>
        </Card>
      ))}
    </div>
  );
}
