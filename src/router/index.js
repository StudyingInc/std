import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "MainPage",
    component: () => import("../views/MainPage.vue")
  },
  {
    path: "/apply",
    name: "Apply",
    component: () => import("../views/Apply.vue")
  },
  {
    path: "/edu",
    name: "Edu",
    component: () => import("../views/Edu.vue")
  },
  {
    path: "/isa",
    name: "Isa",
    component: () => import("../views/Isa.vue")
  },
  {
    path: "/forum",
    name: "Forum",
    component: () => import("../views/Forum.vue")
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue")
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
