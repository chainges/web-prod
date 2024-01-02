import { defineConfig } from "sanity";
import { deskTool} from 'sanity/desk'
import schema from "./schemas/schema";
import deskStructure from "./deskStructure";
import { visionTool } from '@sanity/vision'
import { dashboardTool,projectInfoWidget,projectUsersWidget } from '@sanity/dashboard'
import { documentListWidget } from "sanity-plugin-dashboard-widget-document-list"
import dashboardConfig from "./dashboardConfig";
//console.log(schema)

export default defineConfig({
  title: "Scope321",
  projectId: "i2tixcom",
  dataset: "production",
  plugins: [deskTool({
    structure: deskStructure
  }),visionTool(),dashboardTool({widgets: [
    projectInfoWidget(),
    projectUsersWidget(),
    // documentListWidget({
    //   //name: 'document-list',
    //   // options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
    //   // layout: { width: 'medium' }
    // })
  ]})],
  schema: {
    types:  schema ,
  },
});