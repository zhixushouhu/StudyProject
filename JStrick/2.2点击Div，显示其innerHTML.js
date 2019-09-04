
window.onload = function ()
{
	var oDiv = document.getElementById("outer").getElementsByTagName("div");
	for(var i = 0; i < oDiv.length; i++)
	{
		oDiv[i].onclick = function ()
		{
			alert(this.innerHTML)	
		}	
	}
}

//仅作保留