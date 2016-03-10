var ancien_no = new Array();
ancien_no.push(1);
var regExpBeginning = /^\s+/;
var regExpEnd = /\s+$/;
var trad_chargement = '';
var RecaptchaOptions = {
	    theme : 'clean',
	    lang : 'fr',
	    custom_translations : { instructions_visual : "Saisir le texte" },
	 };
switch(languageCode){
			case 'fr':trad_chargement	='Chargement';break;
			case 'en':trad_chargement='Loading';break;
			case 'es':trad_chargement='Carga';break;
			case 'it':trad_chargement='Caricamento';break;
			case 'de':trad_chargement='Laden';break;
			default:trad_chargement	='Chargement';break;
		}
// fonction version FR
function listRoom(no){
<!--      
		if(languageCode==null) languageCode='fr';
		switch(languageCode){
			case 'fr':trad_chambres	='Chambres';trad_chambre='Chambre';trad_Adultes	='Adultes';trad_Enfants='Enfants';break;
			case 'en':trad_chambres='Rooms';trad_chambre='Room';trad_Adultes='Adults';trad_Enfants='Children';break;
			case 'es':trad_chambres='Habitaciones';trad_chambre='Habitacion';trad_Adultes='Adultos';trad_Enfants='Niños';break;
			case 'it':trad_chambres='Camere';trad_chambre='Camere';trad_Adultes='Adulti';trad_Enfants='Adulti';break;
			case 'de':trad_chambres='Zimmer';trad_chambre='Zimmer';trad_Adultes='Erwachsene';trad_Enfants='Kinder';break;
			default:
		}
          e	=	getById('div_select_age_per_room');
          display('valider_div_select_age_per_room');
          //len	=	ancien_no.length;
          var content	=	'<div class="champ">'; 
          content	+=	'<label for="roomQuantity">'+trad_chambres+'</label>';
          content	+=	'<select name="roomQuantity" id="roomQuantity" onchange="display(\'div_select_age_per_room\');listRoom(getById(\'roomQuantity\').value);eliminateRoomChild(getById(\'roomQuantity\').value);ancien_no.push(getById(\'roomQuantity\').value);">';
		  for(i=1;i<=3;i++){
		  	content	+=	'<option value="'+i+'"'
		  	if(i==no)
		  	content += 	'selected="selected"';
		  	content +=	'>'+i+'</option>';
		  }
		  content	+=	'</select>';
		  content	+=	'</div>';
          
          //content1	=	'<div class="champ">';
          var content_1	=	'';
          content_1	=	'<div class="type_resa" style="width:63px;float:left;">';
          content_1	+=	'<label for="roomQuantity">'+trad_chambres+'</label><select name="roomQuantity" id="roomQuantity" onchange="listRoom(getById(\'roomQuantity\').value);eliminateRoomChild(getById(\'roomQuantity\').value);ancien_no.push(getById(\'roomQuantity\').value);">';
          for(i=1;i<=3;i++){
         	 content_1	+=	' <option value="'+i+'">'+i+'</option>';
          }
          content_1	+=	'</select>';
          content_1	+=	'</div>';
		  //content1	+=	'</div>';
		  
          if(no>1){
          getById('chambre_unique').innerHTML	=	content;
          getById('multiple_chambres').innerHTML	=	'<div class="champ_resa" style="width:70px;float:left;"><strong>'+trad_chambre+' 1 </strong>';
          getById('multiple_chambres').className	=	'';
          
          for(i=2;i<=no;i++){
	          toThis  =   '';
	          toThis+=    '<div class="champ_resa">';
	          toThis+=    '<strong style="width:70px;float:left;">'+trad_chambre+' '+i+' </strong>';
	          toThis+=    '<div class="type_resa">';
	          toThis+=    '<label for="adultQuantity_'+i+'">'+trad_Adultes+'</label>';
	          toThis+=    '<select name="adultQuantity_'+i+'" id="adultQuantity_'+i+'" >';
	          for(j=1;j<=4;j++){
	               toThis+=    '<option value="'+j+'">'+j+'</option>';
	          }
	          toThis+=    '</select></div>';
	          toThis+=    '<div class="type_resa">';
	          toThis+=    '<label for="childQuantity_'+i+'">'+trad_Enfants+'</label>';
	          toThis+=    '<select name="childQuantity_'+i+'" id="childQuantity_'+i+'" onchange="showhideSelectAge('+i+',getById(\'childQuantity_'+i+'\').value)" style="display:block;">';
	          for(k=0;k<=2;k++){
	               toThis+=    	'<option value="'+k+'"';
	               if(getById('childQuantity_'+i) && getById('childQuantity_'+i).value == k){
	               		toThis+=		' selected="selected"';
	               }
	               toThis+=		'>'+k+'</option>';
	          }
	          toThis+=    '</select></div>';
	          toThis+=    '</div>';
	          display('line_'+i);
	          display('line_room_'+i);
	          show(i,toThis);
	          
            }
            for(l=i;l>no && l<=3;l++){
                show(l,'');
                 hide('line_room_'+l);
          		hide('line_'+l);
            }
        }else{
          getById('chambre_unique').innerHTML	=	'';
          getById('multiple_chambres').innerHTML	=	content_1;
          getById('multiple_chambres').className	=	'multiple_chambres';
          hide('valider_div_select_age_per_room');
          hide('lien_occupation');
         
          show(2,'');
          show(3,'');
          hide('line_2');
          hide('line_3');
          hide('line_room_2');
          hide('line_room_3');
        }
        
          if(no==2){
  		   	$("#trans_actu").css("margin-top","66px");
  		   	//show('line_room_1');
  		   }else if(no==3){
  		   	$("#trans_actu").css("margin-top","96px");
  		   	//show('line_room_1');
  		   }else{
  		   	$("#trans_actu").css("margin-top","0px");
  		   }
          
        return null;
//-->       
    }
    function show(id,content){
<!--
            getById("line_"+id).innerHTML = content;
//-->
    }
    
        function display(id){
<!--
            getById(id).style.display = 'block';
 
//-->
    }
    

      	function hide(id){
<!--
            //getById(id).style.display = 'none';
//-->
    }
    
    	function eliminateRoomChild(indice){
<!--
		//alert(indice);
		for(uu=3;uu>indice;uu--){
			//show('age_select_1_for_room_'+i,'');
			//show('age_select_2_for_room_'+i,'');
			//show('age_select_3_for_room_'+i,'');
			//if(uu==indice) break;
			hide('label_children_'+uu);
		}
//-->
    }
    
    
    function buidSelectAge(room,child){
<!--
		if(languageCode==null) languageCode='fr';
		switch(languageCode){
			case 'fr':trad_age='Age';break;
			case 'en':trad_age='Age';break;
			case 'es':trad_age='Edad';break;
			case 'it':trad_age='Età';break;
			case 'de':trad_age='Alter';break;
		}

		toreturn 	 =	'<div class="type_resa">';
		toreturn 	+=	'<label for="room_'+room+'_child_'+child+'">'+trad_age+' '+i+'</label>';
		toreturn	+=	'<select id="room_'+room+'_child_'+child+'" name="room_'+room+'_child_'+child+'">';
		toreturn	+=	'<option value="1">&lt;=1</option>';
		for(j=2;j<=18;j++){
			toreturn	+=	'<option value="'+j+'">'+j+'</option>';
		}
		toreturn	+=	'</select>';
		toreturn	+=	'</div>';
		if(i==2)
		toreturn	+=	'';
		
		show("age_select_"+child+"_for_room_"+room,toreturn);

//-->
    
    }
    
    function showhideSelectAge(room,number_of_selects){
<!--
		if(number_of_selects==0) hide("label_children_"+room);
		else display("label_children_"+room);
		
		for(i=1;i<=number_of_selects;i++){
			buidSelectAge(room,i);
		}
		
		for(l=i;l>number_of_selects && l<=2;l++){
            show("age_select_"+l+"_for_room_"+room,'');
            }
       /* 
       if(room==2){
       	$("#trans_actu").css("margin-top","66px");
       }else if(room==3){
       	$("#trans_actu").css("margin-top","96px");
       }else{
       	$("#trans_actu").css("margin-top","0px");
       }*/
      
//-->
    
    }
    
        function populateCalendar(){
<!--
            dte	=	getById("DateRangeStart").value.split("\/");
            nbre_nuitees	=	getById('duration').value;
        
        dateStart	=	new Date(parseInt(dte[2],10), parseInt(dte[1],10)-1, parseInt(dte[0],10),8,0,0);
        timestamp	=	dateStart.getTime()/1000;
        timestamp2	=	timestamp+(3600*24*nbre_nuitees);
        dateEnd	=	new Date(timestamp2*1000);
        mounth =	parseInt(dateEnd.getMonth(),10)+1;
        day		=	parseInt(dateEnd.getDate(),10);
        if(day<10) day	=	"0"+day;
        if(mounth<10) mounth	=	"0"+mounth;
        DateAffich	=	""+day+"/"+mounth+"/"+dateEnd.getFullYear();
       	getById("DateRangeEnd").value = DateAffich;
//-->
    }
        
        function populateCalendar_1(){
        	<!--

        	            dte	=	getById("DateRangeStart_1").value.split("\/");
        	            nbre_nuitees	=	getById('duration_1').value;
        	        
        	        dateStart	=	new Date(parseInt(dte[2],10), parseInt(dte[1],10)-1, parseInt(dte[0],10),8,0,0);
        	        timestamp	=	dateStart.getTime()/1000;
        	        timestamp2	=	timestamp+(3600*24*nbre_nuitees);
        	        dateEnd	=	new Date(timestamp2*1000);
        	        mounth =	parseInt(dateEnd.getMonth(),10)+1;
        	        day		=	parseInt(dateEnd.getDate(),10);
        	        if(day<10) day	=	"0"+day;
        	        if(mounth<10) mounth	=	"0"+mounth;
        	        DateAffich	=	""+day+"/"+mounth+"/"+dateEnd.getFullYear();
        	       	getById("DateRangeEnd_1").value = DateAffich;
        	//-->
        	    }
    
    function checkCalendar(){
<!--
        dte	=	getById("DateRangeStart").value.split("\/");

        dateStart	=	new Date(parseInt(dte[2],10), parseInt(dte[1],10), parseInt(dte[0],10),8,0,0);
        timestamp	=	dateStart.getTime()/1000;
        timestamp2	=	timestamp+(3600*24);
        dateEnd	=	new Date(timestamp2*1000);
        //if(dateStart>DateEnd) alert('azsf');
        mounth =	parseInt(dateEnd.getMonth(),10);
        day		=	parseInt(dateEnd.getDate(),10);
        if(day<10) day	=	"0"+day;
        if(mounth<10) mounth	=	"0"+mounth;
        DateAffich	=	""+day+"/"+mounth+"/"+dateEnd.getFullYear();
        getById("DateRangeEnd").value = DateAffich;
//-->
    }
    
    function switchDiv(obj){
<!--
		
		var el = getById(obj);
		
		if(el.style.display != "block"){
		el.style.display = "block";
		}else{
		el.style.display = "none";
		}
//-->
}

	 function SetDefaultDateStart(){
<!--	 	
	 	dateStart	=	new Date();
        timestamp	=	(dateStart.getTime()/1000)+(3600*24*7);
        dateStart	=	new Date(timestamp*1000);
        mounth =	parseInt(dateStart.getMonth(),10);
        alert(mounth);
        day		=	parseInt(dateStart.getDate(),10);
        if(day<10) day	=	"0"+day;
        if(mounth<10) mounth	=	"0"+mounth;
        DateAffich	=	""+day+"/"+mounth+"/"+dateStart.getFullYear();
        getById("DateRangeStart").value = DateAffich;
       
//-->
	 }
	 
	 function SetContent(id,content){
<!--
	 	
            getById(id).value	=	content;
//-->
	 }
	 
    
     function UpdateDateRangeEnd(duration){
<!--
        
        dte	=	getById("DateRangeStart").value.split("\/");
        

        dateStart	=	new Date(parseInt(dte[2],10), parseInt(dte[1],10)-1, parseInt(dte[0],10),8,0,0);
        timestamp	=	dateStart.getTime()/1000;
        timestamp2	=	timestamp+(3600*24*duration);
        dateEnd	=	new Date(timestamp2*1000);
        mounth =	parseInt(dateEnd.getMonth(),10)+1;
        day		=	parseInt(dateEnd.getDate(),10);
        if(day<10) day	=	"0"+day;
        if(mounth<10) mounth	=	"0"+mounth;
        DateAffich	=	""+day+"/"+mounth+"/"+dateEnd.getFullYear();
       	getById("DateRangeEnd").value = DateAffich;
        
//-->
    }
	
	 function UpdateDateRangeOnKeyPressEnter(){
<!--
        
       	$("#DateRangeStart").datepicker('option','defaultDate',new Date($("#DateRangeStart").datepicker('getDate').getTime()));
        var dteEnd = new Date($("#DateRangeStart").datepicker('getDate').getTime()+86400000);
		var mois =	parseInt(dteEnd.getMonth(),10) +1;
        var jour =	parseInt(dteEnd.getDate(),10);
        if(jour<10) jour	=	"0"+jour;
        if(mois<10) mois	=	"0"+mois;
		var formattedDate = jour+"/"+mois+"/"+dteEnd.getFullYear();
		$("#DateRangeEnd").val(formattedDate);
		$("#DateRangeEnd").datepicker('option','defaultDate',new Date($("#DateRangeStart").datepicker('getDate').getTime()+172800000));
		$("#DateRangeEnd").datepicker('show');
        
//-->
    }

     
     function UpdateDateRangeEndplus1(){
    	 <!--
    	         
    	         dte	=	getById("DateRangeStart").value.split("\/");
    	         

    	         dateStart	=	new Date(parseInt(dte[2],10), parseInt(dte[1],10)-1, parseInt(dte[0],10),8,0,0);
    	         timestamp	=	dateStart.getTime()/1000;
    	         timestamp2	=	timestamp+(3600*24*1);
    	         dateEnd	=	new Date(timestamp2*1000);
    	         mounth =	parseInt(dateEnd.getMonth(),10)+1;
    	         day		=	parseInt(dateEnd.getDate(),10);
    	         if(day<10) day	=	"0"+day;
    	         if(mounth<10) mounth	=	"0"+mounth;
    	         DateAffich	=	""+day+"/"+mounth+"/"+dateEnd.getFullYear();

    	        getById("DateRangeEnd").value = DateAffich;
    	        getById("duration").value = '1';

    	 //-->
    	     }
     
     function UpdateDateRangeEnd_1(duration){
    	 <!--
    	         
    	         dte	=	getById("DateRangeStart_1").value.split("\/");
    	         

    	         dateStart	=	new Date(parseInt(dte[2],10), parseInt(dte[1],10)-1, parseInt(dte[0],10),8,0,0);
    	         timestamp	=	dateStart.getTime()/1000;
    	         timestamp2	=	timestamp+(3600*24*duration);
    	         dateEnd	=	new Date(timestamp2*1000);
    	         mounth =	parseInt(dateEnd.getMonth(),10)+1;
    	         day		=	parseInt(dateEnd.getDate(),10);
    	         if(day<10) day	=	"0"+day;
    	         if(mounth<10) mounth	=	"0"+mounth;
    	         DateAffich	=	""+day+"/"+mounth+"/"+dateEnd.getFullYear();
    	        	getById("DateRangeEnd_1").value = DateAffich;
    	         
    	 //-->
    	     }
     
 function UpdateDateRangeEndSel(){
	 <!--
	         
	         dte	=	getById("DateRangeStart").value.split("\/");
	         datefin	=	getById("DateRangeEnd").value.split("\/");
	         
	         timestampfin	=	new Date(parseInt(datefin[2],10), parseInt(datefin[1],10)-1, parseInt(datefin[0],10),8,0,0);
	         timestampfin	=	timestampfin.getTime()/1000;

	         dateStart	=	new Date(parseInt(dte[2],10), parseInt(dte[1],10)-1, parseInt(dte[0],10),8,0,0);
	         timestamp	=	dateStart.getTime()/1000;
	         
	         //if(timestampfin<=timestamp){
		         timestamp2	=	timestamp+(3600*24*1);
		         dateEnd	=	new Date(timestamp2*1000);
		         mounth =	parseInt(dateEnd.getMonth(),10)+1;
		         day		=	parseInt(dateEnd.getDate(),10);
		         if(day<10) day	=	"0"+day;
		         if(mounth<10) mounth	=	"0"+mounth;
		         DateAffich	=	""+day+"/"+mounth+"/"+dateEnd.getFullYear();
		         getById("DateRangeEnd").value = DateAffich;
		         getDaysOfMonth('monthyearESel','dayESel');
		         $('#dayESel').val(day);
		         $('#monthyearESel').val(mounth+"/"+dateEnd.getFullYear());
		         $('#duration').val('1');
	         //}
	         
	 //-->
}
 
 function isPastDate(de){
<!--
	 dte	=	de.split("\/");
	 dateStart	=	new Date(parseInt(dte[2],10), parseInt(dte[1],10)-1, parseInt(dte[0],10),8,0,0);
	 date_now	=	new Date();
	 date_now.setHours(8);
	 date_now.setMilliseconds(0);
	 date_now.setMinutes(0);
	 date_now.setSeconds(0)
	 if(date_now>dateStart){
		 return true;
	 }
	 return false;
//-->
 }
 
 function UpdateDateRangeDuration(){
	 <!--
	         
	         datedebut	=	getById("DateRangeStart").value.split("\/");
	         datefin	=	getById("DateRangeEnd").value.split("\/");
	         
	         timestampfin	=	new Date(parseInt(datefin[2],10), parseInt(datefin[1],10)-1, parseInt(datefin[0],10),8,0,0);
	         timestampfin	=	timestampfin.getTime()/1000;

	         timestampdebut	=	new Date(parseInt(datedebut[2],10), parseInt(datedebut[1],10)-1, parseInt(datedebut[0],10),8,0,0);
	         timestampdebut	=	timestampdebut.getTime()/1000;
	         
	         getById('duration').value	=	Math.abs(((timestampfin-timestampdebut))/(3600*24));
	         
	 //-->
}
 
 function invalidDates(){
	 datedebut	=	getById("DateRangeStart").value.split("\/");
     datefin	=	getById("DateRangeEnd").value.split("\/");
     timestampfin	=	new Date(parseInt(datefin[2],10), parseInt(datefin[1],10)-1, parseInt(datefin[0],10),8,0,0);
     timestampfin	=	timestampfin.getTime()/1000;

     timestampdebut	=	new Date(parseInt(datedebut[2],10), parseInt(datedebut[1],10)-1, parseInt(datedebut[0],10),8,0,0);
     timestampdebut	=	timestampdebut.getTime()/1000;
     
     if(timestampfin<=timestampdebut){ return false;}return true;
 }
    
    function getById(id){
<!--    	
    	if(document.getElementById){
    		toreturn	=	document.getElementById(id);
    	}else{
    		toreturn	=	document.all[id];
    	}
    	return toreturn;
//-->
    }
    
    function submitFormResa(){
<!--    

    	if((getById('mail').value != getById('cmail').value) || getById('mail').value == "" || getById('cmail').value == ""){
    		alert('les deux champs d\'adresse electronique et confirmation de l\'adresse electronique doivent être identiques et non vides');
    		getById('mail').focus();
    		return false;
    	}else if(getById('prenom').value == ""){
    		alert('le champ prenom est obligatoire');
    		getById('prenom').focus();
    		return false;
    	}else if(getById('nom').value == ""){
    		alert('le champ nom est obligatoire');
    		getById('nom').focus();
    		return false;
    	}else if(getById('adresse').value == ""){
    		alert('le champ adresse est obligatoire');
    		getById('adresse').focus();
    		return false;
    	}else if(getById('ville').value == ""){
    		alert('le champ ville est obligatoire');
    		getById('ville').focus();
    		return false;
    	}else if(getById('tel').value == ""){
    		alert('le champ numéro de télephone est obligatoire');
    		getById('tel').focus();
    		return false;
    	}else if(getById('approuve').checked != true){
    		alert('veuillez approuver la politique relative au tarif et à la chambre réservée');
    		getById('approuve').focus();
    		return false;
    	}else{
    		getById('form_resa_submit').style.display	=	'none';
    		getById('loading_resa').style.display	=	'block';
    		getById('paiement').submit();
    	}
//-->
    }
    
	function encodeToHex(str){
<!--
		var r="";
	    var e=str.length;
	    var c=0;
	    var h;
	    while(c<e){
	        h=str.charCodeAt(c++).toString(16);
	        while(h.length<3) h="0"+h;
	        r+=h;
	    }
	    return r;
//-->
	}
	function decodeFromHex(str){
<!--
	    str=trim(str);
		var r="";
	    var e=str.length;
	    var s;
	    while(e>=0){
	        s=e-3;
	        r=String.fromCharCode("0x"+str.substring(s,e))+r;
	        e=s;
	    }
	    return r;
//-->
	}
    
    
    
    function formatdate(id){
<!--
		var ey	=	getById(id);
		val	=	ey.value;
		if(val.length ==2 || val.length == 5){
			ey.value	+= '/';
		}
//-->
	}
	
	
	// Supprime les espaces inutiles en début et fin de la chaîne passée en paramètre.

	function trim(aString) {
<!--
		return aString.replace(regExpBeginning, "").replace(regExpEnd, "");
	//-->
	}
	
	function MaxArray( array ){
<!--    
    return Math.max.apply( Math, array );
//-->
}

	function MinArray( array ){
<!--
    return Math.min.apply( Math, array );
//-->
}

	// ouvre une fenêtre en popup
	
	function open_window(url, height, width){
<!--
	 window.open(url, 'popup', 'height='+height+', width='+width+', toolbar=no, menubar=no, scrollbars=yes, resizable=no, location=no, directories=no, status=no');
//-->	
	}
	
     
     function SetCookie (name, value, expires, path, domain, secure){
        var expDate = new Date();
        expDate.setTime(expDate.getTime() + (expires * 24 * 3600 * 1000));
         		bwfr_cookie = name + "=" + escape (value) +
                  ((expires) ? "; expires=" + expDate.toGMTString() : "") +
                  ((path) ? "; path=" + path : "") +
                  ((domain) ? "; domain=" + domain : "") +
                  ((secure) ? "; secure" : "");
                  document.cookie = bwfr_cookie;
	}
	
	
	function number_format( number, decimals, dec_point, thousands_sep ) {
		var n = number, prec = decimals;
	    n = !isFinite(+n) ? 0 : +n;
	    prec = !isFinite(+prec) ? 0 : Math.abs(prec);
	    var sep = (typeof thousands_sep == "undefined") ? ',' : thousands_sep;
	    var dec = (typeof dec_point == "undefined") ? '.' : dec_point;
	 
	    var s = (prec > 0) ? n.toFixed(prec) : Math.round(n).toFixed(prec); //fix for IE parseFloat(0.55).toFixed(0) = 0;
	 
	    var abs = Math.abs(n).toFixed(prec);
	    var _, i;
	 
	    if (abs >= 1000) {
	        _ = abs.split(/\D/);
	        i = _[0].length % 3 || 3;
	 
	        _[0] = s.slice(0,i + (n < 0)) +
	              _[0].slice(i).replace(/(\d{3})/g, sep+'$1');
	 
	        s = _.join(dec);
	    } else {
	        s = s.replace('.', dec);
	    }
	    return s;
	}
	
	okcc	=	true;


	function check_credit_card(CardNumber,CardCode){
			function setOkCC(val){
			okcc =  val;
		}
		
		function getOkCC(){
			return okcc;
		}
		
		$.post("check_creditcard.jsp",{CardNumber:CardNumber,CardCode:CardCode},
			function success(data){ // au succès on renvoie le résultat de la requête  
            	if(trim(data)=="ok"){
            		//getById('is_valid_card').value	=	"1";
            		setOkCC(true);
            	}else{
            		//alert(trim(data));
            		//getById('is_valid_card').value	=	"0";
            		setOkCC(false);
            	}
       });
       return getOkCC();
	}
	
	function getFlashMovieObject(movieName){
		  ret=null;
		 /* if (window.document[movieName]) 
		  {
		      ret= window.document[movieName];
		      alert('1');
		  }
		  if (navigator.appName.indexOf("Microsoft Internet")==-1)
		  {
		    if (document.embeds && document.embeds[movieName])
		      ret= document.embeds[movieName]; alert('2');
		  }
		  else // if (navigator.appName.indexOf("Microsoft Internet")!=-1)
		  {*/
		    ret= document.getElementById(movieName);
		  //}
		  
		  return ret;
}

	  function ouvrirPopupEwego(){   
		  window.open( 'http://www.e-wegopro.fr/bestwestern-france/popup', "popup_ewego", "width=685,height=680,menubar=yes,toolbar=no,location=yes,status=no,resizable=no,scrollbars=no,directories=no");
	  }
	  
	  function gotoUrl(page){
			window.location.href=base_url_bwfr+page;
		}
	  
	  function getTripWidget(lang,idhotel){
		  $(document).ready(function(){
			  idhotelstr	=	idhotel+"";
			  if(idhotelstr.length==3){
				  idhotelstr	=	"00"+idhotelstr;
			  }else if(idhotelstr.length==4){
				  idhotelstr	=	"0"+idhotelstr;
			  }
			  url_trip	=	"//www.tripadvisor.com/WidgetEmbed-cdspropertysummary?display=true&partnerId=637EE138E79748DB8E68E6278941C43D&lang="+lang+"&locationId="+idhotelstr;
			  widgetTrip	=	'<iframe src="'+url_trip+'" width="170" height="130" scrolling="no" frameborder="0"allowtransparency="true" marginheight="0" marginwidth="0" style="vertical-align:top;height:147px;" class="avis" ></iframe>';
			  $('#avis_'+idhotel).html(widgetTrip);
		  });
	  }
	  
	  function getTripWidgetFicheHotelwithsize(lang,idhotel,width,height){
		  $(document).ready(function(){
			  idhotelstr	=	idhotel+"";
			  if(idhotelstr.length==3){
				  idhotelstr	=	"00"+idhotelstr;
			  }else if(idhotelstr.length==4){
				  idhotelstr	=	"0"+idhotelstr;
			  }
			  url_trip	=	"//www.tripadvisor.com/WidgetEmbed-cdspropertysummary?display=true&partnerId=C24C55EA0E1D48639B7C290AAA53091E&lang="+lang+"&locationId="+idhotelstr;
			  widgetTrip	=	'<iframe src="'+url_trip+'" width="'+width+'" height="'+height+'" scrolling="no" frameborder="0"allowtransparency="true" marginheight="0" marginwidth="0" style="vertical-align:top;height:'+height+'px;" class="avis" ></iframe>';
			  $('#avis_fiche_'+idhotel).html(widgetTrip);
		  });
	  }
	  
	  function getTripWidgetInd(lang,idhotel,ind){
		  $(document).ready(function(){
			  idhotelstr	=	idhotel+"";
			  if(idhotelstr.length==3){
				  idhotelstr	=	"00"+idhotelstr;
			  }else if(idhotelstr.length==4){
				  idhotelstr	=	"0"+idhotelstr;
			  }
			  url_trip	=	"//www.tripadvisor.com/WidgetEmbed-cdspropertysummary?display=true&partnerId=637EE138E79748DB8E68E6278941C43D&lang="+lang+"&locationId="+idhotelstr;
			  widgetTrip	=	'<iframe src="'+url_trip+'" width="170" height="130" scrolling="no" frameborder="0"allowtransparency="true" marginheight="0" marginwidth="0" style="vertical-align:top;height:147px;" class="avis" ></iframe>';
			  $('#avis'+ind+'_'+idhotel).html(widgetTrip);
		  });
	  }
	  
	  function DecryptInternalLink(url){
		  var tab_toReplace = [[".jsp","#."],["=","#_"],["&","#~"],["/","|"]];
		  j=tab_toReplace.length;
			while(j--)
			{
				while (url.indexOf(tab_toReplace[j][1]) > -1)
					url=url.replace(tab_toReplace[j][1],tab_toReplace[j][0]);
			}
			return url;
	  }
	  
	  function push_filter(filter,idfilter){
		  $(document).ready(function(){
			  if($('#'+filter+'_'+idfilter+'').attr('checked')){
				  $('#'+filter+''+idfilter+'').val($('#'+filter+'_'+idfilter+'').val());
			  }else{
				  $('#'+filter+''+idfilter+'').val('');
			  }
			  $("#form_recherche").attr("action",DO_SEARCH_MODIF_DC());
			  getById('form_recherche').submit();
		  });
	  }
	 function checkMonument(idmonument){
		 $(document).ready(function(){
			 $("#monuments_"+idmonument).attr("checked",true);
		 });
	 }
	 function push_filterMonument(idmonument){
		 $(document).ready(function(){
			 che	=	$("#monuments_"+idmonument).attr("checked");
			 $("#hotels_monuments input").attr("checked",false);
			 $("#monuments_"+idmonument).attr("checked",che);
			 if(che)$("#monuments_").val(idmonument);else $("#monuments_").val("");
			 $("#form_recherche").attr("action",DO_SEARCH_MODIF_DC());
			 getById('form_recherche').submit();
			 $("#hotels_monuments input").attr("disabled",true);
		  });
	 }
	  
	 function push_filter_thematique(filter,idfilter){
		  $(document).ready(function(){
			  if($('#'+filter+'_'+idfilter+'').attr('checked')){
				  $('#'+filter+''+idfilter+'').val($('#'+filter+'_'+idfilter+'').val());
			  }else{
				  $('#'+filter+''+idfilter+'').val('');
			  }
			  getById('form_recherche_thematique').submit();
		  });
	  }
	  function push_filter_promo(filter,idfilter,idform){
		  $(document).ready(function(){
			  /*if($('#'+filter+'_'+idfilter+'').attr('checked')){
				  $('#'+filter+''+idfilter+'').val($('#'+filter+'_'+idfilter+'').val());
			  }else{
				  $('#'+filter+''+idfilter+'').val('');
			  }*/
			  getById(idform).submit();
		  });
	  }
	  
	  function func_savoirplus_link(result_idhotel){
			$(document).ready(function() {
			if(($(".Searchresult #block_mini_fiche_hotel"+result_idhotel+" ul li").length)==5){
				ind_tab_tarifs = 4;
			}else{
				ind_tab_tarifs = 3;
			}
			$(".Searchresult #block_mini_fiche_hotel"+result_idhotel+" .ui-tabs-panel").hide();
			$(".Searchresult #block_mini_fiche_hotel"+result_idhotel).show('slow');
			$(".Searchresult #block_mini_fiche_hotel"+result_idhotel).tabs({ cache:true, spinner: trad_chargement+'...', selectedClass : 'active' ,active: 0,beforeLoad:function(event, ui){var $tabs = $(".Searchresult #block_mini_fiche_hotel"+result_idhotel).tabs();var active = $tabs.tabs('option', 'active');if(active==ind_tab_tarifs){$('#calAlt_'+result_idhotel).show();$('#availcal_one_month_'+result_idhotel).show();}if(active!=ind_tab_tarifs){$('#calAlt_'+result_idhotel).hide();$('#availcal_one_month_'+result_idhotel).hide();}}}); // first tab selected
			//$(".Searchresult #block_mini_fiche_hotel"+result_idhotel).tabs('select', 0);
			//$('.Searchresult #savoirplus_link'+result_idhotel).css("display","none");
			//$('.Searchresult #savoirplusreplace_link'+result_idhotel).css("display","block");
			$('.Searchresult #desc'+result_idhotel).hide("slow");
			if(result_idhotel<=94000 && result_idhotel>=93000){
			if($('.Searchresult #avis_'+result_idhotel).html()==""){
				getTripWidget("fr",result_idhotel);
			}else{
				$('.Searchresult #avis_'+result_idhotel).show("slow");
			}
			}
			window.location.href='#hotelname'+result_idhotel;
			var idtab = $(".Searchresult #block_mini_fiche_hotel"+result_idhotel+" .ui-tabs-panel").attr("id");
			var ind_tab_presentation = 0;
			//console.log(idtab);
			if(typeof(idtab)!='undefined'){
				var indice = parseInt(idtab.split('-')[2]) + parseInt(ind_tab_presentation);
				//console.log(indice);
				$("#ui-tabs-"+indice).show();
			}
			});
		}
	  
	/*  function func_golf_link(result_idhotel){
		  $(document).ready(function() {
				if(($(".Searchresult #block_mini_fiche_hotel"+result_idhotel+" ul li").length)==5){
					ind_tab_golf = 4;
				}else{
					ind_tab_golf = 3;
				}
			$(".Searchresult #block_mini_fiche_hotel"+result_idhotel+" .ui-tabs-panel").hide();
			$(".Searchresult #block_mini_fiche_hotel"+result_idhotel).tabs({ cache:true, spinner: trad_chargement+'...', selectedClass : 'active',active: 2,beforeLoad:function(event, ui){var $tabs = $(".Searchresult #block_mini_fiche_hotel"+result_idhotel).tabs();var active = $tabs.tabs('option', 'active');if(active==ind_tab_golf){$('#calAlt_'+result_idhotel).show();$('#availcal_one_month_'+result_idhotel).show();}if(active!=ind_tab_golf){$('#calAlt_'+result_idhotel).hide();$('#availcal_one_month_'+result_idhotel).hide();}}}); // first tab selected
			$(".Searchresult #block_mini_fiche_hotel"+result_idhotel).show('slow');
			//$(".Searchresult #block_mini_fiche_hotel"+result_idhotel).tabs('select', 4); // switch to third tab
			$('.Searchresult #desc'+result_idhotel).hide("slow");
			window.location.href='#hotelname'+result_idhotel;
			var idtab = $(".Searchresult #block_mini_fiche_hotel"+result_idhotel+" .ui-tabs-panel").attr("id");
			var ind_tab_photo = 3;
			if(typeof(idtab)!='undefined'){
				var indice = parseInt(idtab.split('-')[2]) + parseInt(ind_tab_photo);
				$("#ui-tabs-"+indice).show();
				
			}
			});
		}
	  */
	  function func_golf_link(result_idhotel){
			$(document).ready(function() {
				ind_tab_golf = $(".Searchresult #block_mini_fiche_hotel"+result_idhotel+" ul li").length-2;
				$(".Searchresult #block_mini_fiche_hotel"+result_idhotel).show('slow');
				$(".Searchresult #block_mini_fiche_hotel"+result_idhotel).tabs({ cache:true, spinner: trad_chargement+'...', selectedClass : 'active' ,active: ind_tab_golf}); // first tab selected
				//$(".Searchresult #block_mini_fiche_hotel"+result_idhotel).tabs('select', 0);
				$('.Searchresult #desc'+result_idhotel).hide("slow");
			
			});
		}
	  
		function func_tarifs_link(result_idhotel){
			$(document).ready(function() {
				var len = $(".Searchresult #block_mini_fiche_hotel"+result_idhotel+" ul li").length;
				$(".Searchresult #block_mini_fiche_hotel"+result_idhotel+" .ui-tabs-panel").hide();
				/*if(($(".Searchresult #block_mini_fiche_hotel"+result_idhotel+" ul li").length)==5){
					ind_tab_tarifs = 4;
				}else{
					ind_tab_tarifs = 3;
				}*/
				ind_tab_tarifs = $(".Searchresult #block_mini_fiche_hotel"+result_idhotel+" ul li").length-1;
			$("#ancre_hotel").val(result_idhotel);
			$(".Searchresult #block_mini_fiche_hotel"+result_idhotel).tabs({ cache:true, spinner: trad_chargement+'...', selectedClass : 'active',active: ind_tab_tarifs,activate:function(event, ui){if(ui.newTab.index().toString()==ind_tab_tarifs){$('#calAlt_'+result_idhotel).show();$('#availcal_one_month_'+result_idhotel).show();}if(ui.newTab.index().toString()!=ind_tab_tarifs){$('#calAlt_'+result_idhotel).hide();$('#availcal_one_month_'+result_idhotel).hide();}}}); // first tab selected
			$("#ui-tabs-"+len).show();
			var idtab = $(".Searchresult #block_mini_fiche_hotel"+result_idhotel+" .ui-tabs-panel").attr("id");
			if(typeof(idtab)!='undefined'){
				var indice = parseInt(idtab.split('-')[2]) + parseInt(ind_tab_tarifs);
				$("#ui-tabs-"+indice).show();
				
			}
			$(".Searchresult #block_mini_fiche_hotel"+result_idhotel).show('slow');
			//$(".Searchresult #block_mini_fiche_hotel"+result_idhotel).tabs('select', 4); // switch to third tab
			$('.Searchresult #desc'+result_idhotel).hide("slow");
			window.location.href='#hotelname'+result_idhotel;
			});
		}
		function func_close_link(result_idhotel){
			$(document).ready(function() {
			$('.Searchresult #block_mini_fiche_hotel'+result_idhotel).css("display","none");
			$('.Searchresult #savoirplusreplace_link'+result_idhotel).css("display","none");
			$('.Searchresult #savoirplus_link'+result_idhotel).css("display","block");
			$('.Searchresult #desc'+result_idhotel).show("slow");
			$('.Searchresult #avis_'+result_idhotel).hide("slow");
			}); 
		}
		function func_plan_link(result_idhotel){
			$(document).ready(function() {
			$(".Searchresult #block_mini_fiche_hotel"+result_idhotel).show('slow');
			$(".Searchresult #block_mini_fiche_hotel"+result_idhotel).tabs({ cache:true, spinner: trad_chargement+'...', selectedClass : 'active' ,active: 1}); // first tab selected
			//$(".Searchresult #block_mini_fiche_hotel"+result_idhotel).tabs('select', 0);
			$('.Searchresult #desc'+result_idhotel).hide("slow");
			
			});
		}
		function func_avis_link(result_idhotel){
			$(document).ready(function() {
				if(($(".Searchresult #block_mini_fiche_hotel"+result_idhotel+" ul li").length)==5){
					ind_tab_tarifs = 4;
				}else{
					ind_tab_tarifs = 3;
				}
			$(".Searchresult #block_mini_fiche_hotel"+result_idhotel).show('slow');
			$(".Searchresult #block_mini_fiche_hotel"+result_idhotel).tabs({ cache:true, spinner: trad_chargement+'...', selectedClass : 'active' ,active: 3,activate:function(event, ui){if(ui.newTab.index().toString()==ind_tab_tarifs){$('#calAlt_'+result_idhotel).show();$('#availcal_one_month_'+result_idhotel).show();}if(ui.newTab.index().toString()!=ind_tab_tarifs){$('#calAlt_'+result_idhotel).hide();$('#availcal_one_month_'+result_idhotel).hide();}}}); // first tab selected
			//$(".Searchresult #block_mini_fiche_hotel"+result_idhotel).tabs('select', 0);
			});
		}
		function trig(obj){
			$(document).ready(function(){
				$('#all_pages').trigger('click');
				$(document).oneTime("500ms", function() {
					window.location.href='#'+obj;
					$('#'+obj).trigger('click');
				});
				
			});
		}
		
		function trigsanspagination(obj){
			$(document).ready(function(){
					window.location.href='#'+obj;
					$('#'+obj).trigger('click');
			});
		}
		
		function getTripReviews(list,idlanguage){
			$(document).ready(function(){
				$.post(base_url_bwfr+"search/getTripReviews.jsp",{reviews : list,idlanguage:idlanguage},  
	            function success(data){
					don	=	data.split('@@@---@@@');
					ar_revs	=	list.split('-');
					for(i=0;i<ar_revs.length;i++){
						$("#tripReview_"+ar_revs[i]).html(don[i]);
					}
				});
			});
		}
		
		// GET TRIP_REVIEWS FOR LIST OF idtrip_reviews for AVSW
		function getTripReviewsAvsw(list,idlanguage){
			$(document).ready(function(){
				$.post(base_url_bwfr+"search/getTripReviewsAvsw.jsp",{reviews : list,idlanguage:idlanguage},  
	            function success(data){
					don	=	data.split('@@@---@@@');
					ar_revs	=	list.split('-');
					for(i=0;i<ar_revs.length;i++){
						$("#tripReview_"+ar_revs[i]).html(trim(don[i]));
					}
				});
			});
		}
		
		// GET A TOP TRIP_REVIEWS FOR AN HOTEL
		function getTopTripReviews(idhotel,idlanguage,idtrip_reviews){
			$(document).ready(function(){
				$.post(base_url_bwfr+"search/getTopTripReviews.jsp",{HotelCode : idhotel,idlanguage:idlanguage},  
	            function success(data){
					don	=	data;
					$("#topTripReview_"+idtrip_reviews).html(don);
				});
			});
		}
		
		// GET A TOP TRIP_REVIEWS FOR MINI FICHE HOTEL
		function getTopTripReviewsMiniFiche(idhotel,idlanguage){
			$(document).ready(function(){
				$.post(base_url_bwfr+"search/getTopTripReviews.jsp",{HotelCode : idhotel,idlanguage:idlanguage},  
	            function success(data){
					don	=	trim(data);
					$("#topTripReview_"+idhotel).html(don);
					if(don==''){$('#pres_tp_'+idhotel).css('width','100%')}
				});
			});
		}
		
		function removeCriterionsAndSubmit(){
			$('.bcl_critere input').attr("checked",false);
			$('.populated_inputs input').val("");
			//$('.search_modif #show_msg').val("1");
			getById('form_recherche').submit();
		}
		
		function get_error_msg_booking(city_name){
					if($('.htl_result_envie p#stl_1').html()==null){
						$('.htl_result_envie').prepend('<p class="stl1" id="stl_1">Aucun hôtel à <strong>'+city_name+'</strong> ne correspond à l\'ensemble des critères choisis<br/><span>En <a href="javascript:removeCriterionsAndSubmit()">cliquant ici</a>, découvrez les hôtels qui correspondent partiellement à vos critères</span></p>');
						/*$('#showMap').hide();
						$('.filter_htl1').hide();
						$('.comparer').hide();
						$('#stl1').hide();
						$('.pagination').hide();*/
					}	
					$('#showMap').hide();
					$('.filter_htl1').hide();
					$('.comparer').hide();
					$('#stl1').hide();
					$('.pagination').hide();
		}
		
		function stripAccent(str){
		 var rExps=[
		 {re:/[\xC0-\xC6]/g, ch:'A'},
		 {re:/[\xE0-\xE6]/g, ch:'a'},
		 {re:/[\xC8-\xCB]/g, ch:'E'},
		 {re:/[\xE8-\xEB]/g, ch:'e'},
		 {re:/[\xCC-\xCF]/g, ch:'I'},
		 {re:/[\xEC-\xEF]/g, ch:'i'},
		 {re:/[\xD2-\xD6]/g, ch:'O'},
		 {re:/[\xF2-\xF6]/g, ch:'o'},
		 {re:/[\xD9-\xDC]/g, ch:'U'},
		 {re:/[\xF9-\xFC]/g, ch:'u'},
		 {re:/[\xD1]/g, ch:'N'},
		 {re:/[\xF1]/g, ch:'n'} ];

		 for(var i=0, len=rExps.length; i<len; i++)
		  str=str.replace(rExps[i].re, rExps[i].ch);

		 return str;
		}
		function getFourchetteUrl(url_f){
			$().ready(function() {
				$("#dialog1").dialog({width:820,height:517,modal: true});
				$(".ui-dialog-titlebar").css("width","800px");
				$(".ui-dialog-titlebar").css("background","#2A82AC");
				$(".ui-dialog").css("background","white");
				$("#iframe_fourchette").attr('src',url_f);
			});
		}
		function cookie_google_map(name_cookie,val_cookie){
			$.cookie(name_cookie, val_cookie, { expires: 1, path :'/' });
		}
		function func_photos_link(result_idhotel){
			
			$(document).ready(function() {
				if(($(".Searchresult #block_mini_fiche_hotel"+result_idhotel+" ul li").length)==5){
					ind_tab_tarifs = 4;
				}else{
					ind_tab_tarifs = 3;
				}
				$(".Searchresult #block_mini_fiche_hotel"+result_idhotel+" .ui-tabs-panel").hide();
			$(".Searchresult #block_mini_fiche_hotel"+result_idhotel).tabs({ cache:true, spinner: trad_chargement+'...', selectedClass : 'active',active: 2,beforeLoad:function(event, ui){var $tabs = $(".Searchresult #block_mini_fiche_hotel"+result_idhotel).tabs();var active = $tabs.tabs('option', 'active');if(active==ind_tab_tarifs){$('#calAlt_'+result_idhotel).show();$('#availcal_one_month_'+result_idhotel).show();}if(active!=ind_tab_tarifs){$('#calAlt_'+result_idhotel).hide();$('#availcal_one_month_'+result_idhotel).hide();}}}); // first tab selected
			$(".Searchresult #block_mini_fiche_hotel"+result_idhotel).show('slow');
			//$(".Searchresult #block_mini_fiche_hotel"+result_idhotel).tabs('select', 4); // switch to third tab
			$('.Searchresult #desc'+result_idhotel).hide("slow");
			window.location.href='#hotelname'+result_idhotel;
			var idtab = $(".Searchresult #block_mini_fiche_hotel"+result_idhotel+" .ui-tabs-panel").attr("id");
			var ind_tab_photo = 2;
			if(typeof(idtab)!='undefined'){
				var indice = parseInt(idtab.split('-')[2]) + parseInt(ind_tab_photo);
				$("#ui-tabs-"+indice).show();
				
			}
			});
		}
		function func_calendar_alternatif(result_idhotel){
			$(document).ready(function() {
				var len = $(".Searchresult #block_mini_fiche_hotel"+result_idhotel+" ul li").length;
				if(($(".Searchresult #block_mini_fiche_hotel"+result_idhotel+" ul li").length)==5){
					ind_tab_tarifs = 4;
				}else{
					ind_tab_tarifs = 3;
				}
				$(".Searchresult #block_mini_fiche_hotel"+result_idhotel+" .ui-tabs-panel").hide();
				$("#ui-tabs-"+len).show();
				var idtab = $(".Searchresult #block_mini_fiche_hotel"+result_idhotel+" .ui-tabs-panel").attr("id");
				if(typeof(idtab)!='undefined'){
					var indice = parseInt(idtab.split('-')[2]) + parseInt(ind_tab_tarifs);
					$("#ui-tabs-"+indice).show();
					
				}
				$(".Searchresult #block_mini_fiche_hotel"+result_idhotel).tabs({ cache:true, spinner: trad_chargement+'...', selectedClass : 'active',active: ind_tab_tarifs,activate:function(event, ui){if(ui.newTab.index().toString()==ind_tab_tarifs){$('#calAlt_'+result_idhotel).show();$('#availcal_one_month_'+result_idhotel).show();}if(ui.newTab.index().toString()!=ind_tab_tarifs){$('#calAlt_'+result_idhotel).hide();$('#availcal_one_month_'+result_idhotel).hide();}}}); // first tab selected
				$(".Searchresult #block_mini_fiche_hotel"+result_idhotel).show('slow');
				//$(".Searchresult #block_mini_fiche_hotel"+result_idhotel).tabs('select', 4); // switch to third tab
				$('.Searchresult #desc'+result_idhotel).hide("slow");
				window.location.href='#hotelname'+result_idhotel;
			});
		}
		function showhideSelectAgeAbTesting(room,number_of_selects){
			<!--
					if(number_of_selects==0){ hide("label_children_"+room);}
					else{ display("line_room_"+room);display("label_children_"+room);}
					for(k=1;k<=number_of_selects;k++){
						buidSelectAgeAbTesting(room,k);
					}
					
					for(l=i;l>number_of_selects && l<=2;l++){
			            show("age_select_"+l+"_for_room_"+room,'');
			            }
			       /* 
			       if(room==2){
			       	$("#trans_actu").css("margin-top","66px");
			       }else if(room==3){
			       	$("#trans_actu").css("margin-top","96px");
			       }else{
			       	$("#trans_actu").css("margin-top","0px");
			       }*/
			      
			//-->
			    
			    }
		function buidSelectAgeAbTesting(room,child){
			<!--
			if(languageCode==null) languageCode='fr';
			switch(languageCode){
				case 'fr':trad_age='âge';break;
				case 'en':trad_age='Age of child';break;
				case 'es':trad_age='Edad';break;
				case 'it':trad_age='Età';break;
				case 'de':trad_age='Alter';break;
			}
			
			var content = '';
			for(i=1;i<=child;i++){
			content 	 =	'<div class="age_enf_bw"><div class="pic"></div>';
			content+=  '	<div><label>'+trad_age+' '+i+'</label>';
			content+= '<span class="select_chek_num numbre_bw"><span class="num_chek_chamb" id="sp_age_'+room+'_child_'+child+'">&lt;=1</span>';
			content	+=	'<select class="chamb_bw" id="room_'+room+'_child_'+child+'" name="room_'+room+'_child_'+child+'" onchange="selectElementByAge(getById(\'room_'+room+'_child_'+child+'\').value,'+room+','+child+')">';
			content	+=	'<option value="1">&lt;=1</option>';
			for(j=2;j<=18;j++){
				content	+=	'<option value="'+j+'">'+j+'</option>';
			}
			content	+=	'</select>';
			content	+=	'</span>';
			content	+=	'</div>';
			//getById('line_room_'+room).appendChild(content);
			//$( content ).appendTo( $( '#label_children_'+room ) );
			}
			getById('line_age_select_'+child+'_for_room_'+room).innerHTML	=	content;
			return null;
		//-->
    
    }
function listRoomAbTesting(no){
<!--      

	if(languageCode==null) languageCode='fr';
	switch(languageCode){
		case 'fr':trad_chambres	='Chambres';trad_chambre='Chambre';trad_Adultes	='Adultes';trad_Enfants='Enfants';break;
		case 'en':trad_chambres='Rooms';trad_chambre='Room';trad_Adultes='Adults';trad_Enfants='Children';break;
		case 'es':trad_chambres='Habitaciones';trad_chambre='Habitacion';trad_Adultes='Adultos';trad_Enfants='Niños';break;
		case 'it':trad_chambres='Camere';trad_chambre='Camera';trad_Adultes='Adulti';trad_Enfants='Bambini';break;
		case 'de':trad_chambres='Zimmer';trad_chambre='Zimmer';trad_Adultes='Erwachsene';trad_Enfants='Kinder';break;
		default:
	}
		  //hide("bloc_chambre");
	$('#bloc_chambre').html('');
		  var content = '';
          content += '<div id="multi_chambre"><div class="champ"><label for="roomQuantity" style="font-weight: bold;">'+trad_chambres+'</label>';
          content += '<span class="select_chek_num numbre_bw"><span class="num_chek_chamb" id="chambre_select">'+no+'</span>';
          content+='<select name="roomQuantity" id="roomQuantity" onchange="listRoomAbTesting(getById(\'roomQuantity\').value);selectElement(getById(\'roomQuantity\').value,\'chambre\')">';
          for(ii=1;ii<=3;ii++){
  		  	content	+=	'<option value="'+ii+'"'
  		  	if(ii==no)
  		  	content += 	'selected="selected"';
  		  	content +=	'>'+ii+'</option>';
  		  }
          content+='</select></span></div></div>';
          for(k = 1;k <=no; k++){
	          content += '<p class="chambre_chek">'+trad_chambre+' '+k+' :</p>';
	          content+='<div class="chambre_1_chek"><div class="line_adl"><span class="select_chek_num numbre_bw"><span class="num_chek_chamb" id="sp_adult_'+k+'">1</span>';
	          content+='<select name="adultQuantity_'+k+'" id="adultQuantity_'+k+'" class="chamb_bw" onchange="selectElementByIndex(getById(\'adultQuantity_'+k+'\').value,\'adult\','+k+')">';
	          content_1 = '';
	          for(i=1;i<=4;i++){
		          content_1	+=	' <option value="'+i+'">'+i+'</option>';
	          }
	          content+=content_1;
	          content+='</select></span><label>'+trad_Adultes+'</label></div>';
	           
	          
	          content+='<div class="line_enf"><span class="select_chek_num numbre_bw"><span class="num_chek_chamb" id="sp_enfant_'+k+'">0</span>';
	          content+='<select name="childQuantity_'+k+'" id="childQuantity_'+k+'" onchange="showhideSelectAgeAbTesting('+k+',getById(\'childQuantity_'+k+'\').value);selectElementByIndex(getById(\'childQuantity_'+k+'\').value,\'child\','+k+')" class="chamb_bw">';
	          content_1 = '';
	          for(i=0;i<=2;i++){
		          content_1	+=	' <option value="'+i+'">'+i+'</option>';
	          }
	          content+=content_1;
	          content+='</select></span><label>'+trad_Enfants+'</label></div>';
	          
	          content+='</div>';
	          content+='<div id="line_room_'+k+'" style="display:none;"><div id="label_children_'+k+'" style="display: none;">'
	          for(l = 1; l<=2;l++){
	        	  content+='<div id="line_age_select_'+l+'_for_room_'+k+'" ></div>'
	          }
	          content+='</div></div>';
          }
          getById('chambre_unique').innerHTML	=	content;
          
        return null;
//-->       
    }

var numResa	=	true;

function check_num_reservation(NumReservation){
	function setNumResa(val){
		numResa =  val;
	}
	
	function getNumResa(){
		return numResa;
	}
	
	$.post(base_url_bwfr+"check_num_reservation.jsp",{NumReservation:NumReservation},
		function success(data){ // au succès on renvoie le résultat de la requête  
        	if(trim(data)=="true"){
        		//getById('is_valid_card').value	=	"1";
        		setNumResa(true);
        	}else{
        		//alert(trim(data));
        		//getById('is_valid_card').value	=	"0";
        		setNumResa(false);
        	}
   });
   return getNumResa();
}
function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
function read_cookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function func_savoirplus_link_without_scroll(result_idhotel){
	$(document).ready(function() {
	if(($(".Searchresult #block_mini_fiche_hotel"+result_idhotel+" ul li").length)==5){
		ind_tab_tarifs = 4;
	}else{
		ind_tab_tarifs = 3;
	}
	$(".Searchresult #block_mini_fiche_hotel"+result_idhotel+" .ui-tabs-panel").hide();
	$(".Searchresult #block_mini_fiche_hotel"+result_idhotel).show('slow');
	$(".Searchresult #block_mini_fiche_hotel"+result_idhotel).tabs({ cache:true, spinner: trad_chargement+'...', selectedClass : 'active' ,active: 0,beforeLoad:function(event, ui){var $tabs = $(".Searchresult #block_mini_fiche_hotel"+result_idhotel).tabs();var active = $tabs.tabs('option', 'active');if(active==ind_tab_tarifs){$('#calAlt_'+result_idhotel).show();$('#availcal_one_month_'+result_idhotel).show();}if(active!=ind_tab_tarifs){$('#calAlt_'+result_idhotel).hide();$('#availcal_one_month_'+result_idhotel).hide();}}}); // first tab selected
	$('.Searchresult #desc'+result_idhotel).hide("slow");
	if(result_idhotel<=94000 && result_idhotel>=93000){
	if($('.Searchresult #avis_'+result_idhotel).html()==""){
		getTripWidget("fr",result_idhotel);
	}else{
		$('.Searchresult #avis_'+result_idhotel).show("slow");
	}
	}
	});
}
function func_tarifs_link_without_scroll(result_idhotel){
	$(document).ready(function() {
		var len = $(".Searchresult #block_mini_fiche_hotel"+result_idhotel+" ul li").length;
		$(".Searchresult #block_mini_fiche_hotel"+result_idhotel+" .ui-tabs-panel").hide();
		if(($(".Searchresult #block_mini_fiche_hotel"+result_idhotel+" ul li").length)==5){
			ind_tab_tarifs = 4;
		}else{
			ind_tab_tarifs = 3;
		}
	$(".Searchresult #block_mini_fiche_hotel"+result_idhotel).tabs({ cache:true, spinner: trad_chargement+'...', selectedClass : 'active',active: ind_tab_tarifs,activate:function(event, ui){if(ui.newTab.index().toString()==ind_tab_tarifs){$('#calAlt_'+result_idhotel).show();$('#availcal_one_month_'+result_idhotel).show();}if(ui.newTab.index().toString()!=ind_tab_tarifs){$('#calAlt_'+result_idhotel).hide();$('#availcal_one_month_'+result_idhotel).hide();}}}); // first tab selected
	$("#ui-tabs-"+len).show();
	var idtab = $(".Searchresult #block_mini_fiche_hotel"+result_idhotel+" .ui-tabs-panel").attr("id");
	if(typeof(idtab)!='undefined'){
		var indice = parseInt(idtab.split('-')[2]) + parseInt(ind_tab_tarifs);
		$("#ui-tabs-"+indice).show();
		
	}
	$(".Searchresult #block_mini_fiche_hotel"+result_idhotel).show('slow');
	$('.Searchresult #desc'+result_idhotel).hide("slow");
	});
}