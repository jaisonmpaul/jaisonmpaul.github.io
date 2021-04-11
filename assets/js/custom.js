/*global $:false, jQuery:false, console:false */
(function ($) {
"use strict";
	//scroll to top
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.scrollup').fadeIn();
			} else {
			$('.scrollup').fadeOut();
		}
	});
	$('.scrollup').click(function(){
		$("html, body").animate({ scrollTop: 0 }, 600);
			return false;
	});

    $('.accordion').on('show', function (e) {

		$(e.target).prev('.accordion-heading').find('.accordion-toggle').addClass('active');
		$(e.target).prev('.accordion-heading').find('.accordion-toggle i').removeClass('icon-plus');
		$(e.target).prev('.accordion-heading').find('.accordion-toggle i').addClass('icon-minus');
    });

    $('.accordion').on('hide', function (e) {
    $(this).find('.accordion-toggle').not($(e.target)).removeClass('active');
		$(this).find('.accordion-toggle i').not($(e.target)).removeClass('icon-minus');
		$(this).find('.accordion-toggle i').not($(e.target)).addClass('icon-plus');
    });


	//navigation
	$('.navigation').onePageNav({
		begin: function() {
			console.log('start');
			$('body').append('<div id="device-dummy" style="height: 1px;"></div>');
		},
		end: function() {
			console.log('stop');
			$('#device-dummy').remove();
		},
	currentClass: 'active',
  changeHash: false,
  scrollSpeed: 1000,
  // scrollOffset: 80
	scrollOffset: $('#header-bar').height(),
	});

		$('.navigation').find('a').on('click', function () {
				  var $el = $(this)
				    , id = $el.attr('href');

				  $('html, body').animate({
				    scrollTop: $(id).offset().top - $('.navigation').outerHeight()
				  }, 500);

					$('.accordion').on('hide', function (e) {
							$(this).find('.accordion-toggle').not($(e.target)).removeClass('active');
					$(this).find('.accordion-toggle i').not($(e.target)).removeClass('icon-minus');
					$(this).find('.accordion-toggle i').not($(e.target)).addClass('icon-plus');
					});



				  return false;
				});

		// fancybox
		$(".fancybox").fancybox({
				padding : 0,
				autoResize: true,
				beforeShow: function () {
					this.title = $(this.element).attr('title');
					this.title = '<h4>' + this.title + '</h4>' + '<p>' + $(this.element).parent().find('img').attr('alt') + '</p>';
				},
				helpers : {
					title : { type: 'inside' },
				}
			});

		$('.fancybox-media').fancybox({
			openEffect  : 'none',
			closeEffect : 'none',
			helpers : {
				media : {}
			}
		});

	//nicescroll
	$("html").niceScroll({zindex:999,cursorborder:"",cursorborderradius:"2px",cursorcolor:"#191919",cursoropacitymin:.5});
	function initNice() {
		if($(window).innerWidth() <= 960) {
			$('html').niceScroll().remove();
		} else {
			$("html").niceScroll({zindex:999,cursorborder:"",cursorborderradius:"2px",cursorcolor:"#191919",cursoropacitymin:.5});
		}
	}
	$(window).load(initNice);
	$(window).resize(initNice);

})(jQuery);

$(window).scroll(function(){
"use strict";
	if($(window).scrollTop()<10){

		$('.fade').stop(true,true).fadeTo("slow",1);
	} else {
	$('.fade').stop(true,true).fadeTo("slow", 0.33);
	}
});
