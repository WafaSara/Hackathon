/*
 * tagContainer Generator v2.1.6 Beta
 * Copyright Tag Commander
 * http://www.tagcommander.com/
 * Generated: 2013-11-22 19:49:35 Europe/Paris
 * ---
 * Version	: 2.00
 * IDTC 	: 8
 * IDS		: 492
 */
/*!compressed by YUI*/ var T=true,F=false,_U="undefined",_N=null;if(typeof tC==_U){if(typeof document.domain==_U||typeof document.referrer==_U){document=window.document}if(typeof console==_U||typeof console.log==_U){var console={log:function(){},error:function(){},warn:function(){}}}(function(n,l){var k,s,z=n.document,a=n.location,e=n.navigator,y=n.tC,w=n.$,J=Array.prototype.push,b=Array.prototype.slice,v=Array.prototype.indexOf,g=Object.prototype.toString,j=Object.prototype.hasOwnProperty,p=String.prototype.trim,c=function(L,M){return new c.fn.init(L,M,k)},C=/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,r=/\S/,u=/\s+/,d=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,x=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,m=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,E=/^[\],:{}\s]*$/,A=/(?:^|:|,)(?:\s*\[)+/g,I=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,G=/"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,K=/^-ms-/,q=/-([\da-z])/gi,H=function(L,M){return(M+"").toUpperCase()},f={};c.fn=c.prototype={constructor:c,init:function(L,O,R){var N,P,M,Q;if(!L){return this}if(L.nodeType){this.context=this[0]=L;this.length=1;return this}if(typeof L==="string"){if(L.charAt(0)==="<"&&L.charAt(L.length-1)===">"&&L.length>=3){N=[_N,L,_N]}else{N=x.exec(L)}if(N&&(N[1]||!O)){if(N[1]){O=O instanceof c?O[0]:O;Q=(O&&O.nodeType?O.ownerDocument||O:z);L=c.parseHTML(N[1],Q,T);if(m.test(N[1])&&c.isPlainObject(O)){this.attr.call(L,O,T)}return c.merge(this,L)}else{P=z.getElementById(N[2]);if(P&&P.parentNode){if(P.id!==N[2]){return R.find(L)}this.length=1;this[0]=P}this.context=z;this.selector=L;return this}}else{if(!O||O.tC){return(O||R).find(L)}else{return this.constructor(O).find(L)}}}else{if(c.isFunction(L)){return R.ready(L)}}if(L.selector!==l){this.selector=L.selector;this.context=L.context}return c.makeArray(L,this)},each:function(M,L){return c.each(this,M,L)},ready:function(L){c.ready.promise(L);return this}};c.fn.init.prototype=c.fn;c.extend=c.fn.extend=function(){var V,N,L,M,R,S,Q=arguments[0]||{},P=1,O=arguments.length,U=F;if(typeof Q==="boolean"){U=Q;Q=arguments[1]||{};P=2}if(typeof Q!=="object"&&!c.isFunction(Q)){Q={}}if(O===P){Q=this;--P}for(;P<O;P++){if((V=arguments[P])!=_N){for(N in V){L=Q[N];M=V[N];if(Q===M){continue}if(U&&M&&(c.isPlainObject(M)||(R=c.isArray(M)))){if(R){R=F;S=L&&c.isArray(L)?L:[]}else{S=L&&c.isPlainObject(L)?L:{}}Q[N]=c.extend(U,S,M)}else{if(M!==l){Q[N]=M}}}}}return Q};c.extend({internalvars:{},internalFunctions:{},privacyVersion:"",containerVersion:"2.00",lT:[],ssl:(("https:"==z.location.protocol)?"https://manager.":"http://redirect492."),randOrd:function(){return(Math.round(Math.random())-0.5)}});c.extend({inArray:function(P,M,O){var L,N=Array.prototype.indexOf;if(M){if(N){return N.call(M,P,O)}L=M.length;O=O?O<0?Math.max(0,L+O):O:0;for(;O<L;O++){if(O in M&&M[O]===P){return O}}}return -1},isFunction:function(L){return c.type(L)==="function"},isArray:Array.isArray||function(L){return c.type(L)==="array"},isWindow:function(L){return L!=_N&&L==L.window},isNumeric:function(L){return !isNaN(parseFloat(L))&&isFinite(L)},type:function(L){return L==_N?String(L):f[g.call(L)]||"object"},each:function(Q,R,N){var M,O=0,P=Q.length,L=P===l||c.isFunction(Q);if(N){if(L){for(M in Q){if(R.apply(Q[M],N)===F){break}}}else{for(;O<P;){if(R.apply(Q[O++],N)===F){break}}}}else{if(L){for(M in Q){if(R.call(Q[M],M,Q[M])===F){break}}}else{for(;O<P;){if(R.call(Q[O],O,Q[O++])===F){break}}}}return Q},log:function(L,M){try{if(c.getCookie("tCdebugLib")){console[M?M:"log"](L)}}catch(N){}}});c.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(M,L){f["[object "+L+"]"]=L.toLowerCase()});k=c(z);var h={};function D(M){var L=h[M]={};c.each(M.split(u),function(O,N){L[N]=T});return L}c.buildFragment=function(O,P,M){var N,L,Q,R=O[0];P=P||z;P=!P.nodeType&&P[0]||P;P=P.ownerDocument||P;if(O.length===1&&typeof R==="string"&&R.length<512&&P===z&&R.charAt(0)==="<"&&!rnocache.test(R)&&(c.support.checkClone||!rchecked.test(R))&&(c.support.html5Clone||!rnoshimcache.test(R))){L=true;N=jQuery.fragments[R];Q=N!==l}if(!N){N=P.createDocumentFragment();c.clean(O,P,N,M);if(L){c.fragments[R]=Q&&N}}return{fragment:N,cacheable:L}};var t=a.hostname,o=t.split("."),B="^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]).){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$";if(o.length<2||t.match(B)){c.maindomain=t}else{c.maindomain=o[o.length-2]+"."+o[o.length-1]}n.tC=c})(window);function createSafeFragment(a){var c=nodeNames.split("|"),b=a.createDocumentFragment();if(b.createElement){while(c.length){b.createElement(c.pop())}}return b}}tC.extend({isCurrentVersion:function(){var a=tC.getCookie("tc_mode_test"),b="testModeIncludeReplaceThisByTrue";return a!="1"||(a=="1"&&b=="true")}});tC.extend({pixelTrack:{add:function(a,b,f){f=f||0;b=b||"img";if(typeof document.body==_U&&f<20){f++;setTimeout(function(){tC.pixelTrack.add(a,b,f)},100);return}var d=document.createElement(b);d.src=a;d.width=1;d.height=1;if(b=="iframe"){d.style.display="none"}document.body.appendChild(d);return d}}});tC.extend({tc_hdoc:F,domain:function(){this.tc_hdoc=document;try{try{this.tc_hdoc=top.document}catch(d){this.tc_hdoc=document}var a=typeof this.tc_hdoc.domain!=_U?this.tc_hdoc.domain.toLowerCase().split("."):F,g="^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]).){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$";if(a.length<2||this.tc_hdoc.domain.match(g)){return""}else{var f=a[a.length-3],c=a[a.length-2],b=a[a.length-1];if(c=="co"||c=="com"){return"."+f+"."+c+"."+b}else{return"."+c+"."+b}}}catch(d){tC.log(["tC.domain error : ",d],"warn")}}});tC.domain();var tc_domain=tC.domain,tc_hdoc=tC.domain.h_doc;tC.extend({removeCookie:function(a){document.cookie=a+"=; expires=Thu, 01 Jan 1970 00:00:01 GMT;"},setCookie:function(c,e,a,h,d,g){if(!d){d=tC.domain()}var b=new Date();b.setTime(b.getTime());if(a){a=a*1000*60*60*24}var f=new Date(b.getTime()+(a));document.cookie=c+"="+escape(e)+((a)?";expires="+f.toGMTString():"")+((h)?";path="+h:";path=/")+((d)?";domain="+d:"")+((g)?";secure":"")},getCookie:function(a){var d=document.cookie.split(";"),b=cookie_name=cookie_value="",c=F;for(i=0;i<d.length;i++){b=d[i].split("=");cookie_name=b[0].replace(/^\s+|\s+$/g,"");if(cookie_name==a){c=T;if(b.length>1){cookie_value=unescape(b[1].replace(/^\s+|\s+$/g,""))}return cookie_value;break}b=_N;cookie_name=""}if(!c){return""}}});tc_getCookie=tC.getCookie;tc_setCookie=tC.setCookie;tC.extend({hitCounter:function(){if(Math.floor(Math.random()*parseInt(1000))==0){tC.pixelTrack.add("//manager.tagcommander.com/utils/hit.php?id=8&site=492&version=2.00&frequency=1000&position="+tc_container_position+"&rand="+Math.random())}}});var tc_container_position=(typeof tc_container_position!=="undefined")?tc_container_position:0;tc_container_position++;tC.hitCounter();tc_hitCounter=tC.hitCounter;tC.extend({script:{add:function(d,f,c){var a=(document.getElementsByTagName("body")[0]||document.getElementsByTagName("script")[0].parentNode),b=document.createElement("script");b.type="text/javascript";b.async=true;b.src=d;b.charset="utf-8";if(a){if(f){if(b.addEventListener){b.addEventListener("load",function(){f()},false)}else{b.onreadystatechange=function(){if(b.readyState in {loaded:1,complete:1}){b.onreadystatechange=null;f()}}}}if(c&&typeof c=="number"){setTimeout(function(){if(a&&b.parentNode){a.removeChild(b)}},c)}a.insertBefore(b,a.firstChild)}else{tC.log("tC.script error : the element <script> or <body> is not found ! the file "+d+" is not implemented !","warn")}}}});tC492_8=tC;
if(typeof tc_vars=='undefined')var tc_vars=[];(function(){var l='order_booking_number|order_discount_code|order_time-to-book|order_points_number|xiti_xtn2|xiti_xtpage|xiti_page_type|county|city|district|arrival_date|departure_date|quantity_rooms|quantity_adults|quantity_childrens|list_availability_number|hotel_range|order_idcart|order_prop_region|order_prop_state|order_prop_county|order_prop_district|order_prop_range|order_card_adress|order_optin_rewards|order_optin_newsletter|gift_name|gift_category|gift_points|gift_value|event_name|event_region|event_city|golf_news|rewards_regist_birthdate|rewards_regist_profession|rewards_regist_smartphone|rewards_regist_golf|rewards_regist_opt-in|country|region|state|promotion_code|time-to-look|env_template|env_work|env_channel|env_language|env_country|env_dnt|user_id|user_email|user_email_optin|user_gender|user_category|user_recency|user_frequency|user_amount|user_smb|logged|user_age|user_city|user_country|user_postalcode|reward_id|page_cat1|page_cat2|page_name|page_error|order_timestamp|order_amount_ati|order_discount_ati|order_amount_tf|order_discount_tf|order_tax|order_currency|order_rate_id|order_newcustomer|order_payment_methods|order_status|order_prop_id|order_prop_name|order_prop_city|order_prop_postal_code|order_prop_country|order_prop_lat|order_prop_long|order_prop_rating|order_prop_stars|order_prop_services|order_departure_date|hotel_arrival_date|order_nights_number|order_persons_numbers|order_iata_code|order_prop_url_page|order_prop_url_picture|order_prop_breadcrumb_id|order_prop_breadcrumb_label|order_rooms_number|order_rooms|hotel_rate_id|hotel_prop_id|hotel_name|hotel_city|hotel_postal_code|hotel_country|hotel_lat|hotel_long|hotel_unitprice_ati|hotel_discount_ati|hotel_unit_price_tf|hotel_discount_tf|hotel_currency|hotel_url_page|hotel_url_picture|hotel_breadcrumb_id|hotel_breadcrumb_label|hotel_rating|hotel_prop_stars|hotel_services|hotel_rooms|list_destination|list_departure_date|list_arrival_date|list_avantage_code|list_rate_id|list_page_number|list_results_number|list_fllters|list_hotels'.split('|');for(k in l){if(!tc_vars.hasOwnProperty(l[k])){tc_vars[l[k]]='';}}})();

/*DYNAMIC JS BLOCK 1*/


/*END DYNAMIC JS BLOCK 1*/

/*CUSTOM_JS_BLOCK1*/

/*END_CUSTOM_JS_BLOCK1*/
var tc_logs_tags=[],tc_id_container=8,tc_array_launched_tags_8=Object.prototype.toString.call(tc_array_launched_tags_8)=="[object Array]"?tc_array_launched_tags_8:[],tc_array_launched_tags_keys_8=Object.prototype.toString.call(tc_array_launched_tags_keys_8)=="[object Array]"?tc_array_launched_tags_keys_8:[];var tc_id_container='8';var tc_ssl_test_mode=(("https:"==document.location.protocol)?"https://":"http://");var tc_mode_test=(function(){var tc_a=document.cookie.split(';');for(tc_i=0;tc_i<tc_a.length;tc_i++){var tc_b=tc_a[tc_i].split('=');var tc_c=tc_b[0].replace(/^\s+|\s+$/g,'');if(tc_c=="tc_mode_test"){if(tc_b.length>1){return unescape(tc_b[1].replace(/^\s+|\s+$/g,''));}return null;}}return null;})();if(tc_mode_test==1){(function(){var tc_testmodescriptload=document.createElement('script');tc_testmodescriptload.type='text/javascript';tc_testmodescriptload.src=tc_ssl_test_mode+'manager.tagcommander.com/utils/test_mode_include.php?id=8&site=492&type=load&rand='+Math.random()+'&version=';(document.getElementsByTagName('body')[0]||document.getElementsByTagName('head')[0]||document.getElementsByTagName('script')[0].parentNode).appendChild(tc_testmodescriptload);})();}else{
/*VARIABLES_BLOCK*/

var tc_array_url_vars=new Array();var temp_location=document.location.href.split('?').slice(1).join('?');if(temp_location.indexOf('#')>0){temp_location=temp_location.split('#').reverse().slice(1).reverse().join('#');}
temp_location=temp_location.replace(/%3d/g,'=');var temp_array=temp_location.split('&');for(var i=0;i<temp_array.length;i++){temp_array2=temp_array[i].split('=');tc_array_url_vars[temp_array2[0]]=temp_array2[1];}
var tc_title=document.title;var tc_pathname=window.location.pathname;var tc_random_tmp=new String(Math.random());var tc_random=tc_random_tmp.substring(2,11);var tc_url=document.location.href;var tc_referrer=document.referrer;var tc_url_1_tmp=document.location.href.split('?');var tc_url_1_tmp2=tc_url_1_tmp[0].split('/');var tc_url_1=tc_url_1_tmp2[3];var tc_url_2_tmp=document.location.href.split('?');var tc_url_2_tmp2=tc_url_2_tmp[0].split('/');var tc_url_2=tc_url_2_tmp2[4];var tc_url_3_tmp=document.location.href.split('?');var tc_url_3_tmp2=tc_url_3_tmp[0].split('/');var tc_url_3=tc_url_3_tmp2[5];var temp_tc_url_no_query=document.location.href.split('?');var tc_url_no_query=temp_tc_url_no_query[0];var temp_tc_url_query_string=document.location.href.split('?');temp_tc_url_query_string.shift();tc_url_query_string=temp_tc_url_query_string.join('?');var tc_order_eresa_id=tc_vars["order_id"];if(tc_order_eresa_id=="")
{tc_order_eresa_id=tc_vars["ebooking_id"];}
var tc_RecupParam;function GetUrlParam(paramName)
{var oRegex=new RegExp('[\?&]'+paramName+'=([^&]+)','i');var oMatch=oRegex.exec(window.top.location.search);if(oMatch&&oMatch.length>1)
return decodeURIComponent(oMatch[1]);else
return;}
if(typeof(GetUrlParam("ref"))!="undefined"){tc_RecupParam=GetUrlParam("ref");}
else{tc_RecupParam="vOriginal";}
var AT_user_category='';switch(tc_vars["user_category"].toString().toLowerCase()){case"gold":AT_user_category="1";break;case"platinium":AT_user_category="2";break;case"diamond":AT_user_category="3";break;default:AT_user_category="";}
var AT_order_status='';switch(tc_vars["order_status"].toString().toLowerCase()){case"not yet confirmed":AT_order_status="1";break;case"canceled":AT_order_status="2";break;case"validated":AT_order_status="3";break;case"back":AT_order_status="4";break;default:AT_order_status="";}
var AT_order_payments_methods='';switch(tc_vars["order_payment_methods"].toString().toLowerCase()){default:AT_order_payments_methods="";}
var AT_xtsite='';switch(tc_vars["env_work"].toString().toLowerCase()){case"prod":AT_xtsite="532314";break;case"preprod":AT_xtsite="532925";break;default:AT_xtsite="";}

/*END_VARIABLES_BLOCK*/


/*DYNAMIC JS BLOCK 2*/


/*END DYNAMIC JS BLOCK 2*/

/*CUSTOM_JS_BLOCK2*/

/*END_CUSTOM_JS_BLOCK2*/
tc_logs_tags.push({"label":"Analyzer - Plugins","id":"231","position":"1"});var tc_inclusion_xtplug_1="var xtpif=\"0\",xtpim=\"\",xtpiq=\"\",xtpir=\"\",xtpis=\"\";\n"+"var xtpos=0;\n"+"xn=navigator.plugins;\n"+"if (xn && xn.length) {xnok = true;}\n"+"else { xnok = false;\n"+"}\n"+"if (!xnok){\n"+"   chaine = '<SC'+'RIPT LANGUAGE=\"VBScript\">\\n';\n"+"   chaine += 'On error resume next\\n';\n"+"   chaine += '<\/script> \\n';\n"+"   document.write(chaine);\n"+"}\n"+"if (xnok) {\n"+"   for (var xi=0;xi<xn.length;xi++) {\n"+"   if ((xn[xi].name.indexOf('Flash Player')!=-1)||(xn[xi].name.indexOf('Shockwave Flash')!=-1)){\n"+"      xtpif = \"1\"; \n"+"      if (xn[xi].description.split('Shockwave Flash ')[1].length){\n"+"         xtpos = xn[xi].description.split('Shockwave Flash ')[1].indexOf('.')+2;\n"+"         xtpif = xn[xi].description.split('Shockwave Flash ')[1].substring(0,(xtpos>1)?xtpos:3);\n"+"      }\n"+"   }\n"+"   }\n"+"}\n"+"else if (window.ActiveXObject) {\n"+"   for (var xi=0;xi<20;xi++) {\n"+"      try {if (eval(\"new ActiveXObject('ShockwaveFlash.ShockwaveFlash.\"+xi+\"');\")) {xtpif = xi;} } catch(e) {};\n"+"   }\n"+"}\n"+"if (window.xtparam!=null){window.xtparam+=\"&pif=\"+xtpif;}\n"+"else{window.xtparam = \"&pif=\"+xtpif;}";}

//----------------------------------------------------




//----

function isSampled8(id_site,id_rule,sampler,flag_session){var cookie_name='tc_sample_'+id_site+'_'+id_rule;var tc_date=new Date();tc_date.setTime(tc_date.getTime()+(3600*1000*24*365));var isSampled=(function(){var tc_a=document.cookie.split(';');for(tc_i=0;tc_i<tc_a.length;tc_i++){var tc_b=tc_a[tc_i].split('=');var tc_c=tc_b[0].replace(/^\s+|\s+$/g,'');if(tc_c==cookie_name){if(tc_b.length>1){return unescape(tc_b[1].replace(/^\s+|\s+$/g,''));}return null;}}return null;})();if(isSampled==null){if(Math.floor(Math.random()*sampler)==0){if(flag_session==1){document.cookie=cookie_name+'=1;path=/';}else{document.cookie=cookie_name+'=1;expires='+tc_date.toGMTString()+';path=/';}
isSampled=1;}else{if(flag_session==1){document.cookie=cookie_name+'=0;path=/';}else{document.cookie=cookie_name+'=0;expires='+tc_date.toGMTString()+';path=/';}
isSampled=0;}}
return isSampled;}
var tc_ssl_test_mode=(("https:"==document.location.protocol)?"https://":"http://");var tc_mode_test=(function(){var tc_a=document.cookie.split(';');for(tc_i=0;tc_i<tc_a.length;tc_i++){var tc_b=tc_a[tc_i].split('=');var tc_c=tc_b[0].replace(/^\s+|\s+$/g,'');if(tc_c=="tc_mode_test"){if(tc_b.length>1){return unescape(tc_b[1].replace(/^\s+|\s+$/g,''));}return null;}}return null;})();if(tc_mode_test==1){(function(){var tc_testmodescriptexec=document.createElement('script');tc_testmodescriptexec.type='text/javascript';tc_testmodescriptexec.src=tc_ssl_test_mode+'manager.tagcommander.com/utils/test_mode_include.php?id=8&site=492&type=exec&rand='+Math.random()+'&version=2.00';(document.getElementsByTagName('body')[0]||document.getElementsByTagName('head')[0]||document.getElementsByTagName('script')[0].parentNode).appendChild(tc_testmodescriptexec);})();(function(){setTimeout(function(){if(typeof top.tc_count!=='undefined'){top.tc_count++;}else{top.tc_count=1;}var tc_newscript=document.createElement('script');tc_newscript.type='text/javascript';tc_newscript.src=tc_ssl_test_mode+'manager.tagcommander.com/utils/livetest/bookmarklet.php?r='+Math.random()+'&nb='+top.tc_count+'&container=492!8&version=2.00';(document.getElementsByTagName('body')[0]||document.getElementsByTagName('head')[0]||document.getElementsByTagName('script')[0].parentNode).appendChild(tc_newscript);},1000);})();}else{tc_array_launched_tags_8.push('Analyzer - Plugins');tc_array_launched_tags_keys_8.push('231');eval(tc_inclusion_xtplug_1);}
function tc_ajx_exec_8(tc_vars_ajax){}
function tc_events_8(tc_elt,tc_id_event,tc_array_events){tc_array_events["id"]=tc_id_event;}