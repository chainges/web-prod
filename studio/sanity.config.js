import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import schema from './schemas/schema'
import deskStructure from './deskStructure'
import { visionTool } from '@sanity/vision'
import { dashboardTool, projectInfoWidget, projectUsersWidget } from '@sanity/dashboard'
import { documentListWidget } from 'sanity-plugin-dashboard-widget-document-list'
import { netlifyWidget } from 'sanity-plugin-dashboard-widget-netlify'
import { documentInternationalization } from '@sanity/document-internationalization'
import { languages, baseLanguage } from './schemas/documents/languages'
import { languageFilter } from '@sanity/language-filter'
import { internationalizedArray } from 'sanity-plugin-internationalized-array'
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash'
import { colorInput } from '@sanity/color-input'
//console.log(schema)

export default defineConfig({
  title: 'Scope321',
  projectId: 'i2tixcom',
  dataset: 'production',
  plugins: [
    deskTool({
      structure: deskStructure
    }),
    visionTool(),
    dashboardTool({
      widgets: [
        projectInfoWidget(),
        projectUsersWidget(),
        netlifyWidget({
          name: 'netlify',
          sites: [
            {
              buildHookId: '60773a71d4c2651e752e6e01',
              title: 'Sanity Studio',
              name: 'Scope321-studio',
              apiId: 'e8b93f4a-0151-4e21-80a1-ef8e2e989f24'
            },
            {
              buildHookId: '60773a711cb1c51dae7a424a',
              title: 'Website',
              name: 'scope321-1',
              apiId: 'ca9922f3-ba8a-4531-8af1-cf3e2a194e85'
            }
          ]
        })
        // documentListWidget({
        //   showCreateButton:true,
        //   types:['post']
        // })
        // documentListWidget({
        //   //name: 'document-list',
        //  // options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
        //   layout: { width: 'medium' }
        // })
      ]
    }),
    colorInput(),
    documentInternationalization({
      supportedLanguages: languages,
      schemaTypes: ['page', 'siteSettings']
    }),
    unsplashImageAsset(),
    languageFilter({
      languages: languages,
      baseLanguage: baseLanguage
    }),
    internationalizedArray({ languages: languages, baseLanguage: baseLanguage, field: 'i18n_refs' })
  ],
  schema: {
    types: schema
  }
})
