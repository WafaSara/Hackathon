try{
var obj_menu_bw = null;
function checkHover() {
	if (obj_menu_bw) {
		obj_menu_bw.find('ul').hide();	
	} //if
} //checkHover

$(document).ready(function() {
	$('#Nav > li').hover(function() {
		if (obj_menu_bw) {
		obj_menu_bw.find('ul').hide();
		obj_menu_bw = null;
		} //if

		$(this).find("a:first").css("color","white");
		$(this).find('ul').show();

	}, function() {
		obj_menu_bw = $(this);
		onglet_bw_actif	=	$(this).find("a:first").attr("class").search(/actif/i);
		if(onglet_bw_actif==-1){
			$(this).find("a:first").css("color","#002576");
		}
		else
			$(this).find("a:first").css("color","white");
		setTimeout(
			"checkHover()",
			0); // si vous souhaitez retarder la disparition, c'est ici
	}
	);
	$('#Nav > li > ul > li > a').hover(function() {
		$(this).parent().parent().parent().find('a:first').css("color","white");
	}, function() {
	});
});
}catch(err){}

