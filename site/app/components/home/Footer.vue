<script setup lang="ts">
const route = useRoute();
const route_name = route.name as string;
const isLoaderFinished: Ref<boolean> = ref(false);

const currentYear: ComputedRef<number> = computed(() => {
  return new Date().getFullYear();
});

onMounted(() => {
  if (route_name === "index") {
    setTimeout(() => {
      isLoaderFinished.value = true;
     }, 3500);
  }
});
</script>

<template>
  <footer v-if="isLoaderFinished" class="footer dark">
    <ul class="links-footer__other-sites">
      <h4 class="links-footer__subtitle">Other Sites</h4>
      <li class="links-footer--item phone">
        <NuxtLink to="https://gilbertrabuttsurwa.tech" target="_blank">
          Main Site
        </NuxtLink>
      </li>
      <li class="links-footer--item email">
        <NuxtLink to="https://gilbertrabuttsurwa-shop.netlify.app" target="_blank">
          <span>Shop</span>
        </NuxtLink>
      </li>

    </ul>
    <ul class="links-footer__contact">
      <h4 class="links-footer__subtitle">Contact Me</h4>
      <li class="links-footer--item phone">
        <NuxtLink to="tel:+6695007730" external>
          <span>669-500-7730</span>
        </NuxtLink>
      </li>
      <li class="links-footer--item email">
        <NuxtLink to="mailto:tsurwagilbert@gmail.com">
          <span>tsurwagilbert@gmail.com</span>
        </NuxtLink>
      </li>

    </ul>
    <div class="links-footer__logo">
      <LogoFooter />
    </div>
    <ul class="links-footer__follow">
      <h4 class="links-footer__subtitle">Links</h4>
      <li class="links-footer--item">
        <NuxtLink to="/blog">Blog</NuxtLink>
      </li>
      <li class="links-footer--item">
        <NuxtLink to="/blog/uncensored">Uncensored</NuxtLink>
      </li>
      <li class="links-footer--item">
        <NuxtLink to="/blog/authours/gilbert-rabut-tsurwa" target="_blank">About Me</NuxtLink>
      </li>
      <li class="links-footer--item">
        <NuxtLink to="/projects">Projects</NuxtLink>
      </li>
    </ul>
    <ul class="links-footer__socials">
      <h4 class="links-footer__subtitle">Socials</h4>
      <li class="links-footer--item">
        <NuxtLink to="https://www.facebook.com/rabuttsurwa/" target="_blank">
          <i class="fa-brands fa-facebook"></i>
        </NuxtLink>
      </li>
      <li class="links-footer--item">
        <NuxtLink to="https://www.instagram.com/rabuttsurwa96/" target="_blank">
          <i class="fab fa-instagram"></i>
        </NuxtLink>
      </li>
      <li class="links-footer--item">
        <NuxtLink to="https://www.github.com/GillyRabutTsurwa" target="_blank">
          <i class="fab fa-github"></i>
        </NuxtLink>
      </li>
      <li class="links-footer--item">
        <NuxtLink to="https://open.spotify.com/user/tsurwagilly" target="_blank">
          <i class="fab fa-spotify"></i>
        </NuxtLink>
      </li>
      <li class="links-footer--item">
        <NuxtLink to="https://www.linkedin.com/in/gilberttsurwa" target="_blank">
          <i class="fab fa-linkedin"></i>
        </NuxtLink>
      </li>
    </ul>
    <h3 class="copyright">Copyright &copy; Gilbert Rabut Tsurwa {{ currentYear }}. All Rights Reserved</h3>
  </footer>
</template>


<style lang="scss" scoped>
.footer {
  grid-column: 1 / -1;
  position: relative;
  width: 100%;
  padding: 20rem 10rem;

  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr 10rem;

  place-items: center;
  row-gap: 2.5rem;
  background-color: $colour-primary;
  color: $colour-secondary;

  font-family: "Kulim Park", Arial, Helvetica, sans-serif !important;

  @include breakpoint(480) {
    display: flex;
    flex-direction: column;

    & > *:not(:first-child) {
      margin-top: 1.25rem;
    }
  }

  .logo {
    width: 20rem;
    height: 20rem;
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    justify-self: end;
    position: relative;
    left: 20%;

    background-color: transparent;

    img {
      height: 100%;
    }
  }

  .links-footer {
    &__subtitle {
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }

    &__other-sites,
    &__contact,
    &__logo,
    &__follow,
    &__socials {
      grid-row: 2 / 3;
      text-align: center;

      a {
        &,
        &:link,
        &:visited {
          color: unset;
          text-decoration: none;
          transition: all 0.2s;
          display: inline-block;
        }

        &:hover,
        &:active {
          color: $colour-secondary;
          -webkit-box-shadow: 0 1rem 2rem rgb(0 0 0 / 40%);
          box-shadow: 0 1rem 2rem rgb(0 0 0 / 40%);
          -webkit-transform: rotate(5deg);
          transform: rotate(5deg);
        }
      }
    }

    &__other-sites {
      grid-column: 1 / 2;
      text-align: center;
    }

    &__contact {
      grid-column: 2 / 3;
      display: flex;
      flex-direction: column;

      //kazi: adjust css code to be cleaner later
      & > *:not(:last-child) {
        margin-bottom: 1rem;
      }
    }

    &__logo {
      grid-column: 3 / 4;

      //NOTE: for removing hover effect on logo link
      a {
        &:hover,
        &:active {
          -webkit-transform: none;
          transform: none;
          box-shadow: none;
        }
      }
    }

    &__follow {
      grid-column: 4 / 5;
    }

    &__socials {
      grid-column: 5 / 6;
      list-style: none;
      // display: grid;
      // grid-template-columns: repeat(2, max-content);
    }

    &--item:not(.socials) {
      margin-right: 1.5rem;
      color: $colour-secondary;
      text-decoration: none;
      // text-transform: uppercase;
      display: inline-block;

      // -webkit-transition: all 0.2s;
      // transition: all 0.2s;
      &.phone {
        img {
          height: 1.5rem;
          margin-right: 1rem;
          filter: invert(23%) sepia(80%) saturate(2901%) hue-rotate(355deg) brightness(101%) contrast(81%);
        }
      }

      // kazi: refactor this repetitive code (above)
      &.email {
        img {
          height: 1.5rem;
          margin-right: 1rem;
          filter: invert(23%) sepia(80%) saturate(2901%) hue-rotate(355deg) brightness(101%) contrast(81%);
        }
      }
    }
  }

  .copyright {
    grid-row: 3 / 4;
    grid-column: 2 / 3; //NOTE: 3 / 4 est aussi bien
    text-align: center;
  }
}

.below-footer {
  position: absolute; // parent is .footer
  bottom: 0;
  grid-column: 1 / -1;
  grid-row: 4 / 5;
  width: 100%;
  background-color: #111;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 1.5rem 0;

  p {
    margin: 0 auto;
    font-size: 2rem;

    .hosted-on {
      margin-left: 1.5rem;
    }

    img {
      height: 2rem;
      margin: 0 1rem;
    }

    .nuxt {
      height: 3rem;
      // width: 4rem;
      // font-size: 4rem;
      position: relative;
      top: 0.5rem;
    }

    .sanity {
      position: relative;
      top: 0.125rem;
    }

    .netlify {
      position: relative;
      height: 3rem;
      top: 0.5rem;
    }
  }
}
</style>