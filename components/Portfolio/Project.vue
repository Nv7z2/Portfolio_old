<template>
  <div class="project">
    <h3 class="project-name">
      <span>{{ title }}</span>
    </h3>

    <p class="project-description">{{ description }}</p>

    <ul class="project-links">
      <li v-if="githubLink">
        <a
          :href="githubLink"
          class="project-link"
          rel="nofollow"
          target="_blank"
        >
          <img
            :src="'icons/github.svg'"
            role="presentation"
            class="project-link-icon project-link-icon--github"
          />
          <span>Github repo</span>
        </a>
      </li>
      <li v-if="previewLink">
        <a
          :href="previewLink"
          class="project-link"
          rel="nofollow"
          target="_blank"
        >
          <img
            :src="'icons/link.svg'"
            role="presentation"
            class="project-link-icon"
          />
          <span>Preview</span>
        </a>
      </li>
      <li>
        <span
          class="project-no-link-message"
          v-if="!githubLink && !previewLink"
        >
          * Unfortunately I can't provide any link to this project
        </span>
      </li>
    </ul>

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
  id: string;
  title: string;
  description: string;
  previewLink?: string;
  githubLink?: string;
  tags: string[];
};

defineProps<ProjectType>();
</script>

<style scoped lang="scss">
@use '@/styles/colors';

.project {
  padding: 3rem 0;

  &:not(:first-of-type) {
    border-top: 1px solid #333;
  }

  &:first-of-type {
    padding-top: 0;
  }
}

.project-name {
  margin: 0;
  display: inline-block;
  color: colors.$project-name-color;
}

.project-description {
  margin: 1rem 0;
  color: colors.$project-description-color;
}

.project-links {
  margin: 0 0 1rem 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.project-link {
  color: white;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  color: colors.$project-link-color;

  &:hover {
    border-bottom: 1px solid colors.$project-link-hover-border-color;
    color: colors.$project-link-hover-color;
  }
}

.project-link-icon {
  margin-right: 0.75rem;
  width: 1rem;
  height: 1rem;
  vertical-align: middle;

  // Maybe it's weird, but at least it's centered relatively to the github icon
  &:not(&--github) {
    margin-left: 0.125rem;
  }

  &--github {
    width: 1.25rem;
    height: 1.25rem;
    margin-right: 0.5rem;
  }
}

.project-no-link-message {
  font-style: italic;
  color: colors.$project-no-links-message-color;
}
</style>
