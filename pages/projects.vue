<template>
  <main class="page page-projects">
    <Section-Heading prefix="🗂" :margin="1">Projects</Section-Heading>
    <Page-Section :divider="{ type: 'top' }">
      <Project
        v-for="project in projects"
        :id="project.id"
        :key="project.id"
        :title="project.title"
        :description="project.description"
        :previewLink="project.previewLink"
        :githubLink="project.githubLink"
        :tags="project.tags"
      />
    </Page-Section>
  </main>
</template>

<script setup lang="ts">
import PageSection from '@/components/PageSection.vue';
import type { ProjectType } from '@/components/Portfolio/Project.vue';
import Project from '@/components/Portfolio/Project.vue';
import SectionHeading from '@/components/SectionHeading.vue';

import { ref } from 'vue';

let projects = ref<ProjectType[]>([]);
const config = useRuntimeConfig();

await useFetch(config.public.apiBase + '/projects').then(
  (res) => (projects = res.data),
);

useServerSeoMeta({
  title: 'Kacper Baran | Projects',
  ogTitle: 'Kacper Baran | Projects',
  description:
    "Projects I've made or contributed to. Most of them are open-source and available on GitHub.",
  ogDescription:
    "Projects I've made or contributed to. Most of them are open-source and available on GitHub.",
});
</script>

<style scoped></style>
