<template>
  <main>
    <!-- <h1>Mi contador: {{ $store.state.contador }}</h1> -->
    <h1
      :style="colorContador"
    >
      {{ titulo }}: {{ contador }}
    </h1>
    
      <button @click="accionIncrementar">Incrementar</button>
      <BtnDisminuir></BtnDisminuir>
      <hr>
      <br>
      <BotonAccion :estado="true"></BotonAccion>
      <BotonAccion :estado="false"></BotonAccion>
  
  </main>
</template>


<script>
import {mapState, mapMutations, mapActions} from 'vuex'
import BtnDisminuir from '../components/BtnDisminuir.vue'
import BotonAccion from '../components/BotonAccion.vue'

export default {
  components: { BtnDisminuir, BotonAccion },
  name: 'Home',
  data() {
    return{
      titulo: 'Mi contador Vuex'
    }
    
  },
  computed: {
    ...mapState(['contador']),
    colorContador(){
      return [this.contador > 100 ? {'color': 'green'} : {'color': 'red'}]
    }
  },
  methods: {
    //...mapMutations(['incrementar']) -> no recomentable
    ...mapActions(['accionIncrementar'])
  }
}


</script>
