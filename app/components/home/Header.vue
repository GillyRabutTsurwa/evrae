<script setup lang="ts">
import "vue3-carousel/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

const { assets } = useAssets();
const { css, javascript, vue, svelte, react, portraits } = assets;
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

const carouselConfig = {
  itemsToShow: 1,
  wrapAround: true,
  autoplay: 10000,
  pauseAutoplayOnHover: true,
}

const state: State  = reactive({
    assets: [...assets.css, ...assets.javascript, ...assets.vue, ...assets.svelte, ...assets.react, ...assets.portraits]
});


const showcaseAssets = computed(() => {
    return shuffle(state.assets.filter((currentAsset) => currentAsset.isFavourite));
});

function shuffle<T>(array: Array<T>): Array<T> {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

</script>

<template>
    <header class="header tete">
        <figure class="header__logo">
            <!-- <Devicon/> -->
             <img src="~assets/images/svg/IMG-20251015-WA0030.svg" alt="test">
        </figure>
        <div class="header__title">
            <h1 class="header__title--primary">Evræ</h1>
        </div>
        <div class="header__sub">
            <h2>Digital Elegance. Innovating the web experience and other stuff that cuzo will be responsible for putting here. </h2>
        </div>
        <Carousel v-bind="carouselConfig" class="header__showcase">
            <Slide v-for="currentPortrait in showcaseAssets">
                <figure class="header__showcase--img">
                   <NuxtLink :to="currentPortrait?.siteLink">
                       <img :src="currentPortrait?.img" alt="">
                    </NuxtLink>
                </figure>
            </Slide> 
        </Carousel>
        <div class="header__cta">
            <Button text="Browse Projects" colourPrimary="#191919" colourSecondary="#f7f3e8" isLink isExternal path="https://gilbertrabuttsurwa.com/projects"/>
        </div>
    </header>
</template>

<style lang="scss" scoped>
.header {
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
        color: $colour-secondary;

        @include breakpoint(1023) {
            padding-right: unset;
            margin-top: 12rem;
        }

        &.gauche {
            place-self: end start;
            margin-left: 10rem;
        }

        &--primary {
            font-size: 27.5rem;
            font-weight: 600;
            opacity: 1;
            transition: all 2.5s ease;

            @include breakpoint(767) {
                margin-top: 4rem;
                font-size: 9rem;
            }

            span {
                margin-right: 4rem;
            }
        }

        &--secondary {
            font-size: 7rem;
        }
    }

    &__sub {
        @include breakpoint(1023) {
            padding-inline: 5rem;
            text-align: center;
        }
    }

    &__showcase{
        background-color: $colour-secondary;

        &--img {
            width: 100%;
            height: 100%;

            a,
            img {
                width: 100%;
                height: 100%;
            }

            a {
                display: inline-block;
            }

            img {
                object-fit: cover;
                -o-object-fit: cover;
            }
        }
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

@keyframes fade-title {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}
</style>
