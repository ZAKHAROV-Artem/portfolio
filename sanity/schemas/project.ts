import { defineType, defineField,defineArrayMember } from "sanity";

export const project = defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Project name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: "Slug",
      name: "slug",
      type: "slug",
      validation: (Rule) => Rule.required(),
      options: {
        source: "name",
        maxLength: 200, // will be ignored if slugify is set
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      },
    }),
    defineField({
      title: "Link",
      name: "link",
      type: "url",
    }),
    defineField( {
      name: "tech",
      title: "Used technologies",
      type: "array",
      validation: (Rule) => Rule.required(),
      of: [
        defineArrayMember( {
          type: "reference",
          validation: (Rule) => Rule.required(),
          to: [{ type: "tech" as const }],
        }),
      ],
    }),
    defineField({
      name: "images",
      title: "Project images",
      type: "array",
      validation: (Rule) => Rule.required(),
      of: [
        defineArrayMember({
          type: "image",
          
        }),
      ],
    }),
    defineField({
      name: 'content',
  type: 'array',
  title: 'Content',
  of: [
    defineArrayMember({
      type: 'block'
    })
  ]
    })
  ],
});

