import { defineField, defineType } from 'sanity'

export const speakingPage = defineType({
  name: 'speakingPage',
  title: 'Speaking Page',
  type: 'document',
  fields: [
    defineField({
      name: 'heroHeadline',
      title: 'Hero headline',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroSubhead',
      title: 'Hero subhead',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroBody',
      title: 'Hero body text',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'topicsHeading',
      title: 'Speaking topics section heading',
      type: 'string',
      description: 'e.g. "Speaking Topics That Drive Impact"',
    }),
    defineField({
      name: 'topics',
      title: 'Speaking topics',
      type: 'array',
      description: 'Drag to reorder — this is the order they show on the page.',
      of: [
        {
          type: 'object',
          name: 'topic',
          fields: [
            defineField({ name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required() }),
            defineField({ name: 'description', title: 'Description', type: 'text', rows: 2 }),
          ],
          preview: { select: { title: 'title', subtitle: 'description' } },
        },
      ],
    }),
    defineField({
      name: 'topicsClosingLine',
      title: 'Line under the topics grid',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'bookingHeading',
      title: 'Booking section heading',
      type: 'string',
      description: 'e.g. "Book Kimberly For Your Event"',
    }),
    defineField({
      name: 'bookingOptions',
      title: 'Booking tiers',
      type: 'array',
      description: 'Drag to reorder.',
      of: [
        {
          type: 'object',
          name: 'bookingOption',
          fields: [
            defineField({ name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required() }),
            defineField({
              name: 'priceLabel',
              title: 'Price label',
              type: 'string',
              description: 'e.g. "Price TBD" or "$1,500"',
            }),
          ],
          preview: { select: { title: 'title', subtitle: 'priceLabel' } },
        },
      ],
    }),
    defineField({
      name: 'videoHeading',
      title: 'Video section heading',
      type: 'string',
      description: 'e.g. "Watch Kimberly In Action"',
    }),
    defineField({
      name: 'contactHeading',
      title: 'Contact section heading',
      type: 'string',
    }),
    defineField({
      name: 'contactBody',
      title: 'Contact section body text',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'closingTagline',
      title: 'Closing tagline band',
      type: 'string',
      description: 'The line in the colored band at the very bottom of the page.',
    }),
  ],
})
