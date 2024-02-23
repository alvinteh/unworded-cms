import { defineConfig, isDev } from 'sanity';
import { orderableDocumentListDeskItem } from '@sanity/orderable-document-list';
import { visionTool } from '@sanity/vision';
import { structureTool } from 'sanity/structure';
import { getStartedPlugin } from './plugins/sanity-plugin-tutorial';

import arc from './schemaTypes/arc';
import chapter from './schemaTypes/chapter';
import character from './schemaTypes/character';
import { BookIcon } from '@sanity/icons';

const devOnlyPlugins = [getStartedPlugin()]

export default defineConfig({
  name: 'default',
  title: 'Unworded',
  projectId: process.env.SANITY_PROJECT_ID as string,
  dataset: process.env.SANITY_DATASET as string,
  plugins: [
    structureTool({
      structure: (S, context) => {
        return S.list()
          .title('Writing')
          .items([
            orderableDocumentListDeskItem({
              title: 'Chapters',
              type: chapter.name,
              icon: BookIcon,
              S,
              context
            }),
            S.divider(),
            S.documentTypeListItem(arc.name)
              .title('Arcs'),
            S.documentTypeListItem(character.name)
              .title('Characters')
          ]);
        }
    }),
    visionTool(),
    ...(isDev ? devOnlyPlugins : [])
  ],

  schema: {
    types: (previousTypes) => {
      return [
        ...previousTypes,
        arc,
        chapter,
        character,
      ]
    }
  },
})

