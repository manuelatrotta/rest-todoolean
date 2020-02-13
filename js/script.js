//Creiamo una app che permette di inserire e cancellare dei todos in una lista utilizzando la API boolean per fare operazioni CRUD.

$(document).ready(function(){
  getAll();
  $('#add-button').click(function() {
    var newElement = $('#add-input').val();
    $.ajax({
      url: 'http://157.230.17.132:3034/todos',
      method:'POST',
      data: {
        text: newElement,
      },
      success: function(data){
          console.log(newElement);
          $('.list').html('');
          getAll();
      },
      error:function(error) {
        alert('error!');
      }
    })
  })
});

//funzione che chiama elementi in lista e stampa su schermo
function  getAll() {

  $.ajax({
    url: 'http://157.230.17.132:3034/todos',
    method:'GET',
    success: function(data){
      //variabili standard handlebars
      var source = $('#entry-template').html();
      var template = Handlebars.compile(source);
    //ciclo per avere tutti gli elementi della lista
    for(i=0; i<data.length; i++) {
      var element = data[i];
      console.log(element);
      //stampa elementi in lista tramite template
      var context = {
        text: element.text,
      };
      var html = template(context);
      $('.list').append(html);
    }
    },
    error:function(error) {
      alert('error!');
    }
  })
}
