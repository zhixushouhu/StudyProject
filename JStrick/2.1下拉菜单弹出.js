
window.onload = function ()
{
	var oBtn = document.getElementsByTagName("button")[0];
	var oIme = document.getElementById("ime");
	var oClose = document.getElementById("close"); 	
	var style = oIme.style;
	oBtn.onclick = function()
	{		
		style.display = style.display == "block" ? "none" : "block"
	};
	oClose.onclick = function()
	{
		style.display = "none"	
	}
}


//css可实现，仅作保留