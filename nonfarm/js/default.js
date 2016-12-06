var pollFirst = function() {
	if($('input:radio:checked').val() === "right"){
		firstAnswer = true;
	}else{
		firstAnswer = false;
	}
    $(".firstPoll").hide();
    $(".secondPoll").show();
    return false;
};
var secondFirst = function() {
	if($('input:radio:checked').val() === "right"){
		secondAnswer = true;
	}else{
		secondAnswer = false;
	}
    $(".secondPoll").hide();
    $(".thirdPoll").show();
    return false;
};
var thirdFirst = function() {
	if($('input:radio:checked').val() === "right"){
		thirdAnswer = true;
	}else{
		thirdAnswer = false;
	}
	if(firstAnswer){
		$(".firstResult .resultCircl").addClass("good");
	}else{
		$(".firstResult .resultCircl").addClass("bad");
	}
	if(secondAnswer){
		$(".secondResult .resultCircl").addClass("good");
	}else{
		$(".secondResult .resultCircl").addClass("bad");
	}
	if(thirdAnswer){
		$(".thirdResult .resultCircl").addClass("good");
	}else{
		$(".thirdResult .resultCircl").addClass("bad");
	}
	$(".actionButton").addClass("last");
	$(".resultText").html("Отличный результат.");
    $(".thirdPoll").hide();
    $(".results").show();
    return false;
};
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