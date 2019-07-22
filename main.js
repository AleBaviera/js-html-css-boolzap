$(document).ready(function () {


$('.sendmsg').click(function(){

  var messaggio = $('input').val();


  var newmsg = $('.chat').append('<div class="send">'+ messaggio + '</div>');

  setTimeout(function (){
    var answ = $('.chat').append('<div class="received"> NON ORA!</div>');
  }, 1000);
});



});
