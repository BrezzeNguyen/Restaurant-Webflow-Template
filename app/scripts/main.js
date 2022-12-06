// Slick slider
// $(document).ready(function () {
//   $(".quote-list").slick({
//     prevArrow:
//       "<button type='button' class='slick-prev pull-left'><i class='fal fa-angle-left' aria-hidden='true'></i></button>",
//     nextArrow:
//       "<button type='button' class='slick-next pull-right'><i class='fal fa-angle-right' aria-hidden='true'></i></button>",
//     responsive: [
//       {
//         breakpoint: 767,
//         settings: {
//           arrows: false,
//         },
//       },
//     ],
//   });
// });

// Show time active

const iconTime = document.querySelector(".front-item-icon--time");
const timeline = document.querySelector(".front-timeline");
const activeClass = "is-active";
iconTime &&
  iconTime.addEventListener("click", function () {
    timeline.classList.add(activeClass);
  });

window.addEventListener("click", function (e) {
  if (
    !timeline.contains(e.target) &&
    !e.target.matches(".front-item-icon--time")
  )
    timeline.classList.remove("is-active");
});

const iconToggle = document.querySelector(".front-item-icon--toggle");
const toggle = document.querySelector(".front-toggle");
iconToggle &&
  iconToggle.addEventListener("click", function () {
    toggle.classList.add(activeClass);
  });

window.addEventListener("click", function (e) {
  if (
    !toggle.contains(e.target) &&
    !e.target.matches(".front-item-icon--toggle")
  )
    toggle.classList.remove("is-active");
});

const iconCart = document.querySelector(".front-item-icon--cart");
const Cart = document.querySelector(".front-cart");
const background = document.getElementsByClassName(".front");
iconCart &&
  iconCart.addEventListener("click", function () {
    Cart.classList.add(activeClass);
    background.style.backgroundColor = "red";
  });

window.addEventListener("click", function (e) {
  if (!Cart.contains(e.target) && !e.target.matches(".front-item-icon--cart"))
    Cart.classList.remove("is-active");
});

$(".discover").slick({
  speed: 100,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: false,
  nextArrow:false
});

// $(".discover").ready(function(){
//     $('.slider').slick({
//         autoplay:true,
//         arrows: true,
//         prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
//         nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
//     });
// });
