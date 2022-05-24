import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import CommonMethodsPlugin from "./plugins/CommonMethodsPlugin";

Vue.config.productionTip = false;
Vue.use(CommonMethodsPlugin);

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
