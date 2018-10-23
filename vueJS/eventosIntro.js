
new Vue({
    
    el: '#evento',
    data: {
       contador: 0
    },
    methods:{
        sumar: function(){
            return this.contador++
        },
        restar: function(){
            return this.contador--
        }


    }


});



