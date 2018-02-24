$(document).ready (function(){

	const allSlides = document.getElementsByClassName('slider-wrap');
	const allNavButtons = $(".slider-nav > a");
	$(allNavButtons[0]).addClass("active");
	let outsideCarousel;

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
		outsideCarousel = carousel
	}

	function myfunction(el,d) {
	  if (d === "r") {
	  	carouselPrev(outsideCarousel)
	  }
	  if (d === "l") {
	  	carouselNext(outsideCarousel)
	  }
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

  function detectswipe(el,func) {
    swipe_det = new Object();
    swipe_det.sX = 0; swipe_det.sY = 0; swipe_det.eX = 0; swipe_det.eY = 0;
    var min_x = 10;  //min x swipe for horizontal swipe
    var max_x = 10;  //max x difference for vertical swipe
    var min_y = 50;  //min y swipe for vertical swipe
    var max_y = 60;  //max y difference for horizontal swipe
    var direc = "";
    ele = document.getElementById(el);
    ele.addEventListener('touchstart',function(e){
      var t = e.touches[0];
      swipe_det.sX = t.screenX; 
      swipe_det.sY = t.screenY;
    },false);
    ele.addEventListener('touchmove',function(e){
      e.preventDefault();
      var t = e.touches[0];
      swipe_det.eX = t.screenX; 
      swipe_det.eY = t.screenY;    
    },false);
    ele.addEventListener('touchend',function(e){
      //horizontal detection
      if ((((swipe_det.eX - min_x > swipe_det.sX) || (swipe_det.eX + min_x < swipe_det.sX)) && ((swipe_det.eY < swipe_det.sY + max_y) && (swipe_det.sY > swipe_det.eY - max_y) && (swipe_det.eX > 0)))) {
        if(swipe_det.eX > swipe_det.sX) direc = "r";
        else direc = "l";
      }

      if (direc != "") {
        if(typeof func == 'function') func(el,direc);
      }
      direc = "";
      swipe_det.sX = 0; swipe_det.sY = 0; swipe_det.eX = 0; swipe_det.eY = 0;
    },false);  
  }

  detectswipe('slider',myfunction);

})