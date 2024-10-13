import { defineField, defineType } from "sanity";

export const techCategory = defineType({
  fields: [
    defineField({
      name: "name",
      title: "Category name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
  ],
  name: "tech-category",
  title: "Tech category",
  type: "document",
});

