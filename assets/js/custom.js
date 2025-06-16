(function() {
	"use strict";


    // Navbar JS
    try {
        const nav = document.querySelector('.navbar');
        let navTop = nav.offsetTop;
        
        function fixedNav() {
        if (window.scrollY >= navTop) {
            nav.classList.add('sticky');
        } else {
            nav.classList.remove('sticky');
        }
        }
        window.addEventListener('scroll', fixedNav);
    } catch (err) {}

    // Header Sticky Js
    window.addEventListener('scroll', event => {
        const height = 150;
        const { scrollTop } = event.target.scrollingElement;
        document.querySelector('#navbar').classList.toggle('sticky', scrollTop >= height);
    });

    // Preloader Js
    window.onload = function(){
        // Preloader
        const getPreloaderId = document.getElementById('preloader');
        if (getPreloaderId) {
            getPreloaderId.style.display = 'none';
        }
    };

    // Animation Js
    scrollCue.init();

    // Select the button element Js
    var scrollTopBtn = document.getElementById("scrollTopBtn");

    // Show the button when the user scrolls down Js
    window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
    };
    
    // Add a click event listener to the button Js
    scrollTopBtn.addEventListener("click", function() {
        // Scroll to the top of the document
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    });

    // Project Slider Js
    var swiper = new Swiper(".project-slider", {
        slidesPerView: 3,
        centeredSlides: true,
        spaceBetween: 30,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 1
            },
            576: {
                slidesPerView: 2
            },
            768: {
                slidesPerView: 2
            },
            992: {
                slidesPerView: 3
            },
            1200: {
                slidesPerView: 3
            }
        }
    });

    // Testimonial Slider Js
    var swiper = new Swiper(".testimonial-slider", {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 1
            },
            576: {
                slidesPerView: 2
            },
            768: {
                slidesPerView: 2
            },
            992: {
                slidesPerView: 3
            },
            1200: {
                slidesPerView: 3
            }
        }
    });

    // Testimonial2 Sticky Js
    var swiper = new Swiper(".testimonial2-slider", {
        slidesPerView: 2,
        spaceBetween: 0,
        loop: true,
        spaceBetween: 30,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 1
            },
            576: {
                slidesPerView: 1
            },
            768: {
                slidesPerView: 2
            },
            992: {
                slidesPerView: 2
            },
            1200: {
                slidesPerView: 2
            }
        }
    });

    // Project2 Sticky Js
    var swiper = new Swiper(".project2-slider", {
        slidesPerView: 3,
        centeredSlides: true,
        spaceBetween: 24,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 1
            },
            576: {
                slidesPerView: 1
            },
            768: {
                slidesPerView: 1
            },
            992: {
                slidesPerView: 3
            },
            1200: {
                slidesPerView: 3
            }
        }
    });

    // Project2 Sticky Js
    var swiper = new Swiper(".provider-slider", {
        slidesPerView: 4,
        spaceBetween: 24,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 1
            },
            576: {
                slidesPerView: 1
            },
            768: {
                slidesPerView: 2
            },
            992: {
                slidesPerView: 4
            },
            1200: {
                slidesPerView: 4
            }
        }
    });
    

})()


function openPopup() {
    document.querySelector('.popup').classList.add('popup-show');
}
function closePopup() {
    document.querySelector('.popup').classList.remove('popup-show');
}