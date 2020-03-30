<template>
    <div class="container">
        <br>
        <h5> Editando o Comentário </h5>
        <form @submit.prevent="onSubmit">
            <div class="form-group">
            <label for="name">Nome:</label>
            <input class="form-control" type="text" id="name" v-model="add_comentario.name" placeholder="Insira seu nome..." required>
            <label for="email">E-Mail:</label>
            <input class="form-control" type="email" id="email" v-model="add_comentario.email" placeholder="Insira seu E-Mail..." required>
            <label for="body">Comentário:</label>
            <textarea class="form-control" rows="3" type="textarea" id="body" v-model="add_comentario.body" placeholder="Deixe seu comentário..." required></textarea>
            <br>
            <input type="submit" value="Submit" class="btn btn-dark"> 
            </div>
        </form>
        </div>
    
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
    name: "EditarComentario",
    data() {
        return {
            id:this.$route.params.id,
            add_comentario : {
                name: "",
                email: "",
                body: ""
            }
        }
    },
    computed: mapGetters(["comentarioById"]),
    created() {
        this.add_comentario = this.comentarioById(this.id)
    },
    methods: {
        ...mapActions(["updateComentario"]),
        onSubmit() {
            this.updateComentario(this.add_comentario);
            alert("Dados alterados com sucesso")
        }
    }
    
}
</script>