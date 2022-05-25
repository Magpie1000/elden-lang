import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Battle from "../views/main/Battle.vue";
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
    name: "Battle",
    component: Battle,
  },
  {
    path: "/goldenorder",
    name: "GoldenOrder",
    component: GoldenOrder,
  },
  {
    path: "*",
    redirect: (to) => {
      return { name: "Home" };
    },
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
