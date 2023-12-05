(function ($) {
  "use strict";

  $(document).ready(function ($) {
    // projects filters isotop
    $(".product-filters li").on("click", function () {
      $(".product-filters li").removeClass("active");
      $(this).addClass("active");

      var selector = $(this).attr("data-filter");

      $(".product-lists").isotope({
        filter: selector,
      });
    });

    // isotop inner
    $(".product-lists").isotope();

    // magnific popup
    $(".popup-youtube").magnificPopup({
      disableOn: 700,
      type: "iframe",
      mainClass: "mfp-fade",
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false,
    });

    // light box
    $(".image-popup-vertical-fit").magnificPopup({
      type: "image",
      closeOnContentClick: true,
      mainClass: "mfp-img-mobile",
      image: {
        verticalFit: true,
      },
    });

    // stikcy js
    $("#sticker").sticky({
      topSpacing: 0,
    });

    //mean menu
    $(".main-menu").meanmenu({
      meanMenuContainer: ".mobile-menu",
      meanScreenWidth: "992",
    });
  });

  jQuery(window).on("load", function () {
    jQuery(".loader").fadeOut(1000);
  });
})(jQuery);
