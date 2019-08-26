function show (which) {
    var source = which.getAttribute ("href");
    var holder = document.getElementById ("picture");
    holder.setAttribute("src", source);
    var text = which.getAttribute ("title");
    var description = document.getElementById ("description");
    description.firstChild.nodeValue = text;
}

function countbody() {
    var body_element = document.getElementsByTagName ("body") [0];
    alert (body_element.childNodes.length);
}
// window.onload = countbody();

// function description(which) {
//     var text = which.getAttribute ("title");
//     var description = document.getElementById ("description");
//     description.firstChild.nodeValue = text;
// }