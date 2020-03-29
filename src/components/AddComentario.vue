<template>
   <div class="container">
        <h3>Deixe seu comentário</h3>
        
        <form class="addcomentario" @submit.prevent="onSubmit">
            <div class="form-group">
            <label for="name">Nome:</label>
            <input class="form-control" type="text" id="name" v-model="add_comentario.name" placeholder="Insira seu nome..." required>
            <label for="email">E-Mail:</label>
            <input class="form-control" type="email" id="email" v-model="add_comentario.email" placeholder="Insira seu E-Mail..." required>
            <label for="body">Comentário:</label>
            <textarea class="form-control" rows="3" type="textarea" id="body" v-model="add_comentario.body" placeholder="Deixe seu comentário..." required></textarea>
            <br>
            <input class="btn btn-dark " type="submit" value="Submit">
            </div>
        </form>
        </div>

</template>

<script>
export default {
    name: "AddComentario",
    data() {
        return {
            add_comentario : {
                name: "",
                email: "", 
                body: "",
            }
        };
    },
}    
</script>