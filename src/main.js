import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import LoadScript from 'vue-plugin-load-script';

Vue.config.productionTip = false

Vue.use(LoadScript);

Vue.loadScript("https://code.jquery.com/jquery-3.5.1.slim.min.js").then(() => {
  console.log("Successfully loaded: code.jquery.com/jquery-3.5.1.slim.min.js");
}).catch(() => {
  alert('Failed to load: code.jquery.com/jquery-3.5.1.slim.min.js');
});

Vue.loadScript("https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js").then(() => {
  console.log("Successfully loaded: cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js");
}).catch(() => {
  alert('Failed to load: cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js');
});

// Vue.loadScript("@/assets/js/scripts.js").then(() => {
//   console.log("Successfully loaded: @/assets/js/scripts.js");
// }).catch(() => {
//   alert('Failed to load: @/assets/js/scripts.js');
// });

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
