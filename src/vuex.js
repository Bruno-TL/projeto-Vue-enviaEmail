import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        info: '',
        errors: ''
    },
    actions: {
        async api ({commit}, email) {
            console.log('passei aqui actions')
            axios
            .post('http://127.0.0.1:8000/api/email', {
            email: email
        })
            .then(response => (
            commit('reposta',response.data)
            ))
        }
    },
    mutations: {
        // checkForm() {
        //     console.log('passei aqui mutations')
        //     if (!state.email) {
        //         state.errors = 'Email inválido';
        //     }

        //     if (!state.email.includes("@") || !state.email.includes(".")) {
        //         state.errors = 'Email inválido ';
        //     }

        // },
        reposta(state, info){
            state.info = info
        }
    },
    getters: {
        info: state => state.info,
        errors: state => state.errors
    }
})
// export { store }