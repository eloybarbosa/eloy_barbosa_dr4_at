<template>

<div class="container">
<h2 class="display-4 textocentro" id="dia" v-if="hora >= 0 && hora < 12"> Bom dia, seja Bem Vindo!!!</h2>
<h2 class="display-4 textocentro" id="tarde" v-else-if="hora >= 12 && hora < 18"> Boa tarde, seja Bem Vindo!!!</h2>
<h2 class="display-4 textocentro" id="noite" v-else> Boa noite, seja Bem Vindo!!!</h2>
<h2 class="display-4 textocentro">Mural do Eloy</h2>


<router-link to="/AddComentario" class="btn btn-dark btn-lg btn-block" disabled>Adicionar um comentário</router-link>
<router-link to="/Comentarios" class="btn btn-dark btn-lg btn-block">Visualizar Mural</router-link>

</div>

</template>

<script>
export default {
  name: 'Main',
  data: function() {
    return {
      hora: new Date().getHours()
    }
  }
}
</script>