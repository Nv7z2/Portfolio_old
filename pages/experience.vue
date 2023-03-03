<template>
  <main class="page page-experience">
    <Section-Heading prefix="📜" :margin="1">Experience</Section-Heading>
    <Page-Section :divider="{ type: 'top' }">
      <ExperienceItem
        v-for="experience in ExperienceList"
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

const ExperienceList: ExperienceItemType[] = [
  {
    company: 'Dephug (self-employed)',
    position: 'Unicorn developer',
    startDate: 'June 2021',
    endDate: 'Nov 2022',
  },
  {
    company: 'BracketSpace',
    position: 'Junior front-end developer',
    link: 'https://www.bracketspace.com/',
    startDate: 'Apr 2022',
    endDate: 'Aug 2022',
  },
  {
    company: 'Balticon S. A.',
    position: 'Junior front-end developer',
    link: 'https://www.balticon.pl/',
    startDate: 'Apr 2021',
    endDate: 'Nov 2021',
  },
  {
    company: 'Balticon S. A.',
    position: 'Junior IT Support Specialist',
    link: 'https://www.balticon.pl/',
    startDate: 'Nov 2020',
    endDate: 'Apr 2021',
  },
  {
    company: 'ANSTA Smart Solutions',
    position: 'Intern front-end developer',
    link: 'https://www.ansta.pl/',
    startDate: 'Oct 2019',
    endDate: 'Jan 2020',
  },
];
</script>

<style scoped lang="scss"></style>
