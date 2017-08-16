$('#video').click(function(){
$('video')[0].play();
$('.video__overlay').hide();
})
$(document).ready(function(){

	$(".arrow").click(function(){
		$("html, body").animate({
			scrollTop : $("#about-us").offset().top 
		}, 1000);
	});

	 $(".nav-bar__menu").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        //забираем идентификатор бока с атрибута hre
        var id  = $(this).attr('href'),
        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top ;
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });

	var animationReady = false;
	function checkShowAnimation(){
	 	if($(window).scrollTop() > 3600 && !animationReady){
	 		 $('.second.circle').circleProgress({
	 		 	value: 0.75,
	 		 	animation: { 
 		 	    duration: 1600,
			    easing: 'circleProgressEasing'
				}
	 		 });
	 		  $('.second.circle-2').circleProgress({
	 		 	value: 0.63,
	 		 	animation: { 
 		 	    duration: 1600,
			    easing: 'circleProgressEasing'
				}
	 		 });
	 		 $('.second.circle-3').circleProgress({
	 		 	value: 0.90,
	 		 	animation: { 
 		 	    duration: 1600,
			    easing: 'circleProgressEasing'
				}
	 		 });
	 		 animationReady = true;
	 	}
	}

	$(window).scroll(function(){
 	if ($(this).scrollTop() > 800) {
 		$('.btn-top').addClass("btn-top_active");
 	} else {
 		$('.btn-top').removeClass("btn-top_active");
 	}
 	checkShowAnimation();
 });

  $('.btn-top').click(function(){
    	$("html, body").animate({ scrollTop: 0 }, 600);
    	return false;
    });

			var touch = $('#icon-menu');
		    var menu = $('.nav-bar__menu');
		 
		    $(touch).on('click', function(e) {
		        e.preventDefault();
		        menu.slideToggle();
		    });
		    $(window).resize(function(){
		        var wid = $(window).width();
		        if(wid > 760 && menu.is(':hidden')) {
		            menu.removeAttr('style');
		        }
		    });


		$('.second.circle').circleProgress({
			    value: 0,
	    		size: 160,
	    		startAngle: 4.7,
	    		thickness: 10,
	    		lineCap: "round",
	    		emptyFill: "rgba(197, 188, 219, .9)",
	    		fill: { color: "#6400f3" },
		    	animation: false
			  }).on('circle-animation-progress', function(event, progress) {
			    $(this).find('strong').html(Math.round(75 * progress) + '<i>%</i>');
  			}).find('strong').html('0<i>%</i>');

  		$('.second.circle-2').circleProgress({
			    value: 0,
			    size: 160,
	    		startAngle: 4.7,
	    		thickness: 10,
	    		lineCap: "round",
	    		emptyFill: "rgba(197, 188, 219, .9)",
	    		fill: { color: "#6400f3" },
	    		animation: false
			  }).on('circle-animation-progress', function(event, progress) {
			    $(this).find('strong').html(Math.round(63 * progress) + '<i>%</i>');
  			}).find('strong').html('0<i>%</i>');

  		$('.second.circle-3').circleProgress({
			    value: 0,
			    size: 160,
	    		startAngle: 4.7,
	    		thickness: 10,
	    		lineCap: "round",
	    		emptyFill: "rgba(197, 188, 219, .9)",
	    		fill: { color: "#6400f3" },
	    		animation: false
			  }).on('circle-animation-progress', function(event, progress) {
			    $(this).find('strong').html(Math.round(90 * progress) + '<i>%</i>');
  			}).find('strong').html('0<i>%</i>');      

	checkShowAnimation();
});

$('.scroll').slick({
	dots: true,
	arrows:false,
	vertical: true,
	responsive: [
	{
		breakpoint: 1024,
		settings: {
			vertical: false
		}
	}
] 
});
$('.scroll-2').slick({
	dots: true,
	arrows:false,
	vertical: true,
	responsive: [
	{
		breakpoint: 1024,
		settings: {
			vertical: false
		}
	}
] 
});
$('.scroll-3').slick({
	dots: true,
	arrows:false
});
$('.sl').slick({
	slidesToShow: 4,
	dots: true,
	arrows:false,
	responsive: [
	{
		breakpoint: 768,
		settings: {
			slidesToShow: 2
		}
	},
	{
		breakpoint: 420,
		settings: {
			slidesToShow: 1
		}
	}
]
});


