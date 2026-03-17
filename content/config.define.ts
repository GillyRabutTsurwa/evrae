import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { dashboardTool } from "@sanity/dashboard";
import { presentationTool } from "sanity/presentation";
import { EditIcon, DesktopIcon, UserIcon, type IconComponent } from "@sanity/icons";
import { codeInput } from "@sanity/code-input";
import { colorInput } from "@sanity/color-input";
import { media } from "sanity-plugin-media";
import { netlifyWidget } from "sanity-plugin-dashboard-widget-netlify";
import { schemaTypes } from "./schemas";
import Logo from "./components/Logo";
import "./custom.css";

export const projectId = process.env.SANITY_STUDIO_PROJECT_ID!;
export const dataset = process.env.SANITY_STUDIO_DATASET!;

export const settings = (envName: string, envID: string = "g014cs9v", envTheme: any, envIcon: IconComponent) => {
  return {
    name: envName,
    title: envName.charAt(0).toUpperCase().slice(1),
    projectId: envID,
    dataset: envName,
    basePath: `/${envName}`,

    plugins: [
      dashboardTool({
        widgets: [
          netlifyWidget({
            title: "Netlify Deploys",
            sites: [
              {
                title: "evræ",
                apiId: "17522521-ce15-47d1-9288-36141d48a17f",
                buildHookId: "692a0f6a5e97e0284483da67",
                name: "evrae",
                branch: "master",
                url: "https://evrae.io",
              },
            ],
          }),
        ],
      }),
      structureTool({
        structure: (S) => {
          return S.list()
            .title("Gil's Content")
            .items([
              S.listItem()
                .title("Posts")
                .icon(EditIcon)
                .child(
                  S.list()
                    .title("Posts")
                    .items([
                      S.listItem()
                        .title("Personal")
                        .icon(UserIcon)
                        .child((categoryId) => S.documentList().title("Personal Posts").filter('_type == "post" && postGenre == "personal"').params({ categoryId })),
                      S.listItem()
                        .title("Tech")
                        .icon(DesktopIcon)
                        .child((categoryId) => S.documentList().title("Tech Posts").filter('_type == "post" && postGenre == "tech"').params({ categoryId })),
                    ]),
                ),
              // The rest of this document is from the original manual grouping in this series of articles
              //NOTE: ca affiche les autres documents
              ...S.documentTypeListItems().filter((listItem) => !["post"].includes(listItem.getId() as string)),
            ]);
        },
      }),
      visionTool(),
      codeInput(),
      colorInput(),
      presentationTool({
        previewUrl: {
          origin: process.env.SANITY_STUDIO_PREVIEW_URL,
          preview: "/",
          previewMode: {
            enable: "/preview/enable",
            disable: "/preview/disable",
          },
        },
      }),
      media(),
    ],
    icon: envIcon,

    schema: {
      types: schemaTypes,
    },

    studio: {
      components: {
        logo: Logo,
      },
    },

    theme: envTheme,
  };
};
