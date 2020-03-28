<template>
  
  <div id="app" class="container">
    <div id="topo" class="container">
    <img src="./assets/logo.png" alt="Logo" >
    <h2> Assesment Frameworks Front-end e Conexão com Back-end </h2>
    </div>  
    <!-- local onde as paginas serão exibidas/renderizadas quando cada rota for ativada no navegador (o usuário digitar na url o caminho correto) -->
    <router-view /> 
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>

</style>
