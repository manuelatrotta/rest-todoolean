//Creiamo una app che permette di inserire e cancellare dei todos in una lista utilizzando la API boolean per fare operazioni CRUD.

$(document).ready(function(){
  $.ajax({
    url: 'http://157.230.17.132:3034/todos',
    method:'GET',
    success: function(data){
    //ciclo per avere tutti gli elementi della lista
    for(i=0; i<data.length; i++) {
      var element = data[i];
      console.log(element);
    }
    },
    error:function(error) {
      alert('error!');
    }


  });




});
