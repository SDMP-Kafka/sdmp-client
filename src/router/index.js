import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/layouts/default/index.vue"),
    children: [
      {
        path: "",
        name: "Home",
        component: () => import("@/views/home/index.vue"),
      },
      {
        path: "cluster",
        name: "Cluster",
        component: () => import("@/views/cluster/index.vue"),
      },
      {
        path: "brokers",
        name: "Brokers",
        component: () => import("@/views/brokers/index.vue"),
      },
      {
        path: "topics",
        name: "Topics",
        component: () => import("@/views/topics/index.vue"),
      },
      {
        path: "consumer",
        name: "Consumer",
        component: () => import("@/views/consumer/index.vue"),
      },
      {
        path: "filter",
        name: "Filter",
        component: () => import("@/views/filter/index.vue"),
      },
      {
        path: "import",
        name: "Import",
        component: () => import("@/views/import/index.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0, left: 0 };
  },
});

export default router;
