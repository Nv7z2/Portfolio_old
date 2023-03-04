import path from 'path';

// https://nuxt.com/docs/api/configuration/nuxt-config
const config = defineNuxtConfig({
  alias: {
    icons: path.resolve(__dirname, 'public/icons'),
  },
});

export default {
  target: 'static',
  mode: 'static',
  ssr: true,
  build: {
    vite: false,
  },
  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_API_URL,
    },
  },
  config,
};
