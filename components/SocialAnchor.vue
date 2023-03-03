<template>
  <a
    :href="href"
    class="social-anchor"
    target="_blank"
    :title="href"
    rel="noopener noreferrer"
  >
    <img
      :src="'icons/' + icon + '.svg'"
      class="social-anchor-icon"
      role="presentation"
    />
  </a>
</template>

<script setup lang="ts">
defineProps<{
  /** URL to the social media profile. */
  href: string;
  /** Icon to display. */
  icon: 'github' | 'linkedin' | 'twitter';
}>();
</script>

<style scoped lang="scss">
@use '@/styles/colors';

.social-anchor {
  display: inline-flex;
  text-decoration: none;
  padding: 0.5rem 1.5rem;
  align-items: center;
  border: 1px solid colors.$social-anchor-border;
  border-radius: 0.5rem;
  transition: all 0.2s ease;

  &:hover {
    box-shadow: 0 0.5rem 1rem -0.5rem colors.$social-anchor-hover-shadow;
    transform: translateY(-0.125rem);
  }

  &:not(:last-child) {
    margin-right: 1rem;
  }
}

.social-anchor-icon {
  width: 1.5rem;
  height: 1.5rem;
}
</style>
