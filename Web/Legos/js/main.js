// плавный подьем


// When the user scrolls down 20px from the top of the document, show the button
$(document).ready(function(){

    $(function (){
		$("#ToTheTop").hide();

		$(window).scroll(function (){
			if ($(this).scrollTop() > 700){
				$("#ToTheTop").fadeIn();
			} else{
				$("#ToTheTop").fadeOut();
			}
		});

		$("#ToTheTop").click(function (){
			$("body,html").animate({
				scrollTop:0
			}, 800);
			return false;
		});
	});
});



// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
// 	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
// 		document.getElementById("ToTheTop").style.display = "block";
// 	} else {
// 		document.getElementById("ToTheTop").style.display = "none";
// 	}
// }

// function topFunction() {
// 		jQuery(".scrollto a").click(function () {
// 			elementClick = jQuery(this).attr("href")
// 			destination = jQuery(elementClick).offset().top - 100;
// 			jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1100);
// 			return false;
// 		});
 
//     // document.body.scrollTop = 0; // For Safari
//     // document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
// }

//конец  плавный подьем



$(".hover_link").text(""); 
$(".ar").css("left","0px"); 
function inter() {
	$(".price").css('color', '#6E7988');
	$(".hover_link").text("Подробнее"); 
	$(".ar").css("left","100px");

};

function out() {
	$(".price").css('color', '#0067B4');
	$(".hover_link").text(""); 
	$(".ar").css("left","0px"); 
};


// $(".object").hover(function() {
// 	$(".object .price").css('color', 'red');
//  $(this).css('background', 'green');
// }); 


