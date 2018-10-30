var data = {
    titulo: 'Componetizando la Lista',
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
    nuevaTarea:'',
   
};

Vue.component('titulo-principal', {

    template:"<h2> {{titulo}} </h2>",
    data: function(){
        return     data  ;
    }
});

Vue.component('add-task', {
    template:`
            <div class="input-group">
                <input v-model="nuevaTarea" type="text" placeholder="Ingrese nueva tarea" class="form-control"
                    v-on:keyup.enter="addTask()">

                <span class="input-group-btn">
                    <button v-on:click="addTask()" class="btn btn-primary" type="button"> Add Task</button>
                </span>
            </div>
              `,
    data: function(){
        return data;
    },

    methods:{
        addTask: function(){
            var texto = this.nuevaTarea.trim();
            
            console.log(texto)
            if(texto){
                this.tareas.push({
                    texto: texto,
                    terminada: false
                })
            }
            this.nuevaTarea = '';
         },
    }

});


Vue.component('list-task',{
    template: `
            <ul class="list-group">
                    <li v-for="(tarea, indice) of tareas" class="list-group-item" v-bind:class="{terminada:tarea.terminada}">
                        {{tarea.texto}}
                        <span class="float-right">
                            
                            <button type="button" class="btn btn-success btn-xs" v-on:click="tarea.terminada=!tarea.terminada">Check</button>

                            <button type="button" class="btn btn-danger btn-xs" v-on:click="borrar(indice)">Delete</button>

                        </span>
                    </li>
                
            </ul>
            `,
    data: function(){

        return data;
    }  ,
    methods:{
        borrar: function(indice){
            console.log(indice);
            
            this.tareas.splice(indice,1);
        }
    }
})



var app = new Vue({
    el: "#app",

})