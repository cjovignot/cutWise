import { IoArrowForward } from "react-icons/io5";
import { CardKeys } from "@/types/Globals/Cards";

export const projectCardKeys: CardKeys[] = [
  {
    title: "projects.addProject.title",
    header: "projects.addProject.header",
    content: "projects.addProject.content",
    // footer: "projects.addProject.footer",
    footer: (
      <div className="flex justify-end w-full">
        <IoArrowForward className="text-2xl text-gray-200" />
      </div>
    ),
    link: "/projects/addProject",
  },
  {
    title: "projects.analyzer3D.title",
    header: "projects.analyzer3D.header",
    content: "projects.analyzer3D.content",
    // footer: "analyzer3D.footer",
    footer: (
      <div className="flex justify-end w-full">
        <IoArrowForward className="text-2xl text-gray-200" />
      </div>
    ),
    link: "/projects/analyzer3D",
  },
];
