import { defineAsyncComponent } from 'vue'

export const layoutComponents = {
  "404": defineAsyncComponent(() => import("/Users/hideaki/dev/src/github.com/ontheroadjp/Shell-Stash/node_modules/@vuepress/theme-default/lib/client/layouts/404.vue")),
  "Layout": defineAsyncComponent(() => import("/Users/hideaki/dev/src/github.com/ontheroadjp/Shell-Stash/node_modules/@vuepress/theme-default/lib/client/layouts/Layout.vue")),
}
