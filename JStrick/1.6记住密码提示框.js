
window.onload = function ()
{
	var oTips = document.getElementById("tips");
	var oLabel = document.getElementsByTagName("label")[0];	
	oLabel.onmouseover = function ()
	{
		oTips.style.display = "block"
	};
	oLabel.onmouseout = function ()
	{
		oTips.style.display = "none"	
	}
}
//弹出提示框，css可以实现，没有测试，仅作保留