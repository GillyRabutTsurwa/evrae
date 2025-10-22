<script lang="ts" setup>

</script>

<template>
  <section class="services">
    <Card>
      <template #title>
        Something
      </template>
      <template #content>
        <p>Guten tag this is the thing that i will be making.</p>
      </template>
    </Card>
    <Card>
      <template #title>
        Here
      </template>
      <template #content>
        <p>utapata udaku tu hapa. hakuna kitu kingine.</p>
      </template>
    </Card>
    <Card>
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
  grid-column: 1 / -1;
  display: flex;
  justify-content: space-around;

}
</style>