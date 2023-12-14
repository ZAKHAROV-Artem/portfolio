import { Media } from "./media";
import { TechCategory } from "./tech-category";

export type Tech = {
  _id: string;
  _createdAt: Date;
  name: string;
  experience: number;
  category: TechCategory;
  image: Media;
};
