// Quote rotator jquery library

//Quotes rotator
var divs = $('.cbp-qtcontent');

var dots = $('.dots');

function advance(){
    var current = $('.current');
    var currentIndex = divs.index(current),
        nextIndex = currentIndex + 1;

    if (nextIndex >= divs.length) {
        nextIndex = 0;
    }

    var next = divs.eq(nextIndex);

    fade(current, next);
}

function retreat(){
    var current = $('.current');
    var currentIndex = divs.index(current),
        nextIndex = currentIndex - 1;

    if (nextIndex < 0) {
        nextIndex = divs.length -1;
    }

    var next = divs.eq(nextIndex);

    fade(current, next)
}

function fade(current, next) {
    next.stop().fadeIn(1500, function () {
        $(this).addClass('current');
    });

    current.stop().fadeOut(1500, function () {
        $(this).removeClass('current');
    });
}

// Events
function nextPane() {
    advance();
}

function previousPane() {
    retreat();
}