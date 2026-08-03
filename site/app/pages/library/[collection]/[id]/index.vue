<script setup lang="ts">
const route = useRoute();
const config = useRuntimeConfig();
console.log(route);
</script>

<template>
  <div>
    <code>{{ route }}</code>
  </div>
</template>

<style scoped>

</style>
