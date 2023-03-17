<template>
  <main class="page page-index">
    <h1 class="page-heading">Hello! 👋🏼</h1>

    <Page-Section :divider="{ type: 'top', size: 2 }">
      <SectionHeading :margin="1" prefix="👉🏼">About me</SectionHeading>
      <p>
        I am a web developer with a passion for programming and a thirst for
        knowledge. I am constantly seeking to expand my skillset and currently
        learning C# and Unity.
      </p>
      <p>
        With a robust background in web development, I am able to create dynamic
        and responsive websites that not only look great but also perform
        efficiently.
      </p>
      <p>
        I am dedicated to delivering quality work and always strive to exceed
        client expectations."
      </p>
      <p>
        I'm also kinda lazy, so this site doesn't have fireworks or anything.
      </p>
    </Page-Section>

    <Page-Section :divider="{ type: 'top', size: 2 }">
      <SectionHeading :margin="1" prefix="🤙🏼">Social links</SectionHeading>
      <div class="social-info">
        <SocialAnchor href="https://github.com/Nv7z2" icon="github" />
        <SocialAnchor href="https://twitter.com/nv7z2" icon="twitter" />
        <SocialAnchor
          href="https://www.linkedin.com/in/kacper-baran/"
          icon="linkedin"
        />
        <SocialAnchor href="https://ko-fi.com/nv7z2" icon="ko-fi" />
      </div>
    </Page-Section>

    <Page-Section :divider="{ type: 'top', size: 2 }">
      <SectionHeading :margin="1" prefix="👌🏻">Contact</SectionHeading>
      <p>
        Unfortunately, I have to confess that I haven't implemented a fancy
        contact form yet, and I'm not sure if I ever will.
      </p>
      <p>
        But if you want to get in touch, you can send me an email at
        <ContactMail mail="kontakt@kacperbaran.pl" />.
      </p>
      <p>
        Or find me on Discord at
        <TextWithBorder color="#5865f2">
          The polish alchemist#0366
        </TextWithBorder>
        .
      </p>
    </Page-Section>
  </main>
</template>

<script setup lang="ts">
import ContactMail from '@/components/ContactMail.vue';
import PageSection from '@/components/PageSection.vue';
import SectionHeading from '@/components/SectionHeading.vue';
import SocialAnchor from '@/components/SocialAnchor.vue';
import TextWithBorder from '@/components/TextWithBorder.vue';

useServerSeoMeta({
  title: 'Kacper Baran | Portfolio',
  ogTitle: 'Kacper Baran | Portfolio',
  description:
    "Hi, I'm Kacper, welcome to my website. I'm an experienced web developer with over 3 years of experience looking for a job or contract.",
  ogDescription:
    "Hi, I'm Kacper, welcome to my website. I'm an experienced web developer with over 3 years of experience looking for a job or contract.",
});
</script>

<style scoped lang="scss">
@use '@/styles/colors.scss';

h1 {
  margin: 0 0 1rem 0;
  font-weight: normal;
  color: colors.$page-main-heading-color;
}
</style>
