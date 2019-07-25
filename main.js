$(document).ready(function () {


$('.sendmsg').click(sendmsg);


var tasto = $('.msg input').keypress(function(){
  if(event.which == 13){
    sendmsg();
  }
});

function sendmsg(){

  var messaggio = $('.msg input').val();
  var msgelementsend = $('.template .send').clone();
  var msgelementreceived = $('.template .received').clone();
  var newmsg = msgelementsend.text(messaggio);
  $('.chat.active').append(newmsg);

  setTimeout(function (){
    var answ = msgelementreceived.text('non ora');
    var newansw = $('.chat.active').append(answ);

  }, 1000);

  messaggio= $('.msg input').val('');
};


$('.search input').keyup(function (){






  $('.contatto').each(search);

// funzione cerca contatto

  function search(){

    var letters = $('.search input').val().toUpperCase();

    var contatto = $(this).children('.nome').text().toUpperCase();

    if (contatto.includes(letters)){

      $(this).show();
    }
    else{
      $(this).hide();

    }





  }
});


$('.contatto').click(function(){
  var nome = $(this).find('.nome').text();
  $('.top-left .nome').text(nome);
  var img = $(this).find('img').attr('src');
  $('.top-left img').not('#mia').attr('src',img);
  var refchat = $(this).attr('refchat');
  console.log(refchat);

  $('.chat').removeClass('active');


  $('.chat[refchat="'+ refchat +'"]').addClass('active');


});


});
