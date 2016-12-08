(function (d, w, c) {
(w[c] = w[c] || []).push(function() {
try {
w.yaCounter41438484 = new Ya.Metrika({
id:41438484,
clickmap:true,
trackLinks:true,
accurateTrackBounce:true,
webvisor:true
});
} catch(e) { }
});

var n = d.getElementsByTagName("script")[0],
s = d.createElement("script"),
f = function () { n.parentNode.insertBefore(s, n); };
s.type = "text/javascript";
s.async = true;
s.src = "https://mc.yandex.ru/metrika/watch.js";

if (w.opera == "[object Opera]") {
d.addEventListener("DOMContentLoaded", f, false);
} else { f(); }
})(document, window, "yandex_metrika_callbacks");
(function (d, w, c) {
        (w[c] = w[c] || []).push(function() {
            try {
                w.yaCounter40802744 = new Ya.Metrika({
                    id:40802744,
                    clickmap:true,
                    trackLinks:true,
                    accurateTrackBounce:true,
                    webvisor:true
                });
            } catch(e) { }
        });

        var n = d.getElementsByTagName("script")[0],
            s = d.createElement("script"),
            f = function () { n.parentNode.insertBefore(s, n); };
        s.type = "text/javascript";
        s.async = true;
        s.src = "https://mc.yandex.ru/metrika/watch.js";

        if (w.opera == "[object Opera]") {
            d.addEventListener("DOMContentLoaded", f, false);
        } else { f(); }
    })(document, window, "yandex_metrika_callbacks");
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
	$("input[name=lead_phone]").mask("9 (999) 999-9999");
	var first = $(".firstInfo"),
		second = $(".secondInfo"),
		third = $(".thirdInfo");
	$(".call").on("click", function() {
		$(".overlay").show();
	});
	$(document).mouseup(function (e){ // событие клика по веб-документу
		var div = $(".formBox"); // тут указываем ID элемента
		var cancel = $(".cancel");
		if ((!div.is(e.target) // если клик был не по нашему блоку
		    && div.has(e.target).length === 0) || cancel.is(e.target) || cancel.has(e.target).length != 0) { // и не по его дочерним элементам
			$(".overlay").hide(); // скрываем его
		}
		if($(".hover").length > 0){
			$(".hover").removeClass("hover");
		}
	});
	$(".cancel").on("click", function() {
		$(".overlayWedge").click();
	});
	$(".cancel").bind( "touchstart", function(e){
		$(".overlayWedge").click();
	});
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
		$(document).bind( "touchstart", function(e){
			if($(".overlay").is(':visible')){
			    var div = $(".formBox"); // тут указываем ID элемента
			    var cancel = $(".cancel");
				if ((!div.is(e.target) // если клик был не по нашему блоку
				    && div.has(e.target).length === 0) || cancel.is(e.target) || cancel.has(e.target).length != 0) { // и не по его дочерним элементам
					$(".overlay").hide(); // скрываем его
				}
			}
		});
		$(".trigger").on('click touchstart', function(e) {
			if($(".hover").length > 0){
				setTimeout('$(".title").click();'
				, 1000)
			}
		});
	};
	$(".lgroup_datepicker").datepicker($.datepicker.regional["ru"]); $(".lgroup_datepicker").datepicker("option", "yearRange", "-100:+20"); $(".lgroup_datepicker").blur();
});