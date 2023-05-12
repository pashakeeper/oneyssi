$(document).ready(function(){

	var cursor = document.querySelector('.cursor');
	var cursorinner = document.querySelector('.cursor2');
	var a = document.querySelectorAll('.tabs li a');
	var firstSection = document.querySelectorAll('.section_01');
	var textSection = document.querySelectorAll('.text_section');
	var call = document.querySelectorAll('.take_call');
	var imagesReview = document.querySelectorAll('.image_tab');
	var formCursor = document.querySelectorAll('.form');
	var wd = $(window).width();
	var half = (wd / 2);
	document.addEventListener('mousemove', function(e){
		var x = e.clientX;
		var y = e.clientY;
		cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
		
	});


	document.addEventListener('mousedown', function(){
		cursor.classList.add('click');
	});

	document.addEventListener('mouseup', function(){
		cursor.classList.remove('click')
	});
	formCursor.forEach(item => {
		item.addEventListener('mouseover', (e) => {
			$('.cursor').hide();
			$(':root').css('cursor','auto');
			$('*:hover').css('cursor','auto');
		});
		item.addEventListener('mouseleave', (e) => {
			$('.cursor').show();
		});
	});
	firstSection.forEach(item => {
		item.addEventListener('mouseover', (e) => {
			if (half < e.clientX) {
				cursor.classList.add('right');
			}
			else {
				cursor.classList.remove('right');
			}
			if (half > e.clientX) {
				cursor.classList.add('left');
			}
			else {
				cursor.classList.remove('left');
			}
		});
		item.addEventListener('mouseleave', () => {
			cursor.classList.remove('right');
			cursor.classList.remove('left');
		});
	});
	textSection.forEach(item => {
		item.addEventListener('mouseover', (e) => {
			if (half < e.clientX) {
				cursor.classList.add('right');
			}
			else {
				cursor.classList.remove('right');
			}
			if (half > e.clientX) {
				cursor.classList.add('left');
			}
			else {
				cursor.classList.remove('left');
			}
		});
		item.addEventListener('mouseleave', () => {
			cursor.classList.remove('right');
			cursor.classList.remove('left');
		});
	});
	imagesReview.forEach(item => {
		item.addEventListener('mouseover', (e) => {
			cursor.classList.add('see');
		});
		item.addEventListener('mouseleave', () => {
			cursor.classList.remove('see');
		});
	})
	a.forEach(item => {
		item.addEventListener('mouseover', () => {
			cursor.classList.add('tabs_hover');
		});
		item.addEventListener('mouseleave', () => {
			cursor.classList.remove('tabs_hover');
		});
	})
	call.forEach(item => {
		item.addEventListener('mouseover', () => {
			cursor.classList.add('call_hover');
		});
		item.addEventListener('mouseleave', () => {
			cursor.classList.remove('call_hover');
		});
	})

	var p = $(".logo");
	var position = p.position();
	$(window).resize(function(){
		$('.section_01 .col:first-child').css({
			"padding-left": position.left,
		})
	});
	$('.section_01 .col:first-child').css({
		"padding-left": position.left,
	})





	// first container scroll
	const slider = document.querySelector('.first_row');
	const text = document.querySelector('.text_row');
	let isDown = false;
	let startX;
	let scrollLeft;

	slider.addEventListener('mousedown', (e) => {
		isDown = true;
		slider.classList.add('active');
		startX = e.pageX - slider.offsetLeft;
		scrollLeft = slider.scrollLeft;
	});
	slider.addEventListener('mouseleave', () => {
		isDown = false;
		slider.classList.remove('active');
	});
	slider.addEventListener('mouseup', () => {
		isDown = false;
		slider.classList.remove('active');
	});
	slider.addEventListener('mousemove', (e) => {
		if(!isDown) return;
		e.preventDefault();
		const x = e.pageX - slider.offsetLeft;
		const walk = (x - startX) * 3; //scroll-fast
		slider.scrollLeft = scrollLeft - walk;
	});
	text.addEventListener('mousedown', (e) => {
		isDown = true;
		text.classList.add('active');
		startX = e.pageX - text.offsetLeft;
		scrollLeft = text.scrollLeft;
	});
	text.addEventListener('wheel', (e) => {
		e.preventDefault();
		text.scrollBy({
			left: e.deltaY < 0 ? -30 : 30,
		});
	});
	text.addEventListener('mouseleave', () => {
		isDown = false;
		text.classList.remove('active');
	});
	text.addEventListener('mouseup', () => {
		isDown = false;
		text.classList.remove('active');
	});
	text.addEventListener('mousemove', (e) => {
		if(!isDown) return;
		e.preventDefault();
		const x = e.pageX - text.offsetLeft;
		const walk = (x - startX) * 3; //scroll-fast
		text.scrollLeft = scrollLeft - walk;
	});
	var galleryThumbs = new Swiper('.gallery-thumbs', {
		spaceBetween: 10,
		slidesPerView: "auto",
		freeMode: true,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
		scrollbar: {
			el: ".thumb_scrollbar",
			draggable: true,
			dragSize: 350
		},
	});
	var galleryTop = new Swiper('.gallery-top', {
		effect: 'fade',
		centeredSlides: true,
		mousewheel: false,
		thumbs: {
			swiper: galleryThumbs
		}
	});
	var galleryThumbs2 = new Swiper('.gallery-thumbs_02', {
		spaceBetween: 10,
		slidesPerView: "auto",
		freeMode: true,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
		scrollbar: {
			el: ".thumb_scrollbar",
			draggable: true,
			dragSize: 350
		},
	});
	var galleryTop2 = new Swiper('.gallery-top_02', {
		effect: 'fade',
		centeredSlides: true,
		mousewheel: false,
		thumbs: {
			swiper: galleryThumbs2
		}
	});
	var galleryThumbs3 = new Swiper('.gallery-thumbs_03', {
		spaceBetween: 10,
		slidesPerView: "auto",
		freeMode: true,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
		scrollbar: {
			el: ".thumb_scrollbar",
			draggable: true,
			dragSize: 350
		},
	});
	var galleryTop3 = new Swiper('.gallery-top_03', {
		effect: 'fade',
		centeredSlides: true,
		mousewheel: false,
		thumbs: {
			swiper: galleryThumbs3
		}
	});
	var recomend = new Swiper(".recomend", {
		slidesPerView: "auto",
		freeMode: true,
		slideToClickedSlide: false,
		centeredSlides: true,
		initialSlide: 1,
		scrollbar: {
			el: ".recommend_scrollbar",
			draggable: true,
			dragSize: 300
		},
		mousewheel: true	
	});

	
	if (wd <= 999) {
		var swiper = new Swiper(".card_slider__wrapper", {
			slidesPerView: "auto",
			freeMode: true,
			slideToClickedSlide: true,
			centeredSlides: true,
			spaceBetween: 10,
			observer: true,
			observeParents: true,
			scrollbar: {
				el: ".swiper-scrollbar",
				draggable: true,
				dragSize: 100
			},
			mousewheel: true,
		// Responsive breakpoints
			breakpoints: {
    // when window width is >= 320px
				325: {
					slidesPerView: 'auto',
					initialSlide: 1,
				},
			}
		});
		var rent = new Swiper(".rent_slider", {
			slidesPerView: "auto",
			freeMode: true,
			loop: false,
			initialSlide: 2,
			slideToClickedSlide: true,
			centeredSlides: true,
			observer: true,
			observeParents: true,
			scrollbar: {
				el: ".rent_scrollbar",
				draggable: true,
				dragSize: 180,
			},
			mousewheel: true,
		// Responsive breakpoints
			breakpoints: {
    // when window width is >= 320px
				325: {
					slidesPerView: 'auto',
					// initialSlide: 2,
				},
			},
		});
		var team = new Swiper(".team_slider", {
			slidesPerView: "auto",
			freeMode: true,
			loop: false,
			initialSlide: 1,
			slideToClickedSlide: true,
			centeredSlides: true,
			observer: true,
			observeParents: true,
			scrollbar: {
				el: ".rent_scrollbar",
				draggable: true,
				dragSize: 180,
			},
			mousewheel: true,
		// Responsive breakpoints
			breakpoints: {
    // when window width is >= 320px
				325: {
					slidesPerView: 'auto',
					// initialSlide: 2,
				},
			},
		});
		var review = new Swiper(".review_slider", {
			slidesPerView: "auto",
			freeMode: true,
			spaceBetween: 150,
			loop: false,
			initialSlide: 1,
			slideToClickedSlide: true,
			centeredSlides: true,
			observer: true,
			observeParents: true,
			scrollbar: {
				el: ".rent_scrollbar",
				draggable: true,
				dragSize: 180,
			},
			mousewheel: true,
		// Responsive breakpoints
			breakpoints: {
    // when window width is >= 320px
				325: {
					slidesPerView: 'auto',
					// initialSlide: 2,
				},
			},
		});
	}


	$(window).on('scroll', function(){
		if($(window).scrollTop() >= 600){
			$('.take_call').addClass('fixed')
		}
		else {
			$('.take_call').removeClass('fixed')
		}
	});
	$('.modal_close').click(function(e){
		e.preventDefault();
		$.fancybox.close();
	});
	// tabs
	$('.tab').click(function(e){
		e.preventDefault();
		if(!$(this).is('.active')) {
			$('.tab, .tabs_content').removeClass('active');
			$('.tabs_content').hide();
			$(this).addClass('active');
			$('.tabs_content[data-tab="'+$(this).attr('data-tab')+'"]').css({"opacity":"0","display":"block",}).show().animate({opacity:1},200)
			$('.tabs_content[data-tab="'+$(this).attr('data-tab')+'"]').addClass('active');
		}
	});
	$('.sell').click(function(e){
		e.preventDefault();
		if(!$(this).is('.active')) {
			$('.sell, .sell_content').removeClass('active');
			$('.sell_content').hide();
			$(this).addClass('active');
			$('.sell_content[data-tab="'+$(this).attr('data-tab')+'"]').css({"opacity":"0","display":"block",}).show().animate({opacity:1},200)
			$('.sell_content[data-tab="'+$(this).attr('data-tab')+'"]').addClass('active');
		}
	});
	$('.images_tab__box').click(function(e){
		e.preventDefault();
		if(!$(this).is('.active')) {
			$('.images_tab__box, .images_tab_content__container').removeClass('active');
			$('.images_tab_content__container').hide();
			$(this).addClass('active');
			$('.images_tab_content__container[data-tab="'+$(this).attr('data-tab')+'"]').css({"opacity":"0","display":"block",}).show().animate({opacity:1},200)
			$('.images_tab_content__container[data-tab="'+$(this).attr('data-tab')+'"]').addClass('active');
		}
	});

	// mobile menu 
	$('.burger').click(function (e) {
		e.preventDefault();
		$(this).toggleClass('active');
		$('.main_menu').slideToggle();
	});
	submitHandler();
});


function submitHandler() {
	$('input[type="submit"]').click(function (e) {
		e.preventDefault();
		console.log('asdasd');
		var formData = {
			name: $("#name").val(),
			phone: $("#phone").val(),
			name_modal: $("#item_modal .name").val() || $("#item_modal_02 .name").val() || $("#item_modal_03 .name").val() ,
			phone_modal: $("#item_modal .phone").val() || $("#item_modal_02 .phone").val() || $("#item_modal_03 .phone").val(),
		};
		console.log(formData);
		$.ajax({
			type: "POST",
			url: "/send.php",
			data: formData,
			dataType: "json",
			encode: true,
		}).done(function (data) {
			console.log(data);

		});
		$('.thanks').show();
		setTimeout(function() { 
			location.reload();
		}, 2000);
		
	});
	
}