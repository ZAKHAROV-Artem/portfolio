import { defineArrayMember, defineField,defineType } from "sanity";

export const project = defineType({
  fields: [
    defineField({
      name: "name",
      title: "Project name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      options: {
        maxLength: 200, // will be ignored if slugify is set
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
        source: "name",
      },
      title: "Slug",
      type: "slug",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "link",
      title: "Link",
      type: "url",
    }),
    defineField( {
      name: "tech",
      of: [
        defineArrayMember( {
          to: [{ type: "tech" as const }],
          type: "reference",
          validation: (Rule) => Rule.required(),
        }),
      ],
      title: "Used technologies",
      type: "array",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "images",
      of: [
        defineArrayMember({
          type: "image",
          
        }),
      ],
      title: "Project images",
      type: "array",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'content',
  of: [
    defineArrayMember({
      type: 'block'
    })
  ],
  title: 'Content',
  type: 'array'
    })
  ],
  name: "project",
  title: "Project",
  type: "document",
});

