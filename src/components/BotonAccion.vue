<template>
    <div>
        <button
            @click="accionBoton({estado: estado, numero: 10})"
        >
            {{textoBoton}}
        </button>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    name: 'Vue3OptionApiCliVuexBotonAccion',

    props: {
        estado: Boolean
    },
    computed: {
        textoBoton(){
            return this.estado ? 'Aumentar' : 'Disminuir'
        }
    },

    methods: {
        ...mapActions(['accionBoton'])
    },
};
</script>

<style lang="scss" scoped>

</style>