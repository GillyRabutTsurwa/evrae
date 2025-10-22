<script lang="ts" setup>

</script>

<template>
  <section class="newsletter">
    <h2 class="newsletter__title">Subscribe</h2>
    <h3 class="newsletter__subtitle">Keep in touch with our frequent newsletter, coming soon.</h3>
    <form action="" class="newsletter__form">
      <input type="email" name="newsletter" id="newsletter" class="newsletter__form--input">
      <button type="submit" class="newsletter__form--submit">&rarr;</button>
    </form>
  </section>
</template>

<style lang="scss" scoped>
.newsletter {
  // height: 40vh;
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: subgrid;
  padding: 4rem;

  & > * {
    grid-column: 6 / 7;
  }

  &__title {
    font-size: 10rem;
  }

  &__subtitle {
    text-align: center;
  }

  &__form {
    //TESTING
    position: relative;
    display: flex;
    flex-direction: row;
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
    border-radius: 2px;
    padding: 1.4rem 2rem 1.6rem;
    // background: $input-background;
    &:after {
      content: "";
      position: absolute;
      left: 0px;
      right: 0px;
      bottom: 0px;
      z-index: 999;
      height: 2px;
      border-bottom-left-radius: 2px;
      border-bottom-right-radius: 2px;
      background-position: 0% 0%;
      background: linear-gradient(to right, #1c1c1e, #eef6a1, #130a03, #efe5ad, #ff9494, #fee756);
      background-size: 500% auto;
      animation: gradient 3s linear infinite;
    }

    &--input {
      padding: 2rem 1.5rem;
      width: 90%;
      //TESTING
      flex-grow: 1;
      color: $colour-secondary;
      font-size: 1.8rem;
      line-height: 2.4rem;
      vertical-align: middle;
      &::-webkit-input-placeholder {
        color: $colour-primary;
      }
    }

    &--submit {
      color:  $colour-secondary;
      font-size: 2.4rem;
      line-height: 2.4rem;
      vertical-align: middle;
      transition: color .25s;
      &:hover {
        color: $colour-secondary;
      }
    }
  }
}

@keyframes gradient { 
  0%{background-position:0 0}
  100%{background-position:100% 0}
}
</style>