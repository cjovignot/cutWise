import { CardKeys } from "@/types/Globals/Cards";

export const dashboardCardKeys: CardKeys[] = [
  {
    header: "",
    title: "dashboard.dashboard_cards.account_stats.title",
    content: "",
    footer: "dashboard.dashboard_cards.account_stats.count_users",
    value: 123,
  },
  {
    header: "",
    title: "dashboard.dashboard_cards.projects_stats.title",
    content: "",
    footer: "dashboard.dashboard_cards.projects_stats.onGoingProjects",
    value: 45,
    link: "/projects",
  },
  {
    header: "",
    title: "dashboard.dashboard_cards.revenue_stats.title",
    content: "",
    footer: "dashboard.dashboard_cards.revenue_stats.current_month",
    value: "12.34 €",
  },
];
