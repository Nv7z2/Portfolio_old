<template>
  <div class="page-content">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
@use '@/styles/colors';
@use '@/styles/mixins' as *;

.page-content {
  width: 100%;
  padding: 1rem;
  margin-left: 2rem;
  color: colors.$page-content-color;

  @include mq {
    margin-left: 0;
  }
}
</style>
