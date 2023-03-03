<template>
  <nav class="nav">
    <ul class="nav-menu">
      <li class="nav-element">
        <nuxt-link to="/" class="nav-link">Home</nuxt-link>
      </li>
      <li class="nav-element">
        <a href="/projects" class="nav-link">Projects</a>
      </li>
      <li class="nav-element">
        <a href="/experience" class="nav-link">Experience</a>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
@use '@/styles/mixins' as *;
@use '@/styles/colors';

.nav {
  padding: 1rem;
  position: sticky;
  top: 0;
  height: fit-content;

  @include mq {
    padding: 1rem;
    position: fixed;
    top: 0;
    width: 100%;
    background-color: colors.$page-background;
  }
}

.nav-menu {
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;

  @include mq {
    flex-direction: row;
    justify-content: center;
  }
}

.nav-element {
  display: inline-block;
}

.nav-link {
  text-decoration: none;
  display: block;
  padding: 0.5rem 1rem;
  color: colors.$nav-link-color;
  transition: color 0.2s ease;

  &:hover {
    color: colors.$nav-link-hover-color;
  }

  @include mq {
    padding: 0 1rem;
  }
}
</style>
