<template>
  <main class="page page-experience">
    <Section-Heading prefix="🇵🇱" :margin="1">Translations</Section-Heading>
    <Page-Section :divider="{ type: 'top' }">
      <TranslationItem
        v-for="translation in translations"
        :key="translation.id"
        :id="translation.id"
        :url="translation.url"
        :description="translation.description"
        :title="translation.title"
        :tags="translation.tags"
      />
    </Page-Section>
  </main>
</template>

<script setup lang="ts">
import type { TranslationItemType } from '@/components/Translations/TranslationItem.vue';
import TranslationItem from '@/components/Translations/TranslationItem.vue';

import { ref } from 'vue';

let translations = ref<TranslationItemType[]>([]);
const config = useRuntimeConfig();

await useFetch(config.public.apiBase + '/translations').then(
  (res) => (translations = res.data),
);

useServerSeoMeta({
  title: 'Kacper Baran | Translations',
  ogTitle: 'Kacper Baran | Translations',
  description:
    "Translations I've made for indie games and other projects. All of them were translated from English to Polish.",
  ogDescription:
    "Translations I've made for indie games and other projects. All of them were translated from English to Polish.",
});
</script>

<style scoped lang="scss"></style>
