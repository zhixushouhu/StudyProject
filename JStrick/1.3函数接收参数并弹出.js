var shuchu = function (a) {
    alert(a.value);
};

window.onload = function () {

    var oBtn = document.getElementsByTagName('button');
    var oVal = document.getElementsByTagName('input');

    oBtn[0].onclick = function () {
        shuchu(oVal[0])
    }
};

//获取节点可以不指定序号，但是输出时必须指定序号


// var myFn = function(a, b)
// {
// 	alert(a.value);
// 	alert(b.value)	
// };
// window.onload = function ()
// {
// 	var oInput = document.getElementsByTagName("input");
// 	var oBtn = document.getElementsByTagName("button")[0];
// 	oBtn.onclick = function()
// 	{
// 		myFn(oInput[0],oInput[1])
// 	}
// };
