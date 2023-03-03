<template>
  <a :href="'mailto:' + mail" class="contact-mail">{{ mail }}</a>
</template>

<script setup lang="ts">
type ContactMailProps = {
  mail: string;
};

defineProps<ContactMailProps>();
</script>

<style scoped lang="scss">
@use '@/styles/colors';

.contact-mail {
  color: colors.$contact-mail-color;

  &:hover {
    color: colors.$contact-mail-hover-color;
  }
}
</style>
