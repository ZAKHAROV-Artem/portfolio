import { groq } from "next-sanity";
import { client } from "../../lib/client";
import { Tech } from "@/types/sanity";

export default async function getTech() {
  return await client.fetch<Tech[]>(groq`
  *[_type == "tech"] | order(_createdAt asc){..., category->} 
  `);
}
