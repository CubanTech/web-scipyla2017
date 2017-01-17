$(document).ready(function() {

	$('#btnToProgram12').click(function(e){
		e.preventDefault();

		$('#program-modal-1')
			.modal('hide')
			.on('hidden.bs.modal', function (e) {
				$('#program-modal-2').modal('show');
				$(this).off('hidden.bs.modal'); // Remove the 'on' event binding
			});

	});

	//---------------------------------------------------------------------------------------------

	$('#btnToProgram21').click(function(e){
		e.preventDefault();

		$('#program-modal-2')
			.modal('hide')
			.on('hidden.bs.modal', function (e) {
				$('#program-modal-1').modal('show');
				$(this).off('hidden.bs.modal'); // Remove the 'on' event binding
			});

	});

	$('#btnToProgram23').click(function(e){
		e.preventDefault();

		$('#program-modal-2')
			.modal('hide')
			.on('hidden.bs.modal', function (e) {
				$('#program-modal-3').modal('show');
				$(this).off('hidden.bs.modal'); // Remove the 'on' event binding
			});

	});

	//---------------------------------------------------------------------------------------------

	$('#btnToProgram32').click(function(e){
		e.preventDefault();

		$('#program-modal-3')
			.modal('hide')
			.on('hidden.bs.modal', function (e) {
				$('#program-modal-2').modal('show');
				$(this).off('hidden.bs.modal'); // Remove the 'on' event binding
			});
	});

	$('#btnToProgram34').click(function(e){
		e.preventDefault();

		$('#program-modal-3')
			.modal('hide')
			.on('hidden.bs.modal', function (e) {
				$('#program-modal-4').modal('show');
				$(this).off('hidden.bs.modal'); // Remove the 'on' event binding
			});
	});

	//---------------------------------------------------------------------------------------------

	$('#btnToProgram43').click(function(e){
		e.preventDefault();

		$('#program-modal-4')
			.modal('hide')
			.on('hidden.bs.modal', function (e) {
				$('#program-modal-3').modal('show');
				$(this).off('hidden.bs.modal'); // Remove the 'on' event binding
			});
	});

	$('#btnToProgram45').click(function(e){
		e.preventDefault();

		$('#program-modal-4')
			.modal('hide')
			.on('hidden.bs.modal', function (e) {
				$('#program-modal-5').modal('show');
				$(this).off('hidden.bs.modal'); // Remove the 'on' event binding
			});
	});

	//---------------------------------------------------------------------------------------------

	$('#btnToProgram54').click(function(e){
		e.preventDefault();

		$('#program-modal-5')
			.modal('hide')
			.on('hidden.bs.modal', function (e) {
				$('#program-modal-4').modal('show');
				$(this).off('hidden.bs.modal'); // Remove the 'on' event binding
			});
	});

	$('#btnToProgram56').click(function(e){
		e.preventDefault();

		$('#program-modal-5')
			.modal('hide')
			.on('hidden.bs.modal', function (e) {
				$('#program-modal-6').modal('show');
				$(this).off('hidden.bs.modal'); // Remove the 'on' event binding
			});
	});

	//---------------------------------------------------------------------------------------------

	$('#btnToProgram65').click(function(e){
		e.preventDefault();

		$('#program-modal-6')
			.modal('hide')
			.on('hidden.bs.modal', function (e) {
				$('#program-modal-5').modal('show');
				$(this).off('hidden.bs.modal'); // Remove the 'on' event binding
			});
	});

	$('#btnToProgram67').click(function(e){
		e.preventDefault();

		$('#program-modal-6')
			.modal('hide')
			.on('hidden.bs.modal', function (e) {
				$('#program-modal-7').modal('show');
				$(this).off('hidden.bs.modal'); // Remove the 'on' event binding
			});
	});

	//---------------------------------------------------------------------------------------------

	$('#btnToProgram76').click(function(e){
		e.preventDefault();

		$('#program-modal-7')
			.modal('hide')
			.on('hidden.bs.modal', function (e) {
				$('#program-modal-6').modal('show');
				$(this).off('hidden.bs.modal'); // Remove the 'on' event binding
			});
	});


});