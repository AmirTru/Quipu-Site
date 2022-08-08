/*
hero
process-starts
research
branding
briefing
design
development 
*/

const theProcess = $('.the-process-lottie');

function moveStart(ref) {
    theProcess.addClass('moving');

    if (ref === "hero") {
        movingToHeader();
    }
    if (ref === "process-starts") {
        movingFromHeader();
    }
    if (ref === "research") {
        theProcess.removeClass('research');
    }
    if (ref === "branding") {
    }
    if (ref === "briefing") {
    }
    if (ref === "design") {
    }
    if (ref === "development") {
    }
}
function moveEnd(ref) {
    theProcess.removeClass('moving');
    theProcess.on('transitionend MSTransitionEnd webkitTransitionEnd oTransitionEnd', function (event) {

        if (ref === "hero") {
        }
        if (ref === "process-starts") {
        }
        if (ref === "research") {
            researchSectionIn();
        }
        if (ref === "branding") {
        }
        if (ref === "briefing") {
        }
        if (ref === "design") {
        }
        if (ref === "development") {
        }


    });
}

//scrolling 
$(function () {
    $.scrollify({
        section: ".s-scroll",
        easing: "linear",
        scrollSpeed: 4000,
        before: function (i, sscroll) {
            var ref = sscroll[i].attr("data-section-name");
            moveStart(ref);
            $('.process-text').addClass('hide-process-text');
            console.log(ref)
        },
        after: function (i, sscroll) {
            var ref = sscroll[i].attr("data-section-name");
            moveEnd(ref);
        }//,
        // afterResize: initialPosition,
        // afterRender: initialPosition

    });
});

// function initialPosition() {
//     return $.scrollify.current();
// }

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
        (function (ref) {
            setTimeout(function () {
                window.pJSDom[0].pJS.particles.move.speed = 0.1 * (ref * 4);
            }, ref * 50);
        })(i);
    }
    window.pJSDom[0].pJS.fn.vendors.destroypJS;
}

//
$('.start-your-journey-btn').on('click', function () {
    $.scrollify.next();
});

$(window).resize(function () {
    setToCenter($('.dot').eq(2), $('.process-text'));
});

//get dot center and set text to it  
function setToCenter(getCenter, itemToMove) {

    var $this = getCenter;
    var offset = $this.offset();
    var width = $this[0].getBoundingClientRect().width;
    var height = $this[0].getBoundingClientRect().height;

    var centerX = offset.left + width / 2;
    var centerY = offset.top + height / 2;

    itemToMove.offset({ top: centerY - (itemToMove.height() / 2), left: centerX });
}

function researchSectionIn() {
    theProcess.addClass('research');
    //aling text to dot
    theProcess.on('transitionend MSTransitionEnd webkitTransitionEnd oTransitionEnd', function (event) {
    setToCenter($('.dot').eq(2), $('.process-text').eq(0));
    setToCenter($('.dot').eq(0), $('.process-text').eq(1));
    setToCenter($('.dot').eq(1), $('.process-text').eq(2));
    //show text
    $('.process-text').eq(0).removeClass('hide-process-text');
    $('.process-text').eq(1).removeClass('hide-process-text');
    $('.process-text').eq(2).removeClass('hide-process-text');
    });
    
}
// function researchSectionOut() {
//     //remove text
//     $('.process-text').eq(0).addClass('hide-process-text');
//     $('.process-text').eq(1).addClass('hide-process-text');
//     $('.process-text').eq(2).addClass('hide-process-text');
// }

