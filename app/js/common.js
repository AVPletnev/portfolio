$(function () {
	'use strict';
	var $body = $('body')


	$(window).on("scroll", function() {
		var scrollTop = $(this).scrollTop();
		// var el = $('[data-start-page-content]'),
		var el = $body
			
	
	
		// if (el.offset().top < scrollTop) {
		//      $("body").addClass('page-is-scrolled');
		// }else {
		//       setTimeout(function() {
		//            $("body").removeClass('page-is-scrolled')
		//         }, 1000);
	
		// }
	
		if (el.offset().top + 1000 < scrollTop) {
			$("#html").addClass('html');
			$("#css").addClass('css');
			$("#js").addClass('js');
			$("#ds").addClass('ds');
		} else {
			// if ($("body").hasClass(className) && $(window).width() >= 768) {
			//     // $("body").removeClass('menu-is-active');
			// }
	
			$("#html").removeClass('html');
			$("#css").removeClass('css');
			$("#js").removeClass('js');
			$("#ds").removeClass('ds');
		}
	
	});

	$('.center').slick({

		
	});
});

