import { defineField, defineType } from 'sanity'

export const testimonial = defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    defineField({
      name: 'quote',
      title: 'Quote',
      type: 'text',
      rows: 3,
      description:
        'Just the words they said — no quotation marks needed, those show up automatically on the site.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'author',
      title: 'Author name',
      type: 'string',
      description: 'Who said it, e.g. "Erin Merryn"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'role',
      title: 'Author title or credential',
      type: 'string',
      description:
        'Shown right after the name, e.g. "MSW, Author and Founder of Erin\'s Law". Optional.',
    }),
  ],
  preview: {
    select: { title: 'author', subtitle: 'quote' },
  },
})
