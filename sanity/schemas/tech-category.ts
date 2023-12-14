import { defineType, defineField } from "sanity";

export const techCategory = defineType({
  name: "tech-category",
  title: "Tech category",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Category name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
  ],
});

