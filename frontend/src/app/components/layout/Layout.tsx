import { useLocation } from "react-router-dom";
import { Sidebar, BottomNavigation } from "./Navigation";
import Header from "./Header";
import { pages } from "@/utils/iconsNavigationMap";
import type { LayoutProps } from "@/types/Globals/Layout";

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();

  // const pageName = pages.find((p) => p.path === location.pathname)?.label;
  const pageIcon = pages.find((p) => p.path === location.pathname)?.icon;

  const pathname = location.pathname === "/" ? "dashboard" : location.pathname;
  const segments = pathname?.split("/").filter((segment) => segment !== "");
  const pageName = segments?.join(".");

  return (
    <div className="flex w-full h-screen bg-gray-50 dark:bg-gray-900">
      {/* Sidebar fixe à gauche */}
      <Sidebar className="w-64" />

      {/* Zone principale décalée */}
      <div className="flex flex-col flex-1 w-full h-screen lg:ml-64">
        {/* Header fixe en haut */}
        <div className="fixed top-0 left-0 right-0 z-10 lg:left-64">
          <Header pageName={pageName} icon={pageIcon} />
        </div>

        {/* Contenu scrollable sous le header */}
        <main className="flex-1 overflow-y-auto px-4 py-8 md:p-8 mt-[56px] md:mt-[64px]">
          {children}
        </main>

        {/* Navigation mobile en bas */}
        <BottomNavigation />
      </div>
    </div>
  );
}
