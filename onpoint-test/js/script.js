$(document).ready(function() {
    //scroll through the page
    $('#fullpage').fullpage({
        scrollBar:false,
        navigation:true,
        slidesNavigation:true,
        loopHorizontal:false,
        anchors: ['page1', 'page2', 'page3'],
        controlArrows: true,
	    verticalCentered: true,
    });
    
    //slider
    $('input[type="range"]').on("input change", function(e){
        e.preventDefault();
        let result = $(this).val();
        if (result >= 0 && result <=33) {
            $.fn.fullpage.moveTo('page3', 0);
        } else if (result >= 34 && result <=65){
            $.fn.fullpage.moveTo('page3', 1);
        } else if (result >= 66 && result <=100){
            $.fn.fullpage.moveTo('page3', 2);
        }
	});
});