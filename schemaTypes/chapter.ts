import {
  ArrayRule,
  BlockRule,
  defineArrayMember,
  defineField,
  defineType,
  StringRule
} from 'sanity';
import { orderRankField } from '@sanity/orderable-document-list';

import arc from './arc';
import character from './character';
import { BookIcon } from '@sanity/icons';

export default defineType({
  name: 'chapter',
  type: 'document',
  title: 'Chapter',
  icon: BookIcon,
  preview: {
    select: {
      style: 'style',
      perspective: 'perspective.name',
      title: 'title'
    },
    prepare(selection) {
      const {
        style,
        perspective,
        title
      } = selection;

      return {
        title: style === 'narrative' ? perspective : title,
        subtitle: style.charAt(0).toUpperCase() + style.slice(1)
      };
    }
  },
  fields: [
    orderRankField({
      type: 'chapter',
      newItemPosition: 'after'
    }),
    defineField({
      name: 'style',
      title: 'Style',
      type: 'string',
      initialValue: 'narrative',
      options: {
        list: [
          { title: 'Exposition', value: 'exposition' },
          { title: 'Narrative', value: 'narrative' },
          { title: 'Poetry', value: 'poetry' },
        ]
      },
      validation: (Rule: StringRule) => Rule.required()
    }),
    defineField({
      name: 'perspective',
      title: 'Perspective',
      type: 'reference',
      to: [{ type: character.name }],
      hidden: ({ document }) => document?.style !== 'narrative'
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      hidden: ({ document }) => document?.style === 'narrative'
    }),
    defineField({
      name: 'arcs',
      title: 'Arcs',
      type: 'array',
      of: [defineArrayMember({ type: 'reference', to: [{ type: arc.name }] })]
    }),
    defineField({
      name: 'characters',
      title: 'Characters',
      type: 'array',
      of: [defineArrayMember({ type: 'reference', to: [{ type: character.name }] })],
      validation: (Rule: ArrayRule<StringRule>) => Rule.unique()
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [defineArrayMember({ type: 'block' })],
      validation: (Rule: ArrayRule<BlockRule>) => Rule.required()
    }),
    defineField({
      name: 'isPublished',
      title: 'Published',
      type: 'boolean'
    })
  ]
});