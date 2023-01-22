import { createClient } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";
import { schemaTypes } from "portfolio-martin/schemas";

export const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  projectId: "1jwmybzg",
  useCdn: process.env.NODE_ENV === "production",
  version: "v2021-10-21",
  apiVersion: "2022-02-03",
  schema: {
    types: schemaTypes,
  },
};

export const sanityClient = createClient(config);

export const urlFor = (source: any) =>
  createImageUrlBuilder(config).image(source);
