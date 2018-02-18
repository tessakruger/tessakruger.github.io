$(document).ready (function(){

	const allSlides = document.getElementsByClassName('slider-wrap');
	const allNavButtons = $(".slider-nav > a");
	$(allNavButtons[0]).addClass("active");

	for(let i=0; i<allSlides.length; i++) {
		let carousel = { container: allSlides[i] };
		carousel.slider = carousel.container.children[1];
		carousel.holder = carousel.slider.getElementsByClassName('holder');
		carousel.items = carousel.holder[0].children;
		carousel.buttons = {
			"prev": document.getElementById("go-back"),
			"next": document.getElementById("go-forward")
		};
		carousel.currentItem = 0;
		(function(carousel) {
			carousel.buttons.prev.addEventListener('click', function(e) {
				carouselPrev(carousel); });
			carousel.buttons.next.addEventListener('click', function(e) {
				carouselNext(carousel); });

		})(carousel);
	}

	function carouselNext(carousel) {
		carousel.currentItem++;
		if(carousel.currentItem >= carousel.items.length) {
			carousel.currentItem = 0;
		}
		let position = carousel.currentItem
		let navEl = allNavButtons[position]
		displayCarouselItem(carousel, position);
		changeActiveNav(navEl);
	}

	function carouselPrev(carousel) {
		carousel.currentItem--;
		let position;
		if(carousel.currentItem <= -1) {
			carousel.currentItem = carousel.items.length - 1;
		}
		position = carousel.currentItem
		let navEl = allNavButtons[position]
		displayCarouselItem(carousel, position);
		changeActiveNav(navEl);
	}

	let slider = $('#slider')

	function displayCarouselItem(carousel, position) {
		slider.animate({
			scrollLeft: position * carousel.slider.clientWidth
		}, 500)
	}

  function changeActiveNav(el) {
    allNavButtons.removeClass("active");
    $(el).addClass("active");
  }

})
