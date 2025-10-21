<script lang="ts" setup>
import "vue3-carousel/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

const { assets } = useAssets();
const { portraits } = assets;

const selectedPortraits = computed(() => portraits.filter((currentPortrait) => currentPortrait.img.includes("coloured")));

const carouselConfig = {
  itemsToShow: 1,
  wrapAround: true
}
</script>

<template>
  <Carousel v-bind="carouselConfig" class="about">
    <Slide v-for="(currentPortrait, index) in selectedPortraits" :key="index">
      <div class="item">
        <div class="item__content">
          <h2 class="item__content--title">Subtitle</h2>
          <p class="item__content--text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore deserunt minus et, explicabo tempora non iusto veritatis molestiae ipsam dolorum. Officiis earum eligendi eaque odio. Quaerat nulla sed aspernatur optio dignissimos consequatur commodi totam! Dolor ex ipsa veniam iure, sint neque deserunt doloribus ratione, repudiandae labore impedit, perferendis voluptate non. Perspiciatis ad libero doloribus minima, harum dolor voluptates sed quasi aspernatur odio itaque ipsum voluptatibus hic quibusdam alias illo facere nulla expedita similique et asperiores. Modi recusandae repudiandae, illum voluptates nam doloremque, quibusdam soluta fuga, quo eius sunt vel doloribus alias sequi corrupti autem impedit accusamus obcaecati? Est ipsum, esse debitis eligendi alias maxime incidunt ad, quae exercitationem iste voluptate, natus sunt suscipit. Illo rerum quo magnam labore, nisi ducimus ipsum quod doloremque vel sint vero odit soluta deleniti, praesentium voluptate! Labore vero temporibus illum quas, perspiciatis reprehenderit quaerat, placeat rem rerum harum assumenda saepe, sed quo culpa dolorum a!</p>
        </div>
        <figure class="item__img">
          <img :src="currentPortrait.img" alt="coming soon">
        </figure>
      </div>
    </Slide>

    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>
</template>


<style lang="scss">
.carousel__viewport {
  grid-column: 1 / -1;
}
.about {
  min-height: 60dvh;
  max-height: 85dvh;
  background-color: $colour-secondary;
  color: $colour-primary;
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: subgrid;

  .item {
    display: flex;
    height: 100%;

    &__content {
      flex: 1 0 50vw;
      padding: 2rem;

      &--title {
        font-size: 5rem;
      }

      &--text {
        font-size: 2rem;
        line-height: 1.75;
      }
    }

    &__img {
      flex: 1 0 50vw;
      
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
}
</style>