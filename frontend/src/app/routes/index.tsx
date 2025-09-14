import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import Dashboard from "@/pages/Dashboard";
import Orders from "@/pages/Orders";
import Stock from "@/pages/Stock";
import Settings from "@/pages/Settings";
import type { User } from "@/types/Globals/User";
import { useInitPreferences } from "@/hooks/useInitPreferences";

function AppRouter() {
  useInitPreferences();
  const user: User = { id: "64f6a2b1d1f3c123456789ab", name: "Cosme" };
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/stock" element={<Stock />} />
          <Route path="/settings" element={<Settings user={user} />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default AppRouter;
