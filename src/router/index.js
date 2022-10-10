import { createRouter, createWebHistory } from "vue-router";

// the .vue is needed for vite
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  // {
  //   path: "/brazil",
  //   name: "Brazil",
  //   component: () => import("../views/Brazil.vue"),
  // },
  // {
  //   path: "/jamaica",
  //   name: "Jamaica",
  //   component: () => import("../views/Jamaica.vue"),
  // },
  // {
  //   path: "/hawaii",
  //   name: "Hawaii",
  //   component: () => import("../views/Hawaii.vue"),
  // },
  {
    path: "/destination/:id/:slug",
    name: "destination.show",
    component: () => import("../views/DestinationShow.vue"),
    props: (route) => ({ ...route.params, id: parseInt(route.params.id) }),
    children: [
      {
        path: ":experienceSlug",
        name: "experience.show",
        component: () => import("../views/ExperienceShow.vue"),
        props: (route) => ({ ...route.params, id: parseInt(route.params.id) }),
      },
    ]
  },
 
];

const router = createRouter({
  history: createWebHistory(),
  // below is an array of obj for route records
  routes,
  // good to know that the router will automatically add semantic classes
  linkActiveClass: "vue-router-active-link",
});

export default router;
