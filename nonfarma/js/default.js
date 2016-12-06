$( document ).ready(function() {
	if (window.matchMedia("(min-width: 1200px)").matches) {
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
	};
	if (window.matchMedia("(max-width: 1199px)").matches) {
		$('.firstInfo').on('click touchend', function(e) {
			if($('.firstInfo').hasClass()){
				$('.firstInfo').removeClass("hover");
			} else {
				$('.firstInfo').addClass("hover");
				$('.secondInfo').removeClass("hover");
				$('.thirdInfo').removeClass("hover");
			}
		});
		$('.secondInfo').on('click touchend', function(e) {
			if($('.secondInfo').hasClass()){
				$('.secondInfo').removeClass("hover");
			} else {
				$('.secondInfo').addClass("hover");
				$('.firstInfo').removeClass("hover");
				$('.thirdInfo').removeClass("hover");
			}
		});
		$('.thirdInfo').on('click touchend', function(e) {
			if($('.thirdInfo').hasClass()){
				$('.thirdInfo').removeClass("hover");
			} else {
				$('.thirdInfo').addClass("hover");
				$('.secondInfo').removeClass("hover");
				$('.firstInfo').removeClass("hover");
			}
		});
		$(document).bind( "touchstart", function(e){
		    var div = $("ul"); // тут указываем ID элемента
			if ((!div.is(e.target) // если клик был не по нашему блоку
			    && div.has(e.target).length === 0)) { // и не по его дочерним элементам
			    $('.firstInfo').removeClass("hover");
			    $('.secondInfo').removeClass("hover");
			    $('.thirdInfo').removeClass("hover");
			}
		});
	};
	$(".lgroup_datepicker").datepicker($.datepicker.regional["ru"]); $(".lgroup_datepicker").datepicker("option", "yearRange", "-100:+20"); $(".lgroup_datepicker").blur();
});