$(document).ready(function() {

	$(".devour-btn").on('click', function() {
		let id = $(this).data('id');
		$.ajax(`api/burgers/${id}`, {
			type: 'PUT',
			data: {devoured: 1}
		}).then(function() {
			location.reload();
		});
	});

	$('#add-burger').on('click', function(event) {
		event.preventDefault();
		let name = $('#new-burger').val().trim();
		console.log(name);
		if(name && name != '') {
			let newBurger = {
				burger_name: name,
				devoured: 0
			};
			$.ajax('/api/burgers', {
				type: 'POST',
				data: newBurger
			}).then(function() {
				location.reload();
			});
		}
		else {
			console.log('In else block');
			let $warning = $('<p>').text('Enter a name for the new burger.').attr('class', 'bg-danger').fadeOut(3000);
			$('#new-burger').after($warning);
		}
	});
});


