import { defineConfig } from 'umi';

import defaultSettings from './defaultSettings';
import routes from './routes';

export default defineConfig({
  hash: true,
  nodeModulesTransform: {
    type: 'none',
  },
  routes,
  fastRefresh: {},
  dynamicImport: {
    loading: '@ant-design/pro-layout/es/PageLoading',
  },
  esbuild: {},
  ignoreMomentLocale: true,
  locale: {
    default: 'zh-CN',
    antd: true,
    title: true,
    baseNavigator: true,
    baseSeparator: '-',
  },
  antd: {
    dark: false,
    compact: false,
  },
  layout: {
    name: 'Ant Design',
    locale: false,
    layout: 'side',
  },
});
