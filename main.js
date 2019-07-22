$(document).ready(function () {


$('.sendmsg').click(function(){

  var messaggio = $('.msg input').val();


  var newmsg = $('.chat').append('<div class="send">'+ messaggio + '</div>');

  setTimeout(function (){
    var answ = $('.chat').append('<div class="received"> NON ORA!</div>');
  }, 1000);

  messaggio= $('.msg input').val('');
});



});
