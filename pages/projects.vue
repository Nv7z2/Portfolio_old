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
import { reactive } from 'vue';

let projectsList: ProjectType[] = reactive(new Array());

useAsyncData(async () => {
  const res = await axios.get(process.env.API_URL + '/projects');
  projectsList = res.data;
});
</script>

<style scoped></style>
