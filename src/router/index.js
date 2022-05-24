import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Fight from "../views/main/Fight.vue";
import GoldenOrder from "../views/main/GoldenOrder.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/battle",
    name: "Fight",
    component: Fight,
  },
  {
    path: "/goldenorder",
    name: "GoldenOrder",
    component: GoldenOrder,
  },

  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
