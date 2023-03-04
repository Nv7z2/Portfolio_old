<template>
  <main class="page page-projects">
    <Section-Heading prefix="🗂" :margin="1">Projects</Section-Heading>
    <Page-Section :divider="{ type: 'top' }">
      <Project
        v-for="project in projectsList"
        :id="project.id"
        :key="project.id"
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

import axios from 'axios';
import { ref } from 'vue';

let projectsList = ref<ProjectType[]>([]);

useAsyncData(async () => {
  const res = await axios.get(
    'https://portfolio-backend-4fnw.onrender.com/projects',
  );
  projectsList.value = res.data;
});
</script>

<style scoped></style>
