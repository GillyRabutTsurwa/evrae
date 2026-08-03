<script setup lang="ts">
const gameImages = import.meta.glob("~/assets/images/games/*", { eager: true });
const animeImages = import.meta.glob("~/assets/images/anime/*", { eager: true });
const images = reactive({
  anime: [],
  games: [],
});
images.anime = Object.values(animeImages).map((currentAnimeImage) => currentAnimeImage.default);
images.games = Object.values(gameImages).map((currentGameImage) => currentGameImage.default);
</script>

<template>
  <div class="container">
    <div v-for="(currentImage, key, index) in images" :key="index" :class="key">
      <figure :class="`${key}__img`">
        <!-- <NuxtImg :src="currentImage[Math.floor(Math.random() * currentImage.length)]"/> -->
        <img :src="currentImage[Math.floor(Math.random() * currentImage.length)]"/>
      </figure>
      <NuxtLink :to="`/library/${key}`" :class="`${key}__link`">
        <span :class="`${key}__link--text`">{{ key }}</span>
      </NuxtLink>
    </div>
  </div>
</template>

<style lang="scss">
.container {
  grid-column: 1 / -1;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(2, calc(100% / 2));
  grid-auto-rows: 1fr;
  overflow: hidden;

  @include breakpoint(1023) {
    height: 100%;
  }

  @include breakpoint(767) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, calc(100% / 2));
    height: 100%;
  }

  & > * {
    width: 100%;
    height: inherit;
    position: relative;
  }
}

.anime {
  grid-column: 1 / 2;

  @include breakpoint(767) {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
  }

  &__link {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1000;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    -webkit-transition: all 0.5s ease;
    transition: all 0.5s ease;

    @media (hover: hover) {
      opacity: 0;
    }

    @include breakpoint(1023) {
      opacity: 1;
    }

    &--text {
      position: absolute;
      bottom: 0rem;
      width: 100%;
      text-align: center;
      font-size: 5.5rem;
      font-weight: bold;
      padding: 3rem 1.5rem;
      background-color: rgba(31, 19, 21, 0.9);
      color: rgb(197, 197, 199);

      @include breakpoint(767) {
        padding: 2rem 1rem;
        font-size: 3.5rem;
      }
    }
  }

  &__img {
    width: 100%;
    height: 100%;
    -webkit-transition: all 0.5s ease;
    transition: all 0.5s ease;

    @media (hover: hover) {
      -webkit-filter: blur(10px);
      filter: blur(10px);
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    /* NEW: don't know if the other code to remove hover dans les écrans plus petits is working */
    @include breakpoint(767) {
      -webkit-filter: none;
      filter: none;
    }
  }

  @media (hover: hover) {
    &:hover &__img {
      filter: blur(0);
    }

    &:hover &__link {
      opacity: 1;
    }
  }
}

// ============================================================

.games {
  border-left: 0.5rem black solid;
  grid-column: 2 / 3;

  @include breakpoint(767) {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
    border-left: none;
  }

  &__link {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1000;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    -webkit-transition: all 0.5s ease;
    transition: all 0.5s ease;

    @include breakpoint(1023) {
      opacity: 1;
    }

    &--text {
      position: absolute;
      bottom: 0rem;
      width: 100%;
      text-align: center;
      font-size: 5.5rem;
      font-weight: bold;
      padding: 3rem 1.5rem;
      background-color: rgba(31, 19, 21, 0.9);
      color: rgb(197, 197, 199);

      @include breakpoint(767) {
        padding: 2rem 1rem;
        font-size: 3.5rem;
      }
    }
  }

  &__img {
    width: 100%;
    height: 100%;
    -webkit-transition: all 0.5s ease;
    transition: all 0.5s ease;

    @media (hover: hover) {
      -webkit-filter: blur(10px);
      filter: blur(10px);
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    @include breakpoint(767) {
      -webkit-filter: none;
      filter: none;
    }
  }

  @media (hover: hover) {
    &:hover &__img {
      filter: blur(0);
    }

    &:hover &__link {
      opacity: 1;
    }
  }
}
</style>

