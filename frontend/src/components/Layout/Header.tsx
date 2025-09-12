import { useTranslation } from "react-i18next";
import { FaBell, FaUserCircle } from "react-icons/fa";
import type { IconType } from "react-icons";

interface HeaderProps {
  pageName?: string;
  icon?: IconType;
  className?: string;
}

export default function Header({
  pageName,
  icon: Icon,
  className = "",
}: HeaderProps) {
  const { t } = useTranslation();
  const placeholder = t("search");

  return (
    <header
      className={`grid grid-cols-6 items-center gap-2 px-4 py-2 md:py-3 w-full ${className}`}
    >
      {/* Colonne 1 : titre avec icône */}
      <h2 className="items-center hidden col-span-3 text-xl font-bold md:flex">
        {Icon && <Icon size={24} className="mr-2" />}
        {t(`${pageName}`)}
      </h2>

      {/* Colonne 3 : barre de recherche */}
      <div className="w-full col-span-4 md:col-span-2">
        <input
          type="text"
          placeholder={placeholder}
          className="w-full h-8 px-3 py-1 rounded bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-[var(--theme-primary)]"
        />
      </div>

      {/* Colonne 4 : boutons */}
      <div className="flex items-center col-span-1 gap-0 md:gap-1 md:justify-end">
        <button className="p-2 transition-colors rounded hover:bg-gray-200 dark:hover:bg-gray-700">
          <FaBell size={20} />
        </button>
        <button className="p-2 transition-colors rounded hover:bg-gray-200 dark:hover:bg-gray-700">
          <FaUserCircle size={24} />
        </button>
      </div>
    </header>
  );
}
