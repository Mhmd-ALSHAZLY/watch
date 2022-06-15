function Change1(){
    document.getElementById('openi').innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas illo ipsum, odit accusantium repellat inventore temporibus placeat aliquid reiciendis deserunt.";
    document.getElementById('IMG').style.backgroundImage = "url('img/team-member-1.png')";
}
function Change2(){
    document.getElementById('openi').innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas illo ipsum, odit accusantium repellat inventore temporibus placeat.";
    document.getElementById('IMG').style.backgroundImage = "url('img/team-member-2.png')";
}
function Change3(){
    document.getElementById('openi').innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas illo ipsum, odit accusantium repellat inventore .";
    document.getElementById('IMG').style.backgroundImage = "url('img/team-member-3.png')";
}
function Change4(){
    document.getElementById('openi').innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas illo ipsum, odit accusantium repellat inventore temporibus placeat aliquid reiciendis deseruntplaceat aliquid reiciendis.";
    document.getElementById('IMG').style.backgroundImage = "url('img/team-member-4.png')";
}
$("#BTN1").click(function(){
    $("#FOrm").slideToggle(1000);
});
$("#a1").click(function(){
	$("html, body").animate({
		scrollTop: $("#home").offset().top
	}, 1000);
});

$("#a2").click(function(){
	$("html, body").animate({
		scrollTop: $("#opinion").offset().top
	}, 1000);
});

$("#a3").click(function(){
	$("html, body").animate({
		scrollTop: $("#client").offset().top
	}, 1000);
});

$("#a4").click(function(){
	$("html, body").animate({
		scrollTop: $("#team").offset().top
	}, 1000);
});

$("#a5").click(function(){
	$("html, body").animate({
		scrollTop: $("#product").offset().top
	}, 1000);
});

$("#a6").click(function(){
	$("html, body").animate({
		scrollTop: $("#about").offset().top
	}, 1000);
});
$("#a7").click(function(){
	$("html, body").animate({
		scrollTop: $("#end").offset().top
	}, 1000);
});
$("#A1").click(function(){
	$("html, body").animate({
		scrollTop: $("#home").offset().top
	}, 1000);
});
$("#A2").click(function(){
	$("html, body").animate({
		scrollTop: $("#home").offset().top
	}, 1000);
});
$("#A3").click(function(){
	$("html, body").animate({
		scrollTop: $("#home").offset().top
	}, 1000);
});