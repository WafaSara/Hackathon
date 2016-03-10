(function($) {
	$.datepicker.regional['es'] = {
		monthNames: ['Enero','Febrero','Marzo','Abril','Mayo','Junio',
		'Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'],
		monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
		'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
		dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
		dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'],
		dayNamesMin: ['Do','Lu','Ma','Mi','Ju','Vi','Sa'],
		dateFormat: 'dd/mm/yyyy', firstDay: 1,
		renderer: $.datepicker.defaultRenderer,
		prevText: '<img src="'+base_url_bwfr+'public/images/btn_miles/prev.png" all=""/>', prevStatus: 'Show the previous month',
		prevJumpText: '&#x3c;&#x3c;', prevJumpStatus: 'Show the previous year',
		nextText: '<img src="'+base_url_bwfr+'public/images/btn_miles/next.png" all=""/>', nextStatus: 'Show the next month',
		nextJumpText: '&#x3e;&#x3e;', nextJumpStatus: 'Show the next year',
		currentText: '', currentStatus: '',
		todayText: 'Today', todayStatus: 'Show today\'s month',
		clearText: '', clearStatus: '',
		closeText: '<img src="'+base_url_bwfr+'public/images/btn_miles/fermer_es_miles.jpg" all=""/>', closeStatus: 'Close without change',
		yearStatus: 'Show a different year', monthStatus: 'Show a different month',
		weekText: 'Wk', weekStatus: 'Week of the year',
		dayStatus: 'Select DD, M d', defaultStatus: 'Select a date',
		isRTL: false
	};
	$.datepicker.setDefaults($.datepicker.regional['es']);
})(jQuery);