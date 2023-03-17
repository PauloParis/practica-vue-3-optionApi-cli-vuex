<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h1>Mi contador: {{ $store.state.contador}}</h1>
    <input v-model="texto" type="text">
    <h2>{{texto}}</h2>
  </div>
</template>


<script>

export default {
  data(){
    return {
      texto: ''
    }
  }
}


</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
