---
layout: page
title: now you're speaking my language
sidebar: tech stack;
permalink: /tech/
section:
  bio: I like to dabble between the disparate visual and technical languages. I love to problem solve, while making things look pretty. Just call me full stack.
  img: /tessadrawing.svg
stack:
 - tech: js
   name: javascript
   image: /projects/tech/js.svg
   knowledge: 75
 - tech: node
   name: nodejs
   image: /projects/tech/node.svg
   knowledge: 75
 - tech: vue
   name: vue
   image: /projects/tech/vue.svg
   knowledge: 80
   resize: larger
   colorless: gray
 - tech: react
   name: react
   image: /projects/tech/react.svg
   knowledge: 75
 - tech: rails
   name: rails
   image: /projects/tech/rails.svg
   knowledge: 75
 - tech: shopify
   name: shopify
   image: /projects/tech/shopify.svg
   knowledge: 75
 - tech: html
   name: html5
   image: /projects/tech/html.svg
   knowledge: 95
 - tech: css
   name: css3
   image: /projects/tech/css.svg
   knowledge: 95
 - tech: sass
   name: sass
   image: /projects/tech/sass.svg
   knowledge: 95
 - tech: ai
   name: illustrator
   image: /projects/tech/illustrator.svg
   knowledge: 95
 - tech: psd
   name: photoshop
   image: /projects/tech/photoshop.svg
   knowledge: 90
---
<p>These are a few tools of my trade. I'm frontend-focused, but also enjoy working with databases and take an odd liking to SQL queries. My recent work has been in Javascript using Vue and Node, and I take pride in writing scalable, and easily maintainable code.</p>
<div class="set-size charts-container">
	{% for prop in page.stack %}
	<div class="tech">
	  <div class="pie-wrapper" id="progress-{{ prop.knowledge}}">
	    <span class="label">
	    	<img class="{{ prop.resize }} {{ prop.colorless }}" src="{{ site.url }}/public/images{{ prop.image }}">
	    </span>
	    <div class="pie">
	      <div class="left-side half-circle {{ prop.tech }}"></div>
	      <div class="right-side half-circle {{ prop.tech }}"></div>
	    </div>
	    <div class="shadow"></div>
	  </div>
	  <p>{{ prop.name }}</p>
	</div>
	{% endfor%}
</div>

