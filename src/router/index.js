import { createRouter, createWebHistory } from "vue-router";

// the .vue is needed for vite
import Home from "../views/Home.vue";
import sourceData from "../data.json";
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

    beforeEnter(to, from) {
      const exists = sourceData.destinations.find(
        (destination) => destination.id === parseInt(to.params.id)
      );
      if (!exists) return {
      name: 'NotFound',
      params: { pathMatch: to.path.split('/').slice(1)},
      query: to.query,
      hash: to.hash,

     };
    },
    children: [
      {
        path: ":experienceSlug",
        name: "experience.show",
        component: () => import("../views/ExperienceShow.vue"),
        props: (route) => ({ ...route.params, id: parseInt(route.params.id) }),
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("../views/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  // below is an array of obj for route records
  routes,
  scrollBehavior(to, from, savedPosition){
    return savedPosition || new Promise((resolve) => {
      setTimeout(() => resolve({ top: 0, behavior: 'smooth'}), 300)
    })
  
  },


  // good to know that the router will automatically add semantic classes
  linkActiveClass: "vue-router-active-link",
});

export default router;
