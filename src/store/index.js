import Vuex from "vuex";
import Vue from "vue";
import comentarios from "./modules/comentarios";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    comentarios,
  }
});
