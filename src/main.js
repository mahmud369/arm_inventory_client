import Vue from 'vue';
import App from './App.vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
// Import Bootstrap as BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import router from './router';
import store from './store';
//import LoadScript from 'vue-plugin-load-script';
import axios from 'axios';
import VueAxios from 'vue-axios';
require('@/store/subscriber');

Vue.config.productionTip = false;

Vue.use(BootstrapVue); // Make BootstrapVue available throughout the project
Vue.use(IconsPlugin); // Optionally install the BootstrapVue icon components plugin


Vue.use(VueAxios, axios); // Using Axios for HTTP request
axios.defaults.baseURL = 'http://localhost:8088/api';
Vue.prototype.$axios = axios; // Make Axios available throughout the project

//Vue.use(LoadScript);

// Vue.loadScript("https://code.jquery.com/jquery-3.5.1.js").then(() => { // JQuery
//   console.log("Successfully loaded: code.jquery.com/jquery-3.5.1.js");


//   Vue.loadScript("https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js").then(() => { // Bootstrap; Nested because this script needs to be loaded after JQuery
//     console.log("Successfully loaded: stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js");
//   }).catch(() => {
//     alert('Failed to load: stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js');
//   });


// }).catch(() => {
//   alert('Failed to load: code.jquery.com/jquery-3.5.1.js');
// });


/* Vue.loadScript("@/assets/js/scripts.js").then(() => {
  console.log("Successfully loaded: @/assets/js/scripts.js");
}).catch(() => {
  alert('Failed to load: @/assets/js/scripts.js');
}); */

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
