<template>
  <main class="page page-projects">
    <Section-Heading prefix="🗂" :margin="1">Projects</Section-Heading>
    <Page-Section :divider="{ type: 'top' }">
      <Project
        v-for="project in projectsList"
        :key="project.title"
        :title="project.title"
        :description="project.description"
        :link="project.link"
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

// In future this list will be fetched from an API. I promise.
// TODO: Fetch projects list from API.
const projectsList: ProjectType[] = [
  {
    title: 'Portfolio website',
    description:
      "Basically the site you are currently on is my portfolio. You will find a minimalistic display of my projects and skills. I believe in simplicity and elegance, so I've kept the design clean and easy to navigate.",
    link: '/',
    tags: ['Vue.js', 'Nuxt.js', 'SCSS', 'Git'],
  }
];
</script>

<style scoped></style>
