$(document).ready(function(){

	// cursors
	// const cursorRounded = document.querySelector('.rounded');
	// const moveCursor = (e)=> {
	// 	const mouseY = e.clientY;
	// 	const mouseX = e.clientX;
	// 	cursorRounded.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
	// 	cursorPointed.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
	// }
	// window.addEventListener('mousemove', moveCursor);
	// document.addEventListener('mousedown', function(){
	// 	cursor.classList.add('click');
	// 	cursorinner.classList.add('cursorinnerhover')
	// });

	// document.addEventListener('mouseup', function(){
	// 	cursor.classList.remove('click')
	// 	cursorinner.classList.remove('cursorinnerhover')
	// });

	// a.forEach(item => {
	// 	item.addEventListener('mouseover', () => {
	// 		cursor.classList.add('hover');
	// 	});
	// 	item.addEventListener('mouseleave', () => {
	// 		cursor.classList.remove('hover');
	// 	});
	// })


// Draggable slider
	let isDown = false;
	let startX;
	let scrollLeft;
	const slider = document.querySelector('.card_slider');

	const end = () => {
		isDown = false;
		slider.classList.remove('active');
	}

	const start = (e) => {
		isDown = true;
		slider.classList.add('active');
		startX = e.pageX || e.touches[0].pageX - slider.offsetLeft;
		scrollLeft = slider.scrollLeft;	
	}

	const move = (e) => {
		if(!isDown) return;
		e.preventDefault();
		const x = e.pageX || e.touches[0].pageX - slider.offsetLeft;
		const dist = (x - startX);
		slider.scrollLeft = scrollLeft - dist;
	}

	(() => {
		slider.addEventListener('mousedown', start);
		slider.addEventListener('touchstart', start);

		slider.addEventListener('mousemove', move);
		slider.addEventListener('touchmove', move);

		slider.addEventListener('mouseleave', end);
		slider.addEventListener('mouseup', end);
		slider.addEventListener('touchend', end);
	})();

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

	// mobile menu 
	$('.burger').click(function (e) {
		e.preventDefault();
		$(this).toggleClass('active');
	});
});