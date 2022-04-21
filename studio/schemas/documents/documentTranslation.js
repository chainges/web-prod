import {languages, baseLanguage} from './languages'

// This is configuration for whole-document translations via sanity-intl plugin
// See https://github.com/LiamMartens/sanity-plugin-intl-input/blob/master/docs/general-configuration.md
export const i18n = {
  base: baseLanguage.name,
  languages,
  fieldNames: {
    lang: 'i18n_lang',
    references: 'i18n_refs'
  }
}

// helper function which adds i18n config to each schema with type === 'document' to dynamically add the configs and fields to all the custom schema types
const addLocalizationToDocumentType = (schemaType) => {
  if (schemaType.type !== 'document') {
    return schemaType
  }

  return {
    ...schemaType,
    i18n: {
      ...schemaType.i18n,
      base: baseLanguage,
      languages: languages,
      // change the names of the default fields
      fieldNames: {
        lang: 'i18n_lang',
        references: 'i18n_refs'
      }
    },
    // add the fields in so we can query with them on graphql
    fields: [
      ...schemaType.fields,
      {
        name: 'i18n_lang',
        type: 'string',
        hidden: true
      },
      {
        name: 'i18n_refs',
        type: 'array',
        hidden: true,
        of: [{
          type: 'i18n_refs_object'
        }]
      }
    ]
  }
}

export const addLocalizationToSchemaType = (schemaType) => {
  if (schemaType.type === 'object') {
    return schemaType
  } else {
    return addLocalizationToDocumentType(schemaType)
  }
}
