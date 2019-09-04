window.onload = function () {
    var oBtn = document.getElementsByTagName("button")[0];
    var oDiv = document.getElementsByClassName("test");

    oBtn.onclick = function () {
        for (var i = 0; i < oDiv.length; i++) {
            oDiv[i].style.background = "red";
        }
    }
};