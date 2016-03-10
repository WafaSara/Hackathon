var ancien_no = new Array();
ancien_no.push(1);
var regExpBeginning = /^\s+/;
var regExpEnd = /\s+$/;
// fonction version FR
function listRoom(no){
<!--      
		if(languageCode==null) languageCode='fr';
		switch(languageCode){
			case 'fr':trad_chambres	='Chambres';trad_chambre='Chambre';trad_Adultes	='Adulte(s)';trad_Enfants='Enfant(s)';break;
			case 'en':trad_chambres='Rooms';trad_chambre='Room';trad_Adultes='Adults';trad_Enfants='Children';break;
			case 'es':break;
			case 'it':break;
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
          content1	=	'';
          content1	=	'<div class="type_resa" style="height:16px !important;width:63px;float:left;margin-top:10px;">';
          content1	+=	'<label for="roomQuantity">'+trad_chambres+'</label><select name="roomQuantity" id="roomQuantity" onchange="listRoom(getById(\'roomQuantity\').value);eliminateRoomChild(getById(\'roomQuantity\').value);ancien_no.push(getById(\'roomQuantity\').value);">';
          for(i=1;i<=3;i++){
         	 content1	+=	' <option value="'+i+'">'+i+'</option>';
          }
          content1	+=	'</select>';
          content1	+=	'</div>';
		  //content1	+=	'</div>';
		  
          if(no>1){
          getById('chambre_unique').innerHTML	=	content;
          getById('multiple_chambres').innerHTML	=	'<div class="champ_resa" style="height:16px !important;width:63px;float:left;margin-top:10px;"><strong>Chambre 1: </strong>';
          getById('multiple_chambres').className	=	'';
          
          for(i=2;i<=no;i++){
	          toThis  =   '';
	          toThis+=    '<div class="champ_resa">';
	          toThis+=    '<strong style="width:63px;float:left;margin-top:10px;">'+trad_chambre+' '+i+': </strong>';
	          toThis+=    '<div class="type_resa">';
	          toThis+=    '<label for="adultQuantity_'+i+'">'+trad_Adultes+':</label>';
	          toThis+=    '<select name="adultQuantity_'+i+'" id="adultQuantity_'+i+'" >';
	          for(j=1;j<=4;j++){
	               toThis+=    '<option value="'+j+'">'+j+'</option>';
	          }
	          toThis+=    '</select></div>';
	          toThis+=    '<div class="type_resa">';
	          toThis+=    '<label for="childQuantity_'+i+'">'+trad_Enfants+':</label>';
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
          getById('multiple_chambres').innerHTML	=	content1;
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
  		   }else if(no==3){
  		   	$("#trans_actu").css("margin-top","96px");
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
            getById(id).style.display = 'none';
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
			case 'es':break;
			case 'it':break;
			case 'de':trad_age='Alter';break;
		}

		toreturn 	 =	'<div class="type_resa">';
		toreturn 	+=	'<label for="room_'+room+'_child_'+child+'">'+trad_age+' '+i+':</label>';
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