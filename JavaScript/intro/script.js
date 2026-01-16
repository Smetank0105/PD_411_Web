// JavaScript source code
function Factorial(n) {
    let f = BigInt(1);
    //document.write("<pre>");
    for (let i = 1n; i <= n; i++) {
        f *= i;
        //document.writeln(`${i}! = ${f};`);
    }
    //document.write("</pre>");
    return f;
}

function Factorial2() {
    let source_input_field = document.getElementById("factorial-source");
    let source_value = source_input_field.value;
    let factorial_result = document.getElementById("factorial-result");
    factorial_result.innerHTML = Factorial(source_value);
}

function Power() {
    let digit_input_field = document.getElementById("power-source-digit");
    let exp_input_field = document.getElementById("power-source-exp");
    let digit_value = digit_input_field.value;
    let exp_value = exp_input_field.value;
    let result = document.getElementById("power-result");
    result.innerHTML = (digit_value ** exp_value);
}

function Fibonacci() {
    let fibonacci_input = document.getElementById("fibonacci-source");
    let limit = fibonacci_input.value;
    let fibonacci_result = document.getElementById("fibonacci-result");
    const query = [0, 1];
    while (true) {
        const len = query.length;
        temp = query[len - 1] + query[len - 2];
        if (temp <= limit) query.push(temp);
        else break;
    }
    fibonacci_result.innerHTML = query.join(',');
}