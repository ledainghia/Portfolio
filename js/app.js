(function ($) {
    'use strict';




  

    // ==== Preloader
    function preloader() {
        $('#preloader').delay(500).fadeOut(500);
    }

  

    


    /*---------------------
    === Window Scroll  ===
    ----------------------*/
   

    /*------------------
    === Window Load  ===
    --------------------*/
    $(window).on('load', function () {
        preloader();
   
    });

})(jQuery);