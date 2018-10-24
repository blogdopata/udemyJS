
new Vue({
    el: '#evento',
    data: {
        x: 0,
        y:0,
        sumaCoordenadas:0
    },
    methods:
    {
        mostrarUbicacion: function(evento){
            console.log(evento);
            
            this.x = evento.clientX;
            this.y = evento.clientY;
        },
        sumCoord: function(lol){
            this.sumaCoordenadas = this.x + this.y ;
            console.log(lol)
            return  this.sumaCoordenadas;
        }
    }
   

});



