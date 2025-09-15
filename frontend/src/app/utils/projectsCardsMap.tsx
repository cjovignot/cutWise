import { IoArrowForward } from "react-icons/io5";
import { CardKeys } from "@/types/Globals/Cards";

export const projectCardKeys: CardKeys[] = [
  {
    title: "projects.cards.add_project.title",
    header: "projects.cards.add_project.header",
    content: "projects.cards.add_project.content",
    // footer: "projects.cards.add_project.footer",
    footer: (
      <div className="flex justify-end w-full">
        <IoArrowForward className="text-2xl text-gray-200" />
      </div>
    ),
    link: "/addProject",
  },
  {
    title: "analyze_3D.cards.title",
    header: "analyze_3D.cards.header",
    content: "analyze_3D.cards.content",
    // footer: "analyze_3D.cards.footer",
    footer: (
      <div className="flex justify-end w-full">
        <IoArrowForward className="text-2xl text-gray-200" />
      </div>
    ),
    link: "/3Danalyzer",
  },
];
