var bestli = {
	
	_baseClassName:"bestclic",
	_baseUrl:base_url_bwfr.replace("https:","http:"),
	// BE CAREFUL don't use '@' char
	_toReplace:[
		[".jsp","#."],
		["=","#_"],
		["&","#~"],
		["/","|"]
	],
	getElementsByClassName:function (className) {
		if (!document.getElementsByClassName) {
			var retour=new Array();
			var dc=document.getElementsByTagName("span");
			for(i=0;i<dc.length;i++)
			{
				var cln=dc[i].className.split(" ")
				for(j=0;j<cln.length;j++)
				{
					if (cln[j]==className)
						retour[retour.length]=dc[i];
				}
			}
			return retour;
		} else {
			return document.getElementsByClassName(className);
		}
	},
	thread:function() {
		var spn=this.getElementsByClassName(this._baseClassName);
		var i=spn.length;
		var j=0;
		while(i--){
			var curSpan=spn[i];
			var ln=document.createElement("a");
			var url=curSpan.className.split(" ");
			if (url.length >= 2){
				if(url.length>=3)
					cls	=	url[2];
				else	cls='';
				
				url=url[1];
			}
			else {url="#",cls=''};
			
			j=this._toReplace.length;
			while(j--)			
			{
				while (url.indexOf(this._toReplace[j][1]) > -1)
					url=url.replace(this._toReplace[j][1],this._toReplace[j][0]);
			}
			ln.href=this._baseUrl+url;
			ln.className=cls;
			j=curSpan.childNodes.length;while(j--)
				ln.appendChild(curSpan.childNodes[0]);			
			curSpan.parentNode.insertBefore(ln, curSpan);
			curSpan.parentNode.removeChild(curSpan);
		}

		setTimeout("bestli.thread();", 100);
	}
}
$(document).ready(function(){
bestli.thread();
});

