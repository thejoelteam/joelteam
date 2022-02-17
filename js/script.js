"use strict"


// Check what Mobile platform user uses

const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows());
    }
};


// Check if user uses Mobile platform or PC

if (isMobile.any()) {
    document.body.classList.add('_touch');

    let menuArrows = document.querySelectorAll('.menu__arrow');
    if (menuArrows.length > 0) {
        for (let index = 0; index < menuArrows.length; index++) {
            const menuArrow = menuArrows[index];
            menuArrow.addEventListener("click", function (e) {
                menuArrow.parentElement.classList.toggle('_active');  
            });
        }
    }

} else {
    document.body.classList.add('_pc');
}


// Menu burger

const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
    iconMenu.addEventListener("click", function(e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}


// Scroll down by the click

const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick);
    });

    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

            if (iconMenu.classList.contains('_active')) {
                document.body.classList.remove('_lock');
                iconMenu.classList.remove('_active');
                menuBody.classList.remove('_active');
            }

            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    }
}


// Slider for "Collections"

$(document).ready(function() {
    $('.slider').slick({
        arrows:true, // The arrows to slide
        // dots:true, // The dots under the slides
        adaptiveHeight:true, // All sliders get one height
        slidesToShow:3, // How many slides in one row (if only one row using)
        slidesToScroll:1,
        speed:1000, // Speed of scrolling
        easing:'ease', // The way of slide
        infinite:true, // If slide can end or not
        autoplay:true,
        autoplaySpeed:2000,
        // pauseOnFocus:true,
        pauseOnHover:true,
        pauseOnDotsHover:true,
        touchThreshold:10,
        waitForAnimate:true,
        centerMode:true, // Centre the centre slide
        variableWidth:false,
        // rows:1 - How many rows slider has
        // slidesPerRow:4 - How many slides one row has
        // vertical:true - Vertical slider
        responsive:[
            {
                breakpoint: 1600,
                setting: {
                    centerMode:false,
                }
            },{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    centerMode:false,
                }
            },{
                breakpoint: 916,
                settings: {
                    slidesToShow:2,
                    centerMode:false,
                }
            },{
                breakpoint: 650,
                settings: {
                    slidesToShow:1,
                    centerMode:false,
                }
            }
        ],
        mobileFirst:false,
    });
});
var clicks = 0;

// function onClick() {
//   clicks += 1;
//   clickCounter = document.getElementById("clicks").innerHTML;
// };
// $(document).live("click", ".FAQsquare", function() {
//     $(this).removeClass("_active");
//     clickCounter++;
// });
$(document).on("click", ".FAQsquare", function() {
    $(this).addClass("_active");
});
$(document).on("dblclick", ".FAQsquare", function() {
    $(this).removeClass("_active");
});

document.getElementById('RoadMap').onclick = function() {
    var i = 'RoadMap';
    document.title = i;
}
document.getElementById('Home').onclick = function() {
    var i = 'Home';
    document.title = i;
}
document.getElementById('Collections').onclick = function() {
    var i = 'Collections';
    document.title = i;
}
document.getElementById('FAQ').onclick = function() {
    var i = 'FAQ';
    document.title = i;
}
document.getElementById('Introduction').onclick = function() {
    var i = 'Introduction';
    document.title = i;
}