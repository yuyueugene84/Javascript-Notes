var readline = require('readline');

var r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var question = "Please input your operation: " + 
               "Add: + | Substract: - | Multiply: * | Divide: / | Power: ^\n"

r1.question(question, function(operation){
    r1.question('Please enter two numbers you want to calculate: ', function(operands){
        var args = operands.split(" ");
        var arg1 = parseFloat(args[0]);
        var arg2 = parseFloat(args[1]);
        var answer = calculate(operation, arg1, arg2);

        console.log(arg1 + operation.toString() + arg2, '=', answer.toString());
        r1.close();
    })
});

function calculate(operation, arg1, arg2){
    var answer;
    switch(operation){
        case '+':
            answer = arg1 + arg2;
            break;
        case '-':
            answer = arg1 - arg2;
            break;
        case '*':
            answer = arg1 * arg2;
            break;
        case '/':
            answer = arg1 / arg2;
            break;
        case '^':
            answer = arg1 ** arg2;
            break;
    }

    return answer
}
