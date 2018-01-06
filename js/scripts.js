$(document).ready(function() {
    $(".menu-icon").click(function() {
        $(".main-menu").css("left", "0px");

        function showMenu() {
            $(".main-menu").css("-webkit-clip-path", "polygon(0 0,100% 0,100% 100%,0% 100%)");
            $(".menu-icon").animate({
                right: "-100"
            }, 300);
        }
        setTimeout(showMenu, 100);
    });

    $(".close-btn").click(function() {
        $(".main-menu").css("-webkit-clip-path", "polygon(0 0,0% 0,100% 100%,0% 100%)");

        function hideMenu() {
            $(".main-menu").css("left", "-250px");
            $(".menu-icon").animate({
                right: "50"
            }, 300);
        }
        setTimeout(hideMenu, 300);

        function originalLayout() {
            $(".main-menu").css("-webkit-clip-path", "polygon(0 0,100% 0,0% 100%,0% 100%)");
        }
        setTimeout(originalLayout, 600);
    });


    $(".about-left-col").slick({
        autoplay: true
    });


    $(".mouse-icon").hover(
        function() {
            $(".scroll-icon").addClass("scroll-animation"); // Добавляем класс bounce
        },
        function() {
            $(".scroll-icon").removeClass("scroll-animation"); // Убираем класс bounce
        });

    $(".portfolio-button").click(function() {
        var text = $(".portfolio-button").text();
        
        if (text == "See More"){
            $(".portfolio-button").text("Hide");
        }else{
            $(".portfolio-button").text("See More");
        }
        
        $(".portfolio-item:gt(5)").slideToggle(800);
    });
    
    $(".mouse-icon").click(function() {
                
        var scrollToAbout = $("#js-about").offset().top;
        
        $("html, body").animate({
           scrollTop:  scrollToAbout
        }, 800);
    });
    
    $(".mouse-icon").click(function() {
                
        var scrollToAbout = $("#js-about").offset().top;
        
        $("html, body").animate({
           scrollTop:  scrollToAbout
        }, 800);
    });
    
    $(".main-menu ul a, .about-button").click(function(e) {
        
        e.preventDefault();
        
        var curentBlock = $(this).attr("href"),
            curentBlockOffset = $(curentBlock).offset().top;
        
         $("html, body").animate({
           scrollTop:  curentBlockOffset
        }, 800);
    });

});