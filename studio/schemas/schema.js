// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'
import localeString from './objects/localeString'

// document schemas
import navMenu from './documents/navMenu'
import author from './documents/author'
import category from './documents/category'
import post from './documents/post'
import page from './documents/page'
import siteSettings from './documents/siteSettings'
import route from './documents/route'

import experiment from './objects/experiment'
import simpleBlockContent from './objects/simpleBlockContent'

import * as plugs from './plugs'
import plugDefaultFields from './plugs/_plugDefaultFields'

// Object types
import { instagram, videoEmbed } from './objects/embeds'
import cta from './objects/cta'
import bodyPortableText from './objects/bodyPortableText'
import excerptPortableText from './objects/excerptPortableText'
import mainImage from './objects/mainImage'
import authorReference from './objects/authorReference'
import link from './objects/link'
import variation from './objects/variation'
import openGraph from './objects/openGraph'
import latex from './latex'

const allPlugs = Object.values(plugs).map((plug) => {
  return { ...plug, fields: plugDefaultFields.concat(plug.fields) }
})


// helper function which adds i18n config to each schema with type === 'document' to dynamically add the configs and fields to all the custom schema types
const addLocalizationToDocumentType = (schemaType) => {
  if (schemaType.type !== 'document') {
    return schemaType
  }

  return {
    ...schemaType,
    i18n: {
      ...schemaType.i18n,
      base: {name: 'en', title: 'English'},
      languages: [{name: 'en', title: 'English'}, {name: 'no', title: 'Norwegian'}],
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
          type: 'i18n_refs_object',
        }]
      }
    ]
  }
}

const addLocalizationToSchemaType = (schemaType) => {
  if (schemaType.type === 'object') {
    return schemaType
  } else {
    return addLocalizationToDocumentType(schemaType)
  }
}

let customSchemaTypes = [
  // page
]
const i18n_refs_object = {
  name: 'i18n_refs_object',
  type: 'object',
  fields: [{
    type: 'string',
    name: 'lang'
  }, {
    type: 'reference',
    name: 'ref',
    // map over all the custom values to create a dynamic array of types which should be referenced
    to: customSchemaTypes.map(customSchema => customSchema?.type === 'document' ? {type: customSchema.name} : null).filter(Boolean)
  }]
};
customSchemaTypes = customSchemaTypes.map(schema => addLocalizationToSchemaType(schema))
console.log(customSchemaTypes);
export default createSchema({
  name: 'blog',
  types: schemaTypes // Built-in types
    // Our custom types
    .concat([
      latex,
      localeString,
      variation,
      openGraph,
      experiment,
      route,
      link,
      simpleBlockContent,
      cta,
      siteSettings,
      post,
      navMenu,
      page,
      category,
      author,
      mainImage,
      authorReference,
      instagram,
      videoEmbed,
      bodyPortableText,
      excerptPortableText,
      ...customSchemaTypes,
      // i18n_refs_object
    ])
    .concat(allPlugs)
})
