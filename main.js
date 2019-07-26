$(document).ready(function () {


  $('.sendmsg').click(sendmsg);

  // premere il tasto invio nell'input message
  // avvia la funzione sendmessage
  var tasto = $('.msg input').keypress(function(){
    if(event.which == 13){
      sendmsg();
    }
  });


  //funzione invio messaggi in chat
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





  // con queste funzioni mi focalizzo sull'input dell'utente
  // mentre sta per inviare messaggi (cambia l'icona e il messaggio in top)

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


  // funzione ricerca contatto in base alle lettere chiave digitate

  $('.search input').keyup(function (){

    $('.contatto').each(search);

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

  //con la funzione al click su un singolo contatto
  // compare il contatto in top relativo
  //e la chat pertinente (selezionata con lo stesso attributo)

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


  // al passaggio del mouse sul messaggio
  // compare (e scompare) un menu che consente di cancellare il medesimo

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
