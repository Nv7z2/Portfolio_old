<template>
  <div class="translation">
    <h3 class="translation-name">
      <img src="@/public/icons/link.svg" role="presentation" />
      <a :href="url" target="_blank" rel="nofollow">
        {{ title }}
      </a>
    </h3>

    <div class="translation-description">
      <p>{{ description }}</p>
    </div>

    <div class="translation-tags">
      <Tag v-for="tag in tags" :key="tag">
        {{ tag }}
      </Tag>
    </div>
  </div>
</template>

<script setup lang="ts">
import Tag from '@/components/Tag.vue';

export type TranslationItemType = {
  id: string;
  title: string;
  url: string;
  description: string;
  tags: string[];
};

defineProps<TranslationItemType>();
</script>

<style scoped lang="scss">
@use '@/styles/colors';

.translation {
  padding: 3rem 0;

  &:not(:first-child) {
    border-top: 1px solid #333;
  }

  &:first-child {
    padding-top: 0;
  }
}

.translation-name {
  margin: 0;
  display: inline-block;

  img {
    margin-right: 0.5rem;
    width: 1rem;
    height: 1rem;
    vertical-align: middle;
  }

  a {
    text-decoration: none;
    color: colors.$translation-name-color;
  }
}

.translation-description {
  margin: 1rem 0;
  color: colors.$translation-description-color;
}
</style>
