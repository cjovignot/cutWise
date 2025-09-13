import { useTranslation } from "react-i18next";

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col p-4 bg-white shadow justify-evenly min-h-36 dark:bg-white/20 rounded-3xl">
      {children}
    </div>
  );
}

function CardHeader({ children }: { children: React.ReactNode }) {
  return <div className="mb-2">{children}</div>;
}

function CardTitle({ children }: { children: React.ReactNode }) {
  return <h3 className="text-lg font-semibold">{children}</h3>;
}

function CardContent({ children }: { children: React.ReactNode }) {
  return <div className="text-xs">{children}</div>;
}
function CardFooter({ children }: { children: React.ReactNode }) {
  return <div className="text-xs">{children}</div>;
}

export default function Dashboard() {
  const { t } = useTranslation();

  return (
    <div className="">
      {/* <h2 className="mb-6 text-2xl font-bold">{t("dashboard.title")}</h2> */}

      {/* Grid responsive */}
      <div className="grid grid-cols-2 gap-3 md:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>
              {t("dashboard.dashboard_cards.account_stats.title")}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">123</p>
          </CardContent>
          <CardFooter>
            <p className="text-muted-foreground">
              {t("dashboard.dashboard_cards.account_stats.count_users")}
            </p>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>
              {t("dashboard.dashboard_cards.projects_stats.title")}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">45</p>
          </CardContent>
          <CardFooter>
            <p className="text-muted-foreground">
              {t("dashboard.dashboard_cards.projects_stats.onGoingProjects")}
            </p>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>
              {t("dashboard.dashboard_cards.revenue_stats.title")}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">12,34 €</p>
          </CardContent>
          <CardFooter>
            <p className="text-muted-foreground">
              {t("dashboard.dashboard_cards.revenue_stats.current_month")}
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
