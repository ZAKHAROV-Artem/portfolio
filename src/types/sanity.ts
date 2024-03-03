export type Project = {
  _id: string;
  _createdAt: Date;
  name: string;
  slug: string;
  link?: string;
  tech: Tech[];
  images: Media[];
  content: any[];
};
export type Tech = {
  _id: string;
  _createdAt: Date;
  name: string;
  experience: number;
  category: TechCategory;
  image: Media;
};
export type TechCategory = {
  _id: string;
  _createdAt: Date;
  name: string;
};

export type Media = {
  asset: {
    _ref: string;
    _type: string;
  };
  _key: string;
  _type: string;
};
