import { defineField, defineType } from 'sanity'

export const homePage = defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    defineField({
      name: 'heroHeadline',
      title: 'Hero headline',
      type: 'string',
      description: 'The big line at the top of the home page.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroSubhead',
      title: 'Hero subhead',
      type: 'text',
      rows: 3,
      description: 'The bolder line right under the headline.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroBody',
      title: 'Hero body text',
      type: 'text',
      rows: 4,
      description: 'The paragraph under the subhead.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'videoSectionHeading',
      title: 'Video section heading',
      type: 'string',
      description: 'The heading above the video, e.g. "See I Said No! In Action".',
    }),
  ],
})
