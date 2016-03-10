(function($) {
	$.datepicker.regional['fr'] = {
		monthNames: ['Janvier','F�vrier','Mars','Avril','Mai','Juin',
		'Juillet','Ao�t','Septembre','Octobre','Novembre','D�cembre'],
		monthNamesShort: ['Jan','F�v','Mar','Avr','Mai','Jun',
		'Jul','Ao�','Sep','Oct','Nov','D�c'],
		dayNames: ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'],
		dayNamesShort: ['Dim','Lun','Mar','Mer','Jeu','Ven','Sam'],
		dayNamesMin: ['Di','Lu','Ma','Me','Je','Ve','Sa'],
		dateFormat: 'dd/mm/yyyy', firstDay: 1,
		renderer: $.datepicker.defaultRenderer,
		prevText: '<img src="//www.bestwestern.fr/public/images/btn_miles/prev.png" all=""/>', prevStatus: 'Voir le mois pr�c�dent',
		prevJumpText: '&#x3c;&#x3c;', prevJumpStatus: 'Voir l\'ann�e pr�c�dent',
		nextText: '<img src="//www.bestwestern.fr/public/images/btn_miles/next.png" all=""/>', nextStatus: 'Voir le mois suivant',
		nextJumpText: '&#x3e;&#x3e;', nextJumpStatus: 'Voir l\'ann�e suivant',
		currentText: '', currentStatus: '',
		todayText: 'Aujourd\'hui', todayStatus: 'Voir aujourd\'hui',
		clearText: '', clearStatus: '',
		closeText: '<img src="//www.bestwestern.fr/public/images/btn_miles/fermer_miles.jpg" all=""/>', closeStatus: 'Fermer sans modifier',
		yearStatus: 'Voir une autre ann�e', monthStatus: 'Voir un autre mois',
		weekText: 'Sm', weekStatus: 'Semaine de l\'ann�e',
		dayStatus: '\'Choisir\' le DD d MM', defaultStatus: 'Choisir la date',
		isRTL: false
	};
	$.datepicker.setDefaults($.datepicker.regional['fr']);
})(jQuery);