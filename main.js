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


    // al click su contatto first
        // rendi active first

        $('.contatto').click(showContact);


        // funzione prev
        function showContact(){

          var nome = $(this).text();
          $('.top-left .nome').text(nome);

          if($(this).hasClass('contact-1')){
            $('.chat').removeClass('active');
            $('.chat-1').addClass('active');

          }


            if($(this).hasClass('contact-2')){
              $('.chat').removeClass('active');
              $('.chat-2').addClass('active');
            }

            if($(this).hasClass('contact-3')){
              $('.chat').removeClass('active');
              $('.chat-3').addClass('active');
            }
            if($(this).hasClass('contact-4')){
              $('.chat').removeClass('active');
              $('.chat-4').addClass('active');
            }


          }



                  // var items = $('.contacts , .top , .superchat ');
                      // console.log(items);
                      // items.each(function (){
                      // var posizionecontatto = $('.contacts ').children().index();
                      // console.log(posizionecontatto);
                      // var posizionetop = $('.top ').children().index();
                      // console.log(posizionetop);
                      // var posizionechat = $('.superchat').children().index();
                      // console.log(posizionechat);
                      //
                      // if(posizionecontatto == posizionetop && posizionetop == posizionechat){
                      //   // $(this).addClass('active');
                      //   // $('.top-left' ).addClass('active');
                      //   // $('.chat' ).addClass('active');
                      //   $(this).show();
                        // }



















});
