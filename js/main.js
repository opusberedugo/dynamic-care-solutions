document.querySelector("nav .menu").addEventListener("click", ()=>{
  $(document.querySelector("nav .options")).slideToggle(1000);
})

$(".owl-carousel").owlCarousel({
  items: 4,
  loop: true,
  nav: false,
  dots: false,
  autoplay: true,
  autoplaySpeed: 500,
  smartSpeed: 1500,
  autoplayHoverPause: false,
  responsive: {
    0:{
      items:1,
    },
    650:{
      items:2
    },
    960:{
      items:3
    },
    1145:{
      items:4
    },
    1292:{
      items:3
    },
    1400:{
      items:4
    }
  }
});