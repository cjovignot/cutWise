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
    title: card.title ? t(card.title) : undefined,
    header: card.header ? t(card.header) : undefined,
    content: card.content ? t(card.content) : undefined,
    footer: typeof card.footer === "string" ? t(card.footer) : card.footer,
    link: card.link ? card.link : undefined,
  }));

  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
      {projectCards.map((card, index) => (
        <Card link={card.link} key={index}>
          <CardTitle>{card.title}</CardTitle>
          <CardContent>{card.content}</CardContent>
          <CardFooter>{card.footer}</CardFooter>
        </Card>
      ))}
    </div>
  );
}
