import type { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "./SideBar";
import BottomNavigation from "./BottomNavigation";
import Header from "./Header";
import { pages } from "../../utils/iconsMap";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();

  const pageName =
    pages.find((p) => p.path === location.pathname)?.label || "dashboard";
  const pageIcon = pages.find((p) => p.path === location.pathname)?.icon;

  return (
    <div className="flex w-full h-screen bg-gray-50 dark:bg-gray-900">
      {/* Sidebar fixe à gauche */}
      <div className="fixed top-0 left-0 hidden w-64 h-screen lg:flex">
        <Sidebar className="w-64" />
      </div>

      {/* Zone principale décalée */}
      <div className="flex flex-col flex-1 w-full h-screen lg:ml-64">
        {/* Header fixe en haut */}
        <div className="fixed top-0 left-0 right-0 z-10 lg:left-64">
          <Header pageName={pageName} icon={pageIcon} />
        </div>

        {/* Contenu scrollable sous le header */}
        <main className="flex-1 overflow-y-auto p-8 mt-[56px] md:mt-[64px]">
          {children}
        </main>

        {/* Navigation mobile en bas */}
        <BottomNavigation className="lg:hidden" />
      </div>
    </div>
  );
}
