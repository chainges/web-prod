// Import necessary modules
import { GoSettings, GoHome } from "react-icons/go";
import { MdMenu } from "react-icons/md";
import blog from './src/structure/blog';
import landingPages from './src/structure/landingPages';
import PreviewIFrame from './src/components/previewIFrame';
import { i18n } from './schemas/documents/documentTranslation';

// Define a function to filter out document types
const hiddenDocTypes = (listItem) =>
  !['route', 'navigationMenu', 'post', 'page', 'siteSettings', 'author', 'category'].includes(
    listItem.getId()
  );

// Define a function to get default document node
const getDefaultDocumentNode = (S, props) => {
  if (props.schemaType === 'page' || props.schemaType === 'navigationMenu') {
    return S.document().views(props.schemaType);
  }
  return S.document();
};

// Define the structure
const structure = (S) =>
  S.list()
    .title('Content')
    .items([
      S.documentListItem()
        .schemaType('siteSettings')
        .title('Site settings')
        .icon(GoSettings)
        .child(
                    
          // S.documentList()
          //   .id('siteSettings')
          //   .title('Site Settings')
          //   // Use a GROQ filter to get documents.
          //   .filter('_type == "siteSettings"')
          //   .canHandleIntent((_name, params, _context) => {
          //     // Assume we can handle all intents (actions) regarding post documents
          //     return params.type === 'siteSettings'
          //   })
          S.document()
            .schemaType('siteSettings')
            .documentId('siteSettings')
            .views([S.view.form(), PreviewIFrame(S)])
        ),
      S.documentListItem()
        .title('Frontpage')
        .schemaType('page')
        .icon(GoHome)
        .child(
          S.documentList()
            .id('page')
            .title('Front Page')
            .filter('_type == "page" && _id == "frontpage" && (!defined(_lang) || _lang == $baseLang)')
            .params({ baseLang: i18n.base })
            .canHandleIntent((_name, params, _context) => {
              return params.type === 'page'
            })
             // S.document()
          //   .schemaType('page')
          //   .documentId('frontpage')
          //   .views([S.view.form(), PreviewIFrame()])
        ),

      blog(S),
      landingPages(S),

        // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      ...S.documentTypeListItems().filter(hiddenDocTypes),
    ])
export default structure;
