<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <TelaInicial titleLabel="Digite o seu e-mail e recebe uma mensagem."/>
    <Counter/>
  </div>
</template>

<script>
import TelaInicial from './components/TelaInicial.vue';
import Counter from './components/Counter.vue';


export default {
  name: 'App',
  components: {
    TelaInicial,
    Counter
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
