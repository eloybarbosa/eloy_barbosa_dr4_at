<template>

<div class="container">
<h2 class="display-4 textocentro">Mural do Eloy</h2>
<h2 class="display-4 textocentro">Seja Bem Vindo!!!</h2>

<router-link to="/AddComentario" class="btn btn-dark btn-lg btn-block">Adicionar um comentário</router-link>
<router-link to="/Comentarios" class="btn btn-dark btn-lg btn-block">Visualizar Mural</router-link>

</div>

</template>

<script>
export default {
  name: 'Main',
}
</script>