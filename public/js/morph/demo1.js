/**
 * demo1.js
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2017, Codrops
 * http://www.codrops.com
 */
{
	const DOM = {};
	DOM.intro = document.querySelector('.content--intro');
	DOM.shape = DOM.intro.querySelector('svg.shape');
	DOM.path = DOM.shape.querySelector('path');
	DOM.enterDesign = document.querySelector('.enterDesign');
	DOM.enterCode = document.querySelector('.enterCode');
	charming(DOM.enterDesign);
	charming(DOM.enterCode);
	DOM.enterLetters = Array.from(DOM.enterDesign.querySelectorAll('span'));
	DOM.enterLetters2 = Array.from(DOM.enterCode.querySelectorAll('span'));
	// Set the SVG transform origin.
	DOM.shape.style.transformOrigin = '50% 0%';

	const init = () => {
		imagesLoaded(document.body, {background: true} , () => document.body.classList.remove('loading'));
		DOM.enterDesign.addEventListener('click', navigate);
		DOM.enterDesign.addEventListener('touchenter', navigate);
		DOM.enterDesign.addEventListener('mouseenter', enterHoverInFn);
		DOM.enterDesign.addEventListener('mouseleave', enterHoverOutFn);
		DOM.enterCode.addEventListener('click', navigate2);
		DOM.enterCode.addEventListener('touchenter', navigate2);
		DOM.enterCode.addEventListener('mouseenter', enterHoverInFn2);
		DOM.enterCode.addEventListener('mouseleave', enterHoverOutFn2);
	};

	let loaded;
	const navigate = () => {
		console.log('clicked');
		$('#content').animate({'opacity': '1'}, 400);
		if ( loaded ) return;
		loaded = true;

		anime({
			targets: DOM.intro,
			duration: 1100,
			easing: 'easeInOutSine',
			translateY: '-200vh'
		});
		
		anime({
			targets: DOM.shape,
			scaleY: [
				{value:[0.8,1.8],duration: 550,easing: 'easeInQuad'},
				{value:1,duration: 550,easing: 'easeOutQuad'}
			]
		});

		anime({
			targets: DOM.path,
			duration: 1100,
			easing: 'easeOutQuad',
			d: DOM.path.getAttribute('pathdata:id')
		});
		$('html').css({'overflow-y': 'scroll', 'overflow': '-moz-scrollbars-vertical'});
	};

	const navigate2 = () => {
		$('#content').animate({'opacity': '1'}, 400);
		if ( loaded ) return;
		loaded = true;

		anime({
			targets: DOM.intro,
			duration: 1100,
			easing: 'easeInOutSine',
			translateY: '-200vh'
		});
		
		anime({
			targets: DOM.shape,
			scaleY: [
				{value:[0.8,1.8],duration: 550,easing: 'easeInQuad'},
				{value:1,duration: 550,easing: 'easeOutQuad'}
			]
		});

		anime({
			targets: DOM.path,
			duration: 1100,
			easing: 'easeOutQuad',
			d: DOM.path.getAttribute('pathdata:id')
		});
		$('html').css({'overflow-y': 'scroll', 'overflow': '-moz-scrollbars-vertical'});
	};

	let isActive;
	let enterTimeout;

	const enterHoverInFn = () => enterTimeout = setTimeout(() => {
		isActive = true;
		anime.remove(DOM.enterLetters);
		anime({
			targets: DOM.enterLetters,
			delay: (t,i) => i*15,
			translateY: [
				{value: 10, duration: 150, easing: 'easeInQuad'},
				{value: [-10,0], duration: 150, easing: 'easeOutQuad'}
			],
			opacity: [
				{value: 0, duration: 150, easing: 'linear'},
				{value: 1, duration: 150, easing: 'linear'}
			],
			color: {
				value: '#fff',
				duration: 1,
				delay: (t,i,l) => i*15+150
			}
		});
	}, 50);

	const enterHoverInFn2 = () => enterTimeout = setTimeout(() => {
		isActive = true;
		anime.remove(DOM.enterLetters2);
		anime({
			targets: DOM.enterLetters2,
			delay: (t,i) => i*15,
			translateY: [
				{value: 10, duration: 150, easing: 'easeInQuad'},
				{value: [-10,0], duration: 150, easing: 'easeOutQuad'}
			],
			opacity: [
				{value: 0, duration: 150, easing: 'linear'},
				{value: 1, duration: 150, easing: 'linear'}
			],
			color: {
				value: '#fff',
				duration: 1,
				delay: (t,i,l) => i*15+150
			}
		});
	}, 50);

	const enterHoverOutFn = () => {
		clearTimeout(enterTimeout);
		if( !isActive ) return;
		isActive = false;

		anime.remove(DOM.enterLetters);
		anime({
			targets: DOM.enterLetters,
			delay: (t,i,l) => (l-i-1)*15,
			translateY: [
				{value: 10, duration: 150, easing: 'easeInQuad'},
				{value: [-10,0], duration: 150, easing: 'easeOutQuad'}
			],
			opacity: [
				{value: 0, duration: 150, easing: 'linear'},
				{value: 1, duration: 150, easing: 'linear'}
			],
			color: {
				value: '#c0c9ce',
				duration: 1,
				delay: (t,i,l) => (l-i-1)*15+150
			}
		});
	};

	const enterHoverOutFn2 = () => {
		clearTimeout(enterTimeout);
		if( !isActive ) return;
		isActive = false;

		anime.remove(DOM.enterLetters2);
		anime({
			targets: DOM.enterLetters2,
			delay: (t,i,l) => (l-i-1)*15,
			translateY: [
				{value: 10, duration: 150, easing: 'easeInQuad'},
				{value: [-10,0], duration: 150, easing: 'easeOutQuad'}
			],
			opacity: [
				{value: 0, duration: 150, easing: 'linear'},
				{value: 1, duration: 150, easing: 'linear'}
			],
			color: {
				value: '#c0c9ce',
				duration: 1,
				delay: (t,i,l) => (l-i-1)*15+150
			}
		});
	};

	init();
};