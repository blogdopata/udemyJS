
var app = new Vue({
    el: '#vm',
    data:{
      nombre : "victor",
      apellido: "Caballero"
    },
    methods:{
        fullname: function(){
            console.log( this.nombre + this.apellido );   

            return this.nombre + " "+  this.apellido;
        }


    }
   



    
  })