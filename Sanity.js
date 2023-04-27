
import createImageUrlBuilder from "@sanity/image-url";
import {createClient} from "@sanity/client";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiversion = process.env.NEXT_PUBLIC_SANITY_API_VERSION;

export const config = {
    projectId,
    dataset,
    apiversion,
    useCdn: true,
};

export const sanityClient = createClient(config);
export const urlFor = (source) => createImageUrlBuilder(config).image(source);
