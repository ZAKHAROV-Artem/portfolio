import { SchemaTypeDefinition } from "sanity";

import { project } from "./schemas/project";
import { tech } from "./schemas/tech";
import { techCategory } from "./schemas/tech-category";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [project, tech, techCategory],
};
