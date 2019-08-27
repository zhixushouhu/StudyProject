var paras = document.getElementsByTagName("p");
for (var i=0; i<paras.length; i++){
    paras[i].onclick = function hua() {
        alert("hello");
        alert(i);
    }
}

闭包，i永远等于最大值

function shuo() {
    alert("hello");
}

// var paras = document.getElementsByTagName("p");
// var i=0;
// if (i<paras.length){
//     paras[i].onclick = function hua() {
//         alert("hello");
//         alert(i);
//     }
// }