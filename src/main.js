import Vue from 'vue';
import App from './App.vue';
import router from './router'; //informando a instancia vue que iremos utilizar o arquivo router.js para definir as rotas
import store from "./store/index.js"; // informando onde será o nosso store para instanciarmos o vuex

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  // router: router,
}).$mount('#app');
