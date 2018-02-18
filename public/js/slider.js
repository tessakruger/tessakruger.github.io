$(document).ready (function(){

	var slider = {
	  
	  // Not sure if keeping element collections like this
	  // together is useful or not.
	  el: {
	    slider: $("#slider"),
	    allSlides: $(".slide"),
	    sliderNav: $(".slider-nav"),
	    allNavButtons: $(".slider-nav > a"),
	    slideWidth: $('.slider-container').width(),
	  },

	  timing: 800,
	  // slideWidth: // could measure this
	  // In this simple example, might just move the
	  // binding here to the init function
	  init: function() {
	    this.bindUIEvents();
	    $('.slide').css({"width": this.el.slideWidth + "px"});
		$('.slider-wrap').css({"width": this.el.slideWidth + "px"});
	    this.setSlideWidths();
	  },

	  setSlideWidths: function() {
	  	this.el.slideWidth = $('.slider-container').width();
	  },
	  
	  bindUIEvents: function() {
	    // You can either manually scroll...
	    // this.el.slider.on("scroll", function(event) {
	    //   slider.moveSlidePosition(event);
	    // });
	    // ... or click a thing
	    // this.el.sliderNav.on("click", "a", function(event) {
	    //   slider.handleNavClick(event, this);
	    // });
	    // What would be cool is if it had touch
	    // events where you could swipe but it
	    // also kinda snapped into place.
	  },
	  
	  moveSlidePosition: function(event) {
	    // Magic Numbers =(
	    // this.el.allSlides.css({
	      // "background-position": $(event.target).scrollLeft()/6-100+ "px center",
	    //   "background-position": " center center"
	    // });
	  },
	  
	  // handleNavClick: function(event, el) {
	  //   event.preventDefault();
	  //   var position = $(el).attr("href").split("-").pop();
	  //   this.el.slider.animate({
	  //     scrollLeft: position * this.el.slideWidth
	  //   }, this.timing);
	  //   // this.changeActiveNav(el);
	  // },
	  
	  // changeActiveNav: function(el) {
	  //   this.el.allNavButtons.removeClass("active");
	  //   $(el).addClass("active");
	  // }
	  
	};

	slider.init();

	// $('.slider-nav a').removeClass('active');
	// $('.slider-nav a:first-child').addClass('active');

	new ResizeSensor($('.slider-container'), function() {
	    var slideWidth = $('.slider-container').width();
	    $('.slide').css({"width": slideWidth + "px"});
		$('.slider-wrap').css({"width": slideWidth + "px"});
		slider.setSlideWidths();
	});

});