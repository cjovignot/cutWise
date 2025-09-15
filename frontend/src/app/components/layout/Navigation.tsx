import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import type { IconType } from "react-icons";
import { pages } from "@/utils/iconsNavigationMap";

export function Sidebar({ className = "" }: { className?: string }) {
  const { t } = useTranslation();
  const location = useLocation();

  return (
    <div className="fixed top-0 left-0 hidden w-64 h-screen lg:flex">
      <aside
        id="sidebar"
        className={`${className} w-64 p-6 flex flex-col h-screen overflow-y-auto`}
      >
        <div className="flex p-4 mb-8 text-3xl card-title">CutWise</div>

        {pages
          .filter((page) => page.navigation)
          .map((page) => {
            const Icon: IconType = page.icon;
            const isActive = location.pathname === page.path;

            return (
              <Link
                key={page.path}
                to={page.path}
                className={`my-1 flex items-center gap-2 py-2 px-4 rounded-lg hover:bg-(--theme-primary)/20 dark:hover:bg-(--theme-primary)/20 dark:hover:text-white transition-colors ${
                  isActive
                    ? "bg-(--theme-primary)/40 dark:bg-(--theme-primary)/40 dark:text-white font-semibold"
                    : ""
                }`}
              >
                {Icon && <Icon size={20} />}
                {t(`${page.label}.title`)}
              </Link>
            );
          })}
      </aside>
    </div>
  );
}

export function BottomNavigation({ className = "" }: { className?: string }) {
  const location = useLocation();

  return (
    <div className="lg:hidden">
      <nav
        id="bottomNav"
        className={`${className} grid grid-cols-4 fixed bottom-0 left-0 right-0 flex`}
      >
        {pages
          .filter((page) => page.navigation)
          .map((page) => {
            const Icon: IconType = page.icon;
            const isActive = location.pathname === page.path;

            return (
              <Link
                key={page.path}
                to={page.path}
                className={`flex justify-center py-3 hover:bg-(--theme-primary)/20 dark:hover:bg-(--theme-primary)/20 dark:hover:text-white transition-colors ${
                  isActive
                    ? "bg-(--theme-primary)/40 dark:bg-(--theme-primary)/40 dark:text-white font-semibold"
                    : ""
                }`}
              >
                {Icon && <Icon size={25} />}
              </Link>
            );
          })}
      </nav>
    </div>
  );
}
