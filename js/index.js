$('.owl-carousel').owlCarousel({
    loop:true,
    // margin:10,
    nav:true,
    dots: true,
    items: 1,
    autoplay: true,
})

function openMobileNav() {
    let mobileNav = document.querySelector('.mobile-nav')
    if (mobileNav.style.display == 'block') mobileNav.style.display = 'none'
    else mobileNav.style.display = 'block'
}