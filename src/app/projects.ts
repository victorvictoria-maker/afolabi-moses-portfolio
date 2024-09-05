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
    src: "/images/bunce.png",
    name: "Bunce",
    slug: "bunce",
    briefDescription:
      "A customer engagement platform for modern software companies.",
  },
  {
    id: 2,
    src: "/images/tasaafrica.png",
    name: "Tasa Africa",
    slug: "tasa-africa",
    briefDescription:
      "A groundbreaking platform designed to revolutionize the way sports talent is discovered, nurtured, and developed in Africa.",
  },
  {
    id: 3,
    src: "/images/arca.png",
    name: "Arca",
    slug: "arca",
    briefDescription:
      "Fintech solution that specializing in providing INNOVATIVE PAYMENT SOLUTIONS for businesses.",
  },
  {
    id: 4,
    src: "/images/arnergy.png",
    name: "Arnergy",
    slug: "arnergy",
    briefDescription: "An innovative energy solutions for small businesses.",
  },
];
