<template>

    <div class="container">
        <h1>Detalhe do Comentário</h1>
        
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">{{ id }} - {{ comentarioById(id).name }}</h5>
				<h6 class="card-subtitle mb-2 text-muted">{{ comentarioById(id).email }}</h6>
                <p class="card-text">{{ comentarioById(id).body }}</p>
                <router-link tag="button" :to="{ name: 'comentarios' }" class="btn btn-dark">Voltar pra listagem</router-link> <button @click="editar" class="btn btn-dark">Editar Comentário</button>
                <router-view></router-view>
            </div>
        </div>



        
        
    </div>

</template>

<script>
import { mapGetters } from "vuex";
export default {
    name: "DetalheComentario",
    data: function(){
        return{
            id : this.$route.params.id,}
        },
    computed: mapGetters(["comentarioById"]),
    methods: {
        editar() {
            this.$router.push({ name: 'edit-comentario', params: {id: this.id} });
        }
    }
}
</script>
