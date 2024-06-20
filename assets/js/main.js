(function ($) {
  $(function () {
    // Responsive-menu

    $("#hamburger").on("click", function () {
      if ($(this).next("#main_menu").hasClass("active")) {
        $(this).next("#main_menu").removeClass("active").slideUp();
        $(this).children("span").removeClass("fa-xmark").addClass("fa-bars");
      } else {
        $("#main_menu").removeClass("active").slideUp();
        $("#hamburger span").removeClass("fa-xmark").addClass("fa-bars");
        $(this).next("#main_menu").addClass("active").slideDown();
        $(this).children("span").removeClass("fa-bars").addClass("fa-xmark");
      }
    });

    //   Ticker Animation In jQuery

    $(function () {
      $(".ticker_slider").jConveyorTicker({
        force_loop: true,
      });
    });


    AOS.init({
      duration: 1000
    });
    
  });
})
(jQuery);


// Navigation menu ======================

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY >= 50) {
    nav.classList.add("active_nav");
  } else {
    nav.classList.remove("active_nav");
  }
});



// Navigation menu end ==================
