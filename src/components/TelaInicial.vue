<template>
    <div class="div-1 ">
        <div class="
                div-2
                container 
                text-center 
                border 
                border-dark 
                p-2 
                rounded-2
        ">
            <!-- action="https://vuejs.org/" -->
            <form id="app" class="col align-items-center" @submit="checkForm" method="post">
                <div class="mb-3">
                    <label for="email" class="form-label h2">{{ titleLabel }}</label>
                    <input type="email" class="form-control" id="email" v-model="email" placeholder="name@example.com">
                    <p>{{ errors }}</p>
                </div>
                <button type="submit" class="btn btn-success btn-sm">Enviar Mensagem</button>
                <p>{{ info }}</p>
            </form>

        </div>
    </div>
</template>

<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>

<script>
import axios from 'axios';

export default {
    name: "TelaInicial",
    props: ['titleLabel'],
    data() {
        return {
            info: '',
            email: '',
            errors: ''
        }
    },
    methods: {
        checkForm: function (e) {
            e.preventDefault()

            if (!this.email) {
                this.errors = 'Email inválido';
            }

            if (!this.email.includes("@") || !this.email.includes(".")) {
                this.errors = 'Email inválido';
            }
            axios
                .post('http://127.0.0.1:8000/api/email', {
                    email: this.email
                })
                .then(response => (this.info = response.data))
        }
    }
}
</script>
