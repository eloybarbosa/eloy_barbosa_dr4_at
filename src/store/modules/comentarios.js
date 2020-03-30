import axios from "axios";

const state = {
    comentarios: []
};

const getters = {
    allComentarios: state => state.comentarios,
    comentarioById: (state) => (id) => (state.comentarios.filter(c => c.id == id))[0],
};

const actions = {
    
    //inicializando o store
    getComentarios({ commit }) {
        axios.get(
            "https://jsonplaceholder.typicode.com/comments"
        ).then((response) => {
            commit('getComentarios', response.data);
        });
    },

    addComentario({commit}, new_comentario){
        const new_index = state.comentarios.length +1
        const response = {
            "postId": 1,
            "Id": new_index,
            "name": new_comentario.name,
            "email": new_comentario.email,
            "body": new_comentario.body,
        }
        commit('addComentario', response);
    },
    deleteComentario({ commit }, id) {
        commit("delComentario", id);
    },
    updateComentario({ commit }, updComentario){
        commit("updateComentario", updComentario);
    },
     
};

const mutations = {
    getComentarios: (state, comentarios) => (state.comentarios = comentarios),
    addComentario: (state, new_comentario) => state.comentarios.unshift(new_comentario),
    delComentario: (state, id) => state.comentarios = state.comentarios.filter(t => t.id !== id), 
    updateComentario: (state, updComentario) => {
        const index = state.comentarios.findIndex(t => t.id === updComentario.id)
        if (index !== -1) {
          state.comentarios.splice(index, 1, updComentario);
          }
        } 
    
};

export default {
    state,
    actions,
    getters,
    mutations
};
    