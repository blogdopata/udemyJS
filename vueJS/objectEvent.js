
new Vue({
    el: '#evento',
    data: {
        x: 0,
        y:0
    },
    methods:
    {
        mostrarUbicacion: function(evento){
            console.log(evento);
            
            this.x = evento.clientX;
            this.y = evento.clientY;
        }
    }

});



