import { defineField, defineType } from 'sanity'

export const book = defineType({
  name: 'book',
  title: 'Book',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      options: { source: 'title' },
      description:
        'Used in the page web address — click "Generate" to fill this in from the title.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 5,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'badge',
      title: 'Award badge (optional)',
      type: 'string',
      description:
        'e.g. "Mom\'s Choice Gold Award Winner" — shown as a small badge on the cover. Leave blank for none.',
    }),
    defineField({
      name: 'bulkOrderNote',
      title: 'Bulk order note (optional)',
      type: 'text',
      rows: 2,
      description: 'e.g. a note about discounts for schools/educators. Leave blank for none.',
    }),
    defineField({
      name: 'featured',
      title: 'Feature this book prominently?',
      type: 'boolean',
      description:
        'Turn on for the one flagship book that should show large at the top of the Books page.',
      initialValue: false,
    }),
    defineField({
      name: 'buyLinks',
      title: 'Buy buttons',
      type: 'array',
      description:
        'Add one entry per purchase option (e.g. Bookshop.org, Amazon). The first one marked "Main button" is shown large; the rest show as smaller links.',
      of: [
        {
          type: 'object',
          name: 'buyLink',
          fields: [
            defineField({
              name: 'label',
              title: 'Button text',
              type: 'string',
              description: 'e.g. "Buy on Bookshop.org"',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'url',
              title: 'Link URL',
              type: 'url',
            }),
            defineField({
              name: 'primary',
              title: 'Main button?',
              type: 'boolean',
              initialValue: false,
            }),
          ],
          preview: {
            select: { title: 'label', subtitle: 'url' },
          },
        },
      ],
    }),
  ],
  preview: {
    select: { title: 'title', media: 'coverImage' },
  },
})
