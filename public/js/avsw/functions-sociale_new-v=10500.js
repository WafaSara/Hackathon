var slideshow;
var slideshow2;
var sty="style=\'text-decoration:none !important;\'";
var posActuelle=0;
if(languageCode==null) languageCode='fr';
		switch(languageCode){
			case 'fr':vp ='Voir plus';vm ='Voir moins';sty="";trad_chambres	='Chambres';trad_chambre='Chambre';trad_Adultes	='Adultes';trad_Enfants='Enfants';trad_monthNames=["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"];trad_dayNamesMin=["Dim","Lun","Mar","Mer","Jeu","Ven","Sam"];break;
			case 'en':vp ='[+]';vm ='[-]';trad_chambres='Rooms';trad_chambre='Room';trad_Adultes='Adults';trad_Enfants='Child';trad_monthNames=['January','February','March','April','May','June','July','August','September','October','November','December'];trad_dayNamesMin=['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];break;
			case 'es':vp ='[+]';vm ='[-]';trad_chambres='Habitaciones';trad_chambre='Habitacion';trad_Adultes='Adultos';trad_Enfants='Niños';trad_monthNames=['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];trad_dayNamesMin=['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'] ;break;
			case 'it':vp ='[+]';vm ='[-]';trad_chambres='Camere';trad_chambre='Camere';trad_Adultes='Adulti';trad_Enfants='Adulti';trad_Enfants='Bambini';trad_monthNames=['Gennaio','Febbraio','Marzo','Aprile','Maggio','Giugno','Luglio','Agosto','Settembre','Ottobre','Novembre','Dicembre'];trad_dayNamesMin=['Dom','Lun','Mar','Mer','Gio','Ven','Sab'] ;break;
			case 'de':vp ='[+]';vm ='[-]';trad_chambres='Zimmer';trad_chambre='Zimmer';trad_Adultes='Anzahl Erwachsene';trad_Enfants='Anzahl Kinder';trad_monthNames=['Januar','Februar','März','April','Mai','Juni','Juli','August','September','Oktober','November','Dezember'];trad_dayNamesMin=['So','Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'];break;
			default:
		}
$(function() {
	var name=$("#breadcrumb span.current").text();
	//if(name.length > 45) {$("#breadcrumb .current").attr("title",name);name = name.substring(0,30)+"...";$("#breadcrumb .current").text(name);}
	$( "#DateRangeStart" ).datepicker({
		defaultDate: new Date(),
		changeMonth: false,
		numberOfMonths: 2,
		nextText:">",
		prevText:"<",
		minDate: new Date(),
		prevText:"◄",
		nextText:"►",
		monthNames:trad_monthNames,
		monthNamesShort:["Jan","Fév","Mar","Avr","Mai","Juin","Juil","Aoû","Sep","Oct","Nov","Dec"],
		dayNames:["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"],
		dayNamesShort:["Dim","Lun","Mar","Mer","Jeu","Ven","Sam"],
		dayNamesMin:trad_dayNamesMin,
		weekHeader:"Sem",
		dateFormat:"dd/mm/yy",
		firstDay:1,
		numberOfMonths: 2,
		showButtonPanel: true,
		minDate: 0,
		maxDate: '+349d',
		changeMonth: false,
		changeYear:false,
		dateFormat:'dd/mm/yy',
		onClose: function() {
	       $("#DateRangeEnd").datepicker("show");
	    }
		//onSelect:UpdateDateRangeEndplus1
	});
	$("#DateRangeStart").datepicker('option','onSelect',function() {
	    $("#DateRangeEnd").datepicker('option','minDate',
	      new Date($(this).datepicker('getDate').getTime()+86400000)
	    );
	    UpdateDateRangeEndplus1();
	});
	$( "#DateRangeEnd" ).datepicker({
		defaultDate: "+1w",
		changeMonth: false,
		numberOfMonths: 2,
		nextText:">",
		prevText:"<",
		minDate: new Date(),
		prevText:"◄",
		nextText:"►",
		monthNames:trad_monthNames,
		monthNamesShort:["Jan","Fév","Mar","Avr","Mai","Juin","Juil","Aoû","Sep","Oct","Nov","Dec"],
		dayNames:["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"],
		dayNamesShort:["Dim","Lun","Mar","Mer","Jeu","Ven","Sam"],
		dayNamesMin:trad_dayNamesMin,
		weekHeader:"Sem",
		dateFormat:"dd/mm/yy",
		firstDay:1,
		numberOfMonths: 2,
		showButtonPanel: true,
		minDate: 0,
		maxDate: '+349d',
		changeMonth: false,
		changeYear:false,
		dateFormat:'dd/mm/yy',
		onSelect:UpdateDateRangeDuration
	});
});
function slider_avis(){
	if(document.getElementById('slider-comment'))
	{
		slideshow=new TINY.slider.slide('slideshow',{
					id:'slider-comment',
					auto:false,
					resume:false,
					vertical:false,
					navid:'pagination-comment',
					activeclass:'current',
					position:0,
					rewind:false,
					elastic:false,
					left:'slide-comment-left',		
					right:'slide-comment-right'
		});
	}
}
$(window).load(function() {
  $("#slider-comment .slider-comment-content").css('height', $("li.panel").height()+40)
});

$('#pagination-comment li').click(function(){
	index=$('#pagination-comment li').index($(this));
	height=$('.slider-comment-content li').eq(index).height()+40;
	//console.log(index +".."+ height);
	$('.slider-comment-content').height(height);
	$('html,body').animate({
        scrollTop: $('#avisSlider').offset().top
      }, 0);
})
$('#slide-comment-right').click(function(){
	index=parseInt($('#pagination-comment li.current').text())-1;
	height=$('.slider-comment-content li').eq(index).height()+40;
	//console.log(index +".."+ height);
	$('.slider-comment-content').height(height);
	$('html,body').animate({
        scrollTop: $('#avisSlider').offset().top
      }, 0);

})
$('#slide-comment-left').click(function(){
	index=parseInt($('#pagination-comment li.current').text())-1;
	height=$('.slider-comment-content li').eq(index).height()+40;
	//console.log(index +".."+ height);
	$('.slider-comment-content').height(height);
	$('html,body').animate({
        scrollTop: $('#avisSlider').offset().top
      }, 0);

})

function expandText(textlength,adjustheight,bloc){
	for(var i=0,j=$(bloc+" .more-block").length;i<j;i++){
		if($(bloc+" .more-block").eq(i).find("div").text().length>textlength){
			$(bloc+" .more-block").eq(i).addClass("expandable");
		}
	}

	if($(bloc+" .expandable div").text().length > textlength){
		var adjustheight = adjustheight;
		var moreText = vp;
 		var lessText = vm;

 		$(bloc+" .expandable").css('height', adjustheight).css('overflow', 'hidden');
		$(bloc+" .expandable").after('<p class="continued">[&hellip;]</p><a href="#" class="adjust" '+sty+'></a>');

		$(bloc+" a.adjust").text(moreText);
		$(bloc+" a.adjust").toggle(function() {
			$(this).parent().find(".expandable").css('height', 'auto').css('overflow', 'visible');
			$(this).parent().find(" p.continued").css('display', 'none');
			$(this).text(lessText);
			$(this).parents(".slider-comment-content").css('height', $(this).parent().parent().height());
		}, function() {
			$(this).parent().find(" .expandable").css('height', adjustheight).css('overflow', 'hidden');
			$(this).parent().find(" p.continued").css('display', 'block');
			$(this).text(moreText);
			$(this).parents(".slider-comment-content").css('height', $(this).parent().parent().height());
		});
	}
}

function expandTextAvis(textlength,adjustheight,bloc){

	for(var i=0,j=$(bloc+" .more-block").length;i<j;i++){
		if($(bloc+" .more-block").eq(i).find("p").text().length>textlength){
			$(bloc+" .more-block").eq(i).addClass("expandable");
		}
	}
	if($(bloc+" .expandable p").text().length > textlength){
		var adjustheight = adjustheight;
		var moreText = vp;
 		var lessText = vm;

 		$(bloc+" .expandable").css('height', adjustheight).css('overflow', 'hidden');
		$(bloc+" .expandable").after('<p class="continued">[&hellip;]</p><a href="#" class="adjust" '+sty+'></a>');

		$(bloc+" a.adjust").text(moreText);
		$(bloc+" a.adjust").toggle(function() {

			$(this).parent().find(".expandable ").css('height', 'auto').css('overflow', 'visible');
			$(this).parent().find(" p.continued").css('display', 'none');
			$(this).text(lessText);
			$(this).parent().parents(".slider-comment-content").css('height', $(this).parent().parent().parent().height()+30);
		}, function() {

			$(this).parent().find(" .expandable").css('height', adjustheight).css('overflow', 'hidden');
			$(this).parent().find(" p.continued").css('display', 'block');
			$(this).text(moreText);
			$(this).parent().parents(".slider-comment-content").css('height', $(this).parent().parent().parent().height()+30);
		});
	}
}

function loadDone(){
	
	//expandText(300,60,".article");
	
	if(show_slider){
		slideshow2=new TINY.slider.slide('slideshow2',{
			id:'sliderParent',
			auto:false,
			resume:false,
			vertical:false,
			navid:'pagination-slideshow',
			activeclass:'current',
			position:0,
			rewind:false,
			elastic:false,
			left:'slide-slideshow-left',
			right:'slide-slideshow-right'
		});
	}
	
	$("#selecteurChambres").change(function(){
		var nombreDesire=this.value;
		var nombreActuel=$("#product_motor .chambres").length;
		if(nombreDesire>=nombreActuel){
			for(var i=nombreActuel;i<nombreDesire;i++){
				var element='<div class="chambres chambre'+(i+1)+'"><div class="encartBlanc personnes"><div class="title"> '+trad_chambre+' '+(i+1)+'</div><label class="nbAdultes left"><span class="intitule">'+trad_Adultes+'</span><br/><select name="adultQuantity_'+(i+1)+'" id="adultQuantity_'+(i+1)+'" class="selecteurAdultes chzn-select" style="width:57px;" tabindex="2"><option value="1" selected="selected">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option></select></label><label class="nbEnfants left"><span class="intitule">'+trad_Enfants+'</span><br/><select name="childQuantity_'+(i+1)+'" id="childQuantity_'+(i+1)+'" class="selecteurEnfants chzn-select" onchange="refreshKidSelectors()" style="width:57px;" tabindex="3"><option value="0" selected="selected">0</option><option value="1" >1</option><option value="2">2</option></select></label><div class="clearB">&nbsp;</div></div><div class="encartBlanc listeEnfants"></div></div>';
				$("#emplacementChambres").append($(element));
			}
		}else{
			for(var i=nombreActuel;i>nombreDesire;i--){
				$("#product_motor .chambres").eq(i-1).remove();
			}
		}
		if(nombreDesire>1){
			$("#emplacementChambres").attr("class","showTitles");
		}else{
			$("#emplacementChambres").removeAttr("class");
		}
		refreshKidSelectors();
	});
	$("#selecteurChambres").change();
	refreshKidSelectors();
	$("#controlesBlocs a").click(function(){
		$("#controlesBlocs a").removeClass("active");
		$(this).addClass("active");
		$("#blocsDynamiques>div, .contentTabsFiche>div").removeClass("active");
		$("#blocsDynamiques>div, .contentTabsFiche>div").eq($("#controlesBlocs a").index($(this))).addClass("active");
	});
	
	


	$("#Seminaires .voirDavantage").click(function(){
		if($("#Seminaires").hasClass("deroule")){
			$("#Seminaires").removeClass("deroule");
			$("#Seminaires .suite").slideUp();
		}else{
			$("#Seminaires").addClass("deroule");
			$("#Seminaires .suite").slideDown();
		}
	});
	$("#Services .voirDavantage").click(function(){
		if($("#Services").hasClass("deroule")){
			$("#Services").removeClass("deroule");
			//$("#Services .suite").slideUp();
			$("#Services .suite").css("display","none");
		}else{
			$("#Services").addClass("deroule");
			//$("#Services .suite").slideDown();
			$("#Services .suite").css("display","block");
		}
	});

	$("#avisSlider .article .voirDavantage").click(function(){
		var thisOne=$(this).parent();
		if(thisOne.hasClass("deroule")){
			thisOne.removeClass("deroule");
			thisOne.find(".suite").slideUp();
		}else{
			thisOne.addClass("deroule");
			thisOne.find(".suite").slideDown();
		}
	});
}
function refreshKidSelectors(){
	var chbre=0;
	$.each($("#product_motor .selecteurEnfants"), function(){
		chbre++;
		var nombreDesire=$(this).val();
		var nombreActuel=$(this).parents(".encartBlanc").next("div").find(".ageEnfant").length;
		
		if(nombreDesire==0)
			$(this).parents(".encartBlanc").next("div").hide();
		else
			$(this).parents(".encartBlanc").next("div").show();
		
		
		if(nombreDesire>=nombreActuel){
			for(var i=nombreActuel;i<nombreDesire;i++){
				var element='<label class="ageEnfant number'+i+'"><span class="intitule horizontal">'+trad_Enfants+' '+(i+1)+' </span><select name="room_'+chbre+'_child_'+(i+1)+'" id="room_'+chbre+'_child_'+(i+1)+'" class="chzn-select" style="width:57px;" tabindex="4"><option value="1" selected="selected"><= 1</option><option value="2" >2</option><option value="3" >3</option><option value="4" >4</option><option value="5" >5</option><option value="6" >6</option><option value="7" >7</option><option value="8" >8</option><option value="9" >9</option><option value="10" >10</option><option value="11" >11</option><option value="12" >12</option><option value="13" >13</option><option value="14" >14</option><option value="15" >15</option><option value="16" >16</option><option value="17" >17</option><option value="18" >18</option></select></label>';
				$(this).parents(".encartBlanc").next("div").append($(element));
			}
		}else{
			for(var i=nombreActuel;i>nombreDesire;i--){
				$(this).parents(".encartBlanc").next("div").find(".ageEnfant").eq(i-1).remove();
			}
		}
		if(nombreDesire==0){
			$(this).parents(".chambres").addClass("noChild");
		}else{
			$(this).parents(".chambres").removeClass("noChild");
		}
	});
}
$(document).ready(function(){
	height=$('.slider-comment-content li').eq(0).height();
	$('.slider-comment-content').height(height);
	$("#hideShowPrivilege").click(function(){$("#codePrivilege").toggle('slow');});
});



expandText(900, 184, "#presentation");
