var paths = $('path:not(defs path)');

paths.each(function(i, e) {
    e.style.strokeDasharray = e.style.strokeDashoffset = e.getTotalLength();
});

var tl = new TimelineMax();

tl.add([
    TweenLite.to(paths.eq(0), 0.4, {strokeDashoffset: 0, delay: 0.0, ease: Linear.easeIn}),
    TweenLite.to(paths.eq(1), 0.5, {strokeDashoffset: 0, delay: 0.4, ease: Linear.easeIn}),
    TweenLite.to(paths.eq(2), 0.3, {strokeDashoffset: 0, delay: 0.9, ease: Linear.easeIn}), 
    TweenLite.to(paths.eq(3), 0.3, {strokeDashoffset: 0, delay: 1.2, ease: Linear.easeOut}),
    TweenLite.to(paths.eq(4), 0.3, {strokeDashoffset: 0, delay: 1.5, ease: Linear.easeOut}),
    TweenLite.to(paths.eq(5), 0.3, {strokeDashoffset: 0, delay: 1.8, ease: Linear.easeOut}),
    TweenLite.to(paths.eq(6), 0.4, {strokeDashoffset: 0, delay: 2.2, ease: Linear.easeIn}),
    TweenLite.to(paths.eq(7), 0.3, {strokeDashoffset: 0, delay: 2.5, ease: Linear.easeOut}),
    TweenLite.to(paths.eq(8), 0.3, {strokeDashoffset: 0, delay: 2.9, ease: Linear.easeOut}),
]);