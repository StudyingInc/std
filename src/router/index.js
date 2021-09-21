import Vue from "vue";
import VueRouter from "vue-router";
import VBodyScrollLock from "v-body-scroll-lock";
Vue.use(VBodyScrollLock);
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "App",
    component: () => import("../App.vue"),
  },
  {
    path: "/admission",
    name: "Addmission",
    component: () => import("../views/Admission.vue"),
  },
  {
    path: "/study",
    name: "Study",
    component: () => import("../views/Study.vue"),
  },
  {
    path: "/isa",
    name: "Isa",
    component: () => import("../views/Isa.vue"),
  },
  {
    path: "/forum",
    name: "Forum",
    component: () => import("../views/Forum.vue"),
  },
  {
    path: "/contacts",
    name: "Contacts",
    component: () => import("../views/Contacts.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
