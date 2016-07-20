$ = require('jquery');
$( "#brand" ).click(function() {
  $( "#hamburger" ).click();
});

// $('.navbar-collapse ul li a').click(function(){ 
//             $( "#hamburger" ).click();
// });
$(function () { 
        $('.navbar-collapse ul li a:not(.dropdown-toggle)').click(function () { 
                $('.navbar-toggle:visible').click(); 
        }); 
});
$( "#edatadetails,#antaresdetails" ).click(function(e){
	var target = this.hash;
    var $target = $(target);
    $('html, body').stop().animate({
		'scrollTop': ($target.offset().top)-100
	},1000);
	
	$( "#hamburger" ).click();
	
	return true;
});

