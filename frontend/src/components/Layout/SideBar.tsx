import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import { pages } from "../../utils/iconsMap";
import type { IconType } from "react-icons";

export default function Sidebar({ className = "" }: { className?: string }) {
  const { t } = useTranslation();
  const location = useLocation();

  return (
    <aside
      className={`${className} w-64 p-6 flex flex-col h-screen overflow-y-auto`}
    >
      <div className="flex p-4 mb-8 text-3xl card-title">CutWise</div>

      {pages.map((page) => {
        const Icon: IconType = page.icon;
        const isActive = location.pathname === page.path;

        return (
          <Link
            key={page.path}
            to={page.path}
            className={`my-1 flex items-center gap-2 py-2 px-4 rounded-lg hover:bg-sky-900/10 dark:hover:bg-white/60 transition-colors ${
              isActive ? "bg-sky-900/10 dark:bg-white/60 font-semibold" : ""
            }`}
          >
            {Icon && <Icon size={20} />}
            {t(`${page.label}.title`)}
          </Link>
        );
      })}
    </aside>
  );
}
