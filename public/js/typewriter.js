startCursive = function(callback){
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

    setTimeout(callback, 3000);
}

function setupTypewriter(t) {
    console.log('setup typewriter...');
    var HTML = t.innerHTML;

    t.innerHTML = "";

    var cursorPosition = 0,
        tag = "",
        writingTag = false,
        tagOpen = false,
        typeSpeed = 100,
        tempTypeSpeed = 0;

    var type = function() {

        console.log('start typing...');
    
        if (writingTag === true) {
            tag += HTML[cursorPosition];
        }

        if (HTML[cursorPosition] === "<") {
            tempTypeSpeed = 0;
            if (tagOpen) {
                tagOpen = false;
                writingTag = true;
            } else {
                tag = "";
                tagOpen = true;
                writingTag = true;
                tag += HTML[cursorPosition];
            }
        }
        if (!writingTag && tagOpen) {
            tag.innerHTML += HTML[cursorPosition];
        }
        if (!writingTag && !tagOpen) {
            if (HTML[cursorPosition] === " ") {
                tempTypeSpeed = 0;
            }
            else {
                tempTypeSpeed = (Math.random() * typeSpeed) + 50;
            }
            t.innerHTML += HTML[cursorPosition];
        }
        if (writingTag === true && HTML[cursorPosition] === ">") {
            tempTypeSpeed = (Math.random() * typeSpeed) + 50;
            writingTag = false;
            if (tagOpen) {
                var newSpan = document.createElement("span");
                t.appendChild(newSpan);
                newSpan.innerHTML = tag;
                tag = newSpan.firstChild;
            }
        }

        cursorPosition += 1;
        if (cursorPosition < HTML.length - 1) {
            setTimeout(type, tempTypeSpeed);
        }

    };

    return {
        type: type
    };
}

startTyping = function(){
    var typer = document.getElementById('typewriter');
    typewriter = setupTypewriter(typewriter);
    typewriter.type();
}

animate = function(){
    startCursive(function() {
        $.when($('.hidden-load').css(
            'visibility', 'visible').hide().fadeIn(250))
        .promise()
        .done(function() {
            console.log('end of animation');
            $('.hidden-load').css('color', '#f8c000');
            startTyping();
        })
    });
}

animate();