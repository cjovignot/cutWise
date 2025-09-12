import type { DashboardProps } from "../types/Globals/Pages";

export default function Dashboard({ user }: DashboardProps) {
  return (
    <>
      <p>Bienvenue, {user.name || user.id}</p>
    </>
  );
}
