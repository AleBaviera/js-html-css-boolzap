$(document).ready(function () {


$('.sendmsg').click(function(){

  var messaggio = $('.msg input').val();
  var msgelementsend = $('.template .send').clone();
  var msgelementreceived = $('.template .received').clone();
  var newmsg = msgelementsend.text(messaggio);
  $('.chat').append(newmsg);

  setTimeout(function (){
    var answ = msgelementreceived.text('NON ORA!');
    var newansw = $('.chat').append(answ);

  }, 1000);

  messaggio= $('.msg input').val('');
});



});
