<script setup lang="ts">
const { assets } = useAssets();
const { css, javascript, vue, svelte, react } = assets;
//NOTE: juste pour le moment
type Thumbnail = {
    img: string;
    siteLink: string;
    githubLink: string;
    isFavourite: boolean;
};

interface State {
    assets: Array<Thumbnail>
}

const state: State  = reactive({
    assets: [...assets.css, ...assets.javascript, ...assets.vue, ...assets.svelte, ...assets.react]
});


const randomAsset = computed(() => {
    return state.assets[Math.floor(Math.random() * (state.assets.length))]
});
</script>

<template>
    <header class="header tete">
        <figure class="header__logo">
            <!-- <Devicon/> -->
             <img src="~assets/images/svg/IMG-20251015-WA0030.svg" alt="test">
        </figure>
        <div class="header__title">
            <h1 class="header__title--primary">Evræ</h1>
            <!-- <h2 class="header__title--secondary">Digital Elegance</h2> -->
        </div>
        <div class="header__sub">
            <h2>Digital Elegance. Innovating the web experience and other stuff that cuzo will be responsible for putting here. </h2>
        </div>
        <figure class="header__showcase">
            <NuxtLink :to="randomAsset?.siteLink">
                <img :src="randomAsset?.img" alt="">
            </NuxtLink>
        </figure>
        <div class="header__cta">
            <Button colourPrimary="#232323" colourSecondary="#f8d6ad"/>
        </div>
    </header>
</template>

<style lang="scss" scoped>
.header {
    // min-height: 100vh; // on le ramene
    grid-column: 1 / -1;
    position: relative;
    display: grid;
    grid-template-rows: 65dvh 35dvh;
    grid-template-columns: subgrid;
    // grid-template-columns: 1fr repeat(10, minmax(min-content, 14rem)) 1fr;
    // background-color: $colour-primary;

    @include breakpoint(1023) {
        min-height: max-content;
        padding-bottom: 3rem;
        place-items: center;
        grid-template-columns: 1fr;
        grid-auto-rows: min-content;
        // order: 1; //NOTE: this works because i display the parent (#app) to be display: grid in pages/index.vue
    }

    // TESTING
    & .icon {
        align-self: center;
        grid-column: 2 / 3;
        transform: translateX(-10rem);
        // transform: translate(-10rem, -5rem); // deplacer vers le gauche juste un peu na juu kidogo

        @include breakpoint(1023) {
            grid-column: 1 / 2; //NOTE; reinitialise la configuration dessus
            transform: translateX(0);
        }
    }

    &__logo {
        display: inline-block;
        position: absolute;
        top: 3rem;
        left: 3rem;
        width: 7rem;
        height: 7rem;
        z-index: 1000;

        & img {
            width: 100%;
            height: 100%;
        }

        & i[class^="devicon"] {
            font-size: 7rem;
        }
    }

    &__title {
        grid-column: 1 / -1;
        place-self: center;
        // text-align: center;
        z-index: 1000;
        color: $colour-secondary;

        @include breakpoint(1023) {
            padding-right: unset; //NOTE: so this does work. same as padding-right: 0;
            margin-top: 12rem;
        }

        &.gauche {
            place-self: end start;
            margin-left: 10rem;
        }

        &--primary {
            font-size: 27.5rem;
            font-weight: 600;
            // padding-bottom: 2rem;
            //TESTING
            opacity: 1;
            transition: all 2.5s ease;

            @include breakpoint(767) {
                margin-top: 4rem;
                font-size: 9rem;
            }

            span {
                margin-right: 4rem;

                //NOTE: not sure if i want this yet
                // &:nth-of-type(2) {
                //     margin-left: 15rem;
                // }

                // &:nth-of-type(3) {
                //     margin-left: 40rem;
                // }
            }
        }

        &--secondary {
            font-size: 7rem;
        }
    }

    &__sub {
        grid-column: 2 / 5;
    }

    &__showcase{
        grid-column: 5 / 9;
        background-color: $colour-secondary;

        img {
            width: 100%;
        }
    }

    &__cta {
        grid-column: 9 / 12;
        place-self: center;
    }

    &__slider {
        height: 100%;
        width: 100%;
        position: relative;

        &--slide {
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
        }
    }
}

// header animation
@keyframes fade-title {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}
</style>
