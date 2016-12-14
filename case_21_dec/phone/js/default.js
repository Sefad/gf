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
	if($('input:radio:checked').length === 0){
		return false;
	}else{
		if($('input:radio:checked').val() === "right"){
			firstAnswer = true;
		}else{
			firstAnswer = false;
		}
		$('input:radio:checked').each( function() {
			this.checked = false;
		});
	    $(".firstPoll").hide();
	    $(".secondPoll").show();
	    return false;
	}
};
var secondFirst = function() {
	if($('input:radio:checked').length === 0){
		return false;
	}else{
		if($('input:radio:checked').val() === "right"){
			secondAnswer = true;
		}else{
			secondAnswer = false;
		}
		$('input:radio:checked').each( function() {
			this.checked = false;
		});
	    $(".secondPoll").hide();
	    $(".thirdPoll").show();
	    return false;
	}
};
var thirdFirst = function() {
	if($('input:radio:checked').length === 0){
		return false;
	}else{
		var answers = 0;
		if($('input:radio:checked').val() === "right"){
			thirdAnswer = true;
		}else{
			thirdAnswer = false;
		}
		if(firstAnswer){
			$(".firstResult .resultCircl").addClass("good");
			answers += 1;
		}else{
			$(".firstResult .resultCircl").addClass("bad");
		}
		if(secondAnswer){
			$(".secondResult .resultCircl").addClass("good");
			answers += 1;
		}else{
			$(".secondResult .resultCircl").addClass("bad");
		}
		if(thirdAnswer){
			$(".thirdResult .resultCircl").addClass("good");
			answers += 1;
		}else{
			$(".thirdResult .resultCircl").addClass("bad");
		}
		$(".actionButton").addClass("last");
		$(".questions").html("Правильных ответов - " + answers);
		if(answers === 1 || answers === 0 || answers === 2){
			$(".oprosBlock.results input[type='submit']").val("Улучшить результат");
			$("#u7542-4.mrPoll").html("Мы уверены, что вы можете лучше.");
			$("#u7545-6.poll").html("<p>Оставьте свои данные,</p><p>чтобы получить персональную консультацию.</p>");
		}else if(answers === 3){
			$(".resultBlock").addClass("bestClient");
			$(".resultBlock").html("<div class='titleBest'>Великолепно!</div><br>Вы ответили на все вопросы. Почему вы до сих пор<br>не с нами?");
			$(".oprosBlock.results input[type='submit']").val("Начните зарабатывать");
			/*$("#u7542-4.mrPoll").html("Вы великолепны!");*/
			$("#u7545-6.poll").html("<p>Оставьте свои данные,</p><p>чтобы начать зарабатывать на своих знаниях.</p>");
		}
	    $(".thirdPoll").hide();
	    $(".results").show();
	    return false;
	}
};
$( document ).ready(function() {
	$('#subscr-form-9168').each( function() {
		this.reset();
	});
	$('#subscr-form-1562').each( function() {
		this.reset();
	});
	$('input:radio:checked').each( function() {
		this.checked = false;
	});
	$('.firstPoll input[type="radio"]').on('change', function(e){
		$(".firstPoll input[type='submit']").css('color', "white");
		$(".firstPoll input[type='submit']").css('border-color', "white");
	});
	$('.secondPoll input[type="radio"]').on('change', function(e){
		$(".secondPoll input[type='submit']").css('color', "white");
		$(".secondPoll input[type='submit']").css('border-color', "white");
	});
	$('.thirdPoll input[type="radio"]').on('change', function(e){
		$(".thirdPoll input[type='submit']").css('color', "white");
		$(".thirdPoll input[type='submit']").css('border-color', "white");
	});
	$("input[name=lead_phone]").mask("+9 (999) 999-9999");
	var first = $(".firstInfo"),
		second = $(".secondInfo"),
		third = $(".thirdInfo");
	$(".actionButton").on("click", function() {
		$(".overlay3").show();
	});
	$("#pollAction").on("click", function() {
		$(".overlay2").show();
	});
	$(".call").on("click", function() {
		$(".overlay").show();
	});
	$(document).mouseup(function (e){ // событие клика по веб-документу
		var div = $(".formBox"); // тут указываем ID элемента
		var cancel = $(".cancel");
		if ((!div.is(e.target) // если клик был не по нашему блоку
		    && div.has(e.target).length === 0) || cancel.is(e.target) || cancel.has(e.target).length != 0) { // и не по его дочерним элементам
			$(".overlay").hide(); // скрываем его
			$(".overlay2").hide(); // скрываем его
			$(".overlay3").hide(); // скрываем его
		}
	});
	$(document).bind( "touchstart", function(e){
	    var div = $(".formBox"); // тут указываем ID элемента
	    var cancel = $(".cancel");
		if ((!div.is(e.target) // если клик был не по нашему блоку
		    && div.has(e.target).length === 0) || cancel.is(e.target) || cancel.has(e.target).length != 0) { // и не по его дочерним элементам
			$(".overlay").hide(); // скрываем его
			$(".overlay2").hide(); // скрываем его
			$(".overlay3").hide(); // скрываем его
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
			if($(".hover").length > 0){
			    var div = $("ul"); // тут указываем ID элемента
				if ((!div.is(e.target) // если клик был не по нашему блоку
				    && div.has(e.target).length === 0)) { // и не по его дочерним элементам
					first.removeClass("hover");
					second.removeClass("hover");
					third.removeClass("hover");
				}
			}
		});
		first.on('touchstart', function(e) {
			if(first.hasClass("hover")){
				first.removeClass("hover");
			} else {
				first.addClass("hover");
				second.removeClass("hover");
				third.removeClass("hover");
			}
		});
		second.on('touchstart', function(e) {
			if(second.hasClass("hover")){
				second.removeClass("hover");
			} else {
				second.addClass("hover");
				first.removeClass("hover");
				third.removeClass("hover");
			}
		});
		third.on('touchstart', function(e) {
			if(third.hasClass("hover")){
				third.removeClass("hover");
			} else {
				third.addClass("hover");
				second.removeClass("hover");
				first.removeClass("hover");
			}
		});
	};
	/*$(".lgroup_datepicker").datepicker($.datepicker.regional["ru"]); $(".lgroup_datepicker").datepicker("option", "yearRange", "-100:+20"); $(".lgroup_datepicker").blur(); */
});