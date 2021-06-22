// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'
import localeString from './objects/localeString'
import localeBodyPortableText from './objects/localeBodyPortableText';

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

import {languages, baseLanguage} from '../schemas/documents/languages';
import {addLocalizationToSchemaType} from './documents/documentTranslation';

const allPlugs = Object.values(plugs).map((plug) => {
  return { ...plug, fields: plugDefaultFields.concat(plug.fields) }
})

// add schemas here in which you want to add localization. make sure to commnet/delete that schema from below "createSchema"
let customSchemaTypes = [
  page,
  navMenu
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

export default createSchema({
  name: 'blog',
  types: schemaTypes // Built-in types
    // Our custom types
    .concat([
      latex,
      localeString,
      localeBodyPortableText,
      variation,
      openGraph,
      experiment,
      route,
      link,
      simpleBlockContent,
      cta,
      siteSettings,
      post,
      // navMenu,
      // page,
      category,
      author,
      mainImage,
      authorReference,
      instagram,
      videoEmbed,
      bodyPortableText,
      excerptPortableText,
      ...customSchemaTypes,
      i18n_refs_object
    ])
    .concat(allPlugs)
})
