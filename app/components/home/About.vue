<script lang="ts" setup>
</script>

<template>
    <section class="about">
      <div class="item">
        <div class="item__text">
          <h2>Subtitle</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore deserunt minus et, explicabo tempora non iusto veritatis molestiae ipsam dolorum. Officiis earum eligendi eaque odio. Quaerat nulla sed aspernatur optio dignissimos consequatur commodi totam! Dolor ex ipsa veniam iure, sint neque deserunt doloribus ratione, repudiandae labore impedit, perferendis voluptate non. Perspiciatis ad libero doloribus minima, harum dolor voluptates sed quasi aspernatur odio itaque ipsum voluptatibus hic quibusdam alias illo facere nulla expedita similique et asperiores. Modi recusandae repudiandae, illum voluptates nam doloremque, quibusdam soluta fuga, quo eius sunt vel doloribus alias sequi corrupti autem impedit accusamus obcaecati? Est ipsum, esse debitis eligendi alias maxime incidunt ad, quae exercitationem iste voluptate, natus sunt suscipit. Illo rerum quo magnam labore, nisi ducimus ipsum quod doloremque vel sint vero odit soluta deleniti, praesentium voluptate! Labore vero temporibus illum quas, perspiciatis reprehenderit quaerat, placeat rem rerum harum assumenda saepe, sed quo culpa dolorum a!</p>
        </div>
        <figure class="item__img"><img src="@/assets/images/project-thumbnails/planets-site-thumbnail.png" alt=""></figure>
      </div>
    </section>
</template>


<style lang="scss">
.about {
  height: 60dvh;
  &,
  .item {
    grid-column: 1 / -1;
    display: grid;
    grid-template-columns: subgrid;
  }

  .item {
    &__text {
      grid-column: 2 / 6;
    }
  
    &__img {
      grid-column: 7 / 12;
      
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
}
</style>