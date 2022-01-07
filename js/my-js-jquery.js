////////////////////   INDEX.HTML   ///////////////////

// Header Load

$(window).on("load",function(){
    $(".big-header-img").addClass("show");
    $("h1").addClass("show");
    $("h3").addClass("show");
    $(".header-arrow").addClass("show");
});

// Sticky Navbar

window.addEventListener('scroll',function(){
    var navbar = document.querySelector('nav');
    if(window.pageYOffset > 300){
        navbar.classList.add('sticky');
    }
    else{
        navbar.classList.remove('sticky');
        navbar.classList.add('sticky-out');
    }
});


// Hamburger Menu

$(".hamburger").click(function(){
    $(this).toggleClass("icon");
    $(".nav-ul").toggleClass("change-ul");
});

// Carousel

$(".ts-carousel").owlCarousel({
    items: 1,
    loop: true,
    nav: true,
    navText: ["<img src='images/left-arrow.png'>","<img src='images/right-arrow.png'>"],
    navSpeed: 800,
    autoplay: true,
    autoplaySpeed: 800,
    dots: false
});

////////////////////   ABOUT.HTML   ///////////////////

// Carousel 1

$(".ss-carousel").owlCarousel({
    items: 2,
    loop: true,
    autoplay: true,
    autoplaySpeed: 400,
    dots: true,
    slideBy: 1,
    dotsEach: true,
    responsive:{
        0:{
            items: 1
        },
        660: {
            items: 2
        }
    }
});

// Carousel 2

$(".quote-carousel").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplaySpeed: 400,
    dots: true,
    dotsEach: true
});

// Form Datepicker & Timepicker

$("#datepicker").datepicker({
    dateFormat: "dd-mm-yy",
    changeMonth: true,
    changeYear: true
});

$("#timepicker").timepicker({
    timeFormat: 'h:mm p',
    interval: 60,
    minTime: '10:00am',
    maxTime: '9:00pm',
    startTime: '10:00',
    dynamic: true,
    dropdown: true,
    scrollbar: true
});