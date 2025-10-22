<script setup lang="ts">
const currentYear: ComputedRef<number> = computed(() => {
  return new Date().getFullYear();
});
</script>

<template>
  <footer class="footer dark">
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
        <NuxtLink to="tel:+5408002584" external>
          <span>540-800-2584</span>
        </NuxtLink>
      </li>
      <li class="links-footer--item email">
        <NuxtLink to="mailto:forevrae@gmail.com">
          <span>forevrae@gmail.com</span>
        </NuxtLink>
      </li>

    </ul>
    <div class="links-footer__logo">
     EVRÆ
    </div>
    <ul class="links-footer__follow">
      <h4 class="links-footer__subtitle">Links</h4>
      <li class="links-footer--item">
        <NuxtLink to="https://gilbertrabuttsurwa.com">Blog</NuxtLink>
      </li>
      <li class="links-footer--item">
        <NuxtLink to="https://gilbertrabuttsurwa.com">Uncensored</NuxtLink>
      </li>
      <li class="links-footer--item">
        <NuxtLink to="https://gilbertrabuttsurwa.com" target="_blank">About Me</NuxtLink>
      </li>
      <li class="links-footer--item">
        <NuxtLink to="https://gilbertrabuttsurwa.com">Projects</NuxtLink>
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
    <h3 class="copyright">Copyright &copy; Evræ {{ currentYear }}. All Rights Reserved</h3>
  </footer>
</template>


<style lang="scss" scoped>
.footer {
  // position: relative;
  grid-column: 1 / -1;
  width: 100%;
  padding: 20rem 10rem;

  display: grid;
  grid-template-columns: subgrid;
  // grid-template-rows: 1fr 10rem;

  place-items: center;
  row-gap: 2.5rem;
  background-color: $colour-secondary;
  color: $colour-primary;

  @include breakpoint(480) {
    display: flex;
    flex-direction: column;

    & > *:not(:first-child) {
      margin-top: 1.25rem;
    }
  }

  .logo {
    // width: 15rem;
    width: 20rem;
    height: 20rem;
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    justify-self: end; // mais il (le logo) est toujours hors de centre
    position: relative; //NOTE: voici la solution
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
      text-align: center;
      // align-self: center;

      a {
        &,
        &:link,
        &:visited {
          color: unset;
          text-decoration: none;
          transition: all 0.2s;
          display: inline-block; //NOTE: sans celui-ci, la rotation n'est pas possible
        }

        &:hover,
        &:active {
          color: $colour-secondary;
          background-color: $colour-primary;
          -webkit-box-shadow: 0 1rem 2rem rgb(0 0 0 / 40%);
          box-shadow: 0 1rem 2rem rgb(0 0 0 / 40%);
          -webkit-transform: rotate(5deg);
          transform: rotate(5deg);
        }
      }
    }

    &__other-sites {
      grid-column: 3 / 4;
      text-align: center;
    }

    &__contact {
      grid-column: 4 / 5;
      display: flex;
      flex-direction: column;

      //@todo: adjust css code to be cleaner later
      & > *:not(:last-child) {
        margin-bottom: 1rem;
      }
    }

    &__logo {
      grid-column: 5 / 8;
      font-size: 12rem;

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
      grid-column: 8 / 9;
    }

    &__socials {
      grid-column: 9 / 10;
      list-style: none;
      // display: grid;
      // grid-template-columns: repeat(2, max-content);
    }

    &--item:not(.socials) {
      margin-right: 1.5rem;
      color: $colour-primary;
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

      // @todo: refactor this repetitive code (above)
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
    grid-column: 1 / -1; //NOTE: 3 / 4 est aussi bien
    text-align: center;
  }
}
</style>