import { createStore } from "vuex";

export default createStore({
    state: { // siempre va en un computed
        contador: 100
    },
    mutations: { // solo modificar el state
        incrementar(state, payload){
            state.contador = state.contador + payload
        },
        disminuir(state, payload){
            state.contador = state.contador - payload
        }

    },
    actions: { // accionar una mutación
        accionIncrementar({commit}){ //commit ejecuta una mutación
            commit('incrementar', 10)
        },
        accionDisminuir({commit}, numero){
            commit('disminuir', numero)
        },
        accionBoton({commit}, objeto) { // no se pueden enviar 2 o + parametros, se tiene q pasar un objeto
            if(objeto.estado) {
                commit('incrementar', objeto.numero)
            } else {
                commit('disminuir', objeto.numero)
            }
        }
    },
    modules: {

    }
})