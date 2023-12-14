/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\src\app\studio\[[...index]]\page.tsx` route
 */

import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { projectId, dataset, apiVersion } from "#/env";
import { schema } from "#/schema";
import { defineConfig } from "sanity";

const config = defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  plugins: [deskTool(), visionTool({ defaultApiVersion: apiVersion })],
  schema,
});
export default config;

