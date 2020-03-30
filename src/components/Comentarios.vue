<template>
    
    
    <div class="container">
        <div>
        <AddComentario/>
        </div>
        <h3 class="textocentro">Mural de Comentários</h3>
        <div v-for="comentario in allComentarios" :key="comentario.id">
        

            <div class="card">
            <div class="card-body">
                <h5 class="card-title">{{ comentario.name }}</h5>
                <p class="card-text">{{ comentario.body }}</p>
                <!-- <a href="#" class="card-link">Editar Comentário</a> -->
                <router-link :to="{name: 'detalheComentario', params: { id: comentario.id} }" class="btn btn-dark">Mais Detalhes</router-link> <button @click="deleteComentario(comentario.id)" class="btn btn-dark">Remover Comentário</button>
            </div>
            </div>
            <br>


        </div>
    </div>
    
</template>

<script>
//importando os Getters e os Actions criados em comentarios.js
import { mapGetters, mapActions } from "vuex";
//importando o "component"/pagina Add Comentários para que possa ser exibida na pagina dos comentários tbm.
import AddComentario from "./AddComentario"

export default {
    name: "Comentarios",
    methods: {
        ...mapActions(["getComentarios", "deleteComentario"]),
    },
    components: {AddComentario},
    computed: mapGetters(["allComentarios"]),
    created() {
        this.getComentarios();
    }
};
</script>    

