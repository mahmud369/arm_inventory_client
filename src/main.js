import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import LoadScript from 'vue-plugin-load-script';

Vue.config.productionTip = false;

Vue.use(LoadScript);

Vue.loadScript("https://code.jquery.com/jquery-3.5.1.js").then(() => { // JQuery
  console.log("Successfully loaded: code.jquery.com/jquery-3.5.1.js");


  Vue.loadScript("https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js").then(() => { // Bootstrap; Nested because this script needs to be loaded after JQuery
    console.log("Successfully loaded: stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js");
  }).catch(() => {
    alert('Failed to load: stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js');
  });


}).catch(() => {
  alert('Failed to load: code.jquery.com/jquery-3.5.1.js');
});


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
