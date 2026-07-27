import { defineField, defineType } from 'sanity'

export const aboutPage = defineType({
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  fields: [
    defineField({
      name: 'heroTagline',
      title: 'Hero tagline',
      type: 'string',
      description: 'The italic line under her name/title at the top of the page.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'bioParagraph1',
      title: 'Bio — paragraph 1',
      type: 'text',
      rows: 5,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'bioParagraph2',
      title: 'Bio — paragraph 2',
      type: 'text',
      rows: 5,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'searchingForHeading',
      title: '"Searching for" card heading',
      type: 'string',
      description: 'e.g. "If you\'re searching for:"',
    }),
    defineField({
      name: 'searchingForItems',
      title: '"Searching for" checklist items',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'offersHeading',
      title: '"Kimberly offers" card heading',
      type: 'string',
      description: 'e.g. "Kimberly offers:"',
    }),
    defineField({
      name: 'offersItems',
      title: '"Kimberly offers" checklist items',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'testimonialsHeading',
      title: 'Testimonials section heading',
      type: 'string',
      description: 'e.g. "What People Are Saying"',
    }),
    defineField({
      name: 'ctaHeading',
      title: 'Closing call-to-action heading',
      type: 'string',
      description: 'e.g. "Work with Kimberly"',
    }),
    defineField({
      name: 'ctaButtonLabel',
      title: 'Closing call-to-action button text',
      type: 'string',
      description: 'e.g. "Get in Touch" — always links to the Contact page.',
    }),
  ],
})
