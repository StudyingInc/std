import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import $ from'jquery';
import 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css'

var s = $(".carousel");
s.carousel('cycle').add('.carousel-item');
console.log(s);
Vue.use('Bootstrap');
Vue.config.productionTip = true;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
