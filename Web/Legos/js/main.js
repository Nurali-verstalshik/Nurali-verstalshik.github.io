// плавный подьем

jQuery(document).ready(function() {
	jQuery(".scrollto a").click(function () {
		elementClick = jQuery(this).attr("href")
		destination = jQuery(elementClick).offset().top - 100;
		jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1100);
		return false;
	});
});
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


