new Vue({
    el: '#app',
    data: {
        contador1: 0,
        contador2: 0,
        results: '',
        name1: '',
        name2: ''
    },
    computed: {
        winner(){
            if(this.contador1 === 10){
                return this.results = this.name1
            } else if (this.contador2 === 10){
                return this.results = this.name2
            }
        }
    },
    methods: {
        ponto1(){
            this.contador1++
        },
        ponto2(){
            this.contador2++
        }
    }
})