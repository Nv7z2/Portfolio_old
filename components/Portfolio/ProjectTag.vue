<template>
  <div class="project-tag">
    <slot></slot>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
@use '@/styles/colors';
@use '@/styles/mixins' as *;

.project-tag {
  cursor: crosshair;
  display: inline-block;
  padding: 0.25rem 0.5rem;
  font-size: 0.75rem;
  border: 1px solid colors.$project-tag-border-color;
  margin-right: 0.5rem;
  letter-spacing: 2px;
  color: colors.$project-tag-text-color;
  background-color: colors.$project-tag-background-color;
  transition: background-color 0.2s ease;

  @include mq {
    &:not(:last-child) {
      margin-bottom: 0.5rem;
    }
  }

  &:hover {
    background-color: colors.$project-tag-background-color-hover;
  }
}
</style>
