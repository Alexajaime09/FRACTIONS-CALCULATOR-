const calculate = () =>{
    const numerator1 = document.getElementById('numerator1').value.trim();
    const denominator1 = document.getElementById('denominator1').value.trim();
    const numerator2 = document.getElementById('numerator2').value.trim();
    const denominator2 = document.getElementById('denominator2').value.trim();
    const operation = document.getElementById('operation').value;


if(
    !numerator1 || !denominator1 || !numerator2 || !denominator2 || isNaN(numerator1) || isNaN(denominator1) || isNaN(numerator2) || isNaN(denominator2) )
    {
        document.getElementById('error').innerHTML="Please enter valid number for all fields";
        document.getElementById("result").innerHTML=" ";
        return;
    }
}

let result;
switch (operation){
    case "add":
        result = addFractions(
            parseInt(numerator1),
            parseInt(denominator2),
            parseInt(numerator2),
            parseInt(denominator2)
        );
        break;

    case"subtract":
    result = subtractFractions(
            parseInt(numerator1),
            parseInt(denominator2),
            parseInt(numerator2),
            parseInt(denominator2)
    )
    break;

    case"multiply":
    result = multiplyFractions(
        parseInt(numerator1),
        parseInt(denominator2),
        parseInt(numerator2),
        parseInt(denominator2)
    )
    break;

    case"divide":
    result = divideFractions(
        parseInt(numerator1),
        parseInt(denominator2),
        parseInt(numerator2),
        parseInt(denominator2)
    )
    break;
    default: result = "Invalid operation"
}
document.getElementById("error").innerHTML = " ";
document.getElementById("result").innerHTML = `Result: ${result}`;

const addFractions = (num1, den1, num2, den2)=>{
    const resultNumerator = num1 * den2 + num2 * den1;
    const resultDenominator = den1 * den2;
    return simplifyFraction(resultNumerator, resultDenominator)
}

const subtractFractions = (num1, den1, num2, den2)=>{
    const resultNumerator = num1 * den2 - num2 * den1;
    const resultDenominator = den1 * den2;
    return simplifyFraction(resultNumerator, resultDenominator)}
;
const multiplyFractions = (num1, den1, num2, den2)=>{
    const resultNumerator = num1 * num2 
    const resultDenominator = den1 * den2;
    return simplifyFraction(resultNumerator, resultDenominator)};

    const divideFractions = (num1, den1, num2, den2)=>{
        const resultNumerator = num1 * den2 
        const resultDenominator = den1 * num2;
        return simplifyFraction(resultNumerator, resultDenominator)};

    const simplifyFraction = (numerator, denominator)=>
    {
        const gcd = findGCD(numerator, denominator);
        return `${numerator / gcd} ${denominator / gcd}`}

    const findGCD = (a,b) =>(b === 0 ? a : findGCD(b,a%b))