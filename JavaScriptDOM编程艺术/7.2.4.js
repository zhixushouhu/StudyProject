function tianjia1() {
    var biaoji = document.createElement("h1"); //创建元素节点
    var jiedian = document.getElementById("maodian");
    jiedian.appendChild(biaoji);
    var wenzi = document.createTextNode("没有绝望于黑暗，就不会忠诚于光明");
    biaoji.appendChild(wenzi);
}

// function addText() {
//     var txt = document.createElement("input");
//     txt.type = "text";
//     txt.name = "txt";
//     txt.value = "动态添加的文本框";
//     document.fm1.appendChild(txt);
// }

window.onload = function () {
    var para = document.createElement("p"); //创建元素节点
    var testdir = document.getElementById("testdiv");
    testdir.appendChild(para);
    var txt = document.createTextNode("You know that! <em>I can change your life!</em>"); //创建文本节点
    para.appendChild(txt);
}

// function tianjia2() {
//     var biaoji = document.createElement("h1");//创建元素节点
//     var jiedian = document.getElementById("maodian");
//     jiedian.appendChild(biaoji);
//     var wenzi = document.createTextNode("没有绝望于黑暗，就不会忠诚于光明");//创建文本节点
//     biaoji.appendChild(wenzi);
// }