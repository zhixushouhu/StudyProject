var num1=num2 = 0;
outermost:
    for (var i = 0; i < 10; i++) {
        num1++;
        for (var j = 0; j < 10; j++) {
            
            if (i == 5 && j == 5) {
                break outermost;
                
            }
            num2++;
            document.write(i +"\n"+"\n", j+"\n"+"\n", num1 +"\n"+"\n", num2 + "<br />");
        }
    }

alert(num2);