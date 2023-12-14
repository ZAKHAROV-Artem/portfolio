import { Tech } from "./tech";
import { ProjectMedia } from "./media";

export type Project = {
  _id: string;
  _createdAt: Date;
  name: string;
  slug: string;
  link?: string;
  tech: Tech[];
  images: ProjectMedia[];
};
