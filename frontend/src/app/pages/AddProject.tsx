import { useTranslation } from "react-i18next";
import { AddProjectProps } from "@/types/AddProjects";

export default function AddProject({ user }: AddProjectProps) {
  const { t } = useTranslation();

  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-3">AddProject</div>
  );
}
