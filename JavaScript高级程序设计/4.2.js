var color = "blue";

function changeColor(){
    if (color === "blue"){
        color = "red";
    }else{
        color = green;
    }
}

changeColor();

alert(color);


var values = [0,-1,1,5,10,15,55,-10]

function compare(value1,value2) {
    if (value1 < value2){
        return -2;
    } else if (value1 > value2) {
        return 2;
    } else {
        return 0;
    }
}

values.sort(compare);
alert(values);

