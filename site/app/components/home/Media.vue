<script setup lang="ts">
const { mediaItems } = defineProps({
  mediaItems: {
    type: Array<any>,
    required: true
  }
});
const route = useRoute();
const { collection } = route.params;
const { formatDate } = useFormatDate();
const getSnippet = (text: string, limit: number = 300) => text.slice(0, limit) + "...";
console.log(mediaItems);
const catchValue = async (idValue, isCheckedValue) => {
  console.log(idValue, isCheckedValue);
  const serverMedia = await $fetch(`http://localhost:4242/${collection}/favourites`, {
    method: "POST",
    body: {
      id: idValue,
      isChecked: isCheckedValue
    }
  });
  console.log(serverMedia);
}
</script>

<template>
  <section class="blogs-personal">
    <template v-if="collection === 'anime'">
      <div v-for="currentItem in mediaItems" :key="currentItem.mal_id" class="blogs-personal__item">
        <figure class="blogs-personal__item--picture">
          <img :src="currentItem.images.jpg.large_image_url"/>
        </figure>
        <div class="blogs-personal__item--content">
          <Heart @retrieveCheckedValue="catchValue" :mediaId="currentItem.mal_id" :favourited="currentItem.isFavourite"/>
          <h3 class="title">{{ currentItem.title }}</h3>
          <h3 v-if="currentItem.title !== currentItem.title_english" class="title" style="font-size: 2.25rem;">{{ currentItem.title_english }}</h3>
          <h3 class="title">{{ currentItem.title_japanese }}</h3>
          <div class="snippet">
            <p v-if="currentItem.synopsis">{{ getSnippet(currentItem.synopsis, 100) }}</p>
            <p v-else>Description non disponible</p>
          </div>
          <div class="buttons">
            <Button isLink :path="`/library/${collection}/${currentItem.mal_id}`" text="Read More"/>
          </div>
        </div>
      </div>
    </template>
    <template v-if="collection === 'games'">
      <div v-for="currentItem in mediaItems" :key="currentItem.id" class="blogs-personal__item">
        <figure v-if="currentItem.cover" class="blogs-personal__item--picture">
          <img :src="`https://images.igdb.com/igdb/image/upload/t_1080p/${currentItem.cover.image_id}.jpg`"/>
        </figure>
        <figure v-else class="blogs-personal__item--picture">
          <img src="https://images.unsplash.com/photo-1597933437986-5b61315e70fc?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fHBsYXlzdGF0aW9uJTIwMnxlbnwwfHwwfHx8MA%3D%3D"/>
        </figure>
        <div class="blogs-personal__item--content">
          <Heart @retrieveCheckedValue="catchValue" :mediaId="currentItem.id" :favourited="currentItem.isFavourite"/>
          <h3 class="title">{{ currentItem.name }}</h3>
          <div class="snippet">
            <p v-if="currentItem.summary">{{ getSnippet(currentItem.summary, 100) }}</p>
            <p v-else>Description non disponible</p>
          </div>
          <Button isLink :path="`/library/${collection}/${currentItem.id}`" text="More Info"/>
        </div>
      </div>
    </template>
  </section>
</template>

<style lang="scss" scoped>
.blogs-personal {
    flex: 1 0 75%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: repeat(12, 5vw);
    -moz-gap: 7rem;
    gap: 2rem;
    margin: 3rem 0;
    padding: 0 5rem 5rem 5rem;

    @include breakpoint(1023) {
        grid-template-columns: 1fr;
        grid-template-rows: unset;
        grid-auto-rows: 50rem;
        width: 80%;
        margin: 0 auto;
    }

    @include breakpoint(767) {
        display: flex;
        flex-basis: 50rem;
        overflow-x: auto;
    }

    &.second {
        grid-template-rows: 54rem -webkit-min-content;
        grid-template-rows: 54rem min-content;
    }

    &__item {
        position: relative;

        @include breakpoint(1023) {
            grid-column: 1 / -1 !important;
            grid-row: auto !important;
        }

        @include breakpoint(767) {
            flex: 0 0 40rem;
        }

        &:hover &--content {
            opacity: 1;
        }

        &:nth-child(8n + 1) {
            grid-column: 1 / 3;
            grid-row: 1 / 5;
        }

        &:nth-child(8n + 2) {
            grid-column: 3 / 5;
            grid-row: 1 / 7;
        }

        &:nth-child(8n + 3) {
            grid-column: 5 / -1;
            grid-row: 1 / 4;
        }

        &:nth-child(8n + 4) {
            grid-column: 1 / 3;
            grid-row: 5 / 10;
        }

        &:nth-child(8n + 5) {
            grid-column: 5 / -1;
            grid-row: 4 / 7;
        }

        &:nth-child(8n + 6) {
            grid-column: 3 / 6;
            grid-row: 7 / 10;
        }

        &:nth-child(8n + 7) {
            grid-column: 6 / -1;
            grid-row: 7 / -1;
        }

        &:nth-child(8n + 8) {
            grid-column: 1 / 6;
            grid-row: 10 / 13;

            p {
                font-size: 2.5rem !important;
            }
        }

        &--picture {
            width: 100%;
            height: 100%;

            img {
                width: 100%;
                height: 100%;
                -o-object-fit: cover;
                object-fit: cover;
            }
        }

        &--content {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            align-items: flex-start;
            padding-bottom: 3rem;
            background-color: rgba(0, 0, 0, 0.75);
            transition: opacity 0.5s ease-in;
            padding: 1.5rem 3rem;
            color: $whitish;
            opacity: 0;

            .title {
                font-size: 3rem;
                color: $whitish;
                font-weight: 700;
            }


            .snippet {
                margin: 1rem 0 0 0;
                font-size: 1.75rem;
                line-height: 1.175;
                margin-bottom: 1.5rem;
            }

            .buttons {
              display: flex;
              justify-content: space-around;
              width: 100%;
            }

            // NOTE: nuxt link button component
            a {
                /* margin: 2rem auto 0 auto; */
            }
        }
    }
}
</style>
