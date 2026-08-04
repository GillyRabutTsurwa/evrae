<script setup lang="ts">
const route = useRoute();
const config = useRuntimeConfig();
const { collection, id } = route.params;
console.log(collection);
console.log(id);
const { data, pending, error } = await useFetch(`/${collection}/${id}`, {
  baseURL: config.public.apiBase || "http://localhost:4242"
});
const [media] = data.value;
console.log(media);
const formatDate = (currentDate) => {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  }
  // igdb database uses the unix timestamp in seconds, i'm accounting for that by multiplying the result by 1000 for games
  return collection === "games" ? new Date(currentDate * 1000).toLocaleDateString("en-GB", options) : new Date(currentDate).toLocaleDateString("en-GB", options);
}
</script>

<template>
  <article v-if="collection === 'anime'" class="blog-container">
    <figure class="blog-img-container">
      <img :src="media.images.jpg.large_image_url"/>
    </figure>
    <div class="blog-content">
      <h1 class="blog-content__title">{{ media.title || media.title_english }}</h1>
      <h3 class="blog-content__title" style="margin-bottom: 20px;">{{ media.title_japanese }}</h3>
      <h3 class="blog-content__date-published">
        <span>Start date: </span>
        <span>{{ formatDate(media.aired.from) }}</span>
      </h3>
      <h3 v-if="media.type === 'TV'" class="blog-content__date-published">
        <span>End date: </span>
        <span>{{ formatDate(media.aired.to) }}</span>
      </h3>
      <h3 v-if="media.type === 'TV'" class="blog-content__date-published">
        <span>Airing Time: </span>
        <span>{{ media.broadcast.string }}</span>
      </h3>
      <h3 class="blog-content__date-published">
        <span>Episode Length: </span>
        <span>{{ media.duration }}</span>
      </h3>
      <h3 class="blog-content__date-published">
        <span>Rating: </span>
        <span>{{ media.rating }}</span>
      </h3>
      <ul class="blog-content__categories">
        <li class="blog-content__categories--title">Categories: </li>
        <li v-for="currentGenre in media.genres" class="blog-content__categories--category">
          {{ currentGenre.name }}
        </li>
      </ul>
      <div class="blog-content__description">
        <p>{{ media.synopsis }}</p>
      </div>
      <!-- <Button isLink path="/anime/explore" :text="`Back to ${subject}`" colourPrimary="#101d2c" colourSecondary="#e6b376" /> -->
      <Button @click="$router.back()" :text="`Back to ${collection}`"/>
      <div v-if="media.trailer.youtube_id" class="blog-content__youtube">
        <ScriptYouTubePlayer :video-id="media.trailer.youtube_id" thumbnail-size="maxresdefault" />
      </div>
    </div>
  </article>
  <article v-else-if="collection === 'games'" class="blog-container">
    <figure v-if="media.cover" class="blog-img-container">
      <img :src="`https://images.igdb.com/igdb/image/upload/t_1080p/${media.cover.image_id}.jpg`"/>
    </figure>
    <figure v-else class="blogs-personal__item--picture">
      <img src="https://loremflickr.com" alt="Random PS2 Image">
    </figure>
    <div class="blog-content">
      <h1 class="blog-content__title">{{ media.name }}</h1>
      <h3 class="blog-content__date-published">
        <span>Release date: </span>
        <span>{{ formatDate(media.first_release_date) }}</span>
      </h3>
      <ul class="blog-content__categories">
        <li class="blog-content__categories--title">Categories: </li>
        <li v-for="currentPlatform in media.platforms" class="blog-content__categories--category">
          {{ currentPlatform.name }}
        </li>
      </ul>
      <div class="blog-content__description">
        <p>{{ media.summary }}</p>
      </div>
      <!-- <Button isLink path="/games/explore" :text="`Back to ${subject}`" colourPrimary="#101d2c" colourSecondary="#e6b376" /> -->
      <Button @click="$router.back()" :text="`Back to ${collection}`"/>
      <div v-if="media.videos.length > 0" class="blog-content__youtube">
        <ScriptYouTubePlayer :video-id="media.videos[0].video_id" thumbnail-size="maxresdefault" />
      </div>

    </div>
  </article>

</template>

<style lang="scss">
.blog-container {
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: subgrid;
  column-gap: 2rem;
  /* height: 55vh; */
  overflow: hidden;

  @include breakpoint(1023) {
    grid-template-columns: 1fr;
    grid-template-rows: 35% 1fr;
    min-height: 100vh;
  }

  @include breakpoint(480) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  }

  .blog-img-container {
    grid-column: 1 / -1;
    position: sticky;
    top: 0;
    height: 55vh;
    overflow: hidden;

    @include breakpoint(1023) {
      position: relative;
      grid-row: 1 / 2;
      height: 100%;
    }

    img {
      width: 100%;
      height: 100%;
      -o-object-fit: cover;
      object-fit: cover;
    }
  }

  .blog-content {
    grid-column: 1 / -1;
    padding: 4rem 3rem 6rem 3rem;
    overflow: hidden auto;
    color: goldenrod;

    @include breakpoint(1023) {
      grid-row: 2 / 3;
      height: auto;
    }

    &__title,
    &__author,
    &__date-published {
      @include breakpoint(480) {
        text-align: center;
      }
    }

    &__title {
      font-weight: bolder;
      font-size: 5rem;
    }

    &__author,
    &__date-published {
      font-style: italic;
      font-weight: normal;
    }

    &__author {
      a,
      a:link,
      a:visited {
        color: goldenrod;
        text-decoration: underline;
      }
    }

    &__description {
      font-size: 1.75rem;
      margin: 3rem 0;
      line-height: 1.5;
      color: goldenrod;
    }

    &__youtube {
      width: 60%;
      margin: 0 auto;
    }

    &__categories {
      display: flex;
      margin-top: 1.5rem;
      list-style-type: none;
      font-size: 1.75rem;

      &--title {
        margin-right: 1rem;
      }

      &--category {
        margin-right: 0.75rem;

        // NOTE: mettre une virgule sur chaque categorie sauf la derniere
        &:not(:last-of-type) {
          &::after {
            content: ",";
          }
        }
      }
    }
  }
}
</style>

