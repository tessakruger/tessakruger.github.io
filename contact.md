---
layout: page
title: no flyers please
sidebar: contact;
permalink: /contact/
section:
  bio: I'm a freelance developer who loves to turn your visions into reality. Get in touch and let's create something great!
  img: /tessadrawing.svg
contact:
 - text: let's roll
   icon: fa-lightbulb-o
   text-link: kick start your project
   link: #
 - text: send me some electronic mail
   icon: fa-envelope-o
   text-link: <span class="line">hello</span><span class="line">@tessakruger.com</span>
   link: #
 - text: how about that sms
   icon: fa-phone
   text-link: 647 376 5462
   link: sms:6473765462
 - text: you like coffee?
   icon: fa-map-marker
   text-link: toronto, canada
   link: https://goo.gl/maps/vQgBwMjWjLC2
---
<p>I like beer and coffee. Usually not at the same time but hey, sometimes it's fun to live life on the edge. If you want to chat over either beverage, or even challenge me to a game of cornhole, here are a few ways we can make that happen.</p>
<div class="contact--wrapper">
	{% for prop in page.contact %}
	<div class="contact--info" id="contact--hover">
		<a href="{{ prop.link }}" style="display: block">
			<div class="contact--icon">
				<i class="fa {{ prop.icon }} fa-3x" aria-hidden="true"></i>
			</div>
			<div>
				<h4>{{ prop.text }}</h4>
			</div>
		</a>
		<div>
			<p>{{ prop.text-link }}</p>
		</div>
	</div>
	{% endfor %}
</div>