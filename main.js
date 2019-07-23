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
  $('.chat').append(newmsg);

  setTimeout(function (){
    var answ = msgelementreceived.text('non ora');
    var newansw = $('.chat').append(answ);

  }, 1000);

  messaggio= $('.msg input').val('');
};


$('.search input').keypress(function (){






  $('.contatto').each(search);

// funzione cerca contatto

  function search(){

    var letters = $('.search input').val().toUpperCase();

    var contatto = $(this).children('.nome').text().toUpperCase();

    if (contatto.includes(letters)){
      console.log('qui sono nell-if', contatto);
      $(this).show();
    }
    else{
      $(this).hide();

    }





  }
});

});
