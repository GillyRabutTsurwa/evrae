// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2025-07-15",
    devtools: { enabled: true },

    modules: ["@nuxt/fonts", "@nuxt/icon", "@nuxt/test-utils", "@nuxt/image"],

    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `
                  @use "@/assets/sass/abstracts/_extends.scss" as *; 
                  @use "@/assets/sass/abstracts/_functions.scss" as *;
                  @use "@/assets/sass/abstracts/_mixins.scss" as *;
                  @use "@/assets/sass/abstracts/_variables.scss" as *;
                  @use "@/assets/sass/base/_animations.scss" as *;
                  @use "@/assets/sass/base/_base.scss" as *;
                  @use "@/assets/sass/base/_reset.scss" as *;
                  @use "@/assets/sass/base/_typography.scss" as *;
                  `,
                },
            },
        },
    },

    css: ["@/assets/sass/main.scss"],
});
