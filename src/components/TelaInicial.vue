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
            <form id="app" class="col align-items-center" @submit.prevent="checkForm()" method="post">
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
import { mapGetters, mapActions } from "vuex";

export default {
    name: "TelaInicial",
    props: ['titleLabel'],
    data(){
        return {
            email:''
        }
    },
    computed:({
        ... mapGetters([
            'info',
            'errors'
        ]
        )
    }),
    methods: {
       checkForm() {
        this.$store.dispatch('api',this.email)
       }
    }
}
</script>

<style >
.div-1 {
    height: 100vh;
    display: flex;
    justify-items: center;
    align-items: center;
    background-color: #ffbc40;
}

.div-2 {
    background-color: #fff;
}
</style>
