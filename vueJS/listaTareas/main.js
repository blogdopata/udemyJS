

const app = new Vue({
    el: "#app",
    data: {
        titulo: "TASK LIST GLOBAL  JS",
        listaCursos: [
            {
                nombre: "Vanilla JS",
                estado: false
            },
            {
                nombre: "IONIC JS",
                estado: false
            },
            {
                nombre: "React JS",
                estado: false
            }
        
        ],
        nuevaTask:"",
       
    },
    methods:{
        addList:function(){
           var texto = this.nuevaTask.trim();
           if(texto){
               this.listaCursos.unshift({
                   nombre:texto,
                   estado:false
               })
           }
           this.nuevaTask = "";
           
        },
        cantidadCursos: function(){
            return this.listaCursos.length;
        },
        
        deleteTask: function(indice){
            this.listaCursos.splice(indice,1);
        }
    }


});