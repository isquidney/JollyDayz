$(function() {
	$('#book-button').on('click', function() {
		if ($('#form-wrapper').hasClass('hidden')) {
			$('#form-wrapper').slideDown(1200).removeClass('hidden');
		} else {
			$('#form-wrapper').slideUp(500).addClass('hidden');
		}
	});

// add other functions here!

}); 