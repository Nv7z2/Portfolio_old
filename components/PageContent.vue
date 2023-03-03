<template>
  <div class="page-content">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
@use '@/styles/colors';

.page-content {
  width: 100%;
  padding: 1rem;
  margin-left: 2rem;
  color: colors.$page-content-color;
}
</style>
