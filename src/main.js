import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "bootstrap";
import Vue2TouchEvents from "vue2-touch-events";

Vue.use(Vue2TouchEvents);
Vue.config.productionTip = true;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount("#app");
