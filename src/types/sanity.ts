export type Project = {
  _createdAt: Date;
  _id: string;
  content: any[];
  images: Media[];
  link?: string;
  name: string;
  slug: string;
  tech: Tech[];
};
export type Tech = {
  _createdAt: Date;
  _id: string;
  category: TechCategory;
  experience?: number;
  image?: Media;
  name: string;
};
export type TechCategory = {
  _createdAt: Date;
  _id: string;
  name: string;
};

export type Media = {
  _key: string;
  _type: string;
  asset: {
    _ref: string;
    _type: string;
  };
};
