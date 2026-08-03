<script setup lang="ts">
const config = useRuntimeConfig();
const route = useRoute();
const { collection } = route.params;
const { data, pending, error } = await useFetch(`/${collection}/random`, {
  baseURL: config.public.apiBase || "http://localhost:4242"
});
const getSnippet = (text: string, limit: number = 300) => text.slice(0, limit) + "...";
const [item] = data.value;
</script>

<template>
  <header v-if="collection === 'anime'" class="header">
    <figure class="header__img">
      <img :src="item.images.jpg.large_image_url"/>
    </figure>
    <div class="header__post">
      <div class="header__post--content">
        <h2 class="title">{{ item.title || item.title_english }}</h2>
        <h2 v-if="item.title !== item.title_english" class="title" style="font-size: 4.5rem;">{{ item.title_english }}</h2>
        <h2 class="title">{{ item.title_japanese }}</h2>
        <p class="text">{{ getSnippet(item.synopsis, 500) }}</p>
        <Button isLink :path="`/${subject}/${item.mal_id}`" text="Read More"/>
      </div>
    </div>
  </header>
  <header v-else class="header">
    <figure v-if="item.cover" class="header__img">
      <img :src="`https://images.igdb.com/igdb/image/upload/t_1080p/${item.cover.image_id}.jpg`"/>
    </figure>
    <figure v-else class="header__img">
      <img src="https://loremflickr.com" alt="Random PS2 Image">
    </figure>
    <div class="header__post">
      <div class="header__post--content">
        <h2 class="title">{{ item.name }}</h2>
        <p v-if="item.summary" class="text">{{ getSnippet(item.summary, 700) }}</p>
        <p v-else class="text">No description available...</p>
        <Button isLink :path="`/${subject}/${item.id}`" text="Read More"/>
      </div>
    </div>
  </header>
</template>


<style lang="scss" scoped>
.header {
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: -webkit-min-content 1fr;
  grid-template-rows: min-content 1fr;
  color: $colour-primary;

  @include breakpoint(1023) {
    height: auto; // au cas ou
    row-gap: 2rem;
    grid-template-columns: 1fr;
  }

  &__blog-intro {
    grid-column: 1 / -1;
    margin: 3rem 0;

    @include breakpoint(1023) {
      text-align: center;
    }
  }

  &__img,
  &__post, {
    grid-column: 1 / -1;
    grid-row: 1 / 2;
  }

  &__img {
    grid-column: 1 / -1;
    width: 100%;
    height: 65rem;

    @include breakpoint(1023) {
      grid-column: 1 / -1;
      grid-row: 2 / 3;
      margin: 0 auto;
    }

    @include breakpoint(1023) {
      height: 35rem;
    }

    img {
      width: 100%;
      width: inherit;
      height: inherit;
      -o-object-fit: cover;
      object-fit: cover;
    }
  }


  &__post {
    padding-bottom: 4rem;
    background-color: rgba(0,0,0,0.75);

    @include breakpoint(1023) {
      display: grid;
      grid-template-columns: 1fr;
      grid-column: 1 / -1;
      grid-row: 3 / 4;
    }

    &--content {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: start;
      height: 100%;
      padding-left: 4rem;

      @include breakpoint(1023) {
        grid-column: 1 / -1;
        grid-row: 3 / 4;
      }

      @include breakpoint(767) {
        text-align: center;
      }

      &>*:not(:last-child) {
        margin-bottom: 3rem;
      }

      .title {
        font-size: 6rem;
        font-weight: 600;
        color: $colour-secondary;
      }

      .text {
        font-size: 2.25rem;
        line-height: 1.75;
        color: $colour-secondary;
      }

      .button {
        font-size: 1.8rem;
        text-decoration: none;
        padding: 1.5rem 2.2rem;
      }
    }

  }

  &__title {
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    // animation config
    opacity: 0;
    -webkit-animation-name: appear;
    animation-name: appear;
    -webkit-animation-duration: 2s;
    animation-duration: 2s;
    -webkit-animation-delay: 3s;
    animation-delay: 3s;
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
    //IMPORTANT:
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
    z-index: 1000;

    &--primary,
    &--secondary {
      color: $colour-primary;
    }

    &--secondary {
      font-family: $Lexend;
      font-size: 4.5rem;
      margin-bottom: 5rem;
    }

    &--primary {
      font-family: "Abel", cursive;
      font-size: 3.5rem;
    }
  }
}

@include fadeAnimation("appear", 0, 1);

// NOTEIMPORTANT: this is for the instance of the spinner component in this component.
// i am overwriting the normal height
.loader {
  height: 50dvh;
}
</style>

