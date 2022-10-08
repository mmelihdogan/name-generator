const app = Vue.createApp({
    data() {
        return {
            firstName: 'Melih',
            Nguid: ''
        }
    },
    methods: {
        guid() {
            let newGuid;
            function _p8(s) {
                let p = (Math.random().toString(16)+"000000000").substr(2,8);
                return s ? "-" + p.substr(0,4) + "-" + p.substr(4,4) : p ;  // conditional (ternary) operator 
            }
            newGuid = _p8() + _p8(true) + _p8(true) + _p8();
            return this.Nguid = newGuid;
        }
    } 
})

app.mount('#app');