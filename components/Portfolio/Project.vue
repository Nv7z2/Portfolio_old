<template>
  <div class="project">
    <a :href="link" rel="nofollow" class="project-name-anchor">
      <img :src="'icons/link.svg'" role="presentation" />
      <h3 class="project-name">
        <span>{{ title }}</span>
        <img :src="'icons/arrow.svg'" role="presentation" />
      </h3>
    </a>
    <p class="project-description">{{ description }}</p>

    <div class="project-tags">
      <Project-Tag v-for="tag in tags" :key="tag">
        {{ tag }}
      </Project-Tag>
    </div>
  </div>
</template>

<script setup lang="ts">
import ProjectTag from './ProjectTag.vue';

export type ProjectType = {
  title: string;
  description: string;
  link: string;
  tags: string[];
};

defineProps<ProjectType>();
</script>

<style scoped lang="scss">
@use '@/styles/colors';

.project {
  padding: 3rem 0;

  &:not(:first-child) {
    border-top: 1px solid #333;
  }

  &:first-child {
    padding-top: 0;
  }
}

.project-name-anchor {
  text-decoration: none;
  display: inline-flex;
  align-items: center;

  &:hover {
    .project-name img {
      transform: translateX(1rem);
    }
  }

  img {
    margin-right: 0.5rem;
    width: 1rem;
    height: 1rem;
  }
}

.project-name {
  margin: 0;
  display: inline-block;
  color: colors.$project-name-color;

  img {
    transition: transform 0.2s ease;
    margin-left: 1.25rem;
    width: 1rem;
    height: 1rem;
    vertical-align: middle;
  }
}

.project-description {
  margin: 1rem 0;
  color: colors.$project-description-color;
}
</style>
