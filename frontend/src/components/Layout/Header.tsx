import { useTranslation } from "react-i18next";
import { FaBell, FaUserCircle } from "react-icons/fa";
import type { IconType } from "react-icons";

interface HeaderProps {
  pageName?: string;
  icon?: IconType;
}

export default function Header({ pageName, icon: Icon }: HeaderProps) {
  const { t } = useTranslation();
  const placeholder = t("search");

  // CECI EST UN TEST

  return (
    <header className="flex items-center justify-between w-full px-3 py-2 md:p-3">
      <h2 className="items-center hidden font-bold text-text-2xl md:flex">
        {Icon && <Icon size={24} className="mr-4" />} {t(`${pageName}`)}
      </h2>

      {/* Champ de recherche */}
      <div className="flex items-center justify-between w-full gap-2 md:justify-end">
        <input
          type="text"
          placeholder={placeholder}
          className="w-fit h-8 px-2 py-1 rounded bg-gray-700/5 dark:bg-white/10 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-[var(--theme-primary)] w-96"
        />
        <div className="flex items-center">
          {/* Boutons */}
          <button className="p-2 transition-colors rounded hover:bg-gray-200 dark:hover:bg-gray-700">
            <FaBell size={20} />
          </button>
          <button className="p-2 transition-colors rounded hover:bg-gray-200 dark:hover:bg-gray-700">
            <FaUserCircle size={24} />
          </button>
        </div>
      </div>
    </header>
  );
}
