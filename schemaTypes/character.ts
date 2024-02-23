import { UserIcon } from '@sanity/icons';
import {
  defineField,
  defineType,
  SlugRule,
  StringRule
} from 'sanity';

export default defineType({
  name: 'character',
  type: 'document',
  title: 'Character',
  icon: UserIcon,
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Name',
      validation: (Rule: StringRule) => Rule.required()
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      validation: (Rule: SlugRule) => Rule.required()
    })
  ]
});