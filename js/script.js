
let navbar = document.querySelector("#navbar");
let searchClose = document.querySelector(".search-close");
let searchOpen = document.querySelectorAll(".search-open");

// Navbar scripts ---------------------------------------------
window.addEventListener("scroll", () => {
    navbar.classList.toggle("scroll", window.scrollY > 0);
});

searchOpen.forEach((item) => {
    item.addEventListener("click", () => {
        document.querySelector(".section-1").classList.add("active");
    })
})

searchClose.addEventListener("click", () => {
    document.querySelector(".section-1").classList.remove("active");
})

// Course Carousel ------------------------------------------------------
$('#course-carousel').owlCarousel({
    loop:true,
    margin:30,
    nav:false,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        576:{
            items:2
        },
        992:{
            items:3
        }
    }
})

$('#client-carousel').owlCarousel({
    loop:true,
    margin:30,
    nav:false,
    dots:false,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        992:{
            items:2
        }
    }
})