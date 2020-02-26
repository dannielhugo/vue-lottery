import Vue from 'vue';
import VueRx from 'vue-rx';
import App from './App.vue';
import vuetify from './plugins/vuetify';

Vue.use(VueRx);

Vue.config.productionTip = false;

new Vue({
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
