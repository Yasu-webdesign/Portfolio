$(function(){

  $('.fa-bars').click(function(){
    var $burger = $('.hidden');
    if($burger.hasClass('close')){
      $burger.removeClass('close');
      $burger.slideDown();
    } else {
      $burger.addClass('close');
      $burger.hide();
    }
  });


  $('#head-title').click(function(){
    $('html').animate({scrollTop : 0},500);
  });

  $('#smarthead').click(function(){
    $('html').animate({scrollTop : 0},500);
  });

  $('header a').click(function(){
      var id = $(this).attr('href');
      var position = $(id).offset().top;
      $('html,body').animate({
        'scrollTop': position - 60
      }, 500);
    });

    $('a').click(function(){
        var id = $(this).attr('href');
        var position = $(id).offset().top;
        $('html,body').animate({
          'scrollTop': position - 60
        }, 500);
      });

  $('.button').click(function(){
      var id = $(this).attr('href');
      var position = $(id).offset().top;
      $('html,body').animate({
        'scrollTop': position - 60
      }, 500);
    });

  $('.footer a').click(function(){
      var id = $(this).attr('href');
      var position = $(id).offset().top;
      $('html,body').animate({
        'scrollTop': position - 100
      }, 500);
    });

  $(window).scroll(function (){
	$('.fadein').each(function(){
	var elemPos = $(this).offset().top;
	var scroll = $(window).scrollTop();
	var windowHeight = $(window).height();
	if (scroll > elemPos - windowHeight - 70){
		$(this).addClass('scrollin');
	  }
	 });
	});
});
