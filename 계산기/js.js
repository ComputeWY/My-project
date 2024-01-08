var number1 = parseFloat(prompt("숫자1"));
var number2 = parseFloat(prompt("숫자2"));
var oper = prompt("연산기호");

var result;

switch (oper) {
    case '+':
        result = number1 + number2;
        break;
    case '-':
        result = number1 - number2;
        break;
    case '*':
        result = number1 * number2;
        break;
    case '/':
        result = number1 / number2;
        break;
    default:
        console.log("유효하지않는 연산자입니다.");

}

if (result !== undefined) {
    console.log(`결과 ${result}`);
}