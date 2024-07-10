import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import legacy from '@vitejs/plugin-legacy'

// From https://forum.webostv.developer.lge.com/t/failed-to-load-module-script-error-on-webos-5-lg-tvs/2351 
const legacyScriptsPlugin = () => {
  return {
    name: "html-transform",
    apply: "build",
    transformIndexHtml: {
      order: "post",
      sequential: true,
      handler(html: string) {
        console.log("Removing module scripts to always fallback legacy build");

        return html
          .replace(
            /<script type="module"(.*?)<\/script>/g,
            "<!--  removed module -->"
          )
          .replace(
            /<link rel="modulepreload"(.*?)>/g,
            "<!--  removed modulepreload -->"
          )
          .replace(/<script nomodule/g, "<script");
      },
    },
  };
};

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [react(),
   legacy({
      targets: ['chrome 79'],
    }),
  legacyScriptsPlugin()  
  ],
})
