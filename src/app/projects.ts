interface projectType {
  id: number;
  src: string;
  name: string;
  slug: string;
  briefDescription: string;
}
export interface EachProjectCardProps {
  eachProject: projectType;
}

export const projects: projectType[] = [
  {
    id: 1,
    src: "/images/pastwork1.svg",
    name: "Project Name 1",
    slug: "project-name-1",
    briefDescription: "Brief description of the project",
  },
  {
    id: 2,
    src: "/images/pastwork2.svg",
    name: "Project Name 2",
    slug: "project-name-2",
    briefDescription: "Brief description of the project",
  },
  {
    id: 3,
    src: "/images/pastwork3.svg",
    name: "Project Name 3",
    slug: "project-name-3",
    briefDescription: "Brief description of the project",
  },
  {
    id: 4,
    src: "/images/pastwork4.svg",
    name: "Project Name 4",
    slug: "project-name-4",
    briefDescription: "Brief description of the project",
  },
];
