import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { FaBoxOpen, FaCog, FaShoppingCart } from "react-icons/fa";

export default function BottomNavigation({
  className = "",
}: {
  className?: string;
}) {
  const { t } = useTranslation();
  const location = useLocation();

  const sections = [
    { label: t("dashboard"), path: "/", icon: <RxDashboard size={20} /> },
    { label: t("orders"), path: "/orders", icon: <FaShoppingCart size={20} /> },
    { label: t("catalog"), path: "/catalog", icon: <FaBoxOpen size={20} /> },
    { label: t("settings"), path: "/settings", icon: <FaCog size={20} /> },
  ];

  return (
    <nav
      id="bottomNav"
      className={`${className} fixed bottom-0 left-0 right-0 border-t border-gray-200/20 dark:border-gray-700 flex`}
    >
      {sections.map((s) => (
        <Link
          key={s.path}
          to={s.path}
          className={`flex-1 flex flex-col items-center justify-center py-4 transition-colors hover:bg-gray-100 dark:hover:bg-gray-700 ${
            location.pathname === s.path
              ? "bg-gray-300/80 dark:bg-gray-700 font-semibold"
              : ""
          }`}
        >
          {s.icon}
        </Link>
      ))}
    </nav>
  );
}
