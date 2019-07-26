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
  var newmsg = msgelementsend.children('p').text(messaggio);
  $('.chat.active').append(msgelementsend);

  setTimeout(function (){
    var answ = msgelementreceived.children('p').text('non ora');
    var newansw = $('.chat.active').append(msgelementreceived);

  }, 1000);

  messaggio= $('.msg input').val('');
};






$('.msg input').focus(function(){
  $('.fa-microphone').hide();
  $('.fa-paper-plane').show();
  $('.top-left .access').text('sta scrivendo..');

});

  $('.msg input').focusout(function(){
    $('.fa-microphone').show();
    $('.fa-paper-plane').hide();
    $('.top-left .access').text('Ultimo accesso alle');

  });



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


  $('.chat').removeClass('active');


  $('.chat[refchat="'+ refchat +'"]').addClass('active');

  $(this).addClass('gray');
  $('.contatto').not(this).removeClass('gray');

  });



  $(document).on('mouseenter','.send',function(){
    $(this).find('.delete').addClass('active');

    $(document).on('click', '.deletemsg', function(){
      $(this).parents('.send').remove();
    });

  });

  $(document).on('mouseleave','.send',function(){
    $(this).find('.delete').removeClass('active');
  });


  $(document).on('mouseenter','.received',function(){
    $(this).find('.delete').addClass('active');

    $(document).on('click', '.deletemsg', function(){
      $(this).parents('.received').remove();
    });
  });

  $(document).on('mouseleave','.received',function(){
    $(this).find('.delete').removeClass('active');
  });


});
