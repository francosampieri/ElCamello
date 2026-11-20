import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  integrations: [{
    name: 'prototipo-visual-local',
    hooks: {
      'astro:config:setup': ({ command, injectRoute }) => {
        if (command === 'dev') {
          injectRoute({ pattern: '/prototipo-visual', entrypoint: './src/prototipo/Comparador.astro' });
        }
      },
    },
  }],
});
