(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/*when the brand is visible use it to toggle visibility of the menu items by clicking the hamburger*/
/*$ = require('jquery');*/
$( "#brand" ).click(function() {
  $( "#hamburger" ).click();
});

/* when the navbar is using the hamburger icon collapse after each use.*/
$(function () { 
        $('.navbar-collapse ul li a:not(.dropdown-toggle)').click(function () { 
                $('.navbar-toggle:visible').click(); 
        }); 
});

$('#objectivesMI').click(function(e){
	e.preventDefault();
	var target = this.hash;
    var $target = $(target);
    $('html, body').stop().animate({
		'scrollTop': 0
	},1000);
});

$('#skillsMI,#orgsMI').click(function(e){
	e.preventDefault();
	var target = this.hash;
    var $target = $(target);
    $('html, body').stop().animate({
		'scrollTop': ($target.offset().top)-100
	},1000);
});

$( "#edatadetails,#antaresdetails,#finance_details,#accounting_details,#oilgas_details" ).click(function(e){
	e.preventDefault();
	/*go through the list and collapse all of the other accordions*/
	var targetList = ['#edatadetails','#antaresdetails','#finance_details','#accounting_details','#oilgas_details'];
	for (var i = targetList.length - 1; i >= 0; i--) {
		var starget = targetList[i];
		var $starget = $(starget);
		if ($starget[0].id != this.id){
			var rmTarget = $starget[0].hash;
			var $rmTarget = $(rmTarget);
			var subRmTarget = $rmTarget[0].hash;
			var $subRmTarget = $(subRmTarget); 
			if ($subRmTarget.hasClass('in')){
				$subRmTarget.removeClass('in');	
				$subRmTarget.removeAttr('style');
				$subRmTarget.attr('style','height;0px;');
			}
		}
	}
	/*now smoothly scrool down to selected target and toggle the accordions */
	var target = this.hash;
    var $target = $(target);
    $('html, body').stop().animate({
		'scrollTop': ($target.offset().top)-100
	},1000);
	var subtarget = $target[0].hash;
	var $subtarget = $(subtarget);
	$subtarget.addClass('in');
	$subtarget.removeAttr('style');
	$target.click();
	return true;
 });

},{}]},{},[1])