import S from '@sanity/desk-tool/structure-builder'
import { MdMenu } from "react-icons/md"
import { GoBrowser as PageIcon, GoHome, GoSettings } from "react-icons/go"
import blog from './src/structure/blog'
import landingPages from './src/structure/landingPages'
import PreviewIFrame from './src/components/previewIFrame'

import * as I18nS from 'sanity-plugin-intl-input/lib/structure';
import {i18n} from './schemas/documents/documentTranslation';

const hiddenDocTypes = (listItem) =>
  !['route', 'navigationMenu', 'post', 'page', 'siteSettings', 'author', 'category'].includes(
    listItem.getId()
  )

export const getDefaultDocumentNode = (props) => {
  if (props.schemaType === 'page') {
    return S.document().views(I18nS.getDocumentNodeViewsForSchemaType(props.schemaType));
  } else if (props.schemaType === 'navigationMenu') {
    return S.document().views(I18nS.getDocumentNodeViewsForSchemaType(props.schemaType));
  }
  return S.document();
};

export default () =>
  S.list()
    .title('Content')
    .items([
      S.documentListItem()
        .schemaType('siteSettings')
        .title('Site settings')
        .icon(GoSettings)
        .child(
          S.document()
            .schemaType('siteSettings')
            .documentId('siteSettings')
            .views([S.view.form(), PreviewIFrame()])
        ),
      S.documentListItem()
        .title('Frontpage')
        .schemaType('page')
        .icon(GoHome)
        .child(
          S.documentList()
            .id('page')
            .title('Front Page')
            // Use a GROQ filter to get documents.
            .filter('_type == "page" && _id == "frontpage" && (!defined(_lang) || _lang == $baseLang)')
            .params({ baseLang: i18n.base })
            .canHandleIntent((_name, params, _context) => {
              // Assume we can handle all intents (actions) regarding post documents
              return params.type === 'page'
            })
          // S.document()
          //   .schemaType('page')
          //   .documentId('frontpage')
          //   .views([S.view.form(), PreviewIFrame()])
        ),
      blog,
      landingPages,
      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      ...S.documentTypeListItems().filter(hiddenDocTypes),
    ])
