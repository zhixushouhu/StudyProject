
window.onload = function ()
{
	var oWin = document.getElementById("win");
	var oLay = document.getElementById("overlay");	
	var oBtn = document.getElementsByTagName("button")[0];
	var oClose = document.getElementById("close");
	oBtn.onclick = function ()
	{
		oLay.style.display = "block";
		oWin.style.display = "block"	
	};
	oClose.onclick = function ()
	{
		oLay.style.display = "none";
		oWin.style.display = "none"	
	}
};

//仅作保留