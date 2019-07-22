$(document).ready(function () {


$('.sendmsg').click(function(){

  var messaggio = $('input').val();


  var newmsg = $('.chat').append('<div class="send">'+ messaggio + '</div>');

  // newmsg.addClass('send');



});



});
