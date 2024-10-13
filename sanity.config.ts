/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\src\app\studio\[[...index]]\page.tsx` route
 */

import { visionTool } from "@sanity/vision";
import { projectId, dataset, apiVersion } from "#/env";
import { schema } from "#/schema";
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

const config = defineConfig({
  basePath: "/studio",
  dataset,
  plugins: [deskTool(), visionTool({ defaultApiVersion: apiVersion })],
  projectId,
  schema,
});
export default config;

