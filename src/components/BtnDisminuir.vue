<template>
    <div>
        <button @click="accionDisminuir(50)">Disminuir</button>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    methods: {
        ...mapActions(['accionDisminuir'])
    }
}

</script>