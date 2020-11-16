 $( document ).ready(function(){

 	$( "#Burger .navbar-toggler" ).click(function(event) {
 		if ($('main').hasClass('active')) {
 			
 			$('main').removeClass ('active');  
 			$('main').css({
 				'-webkit-filter': 'blur(0)',
 				'-webkit-filter': 'blur(0)',
 				'-o-filter': 'blur(0)',
 				'-ms-filter': 'blur(0)',
 				'filter': 'blur(0)'
 			});

 		} else {
 			$('main').addClass ('active');
 			$('main').css({
 				'-webkit-filter': 'blur(15px)',
 				'-webkit-filter': 'blur(15px)',
 				'-o-filter': 'blur(15px)',
 				'-ms-filter': 'blur(15px)',
 				'filter': 'blur(15px)'
 			});  
 		}

 	});

 	var currentValue = 0;

 	$(document).ready(function() {
 		$('.btn-plus').click(function() {
 			currentValue++;
 			// alert(currentValue);	
 			$('.card-input').val(currentValue);
 		});


 		$('.btn-minus').click(function() {
 			if (currentValue > 0) {
 				currentValue--;
 				// alert(currentValue);
 			$('.card-input').val(currentValue);
 			}
 		});
 	});


 	// 	var kol = $('.card-input').val();
 	// $('.btn-plus').click(function(event) {
 	// 	/* value kol-va + */
 	// 	var kol = $('.card-input').val();
 	// 	//kol += 1;
 	// 	alert(kol = kol + 1);
 	// });
 	// $('.btn-minus').click(function(event) {
 	// 	/* value kol-va - */
 	// 	var kol = $('.card-input').val();
 	// 	//kol -= 1;
 	// });

 });



