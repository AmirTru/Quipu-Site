
$(function () {
    $.scrollify({
        section: ".s-scroll",
        sectionName: ".the-process-wrapper",
        easing: "linear",
        scrollSpeed: 4000,
        before: function (i, sscroll) {

            console.log(i);

            if (i == 1) {
                movingFromHeader();
            }

        },
        after: function (i, sscroll) {

            console.log(i);

            if (i == 1) {
                movingToHeader();
            }

        }
    });
});


particlesJS("stars",
    {
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
    });

$('.start-your-journey-btn').on('click', function () {
    $.scrollify.next();
});

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
                window.pJSDom[0].pJS.particles.move.speed = 0.04060386061506725 * (index * 5);
            }, index * 50);
        })(i);
    }
    window.pJSDom[0].pJS.fn.particlesRefresh();
    //  console.log(window.pJSDom[0].pJS.particles.array.length);
}

