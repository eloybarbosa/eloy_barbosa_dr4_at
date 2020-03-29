<template>
  
  <!-- 
    <img src="./assets/logo.png" alt="Logo" >
       -->
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-3">Assessment Front-end e Conexão com Back-end</h1>
        <p class="lead">Aluno: Eloy Barbosa </p>
        <p class="lead">Professora: Thais Viana  </p>
        <p class="lead">Curso: Engenharia da Computação </p>
        <p class="lead">Disciplina: Frameworks Front-end e Conexão com Back-end </p>
    </div>
    <!-- <footer class="container"><img src="./assets/infnetlogorodape.png" alt="Logo" ></footer>  -->
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
