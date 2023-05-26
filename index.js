var nbrBtns = document.querySelectorAll("button").length;

for (let i = 0; i < nbrBtns; i++) {
    document.querySelectorAll("button")[i].addEventListener("click",
    function () {
        var btn = this.innerHTML;

        if (btn === "C") {
            document.querySelector("h1").innerHTML = "";
        } else if (btn === "=") {
            var screenValue = document.querySelector("h1").innerHTML;
            calcAnswer (screenValue);
        } else if (btn === "()" || btn === "+/-") {
            var screenValue = document.querySelector("h1").innerHTML;
        } else {
            buildScreen(btn);
        }        
        
    });
}

function buildScreen (btn) {
    var screenValue = document.querySelector("h1").innerHTML;
    screenValue = screenValue + btn;
    document.querySelector("h1").innerHTML = screenValue;
}

function calcAnswer (screenValue) {
    var operands = [];
    var operation = "";
    var digit = "";
    var tempHold = "";
    var counter = 0;
    var answer = 0;

    for (let i = 0; i < screenValue.length; i++) {
        digit = screenValue.slice(i,i+1);
        switch (digit) {
            case "+" :
                operation = "+";
                operands[counter] = tempHold;
                tempHold = "";
                counter+= 1;
                break;
            case "-" :
                operation = "-";
                operands[counter] = tempHold;
                tempHold = "";
                counter+= 1;
                break;
            case "*" :
                operation = "*";
                operands[counter] = tempHold;
                tempHold = "";
                counter+= 1;
                break;
            case "/" :
                operation = "/";
                operands[counter] = tempHold;
                tempHold = "";
                counter+= 1;
               break;
            case "%" :
                operation = "%";
                operands[counter] = tempHold;
                tempHold = "";
                counter+= 1;
                break;
            default:
                tempHold+= digit;
        }
    }
    
    operands[counter] = tempHold;
    if (operation === "+") {
        answer = Number(operands[0]) + Number(operands[1]);
    } else if (operation === "-") {
        answer = Number(operands[0]) - Number(operands[1]);
    } else if (operation === "*") {
        answer = Number(operands[0]) * Number(operands[1]);
    } else if (operation === "/") {
        answer = Number(operands[0]) / Number(operands[1]);
    } else if (operation === "%") {
        answer = (Number(operands[0]) / 100) * Number(operands[1]);
    }
    
    document.querySelector("h1").innerHTML = answer;
}

