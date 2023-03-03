<template>
  <div class="layout layout-default">
    <Navigation />
    <PageContent>
      <slot></slot>
    </PageContent>
  </div>
</template>

<script setup lang="ts">
import Navigation from '@/components/Navigation.vue';
import PageContent from '@/components/PageContent.vue';
</script>

<style scoped lang="scss">
@use '@/styles/variables' as sizes;
@use '@/styles/mixins' as *;

.layout-default {
  display: flex;
  max-width: sizes.$site-max-width;
  margin: 8rem auto;

  @include mq {
    margin: 3rem auto;
  }
}
</style>
