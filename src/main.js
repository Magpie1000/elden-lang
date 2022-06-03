import Vue from "vue";
import VueGamepad from "vue-gamepad";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import CommonMethodsPlugin from "./plugins/CommonMethodsPlugin";

Vue.config.productionTip = false;
Vue.use(CommonMethodsPlugin);
Vue.use(VueGamepad);

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
