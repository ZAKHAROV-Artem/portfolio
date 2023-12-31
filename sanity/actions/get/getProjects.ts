import { groq } from "next-sanity";
import { client } from "../../lib/client";
import { Project } from "@/types/project";

export default async function getProjects() {
  return await client.fetch<Project[]>(groq`
  *[_type == "project"] | order(_createdAt desc) {..., tech[]->{...,category->{name,_id}}} 
  `);
}
