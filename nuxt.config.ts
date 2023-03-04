import path from 'path';

// https://nuxt.com/docs/api/configuration/nuxt-config
const config = defineNuxtConfig({
  alias: {
    icons: path.resolve(__dirname, 'public/icons'),
  },
  modules: [
    '@nuxtjs/dotenv',
  ],
  ssr: false,
});

export default {
  target: 'server',
  mode: 'static',
  env: {
    apiUrl: process.env.API_URL,
  },
  build: {
    vite: false,
  },
  config,
};
