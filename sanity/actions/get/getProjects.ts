import { Project } from "@/types/sanity";
import { groq } from "next-sanity";

import { client } from "../../lib/client";

export default async function getProjects() {
  return await client.fetch<Project[]>(groq`
  *[_type == "project"] | order(_updatedAt desc) {..., tech[]->{...,category->{name,_id}}} 
  `);
}
