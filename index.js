const theProcess = $('.the-process-lottie');

function moveStart() {
    theProcess.addClass('moving');

}
function moveEnd() {
    theProcess.removeClass('moving');
}


//scrolling 
$(function () {
    $.scrollify({
        section: ".s-scroll",
        easing: "linear",
        scrollSpeed: 1000,
        before: function (i, sscroll) {

            //  moveStart();
            console.log('before' + i);
            if (i == 1) {
                movingFromHeader();


            }
            if (i == 2) {

            }
            if (i == 3) {

            }
            if (i == 4) {

            }
            if (i == 5) {

            }
            if (i == 6) {

            }



        },
        after: function (i, sscroll) {

            // moveEnd();
            console.log('after' + i);
            if (i == 1) {
                movingToHeader();
               // var offset = $('.dot').eq(2).offset();
                $('.process-text').offset(getCenterReadyToSet($('.dot').eq(2)));

            }
            if (i == 2) {

            }

            if (i == 3) {

            }
            if (i == 4) {

            }
            if (i == 5) {

            }

        }
    });
});

// init stars
const PARTICLES_OPTIONS = {
    "particles": {
        "number": {
            "value": 2000,
            "density": {
                "enable": true,
                "value_area": 1920
            }
        },
        "color": {
            "value": "#ffffff"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 3
            },
            "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 1,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 0.16241544246026904,
                "opacity_min": 0.04060386061506725,
                "sync": false
            }
        },
        "size": {
            "value": 0.8,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": false,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 0.2,
            "direction": "top",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": false,
                "mode": "repulse"
            },
            "onclick": {
                "enable": false,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
}

particlesJS("stars", PARTICLES_OPTIONS
);


// stars handler  
function movingToHeader() {
    window.pJSDom[0].pJS.particles.move.straight = false;
    window.pJSDom[0].pJS.particles.move.speed = 0.2;
    window.pJSDom[0].pJS.fn.particlesRefresh();
}

function movingFromHeader() {
    window.pJSDom[0].pJS.particles.move.straight = true;
    for (var i = 0; i < 30; i++) {
        (function (index) {
            setTimeout(function () {
                window.pJSDom[0].pJS.particles.move.speed = 0.1 * (index * 4);
            }, index * 50);
        })(i);
    }
    window.pJSDom[0].pJS.fn.vendors.destroypJS;
}

//
//call on every page render
$(document).on('mouseenter', '.dot', function () {
    console.log($('.dot').index(this));
});

$('.start-your-journey-btn').on('click', function () {
    $.scrollify.next();
});

//px to em
$.fn.toEm = function (settings) {
    settings = jQuery.extend({
        scope: 'body'
    }, settings);
    var that = parseInt(this[0], 10),
        scopeTest = jQuery('<div style="display: none; font-size: 1em; margin: 0; padding:0; height: auto; line-height: 1; border:0;">&nbsp;</div>').appendTo(settings.scope),
        scopeVal = scopeTest.height();
    scopeTest.remove();
    return (that / scopeVal).toFixed(8) + 'em';
};


$(window).resize(function () {
    $('.process-text').offset(getCenterReadyToSet($('.dot').eq(2)));
});

function getCenterReadyToSet(dot) {

    var $this = dot;
    var offset = $this.offset();
    var width = $this.width();
    var height = $this.height();

    var centerX = offset.left + width / 2;
    var centerY = offset.top + height / 2;

    return { top: centerY, left: centerX };

}

