
//换肤按键必须刷新！！！！！！

window.onload = function () {
    var oLink = document.getElementsByTagName("link")[0];
    var oSkin = document.getElementsByTagName('button');

    for (var i = 0; i < oSkin.length; i++) {

        oSkin[i].onclick = function ()
		{
			for(var p in oSkin) oSkin[p].className = "";
			this.className = "current";
			oLink['href'] = this.id + ".css";				
		}	
	}
	
};




// window.onload = function ()
// {
// 	var oLink = document.getElementsByTagName("link")[0];
// 	var oSkin = document.getElementById("skin").getElementsByTagName("li");
	
// 	for(var i = 0; i< oSkin.length; i++)
// 	{		
// 		oSkin[i].onclick = function ()
// 		{
// 			for(var p in oSkin) oSkin[p].className = "";
// 			this.className = "current";
// 			oLink['href'] = this.id + ".css";				
// 		}	
// 	}
	
// };
