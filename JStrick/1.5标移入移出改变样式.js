
window.onload = function ()
{
	var oDiv = document.getElementsByClassName("test");
	oDiv.onmouseover = function ()
	{
		oDiv.className = "hover"
	};
	oDiv.onmouseout = function ()
	{
		oDiv.className = ""	
	}
};

//实验不完全，仅作保留