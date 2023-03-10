<template>
  <main class="page page-experience">
    <Section-Heading prefix="📜" :margin="1">Experience</Section-Heading>
    <Page-Section :divider="{ type: 'top' }">
      <ExperienceItem
        v-for="experience in experiences"
        :key="experience.company"
        :company="experience.company"
        :position="experience.position"
        :link="experience.link"
        :startDate="experience.startDate"
        :endDate="experience.endDate"
      />
    </Page-Section>
  </main>
</template>

<script setup lang="ts">
import type { ExperienceItemType } from '@/components/Experience/ExperienceItem.vue';
import ExperienceItem from '@/components/Experience/ExperienceItem.vue';

import { ref } from 'vue';

let experiences = ref<ExperienceItemType[]>([]);
const config = useRuntimeConfig();

await useFetch(config.public.apiBase + '/experiences').then(
  (res) => (experiences = res.data),
);

useServerSeoMeta({
  title: 'Kacper Baran | Experience',
  ogTitle: 'Kacper Baran | Experience',
  description:
    'Experience I have in the field of web development. I have been working as a freelancer for over 2 years.',
  ogDescription:
    'Experience I have in the field of web development. I have been working as a freelancer for over 2 years.',
});
</script>

<style scoped lang="scss"></style>
