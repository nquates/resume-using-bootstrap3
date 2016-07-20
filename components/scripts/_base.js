/*when the brand is visible use it to toggle visibility of the menu items by clicking the hamburger*/
$ = require('jquery');
$( "#brand" ).click(function() {
  $( "#hamburger" ).click();
});

/* when the navbar is using the hamberger icon collapse after each use.*/
$(function () { 
        $('.navbar-collapse ul li a:not(.dropdown-toggle)').click(function () { 
                $('.navbar-toggle:visible').click(); 
        }); 
});

/*simulate clicking  of the toggle buttons for edata and antares experience*/
$( "#edatadetails,#antaresdetails" ).click(function(e){
	e.preventDefault();
	var target = this.hash;
    var $target = $(target);
    $('html, body').stop().animate({
		'scrollTop': ($target.offset().top)-100
	},1000);
	var subtarget = $target[0].hash;
	var $subtarget = $(subtarget);
	if ($subtarget.hasClass('in')){
		$subtarget.removeClass('in');	
		$subtarget.removeAttr('style');
		$subtarget.attr('style','height;0px;');
	}
	else{
		$subtarget.addClass('in');
		$subtarget.removeAttr('style');
	}
	$target.click();
 	return true;
 });
