import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/","",["/index.html","/README.md"]],
  ["v-5c0dd206","/overview/","Overview",["/overview/index.html","/overview/README.md"]],
  ["v-2d0a983f","/ja/","",["/ja/index.html","/ja/README.md"]],
  ["v-d8bfacea","/setup/","Setup",["/setup/index.html","/setup/README.md"]],
  ["v-d0736a32","/usage/","usage",["/usage/index.html","/usage/README.md"]],
  ["v-6af80077","/ja/overview/","概要",["/ja/overview/index.html","/ja/overview/README.md"]],
  ["v-3f644251","/ja/setup/","Setup",["/ja/setup/index.html","/ja/setup/README.md"]],
  ["v-438a63ad","/ja/usage/","usage",["/ja/usage/index.html","/ja/usage/README.md"]],
  ["v-3706649a","/404.html","",["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, title, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta: { title },
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
