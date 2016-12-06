$( document ).ready(function() {
	var first = $(".firstInfo"),
		second = $(".secondInfo"),
		third = $(".thirdInfo");
	if (window.matchMedia("(min-width: 1200px)").matches) {
	    first.hover(function() {
		    first.addClass("hover");
		}, function() {
		    first.removeClass("hover");
		});
		second.hover(function() {
		    second.addClass("hover");
		}, function() {
		    second.removeClass("hover");
		});
		third.hover(function() {
		    third.addClass("hover");
		}, function() {
		    third.removeClass("hover");
		});
	};
	if (window.matchMedia("(max-width: 1199px)").matches) {
		first.on('click touchstart', function(e) {
			if(first.hasClass("hover")){
			} else {
				alert("check");
				first.addClass("hover");
			}
		});
		second.on('click touchstart', function(e) {
			if(second.hasClass("hover")){
			} else {
				second.addClass("hover");
			}
		});
		third.on('click touchstart', function(e) {
			if(third.hasClass("hover")){
			} else {
				third.addClass("hover");
			}
		});
	};
	$(".lgroup_datepicker").datepicker($.datepicker.regional["ru"]); $(".lgroup_datepicker").datepicker("option", "yearRange", "-100:+20"); $(".lgroup_datepicker").blur();
});