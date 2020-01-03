
//  when doc is ready do this function



// The scroll() method triggers the scroll event, or attaches a function to run when a scroll event occurs.
// scrollTop returns the scroll position

//when window scrolls do this function
$(document).scroll(function(){
    var scroll = $(window).scrollTop();
    if(scroll>60){
        $(".navbar-custom").css("background", "rgba(40, 112, 148, 0.85)");
        $("#logo").attr("src", "/images/logo-light.svg");
        $(".navbar-nav a").css("color", "#F6F6F6");
    }
    else {
        $(".navbar-custom").css("background", "transparent");
        $(".navbar-nav a").css("color", "#023246");
        $("#logo").attr("src", "/images/logo-dark.svg");
    }
});




$(document).ready(function(){
    $('.heroBlock').popover({
    trigger: "hover",
        delay: {show : 3000, hide : 0} });
});



// smooth scroll to anchor, with option of hash appearing in url. 
// (e) is the event handler
$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();
	    var target = this.hash;
	    var $target = $(target);
	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        // window.location.hash = target;
	    });
	});
});


