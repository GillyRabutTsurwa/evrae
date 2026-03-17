import { defineCliConfig } from "sanity/cli";
import { projectId, dataset } from "./config.define";

export default defineCliConfig({
  api: {
    projectId: process.env.SANITY_STUDIO_PROJECT_ID,
    dataset: process.env.SANITY_STUDIO_DATASET,
  },
  studioHost: "evræ",
  deployment: {
    appId: process.env.SANITY_STUDIO_APP_ID,
  },
});
