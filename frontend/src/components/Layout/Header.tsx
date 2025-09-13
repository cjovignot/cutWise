import { useTranslation } from "react-i18next";
import { FaBell, FaUserCircle } from "react-icons/fa";
import type { IconType } from "react-icons";

interface HeaderProps {
  pageName?: object;
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
      className={`flex items-center gap-2 py-3 px-4 md:py-3 w-full ${className}`}
    >
      {/* Colonne 1 : titre avec icône */}
      <h2 className="items-center hidden col-span-3 text-xl font-bold md:flex md:w-full">
        {Icon && <Icon size={24} className="mr-2" />}
        {t(`${pageName}.title`)}
      </h2>

      {/* Colonne 3 : barre de recherche */}
      <div className="flex justify-end w-full">
        <input
          type="text"
          placeholder={placeholder}
          className="w-full md:w-96 h-10 px-3 py-1 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-[var(--theme-primary)]"
        />
      </div>

      {/* Colonne 4 : boutons */}
      <div className="flex items-center gap-0 md:gap-1 md:justify-end">
        <button className="p-2 transition-colors rounded hover:bg-gray-200 dark:hover:bg-gray-700">
          <FaBell size={25} />
        </button>
        <button className="p-2 transition-colors rounded hover:bg-gray-200 dark:hover:bg-gray-700">
          <FaUserCircle size={29} />
        </button>
      </div>
    </header>
  );
}
