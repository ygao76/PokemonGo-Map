$(function(){
	$('#btnSignUp').click(function(){

		$.ajax({
			url: '/next_loc',
			data: $('form').serialize(),
			type: 'POST',
			success: function(response){
				console.log(response);
			},
			error: function(error){
				console.log(error);
			}
		});
	});
});
