

var app = new Vue({
    el: "#app",
    data: {
        titulo:" Lista de Tareas",
        tareas: [
            {
                texto:"Aprender Vue.JS",
                terminada: false
            },
            {
                texto:"Aprender Angular 2",
                terminada: false
            },
            {
                texto:"Aprender IONIC.JS",
                terminada: false
            }
        ],
        nuevaTarea:''
    },
    methods:{
        addTask: function(){
           var texto = this.nuevaTarea.trim();
           if(texto){
               this.tareas.push({
                   texto: texto,
                   terminada: false
               })
           }
           this.nuevaTarea = '';
        }

    }




})