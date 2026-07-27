import { type SchemaTypeDefinition } from 'sanity'

import { book } from './book'
import { testimonial } from './testimonial'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [testimonial, book],
}
