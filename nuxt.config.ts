// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2025-07-15",
    devtools: { enabled: true },

    modules: ["@nuxt/fonts", "@nuxt/hints", "@nuxt/icon", "@nuxt/image", "@nuxt/test-utils"],
    app: {
        head: {
            link: [
                {
                    rel: "stylesheet",
                    href: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/devicon.min.css",
                },
            ],
            script: [
                {
                    src: "https://kit.fontawesome.com/7a26a17053.js",
                    crossorigin: "anonymous",
                },
            ],
        },
    },
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `
                  @use "@/assets/sass/abstracts/_colours.scss" as *;
                  @use "@/assets/sass/abstracts/_extends.scss" as *; 
                  @use "@/assets/sass/abstracts/_fonts.scss" as *;
                  @use "@/assets/sass/abstracts/_functions.scss" as *;
                  @use "@/assets/sass/abstracts/_mixins.scss" as *;
                  @use "@/assets/sass/abstracts/_variables.scss" as *;
                  @use "@/assets/sass/base/_animations.scss" as *;
                  @use "@/assets/sass/base/_base.scss" as *;
                  @use "@/assets/sass/base/_reset.scss" as *;
                  @use "@/assets/sass/base/_typography.scss" as *;
                  @use "@/assets/sass/components/_header.scss" as *;
                  @use "@/assets/sass/components/_services.scss" as *;
                  @use "@/assets/sass/layouts/_primary.scss" as *;
                  `,
                },
            },
        },
    },
    css: ["@/assets/sass/main.scss"],
    fonts: {
        families: [
            {
                name: "PP Writer",
                src: "/fonts/pp-writer/PPWriter-Thin.otf",
                weight: 100,
                style: "normal",
            },
            {
                name: "PP Writer",
                src: "/fonts/pp-writer/PPWriter-Regular.otf",
                weight: 400,
                style: "normal",
            },
            {
                name: "PP Writer Text",
                src: "/fonts/pp-writer/PPWriter-RegularText.otf",
                weight: 400,
                style: "normal",
            },
        ],
    },
    components: [
        {
            path: "~/components",
            pathPrefix: false,
        },
        // {
        //     path: "~/components/blog",
        //     pathPrefix: false,
        // },
        {
            path: "~/components/global",
            pathPrefix: false,
        },
        {
            path: "~/components/home",
            pathPrefix: false,
        },
        // {
        //     path: "~/components/layout",
        //     pathPrefix: false,
        // },
        {
            path: "~/components/shared",
            pathPrefix: false,
        },
        // {
        //     path: "~/components/shop",
        //     pathPrefix: false,
        // },
    ],
});
