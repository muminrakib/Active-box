// My custom js
// navbar click fixed
$(".nav-item").on("click",function(){
  $(".navbar-collapse").removeClass('show');
});
//==wow==
// ==SmoothScroll==
var scroll = new SmoothScroll('a[href*="#"]');
// nav active
$(".nav-item").click(function(event) {
	$(this).addClass('active');
	$(".nav-item").not(this).removeClass('active') /* Act on the event */
});
