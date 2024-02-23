import { TagIcon } from '@sanity/icons';
import {
  defineField,
  defineType,
  StringRule
} from 'sanity';

export default defineType({
  name: 'arc',
  type: 'document',
  title: 'Arc',
  icon: TagIcon,
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Name',
      validation: (Rule: StringRule) => Rule.required()
    })
  ]
});