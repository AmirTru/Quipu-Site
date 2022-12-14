const theProcess = $('.the-process-lottie');
const proceseSphere = $('.sphere-the-process');
var processTextWrapper = $('.process-text-h-and-info-wrapper');
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

//scroll
gsap.registerPlugin(MotionPathPlugin);
ScrollTrigger.defaults({
    markers: false
});

// Logo Scale
$(".first-process").each(function (index) {
    let triggerElement = $(this);
    let targetElement = theProcess;

    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: triggerElement,
            // trigger element - viewport
            start: "top top",
            end: "bottom top",
            scrub: 1
        },
        motionPath: {
            path: ".path1",
            // align: "M 400 600 Q 150 500 250 250 Q 400 0 500 0 Q 800 0 700 500 ",
            autoRotate: true,
            //alignOrigin: [0.5, 0.5]
        }

    });
    tl.from(targetElement, {
        // width: "100%"
    });
    tl.to(targetElement, { scale: 1.3 }).to(".sphere-the-process", {
        motionPath: {
            path: ".path1",
            align: ".path1",
            alignOrigin: [0.5, 0.5],
        }
    }, 0)
});

//


// gsap.to(".sphere-the-process", {
//     duration: 5,
//     repeat: 12,
//     repeatDelay: 3,
//     yoyo: true,
//     ease: "power1.inOut",
//     motionPath: {
//         path: ".path1",
//        // align: "M 400 600 Q 150 500 250 250 Q 400 0 500 0 Q 800 0 700 500 ",
//         autoRotate: true,
//         //alignOrigin: [0.5, 0.5]
//     }
// });


function moveStart(ref) {
    //hide text & scale down "the process"
    processTextWrapper.addClass('hide-process-text');
    // $('.grad-l').addClass('hide');
    // $('.grad-r').addClass('hide');
    // $('.connections-1').addClass('hide-l');
    // $('.connections-2').addClass('hide-r');
    // $('.connections-3').addClass('hide-r');

    //restore only one class 
    // jQuery('#the-process-lottie').attr('class', 'the-process-lottie');

    // jQuery('#sphere-the-process').attr('class', 'sphere-the-process');

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
        // if (!theProcess.hasClass('research')); {
        //  //   theProcess.addClass('research');
        //   //  $('.connections-1').removeClass('hide-l');
        //   //  $('.grad-l').removeClass('hide');
        // }
    }
    if (ref === "branding") {
        // if (!theProcess.hasClass('research')); {
        //     theProcess.addClass('branding');
        //     $('.connections-2').removeClass('hide-r');
        //     $('.grad-r').removeClass('hide');
        // }
    }
    if (ref === "briefing") {
    }
    if (ref === "design") {
    }
    if (ref === "development") {
    }
    if (ref === "process-ends") {
    }
}
function moveEnd(ref) {

    //size up the sphere 
    // proceseSphere.addClass('ancord');

    //fire op the text after animathion is iver on the process
    // theProcess.on('transitionend MSTransitionEnd webkitTransitionEnd oTransitionEnd', function (event) {
    //     if ($('#the-process-lottie').hasClass('research')) {
    //         //researchSectionIn();
    //     }
    //     if ($('#the-process-lottie').hasClass('branding')) {
    //         brandingSectionIn();
    //     }
    //     if ($('#the-process-lottie').hasClass('briefing')) {
    //         briefingSectionIn();
    //     }
    //     if ($('#the-process-lottie').hasClass('site-design')) {
    //         designSectionIn();
    //     }
    //     if ($('#the-process-lottie').hasClass('site-development')) {
    //         developmentSectionIn();
    //     }
    // });


    if (ref === "hero") {

    }
    if (ref === "process-starts") {
        if (window["pJSDom"] instanceof Array && window["pJSDom"].length > 0) {
            desroyStars();
        }
    }
    if (ref === "research") {
        researchSectionIn();
        //   $('.connections-1').removeClass('hide-l');
        //   $('.grad-l').removeClass('hide');
    }
    if (ref === "branding") {
        // theProcess.addClass('branding');
        // $('.connections-2').removeClass('hide-r');
        // $('.grad-r').removeClass('hide');
    }
    if (ref === "briefing") {
        theProcess.addClass('briefing');
        $('.connections-3').removeClass('hide-r');
        $('.grad-r').removeClass('hide');
    }
    if (ref === "design") {
        theProcess.addClass('site-design');
        $('.grad-l').removeClass('hide');
    }
    if (ref === "development") {
        theProcess.addClass('site-development');
        $('.grad-r').removeClass('hide');
    }
    if (ref === "process-ends") {
    }
}

//scrolling 
var ref = "";

$(function () {
    $.scrollify({
        section: ".s-scroll",
        easing: "linear",
        scrollSpeed: 3000,
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
    var current = $.scrollify.current().attr("data-section-name");
    if (current === "research") {
        $.scrollify.instantMove("#research");
    }
    if (current === "branding") {
        $.scrollify.instantMove("#branding");
    }
    if (current === "briefing") {
        $.scrollify.instantMove("#briefing");
    }
    if (current === "design") {
        $.scrollify.instantMove("#design");
    }
    if (current === "development") {
        $.scrollify.instantMove("#development");
    }

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
    if (ref === "process-ends") {
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
        itemToMove.offset({ top: centerY - (itemToMove.height() / 2), left: centerX - itemToMove.width() });
    }
}

processTextWrapper.on('mouseenter', function () {
    $(this).find('.process-text-header').removeClass('closed');
    $(this).find('.process-info-text-wrapper').removeClass('closed');
    $(this).siblings(processTextWrapper).css('opacity', '0.0');
});

processTextWrapper.on('mouseleave', function () {
    $(this).find('.process-text-header').addClass('closed');
    $(this).find('.process-info-text-wrapper').addClass('closed');
    $(this).siblings(processTextWrapper).css('opacity', '1');
});

function researchSectionIn() {
    console.log(ref)
    //aling text to dot
    setToCenter($('.txt').eq(2), processTextWrapper.eq(0), true);
    setToCenter($('.txt').eq(0), processTextWrapper.eq(1), true);
    setToCenter($('.txt').eq(1), processTextWrapper.eq(2), true);
    //show text
    processTextWrapper.eq(0).removeClass('hide-process-text');
    processTextWrapper.eq(1).removeClass('hide-process-text');
    processTextWrapper.eq(2).removeClass('hide-process-text');
}



function brandingSectionIn() {
    //aling text to dot
    setToCenter($('.txt').eq(3), processTextWrapper.eq(3), false);
    setToCenter($('.txt').eq(6), processTextWrapper.eq(4), false);
    setToCenter($('.txt').eq(5), processTextWrapper.eq(5), false);
    setToCenter($('.txt').eq(4), processTextWrapper.eq(6), false);
    //show text
    processTextWrapper.eq(3).removeClass('hide-process-text');
    processTextWrapper.eq(4).removeClass('hide-process-text');
    processTextWrapper.eq(5).removeClass('hide-process-text');
    processTextWrapper.eq(6).removeClass('hide-process-text');
}

function briefingSectionIn() {
    // theProcess.addClass('research');
    //aling text to dot
    //  theProcess.on('transitionend MSTransitionEnd webkitTransitionEnd oTransitionEnd', function (event) {
    setToCenter($('.txt').eq(8), processTextWrapper.eq(7), false);
    setToCenter($('.txt').eq(7), processTextWrapper.eq(8), false);
    setToCenter($('.txt').eq(9), processTextWrapper.eq(9), false);
    //show text
    processTextWrapper.eq(7).removeClass('hide-process-text');
    processTextWrapper.eq(8).removeClass('hide-process-text');
    processTextWrapper.eq(9).removeClass('hide-process-text');
    // });

}

function designSectionIn() {
    // theProcess.addClass('research');
    //aling text to dot
    //  theProcess.on('transitionend MSTransitionEnd webkitTransitionEnd oTransitionEnd', function (event) {
    setToCenter($('.txt').eq(10), processTextWrapper.eq(10), true);
    setToCenter($('.txt').eq(11), processTextWrapper.eq(11), true);
    //show text
    processTextWrapper.eq(10).removeClass('hide-process-text');
    processTextWrapper.eq(11).removeClass('hide-process-text');
    // });
}

function developmentSectionIn() {
    // theProcess.addClass('research');
    //aling text to dot
    //  theProcess.on('transitionend MSTransitionEnd webkitTransitionEnd oTransitionEnd', function (event) {
    setToCenter($('.txt').eq(12), processTextWrapper.eq(12), false);
    setToCenter($('.txt').eq(13), processTextWrapper.eq(13), false);
    setToCenter($('.txt').eq(14), processTextWrapper.eq(14), false);
    //show text
    processTextWrapper.eq(12).removeClass('hide-process-text');
    processTextWrapper.eq(13).removeClass('hide-process-text');
    processTextWrapper.eq(14).removeClass('hide-process-text');
    // });
}

function desroyStars() {
    window.pJSDom[0].pJS.fn.vendors.destroypJS();
    window["pJSDom"] = [];
}

