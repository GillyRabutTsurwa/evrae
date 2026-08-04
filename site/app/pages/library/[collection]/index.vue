<script setup lang="ts">
const config = useRuntimeConfig();
const route = useRoute();
const collection = route.params.collection;
const state = reactive({
  items: [],
  allItems: [],
  currentPage: 1,
  postsPerPage: 8
});
const form = reactive({
  search: ""
});
const { data, pending, error } = await useFetch(`/${collection}/favourites`, {
  baseURL: config.public.apiBase || "http://localhost:4242"
});
console.log(data.value);
state.items = data.value;
state.allItems = data.value;
console.log(state.items);
console.log(`collection = ${collection}`);
const logItem = async () => {
  console.log(form.search);
  const serverMedia = await $fetch(`http://localhost:4242/${collection}`, {
    method: "POST",
    body: {
      search: form.search
    }
  });
  console.log(serverMedia);
  if (serverMedia) {
    state.items = serverMedia;
    state.allItems = serverMedia;
  }
}

const renderPagination = (eventPayload: number) => {
    state.currentPage = eventPayload;
}
// COMPUTED VALUES
const indexOfLastPost: ComputedRef<number> = computed(() => {
    return state.currentPage * state.postsPerPage;
});

const indexOfFirstPost: ComputedRef<number> = computed(() => {
    return indexOfLastPost.value - state.postsPerPage;
});

const currentItems = computed(() => {
    return state.items.slice(indexOfFirstPost.value, indexOfLastPost.value);
});

const featuredItem = computed(() => {
    return state.items[Math.floor(Math.random() * (state.items.length))];
});
console.log(currentItems.value);
</script>

<template>
  <Navigation>
    <template #logo>
      <LogoX />
    </template>
    <template #links>
      <li class="navigation__list--item">
        <NuxtLink to="/library/games">Games</NuxtLink>
      </li>
      <li class="navigation__list--item">
        <NuxtLink to="/library/anime">Anime</NuxtLink>
      </li>
      <li class="navigation__list--item">
        <NuxtLink to="/library/anime/explore">Explore Anime</NuxtLink>
      </li>
      <DevOnly>
        <li class="navigation__list--item">
          <NuxtLink to="/library/games/explore">Explore Games</NuxtLink>
        </li>
      </DevOnly>
    </template>
    <template #accounts>
      <li class="navigation__list--item">
        <NuxtLink to="/blog" target="_blank">
          Blogs
        </NuxtLink>
      </li>
      <li class="navigation__list--item">
        <NuxtLink to="/shop" target="_blank">
          Shop
        </NuxtLink>
      </li>
      <li class="navigation__list--item">
        <NuxtLink to="https://bandcamp.com" target="_blank">Bandcamp</NuxtLink>
      </li>
      <li class="navigation__list--item">
        <NuxtLink to="https://soundcloud.com" target="_blank">Soundcloud</NuxtLink>
      </li>
      <li class="navigation__list--item">
        <NuxtLink to="https://spotify.com" target="_blank">Spotify</NuxtLink>
      </li>
    </template>
  </Navigation>
  <FeaturedMedia />
  <FlexContainer layout="row-reverse">
    <!--
    <Aside>
      <template #categories>
        <ul>
          <li>hi</li>
          <li>salut</li>
        </ul>
      </template>
    </Aside>
    -->
    <h5 v-if="pending">Loading...</h5>
    <h5 v-else-if="error">{{ error.message }}</h5>
    <template v-else>
      <Media :mediaItems="currentItems" />
    </template>
  </FlexContainer>
  <Pagination v-if="data" :postsPerPage="state.postsPerPage" :postsLength="state.items.length" @paginate="renderPagination($event)" />
</template>


<style lang="scss" scoped>
.grid-test {
    display: grid;
    grid-template-columns: 1fr 50rem;
    grid-template-rows: subgrid;
    overflow: hidden;

    @include breakpoint(767) {
        display: flex;
        flex-direction: column;
        margin-bottom: 4rem;
    }
}

.body-tings {
    display: flex;
    // margin: 2.5rem;

    @include breakpoint(1023) {
        flex-direction: column;
    }
}

.posto {
    grid-area: posts;

    @include breakpoint(767) {
        grid-area: unset;
        order: 2;
    }
}

.pago {
    grid-area: pagination;

    @include breakpoint(767) {
        grid-area: unset;
        order: 3;
    }
}

.catego {
    grid-area: categories;
    align-self: center;

    @include breakpoint(767) {
        width: 100%;
        grid-area: unset;
        order: 1;
    }
}

.insto {
    grid-area: insta;
    place-self: center;

    @include breakpoint(767) {
        grid-area: unset;
        align-self: center;
        order: 4;
        margin: 0 auto;
    }
}

.newso {
    grid-area: newsletter;

    @include breakpoint(767) {
        grid-area: unset;
        order: 5;
        margin: 0 auto;
    }
}

h1.logo {
  a {
    &:link,
    &:visited {
      color: $colour-primary;
      text-decoration: none;
    }
  }
}

form {
  display: flex;
  input {
    outline: none;
    border: 1px solid transparent;
    padding: 1rem 2rem;
    font-size: 1.6rem;
    background-color: inherit;

    &:focus {
      border: 1px solid #121212;
    }
  }
  button[type="submit"] {
    padding: 0 1rem;
    border: none;
    background-color: #121212;
    color: goldenrod;
  }
}
</style>

