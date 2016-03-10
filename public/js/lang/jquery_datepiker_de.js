(function($) {
	$.datepicker.regional['de'] = {
		monthNames: ['Januar','Februar','März','April','Mai','Juni',
		'Juli','August','September','Oktober','November','Dezember'],
		monthNamesShort: ['Jan','Fév','Mar','Avr','Mai','Jun',
		'Jul','Aoû','Sep','Oct','Nov','Déc'],
		dayNames: ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'],
		dayNamesShort: ['Dim','Lun','Mar','Mer','Jeu','Ven','Sam'],
		dayNamesMin: ['So','Mo','Di','Mi','Do','Fr','Sa'],
		dateFormat: 'dd/mm/yyyy', firstDay: 1,
		renderer: $.datepicker.defaultRenderer,
		prevText: '<img src="'+base_url_bwfr+'public/images/btn_miles/prev.png" all=""/>', prevStatus: 'Voir le mois précédent',
		prevJumpText: '&#x3c;&#x3c;', prevJumpStatus: 'Voir l\'année précédent',
		nextText: '<img src="'+base_url_bwfr+'public/images/btn_miles/next.png" all=""/>', nextStatus: 'Voir le mois suivant',
		nextJumpText: '&#x3e;&#x3e;', nextJumpStatus: 'Voir l\'année suivant',
		currentText: '', currentStatus: '',
		todayText: 'Aujourd\'hui', todayStatus: 'Voir aujourd\'hui',
		clearText: '', clearStatus: '',
		closeText: '<img src="'+base_url_bwfr+'public/images/btn_miles/fermer_de_miles.jpg" all=""/>', closeStatus: 'Fermer sans modifier',
		yearStatus: 'Voir une autre année', monthStatus: 'Voir un autre mois',
		weekText: 'Sm', weekStatus: 'Semaine de l\'année',
		dayStatus: '\'Choisir\' le DD d MM', defaultStatus: 'Choisir la date',
		isRTL: false
	};
	$.datepicker.setDefaults($.datepicker.regional['de']);
})(jQuery);