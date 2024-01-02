import { Tech } from "./tech";
import { Media } from "./media";

export type Project = {
  _id: string;
  _createdAt: Date;
  name: string;
  slug: string;
  link?: string;
  tech: Tech[];
  images: Media[];
  content:any[]
};
