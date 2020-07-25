$(function(){
    var headerOffset = $('#header').offset().top
    

    $(window).on('scroll', function(){
        var scrollSize = $(window).scrollTop()

        // ==========header_Fixed code start==========
        if(headerOffset < scrollSize){
            $('.logo').addClass('logo_Fixed')
            $('#header').addClass('header_Fixed')
            $('.list').addClass('list_Fixed')
        } else{
            $('#header').removeClass('header_Fixed')
            $('.logo').removeClass('logo_Fixed')
            $('.list').removeClass('list_Fixed')
        }
        // ==========/header_Fixed code end==========

        // ==========Top_To_Bottom code start==========
        if(scrollSize > 200){
            $('.backToTop').fadeIn(500)
        } else{
            $('.backToTop').fadeOut(500)
        }
        
    })
    $('.backToTop').on('click', function(){
        $('html,body').animate({
            scrollTop:0
        },'1000');
    })
    // ==========/Top_To_Bottom code end==========

    // ==========banner_slick_Slide code start==========
    $('#banner_1').slick({
        speed:1000,
        dots: true,
        dotsClass:'banner_dots',
        prevArrow:'<i class="fas fa-chevron-left banner_left"></i>',
        nextArrow:'<i class="fas fa-chevron-right banner_right"></i>'
    })
   
    // ==========/banner_slick_Slide code end==========

    // ==========gallery_slick_Slide code start==========
    $('.gallery_item_slide').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow:'<i class="fas fa-chevron-left gallery_item_left_arrow"></i>',
        nextArrow:'<i class="fas fa-chevron-right gallery_item_right_arrow"></i>'
    })
    // ==========gallery_slick_Slide code end==========

    // ==========gallery_slick_Slide code start==========
        $('.Testimonial_items').slick({
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            prevArrow:'<i class="fas fa-chevron-left Testimonials_left"></i>',
            nextArrow:'<i class="fas fa-chevron-right Testimonials_right"></i>'
        })
       
    // ==========gallery_slick_Slide code end==========
    
    // ==========venobox_gallery code start==========
     $('.venobox').venobox({
        spinner:'three-bounce',
        spinColor:'#565f8f',
        arrowsColor:'#fff',
        closeColor:'red',
        numeratio:true,
        numerationColor:'#fff',
     })
     
    // ==========/venobox_gallery code end==========

    // ==========wow code start==========


    new WOW().init();
     
    // ==========/wow code end==========

    // ==========preloder code start==========
    document.body.onload = function(){
        setTimeout(function(){
            var preloader = document.getElementById('page-preloader');
            {
                preloader.classList.add('done');
              }
            },3000);
          }
     
    // ==========/preloder code end==========

    // ==========scroll smooth code start==========
    $("a").on('click', function(event) {

        if (this.hash !== "") {
          event.preventDefault();
    
          var hash = this.hash;
    
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 800, function(){
    
            window.location.hash = hash;
          });
        }
      });
    // ==========/scroll smooth code end==========

    // ==========particle smooth code start==========

    particlesJS("particles-js", {
        "particles": {
        "number": {
            "value": 150,
            "density": {
            "enable": true,
            "value_area": 680
            }
        },
        "color": {
            "value": "#dddddd"
        },
        "shape": {
            "type": "edge",
            "stroke": {
            "width": 0,
            "color": "#000000"
            },
            "polygon": {
            "nb_sides": 5
            },
            "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
            }
        },
        "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
            "enable": false,
            "speed": 40,
            "size_min": 0.1,
            "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
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
            "enable": true,
            "mode": "repulse"
            },
            "onclick": {
            "enable": true,
            "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
            "distance": 140,
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
            "distance": 120,
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
    
    
    /* ---- stats.js config ---- */
    
    var count_particles, stats, update;
    stats = new Stats;
    stats.setMode(0);
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.left = '0px';
    stats.domElement.style.top = '0px';
    document.body.appendChild(stats.domElement);
    count_particles = document.querySelector('.js-count-particles');
    update = function() {
        stats.begin();
        stats.end();
        if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
        count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
        }
        requestAnimationFrame(update);
    };
    requestAnimationFrame(update);



    particles.color.value
    // ==========/particle code end==========

    
})