
$(document).ready(function () {	
	
	$('.menu-icon').click(function(){
		$(this).toggleClass('active');
		$('.header-bottom nav').fadeToggle();
		$('body').toggleClass('overflowHidden')
	});




	$('.models-container a.link.bottomlink').hover(function () {
		//$('.activeSub').css({ 'visibility': 'hidden', opacity: 0, 'z-index': 0, 'display': 'none' });
		$('.models-container a.link.bottomlink').removeClass('active');
		$(this).addClass('active');
		$('.sub-menu-models').css({ 'visibility': 'hidden', opacity: 0, 'z-index': 0, 'display': 'none' });
		$('.menu-right-img').css({ 'visibility': 'hidden', opacity: 0, 'z-index': 0, 'display': 'none' });
		var $popup3 = $('.' + $(this).attr('buton-alt-model'));
		TweenLite.to($popup3, 0, { css: { 'visibility': 'visible', opacity: 1, 'z-index': 1, 'display': 'block' }, delay: 0, ease: Power3.easeOut });
	});

	$('.karavan-link').hover(function () {
		$('.menu-bg').addClass('active');
	},function(){
		$('.menu-bg').removeClass('active');
	});

	$('.sub-menu-link').hover(function () {
		$('.menu-bg').addClass('active');
	},function(){
		$('.menu-bg').removeClass('active');
	});


	$('.tab-btn a').click(function () {
		$('.tab-btn a').removeClass('active');
		$(this).addClass('active');
		var index = $(this).index();
		$('.detay-bottom').hide();
        $(".detay-bottom:eq(" + index + ")").fadeIn(800);
	});

	$('#openSearch').click(function(){
		$(this).toggleClass('active');
		$('.form-area').slideToggle();
	});

	$('.form-row .close').click(function(){
		$('#openSearch').trigger('click');
	});

	$('.mobil-menu .arrow').click(function(){
		$(this).toggleClass('activeLink');
		$(this).next('div').slideToggle();
	});

	$('.scroll-bottom-link').click(function(){
		var height = $('.banner-home').height();
		var height2 = $('.logo-slider-wrapper').height();
		$("html, body").animate({ scrollTop: (height + height2) - 60 }, 600);
		return false;
	});

	setTimeout(function () {
		$('.wrapper').css('opacity', 1);
	}, 300)

	$('.link-menu').click(function(){
		$('.menu-wrapper').removeClass('active');
		$('body').removeClass('overFlowHidden');
		$('.menu-btn').removeClass('active');
		location.reload();
	});

	$(".accordion-title").click(function () {
        $(this).next("div").slideToggle(300).siblings("div.accordion-content").slideUp(300);
        $(this).toggleClass("active").siblings("div.active").removeClass("active").addClass("title-area");
	});

	$(".accor2").click(function () {
        $(this).next("div").slideToggle(300).siblings("div.accordion-content-hizmet").slideUp(300);
        $(this).toggleClass("active").siblings("div.active").removeClass("active").addClass("title-area");
	});
		


	$(window).scroll(function (event) {
		var scroll = $(window).scrollTop();
		if (scroll > 60) {
			$("header").addClass("fixed");
			
		} else {
			$("header").removeClass("fixed");
			
		}
	});
	
	
	var owl = $('#mainImgSlider');
	owl.owlCarousel({ loop: true, mouseDrag: false, touchDrag: false, smartSpeed: 500, margin: 12, autoplay: 6000, responsiveClass: true, dots: false, nav: false, responsive: { 0: { items: 1 }, } });
	
	

	var owl2 = $('#mainTxtSlider');
	owl2.owlCarousel({ loop: true, mouseDrag: false, touchDrag: false, smartSpeed: 500, margin: 20, autoplay: 6000, responsiveClass: true, dots: false, nav: true, responsive: { 0: { items: 1 }, } });
	owl2.on('changed.owl.carousel', function (event) {
		var currentItem = event.item.index - 2;
		$('.slideNum span').html('0' + (currentItem + 1) + '');
		owl.trigger('to.owl.carousel', [currentItem, 0, true])
	});
	

	$('.menu-btn').click(function(){
		$(this).toggleClass('active');
		$('body').toggleClass('overFlowHidden');
		$("header").removeClass("fixed");
	});



	new WOW().init();
		

});




$(window).load(function(){
	setTimeout(function(){
		$('.loading').fadeOut(200);
	},500);
});