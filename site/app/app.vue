<script setup lang="ts">
import type { LayoutKey } from '#build/types/layouts';

const route = useRoute();
const layoutMap: Record<string, LayoutKey> = {
  "index": "home",
  "blog-genre": "blog",
  "blog-article": 'blog',
  "library-collection": "blog",
  "shop": "shop"
}
const layout: ComputedRef<LayoutKey> = computed(() => {
  const route_name = route.name as string;
  return layoutMap[route_name] || "default";
});
console.log(`nom de la route, c'est: ${route.name}`);
</script>

<template>
  <NuxtLayout :name="layout">
    <NuxtPage />
  </NuxtLayout>
</template>
