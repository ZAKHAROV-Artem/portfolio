import { defineField, defineType } from "sanity";

export const tech = defineType({
  fields: [
    defineField({
      name: "name",
      title: "Tech name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "experience",
      title: "Started using in (year)",
      type: "number",
    }),
    defineField({
      name: "category",
      title: "Tech category",
      to: [{ type: "tech-category" }],
      type: "reference",
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: "image",
      title: "Tech image",
      type: "image",
    }),
  ],
  name: "tech",
  title: "Technology",
  type: "document",
});