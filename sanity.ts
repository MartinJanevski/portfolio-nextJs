import { createClient } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";
import { schemaTypes } from "portfolio-martin/schemas";

export const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  useCdn: process.env.NODE_ENV === "production",
  schema: {
    types: schemaTypes,
  },
};

export const sanityClient = createClient(config);

export const urlFor = (source: any) =>
  createImageUrlBuilder(config).image(source);
