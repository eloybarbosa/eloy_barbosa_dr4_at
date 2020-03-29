import axios from "axios";

const state = {
    comentarios: []
};

const getters = {
    allComentarios: state => state.comentarios,
    // comentarioById: (state) => (id) => (state.todos.filter(comentarios => comentarios.id ==id))[0],
};

const actions = {
    
    getComentarios({ commit }) {
        axios.get(
            "https://jsonplaceholder.typicode.com/comments"
        ).then((response) => {
            commit('getComentarios', response.data);
        });
    },
    addComentario({commit}, new_comentario){
        commit('addComentario', new_comentario);
    }
     
};

const mutations = {
    getComentarios: (state, comentarios) => (state.comentarios = comentarios),
    addComentario: (state, new_comentario) => state.comentarios.push(new_comentario),
};

export default {
    state,
    actions,
    getters,
    mutations
};
    