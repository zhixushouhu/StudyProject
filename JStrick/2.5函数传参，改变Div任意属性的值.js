function changeStyle(elem,attr,value){
    elem.style[attr] = value
}

window.onload = function () {
    oBtn = document.getElementsByTagName("button");
    oDiv = document.getElementById("test");
    oInp = document.getElementsByTagName("input");

oBtn[0].onclick = function(){
    changeStyle(oDiv,oInp[0].value,oInp[1].value)
}

oBtn[1].onclick = function(){
    oDiv.removeAttribute("style")
}

}