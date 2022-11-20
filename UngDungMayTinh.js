function doSth(input)
    {
        let num1 = +document.getElementById('number1').value;
        let num2 = +document.getElementById('number2').value;
        let output;
        switch(input)
            {
                case "addition":
                    output = num1 + num2;
                    break;
                case "subtraction":
                    output=num1-num2;
                    break;
                case "multiplication":
                    output = num1 * num2;
                    break;
                case "division":
                    output = num1 / num2;
            };
        document.getElementById('result').innerText = "Result " + input + ': ' + output;
    };