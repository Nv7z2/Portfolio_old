<template>
  <div class="experience-item">
    <div class="job-info">
      <h3 class="job-company">
        <a :href="link ?? '#'" target="_blank" rel="noopener noreferrer">
          {{ company }}
        </a>
      </h3>
      <p class="job-position">{{ position }}</p>
    </div>

    <div class="date-info">
      <p class="job-start-date">{{ startDate }}</p>
      <span class="date-info-divider">&nbsp;-&nbsp;</span>
      <p class="job-end-date">{{ endDate }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
export type ExperienceItemType = {
  company: string;
  position: string;
  link?: string;
  startDate: string;
  endDate: string;
};

defineProps<ExperienceItemType>();
</script>

<style scoped lang="scss">
@use '@/styles/colors';

.experience-item {
  display: flex;
  margin-bottom: 3rem;
}

.job-info {
  flex: 1;
}

.job-company {
  margin: 0;
  font-size: 1.125rem;
  font-weight: bold;
  color: colors.$experience-company-color;

  a {
    color: inherit;
    text-decoration: none;
  }
}

.job-position {
  margin: 0.5rem 0 0 0;
  color: colors.$experience-position-color;
}

.date-info {
  display: flex;
}

.job-start-date,
.job-end-date,
.date-info-divider {
  margin: 0;
  font-size: 0.8rem;
  display: inline-block;
  color: colors.$experience-date-color;
}
</style>
