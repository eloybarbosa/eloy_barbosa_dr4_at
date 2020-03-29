<template>

    <div class="container">
        <div class="list-group-item" v-for="comentario in Comentarios" :key="comentario"> 
            <span class="comment__author"> Nome: {{ Comentario.nome }}</span>
            <span class="comment__author"> Nome: {{ Comentario.email }}</span>
            <p>{{ comentario.coment }}</p>
        </div>
    </div>
    
</template>

<script>
export default {
    name: "Comentarios",
};
</script>    
