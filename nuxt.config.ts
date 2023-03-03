import path from 'path';

// https://nuxt.com/docs/api/configuration/nuxt-config
const config = defineNuxtConfig({
  alias: {
    icons: path.resolve(__dirname, 'public/icons'),
  },
});

export default {
  target: 'server',
  mode: 'static',
  config,
};
