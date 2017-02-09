$(document).ready(function () {

  

    // stickyNav
    $(window).scroll(function() {
        var y = $(window).scrollTop();

        if (y > 10) {
            $("header").css({
                "height": "29",
                "border-top": "none",
                "position": "fixed",
                "top": "0",
                "transition": "all .5s linear"
            });
            $("nav").css({
                "box-shadow": "0 2px 10px #666",
                "background": "none"
            });
            $(".logo").css({
                "background": "url('./images/parallaxLogoSm.png') no-repeat",
                "top": "8px",
                "left": "10px",
                "transition": "all .1s linear"
            });

        } else {
            $("header").css({
                "overflow":"hidden",
                "z-index":"3",
                "width": "1000px",
                "height": "150px",
                    "border-top": "11px solid #ef3e36",
                    "position": "relative",
                    "background": "#fff",
                "transition": "all .5s linear"
            });
            $("nav").css({
                "z-index":"4",
                "box-shadow": "none",
                "background": "#fff"
            });
            $(".logo").css({
                
                 "z-index":"5",
                "width": "262px",
                "height": "112px",
               
                "background": "url('./images/parallaxLogo.png') no-repeat",
                    "position": "absolute",
                    "top": "21px",
                    "left": "57px",

                "transition": "all .1s linear"
            });
        }
    });
});
