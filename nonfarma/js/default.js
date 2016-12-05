$( document ).ready(function() {
	$('.firstInfo').hover(function() {
	    $('.firstInfo').addClass("hover");
	}, function() {
	    $('.firstInfo').removeClass("hover");
	});
	$('.secondInfo').hover(function() {
	    $('.secondInfo').addClass("hover");
	}, function() {
	    $('.secondInfo').removeClass("hover");
	});
	$('.thirdInfo').hover(function() {
	    $('.thirdInfo').addClass("hover");
	}, function() {
	    $('.thirdInfo').removeClass("hover");
	});
	$(".lgroup_datepicker").datepicker($.datepicker.regional["ru"]); $(".lgroup_datepicker").datepicker("option", "yearRange", "-100:+20"); $(".lgroup_datepicker").blur();
});