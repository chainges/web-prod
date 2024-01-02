//import S from '@sanity/desk-tool/structure-builder'
import PreviewIFrame from '../../src/components/previewIFrame'

import {i18n} from '../../schemas/documents/documentTranslation';

import { MdMenu } from "react-icons/md"

export default (S)=> S.listItem()
  .title('Page Builder')
  .child(
    S.list()
      .title('Landing Pages')
      .items([
        S.listItem()
          .title('Navigation Menus')
          .icon(MdMenu)
          .schemaType('navigationMenu')
          .child(
            
            // S.documentList()
            //   .id('navigationMenu')
            //   .title('Navigation Menus')
            //   // Use a GROQ filter to get documents.
            //   .filter('_type == "navigationMenu" && (!defined(_lang) || _lang == $baseLang)')
            //   .params({ baseLang: i18n.base })
            //   .canHandleIntent((_name, params, _context) => {
            //     // Assume we can handle all intents (actions) regarding post documents
            //     return params.type === 'navigationMenu'
            //   })

            S.documentTypeList('navigationMenu')
              .title('Navigation Menus')
          ),
        S.listItem()
          .title('Routes')
          .schemaType('route')
          .child(
            S.documentTypeList('route')
              .title('Routes')
              .child((documentId) =>
                S.document()
                  .documentId(documentId)
                  .schemaType('route')
                  .views([S.view.form(), PreviewIFrame(S)])
              )
          ),
        S.listItem()
          .title('Pages')
          .schemaType('page')
          .child(
            S.documentList('page')
              .title('Pages')
              .menuItems(S.documentTypeList('page').getMenuItems())
              .filter('_type == "page" && _id != "frontpage"  && _id != "frontpage__i18n_no" && _id != "frontpage__i18n_en"')
          ),
      ])
  )
