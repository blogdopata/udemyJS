

   
  // var app = new Vue({
  //   el: ".vue",
  //   data:{
  //     message: "Contenido from JS "
  //   }

  // });
/* */ Ciclo de
var app = new Vue({
    el: "#menu-bar",
    data:{
      msj : "RENDER SOBRINO",
      src: "https://vuejs.org/images/logo.png",
   
    },

    beforeCreate: function(){
      console.log("llamando beforeCreated");
    },
    created: function(){
    console.log("llamando Created"); 
    },
    beforeMount: function(){
    console.log("llamando BeforeMount"); 
    },
    mounted: function(){
    console.log("llamando Mounted"); 
    },
    beforeUpdate: function(){
    console.log("llamando beforeUpdated"); 
    },
    updated: function(){
    console.log("llamando updated"); 
    },
    beforeDestroy: function(){
    console.log("llamando beforeDestroy"); 
    },
    destroyed: function(){
    console.log("llamando Destroyed"); 
    },

    methods:{
      destruir: function(){
        this.$destroy();
      }
    }

    
  })