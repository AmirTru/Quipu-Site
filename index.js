const theProcess = $('.the-process-lottie');
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

function moveStart(ref) {
    //hide text & scale down "the process"
    $('.process-text').addClass('hide-process-text');
    theProcess.removeClass('anchored');

    //restore only one class 
    jQuery('#the-process-lottie').attr('class', 'the-process-lottie');

    if (ref === "hero") {
        if (window["pJSDom"] instanceof Array && window["pJSDom"].length == 0) {
            particlesJS("stars", PARTICLES_OPTIONS
            );
            movingToHeader();
        }
    }
    if (ref === "process-starts") {
        if (window["pJSDom"] instanceof Array && window["pJSDom"].length > 0) {
            movingFromHeader();
        }
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


    if (ref === "hero") {

    }
    if (ref === "process-starts") {
        if (window["pJSDom"] instanceof Array && window["pJSDom"].length > 0) {
            desroyStars();
        }
    }
    if (ref === "research") {
        theProcess.addClass('research');   
        $('.research').on('transitionend MSTransitionEnd webkitTransitionEnd oTransitionEnd', function (event) {
        researchSectionIn();
        });

    }
    if (ref === "branding") {
        brandingSectionIn();
    }
    if (ref === "briefing") {
        briefingSectionIn();
    }
    if (ref === "design") {
        designSectionIn();
    }
    if (ref === "development") {
        developmentSectionIn();
    }
}

//scrolling 
var ref = "";

$(function () {
    $.scrollify({
        section: ".s-scroll",
        easing: "linear",
        scrollSpeed: 2000,
        before: function (i, sscroll) {
            ref = sscroll[i].attr("data-section-name");
            moveStart(ref);

        },
        after: function (i, sscroll) {
            ref = sscroll[i].attr("data-section-name");
            moveEnd(ref);
        },
        afterResize: resizeText,
        afterRender: initialPosition

    });
});

function initialPosition() {
    var current = $.scrollify.current().hasClass();
    // console.log(current);

}
function resizeText() {
    var current = $.scrollify.current().attr("data-section-name");

    if (current === "research") {
        researchSectionIn();
    }
    if (current === "branding") {
        brandingSectionIn();
    }
    if (current === "briefing") {
        briefingSectionIn();
    }
    if (current === "design") {
        designSectionIn();
    }
    if (current === "development") {
        developmentSectionIn();
    }
}

// init stars
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
}

//
$('.start-your-journey-btn').on('click', function () {
    $.scrollify.next();
});


//get dot center and set text to it  
function setToCenter(getCenter, itemToMove, isRigthSide) {

    var $this = getCenter;
    var offset = $this.offset();
    var width = $this[0].getBoundingClientRect().width;
    var height = $this[0].getBoundingClientRect().height;

    var centerX = offset.left + width / 2;
    var centerY = offset.top + height / 2;

    if (isRigthSide) {
        itemToMove.offset({ top: centerY - (itemToMove.height() / 2), left: centerX });
    } else {
        var parentWidth = itemToMove.offsetParent().width();
        var percent = 100 * itemToMove.width() / parentWidth;
        itemToMove.offset({ top: centerY - (itemToMove.height() / 2), left: centerX - itemToMove.width() - (percent * 3) });
    }
}

function researchSectionIn() {
    // theProcess.addClass('research');
    //aling text to dot
    //  theProcess.on('transitionend MSTransitionEnd webkitTransitionEnd oTransitionEnd', function (event) {
    setToCenter($('.dot').eq(2), $('.process-text').eq(0), true);
    setToCenter($('.dot').eq(0), $('.process-text').eq(1), true);
    setToCenter($('.dot').eq(1), $('.process-text').eq(2), true);
    //show text
    $('.process-text').eq(0).removeClass('hide-process-text');
    $('.process-text').eq(1).removeClass('hide-process-text');
    $('.process-text').eq(2).removeClass('hide-process-text');
    // });

}

function brandingSectionIn() {
    // theProcess.addClass('research');
    //aling text to dot
    //  theProcess.on('transitionend MSTransitionEnd webkitTransitionEnd oTransitionEnd', function (event) {
    setToCenter($('.dot').eq(3), $('.process-text').eq(3), false);
    setToCenter($('.dot').eq(6), $('.process-text').eq(4), false);
    setToCenter($('.dot').eq(5), $('.process-text').eq(5), false);
    setToCenter($('.dot').eq(4), $('.process-text').eq(6), false);
    //show text
    $('.process-text').eq(3).removeClass('hide-process-text');
    $('.process-text').eq(4).removeClass('hide-process-text');
    $('.process-text').eq(5).removeClass('hide-process-text');
    $('.process-text').eq(6).removeClass('hide-process-text');
    // });

}

function briefingSectionIn() {
    // theProcess.addClass('research');
    //aling text to dot
    //  theProcess.on('transitionend MSTransitionEnd webkitTransitionEnd oTransitionEnd', function (event) {
    setToCenter($('.dot').eq(8), $('.process-text').eq(7), false);
    setToCenter($('.dot').eq(7), $('.process-text').eq(8), false);
    setToCenter($('.dot').eq(9), $('.process-text').eq(9), false);
    //show text
    $('.process-text').eq(7).removeClass('hide-process-text');
    $('.process-text').eq(8).removeClass('hide-process-text');
    $('.process-text').eq(9).removeClass('hide-process-text');
    // });

}

function designSectionIn() {
    // theProcess.addClass('research');
    //aling text to dot
    //  theProcess.on('transitionend MSTransitionEnd webkitTransitionEnd oTransitionEnd', function (event) {
    setToCenter($('.dot').eq(10), $('.process-text').eq(10), true);
    setToCenter($('.dot').eq(11), $('.process-text').eq(11), true);
    //show text
    $('.process-text').eq(10).removeClass('hide-process-text');
    $('.process-text').eq(11).removeClass('hide-process-text');
    // });
}

function developmentSectionIn() {
    // theProcess.addClass('research');
    //aling text to dot
    //  theProcess.on('transitionend MSTransitionEnd webkitTransitionEnd oTransitionEnd', function (event) {
    setToCenter($('.dot').eq(12), $('.process-text').eq(12), false);
    setToCenter($('.dot').eq(13), $('.process-text').eq(13), false);
    setToCenter($('.dot').eq(14), $('.process-text').eq(14), false);
    //show text
    $('.process-text').eq(12).removeClass('hide-process-text');
    $('.process-text').eq(13).removeClass('hide-process-text');
    $('.process-text').eq(14).removeClass('hide-process-text');
    // });
}

function desroyStars() {
    window.pJSDom[0].pJS.fn.vendors.destroypJS();
    window["pJSDom"] = [];
}

