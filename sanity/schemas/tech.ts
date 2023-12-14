import { defineType, defineField } from "sanity";

export const tech = defineType({
  name: "tech",
  title: "Technology",
  type: "document",
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
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: "category",
      title: "Tech category",
      type: "reference",
      to: [{ type: "tech-category" }],
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: "image",
      title: "Tech image",
      type: "image",
      validation: (Rule) => Rule.required()
    }),
  ],
});