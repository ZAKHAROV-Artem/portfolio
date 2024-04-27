import { groq } from "next-sanity";
import { client } from "../../lib/client";
import { Project } from "@/types/sanity";

export default async function getProjects() {
  return await client.fetch<Project[]>(groq`
  *[_type == "project"] | order(_updatedAt desc) {..., tech[]->{...,category->{name,_id}}} 
  `);
}
