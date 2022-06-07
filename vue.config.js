const { defineConfig } = require('@vue/cli-service');
const AutoImport = require('unplugin-auto-import/webpack');
const Components = require('unplugin-vue-components/webpack');
const { VantResolver } = require('unplugin-vue-components/resolvers');

module.exports = defineConfig({
  configureWebpack: {
    pages: {
      h5: {
        entry: 'src/h5/main.ts',
      },
    },
    plugins: [
      AutoImport({
        resolvers: [
          VantResolver(),
        ],
      }),
      Components({
        resolvers: [
          VantResolver(),
        ],
      }),
    ],
  },
});
