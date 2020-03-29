<template>
   <div class="container">
        <h3>Deixe seu comentário</h3>
        
        <form @submit.prevent="onSubmit">
            <div class="form-group">
            <label for="name">Nome:</label>
            <input class="form-control" type="text" id="name" v-model="add_comentario.name" placeholder="Insira seu nome..." required>
            <label for="email">E-Mail:</label>
            <input class="form-control" type="email" id="email" v-model="add_comentario.email" placeholder="Insira seu E-Mail..." required>
            <label for="body">Comentário:</label>
            <textarea class="form-control" rows="3" type="textarea" id="body" v-model="add_comentario.body" placeholder="Deixe seu comentário..." required></textarea>
            <br>
            <input type="submit" value="Submit" class="btn btn-dark"> <router-link to="/Comentarios" class="btn btn-dark">Comentários</router-link> <router-link to="/" class="btn btn-dark">Home</router-link>
            </div>
        </form>
        </div>

</template>

<script>
//importando os Actions de comentario.js
import { mapActions } from "vuex";

export default {
    name: "AddComentario",
    data() {
        return {
            add_comentario : {
                name: "",
                email: "", 
                body: ""
            }
        };
    },
    methods: {
        ...mapActions(["addComentario"]),
        onSubmit() {
            console.log("testando submit")
            this.addComentario(this.add_comentario);
            alert("Comentário Adicionado com sucesso")
        }
    }
};    
</script>