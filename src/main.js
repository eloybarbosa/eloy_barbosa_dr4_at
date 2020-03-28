import Vue from 'vue';
import App from './App.vue';
import router from './router'; //informando a instancia vue que iremos utilizar o arquivo router.js para definir as rotas

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
  // router: router,
}).$mount('#app');
