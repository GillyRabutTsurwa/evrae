<script lang="ts" setup>

</script>

<template>
  <section class="services">
    <Card>
      <template #image>
        <img src="@/assets/images/project-thumbnails/arch-studio-thumbnail.png" alt="">
      </template>
      <template #title>
        Something
      </template>
      <template #content>
        <p>Guten tag this is the thing that i will be making.</p>
      </template>
    </Card>
    <Card>
      <template #image>
        <img src="@/assets/images/project-thumbnails/arch-studio-thumbnail.png" alt="">
      </template>
      <template #title>
        Here
      </template>
      <template #content>
        <p>utapata udaku tu hapa. hakuna kitu kingine.</p>
      </template>
    </Card>
    <Card>
      <template #image>
        <img src="@/assets/images/project-thumbnails/arch-studio-thumbnail.png" alt=""></img>
      </template>
      <template #title>
        Later
      </template>
      <template #content>
        <p>ça c'est notre carte. on va faire beaucoup de bonnes choses dans ce site.</p>
      </template>
    </Card>
  </section>
</template>


<style lang="scss" scoped>
.services {
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>