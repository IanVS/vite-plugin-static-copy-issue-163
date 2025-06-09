import { viteStaticCopy } from 'vite-plugin-static-copy';
import { defineConfig} from 'vite';

export default defineConfig({
  plugins: [viteStaticCopy({
    targets: [{
      src: 'static-file.js',
      dest: '/',
    }]
  })]
})
