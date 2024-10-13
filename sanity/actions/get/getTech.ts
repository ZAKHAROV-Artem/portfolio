import { Tech } from "@/types/sanity";
import { groq } from "next-sanity";

import { client } from "../../lib/client";

export default async function getTech() {
  return await client.fetch<Tech[]>(groq`
  *[_type == "tech"] | order(_createdAt asc){..., category->} 
  `);
}
