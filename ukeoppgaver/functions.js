function oneWay(param){
    return param;
}

function addNumbers(x, y) {
    return x + y;
}

addNumbers(4,5); // 9

// x=2
function factorial(x){
    if (x <=1) return 1;
    return x * factorial(x-1);
}

factorial(2); // 2 * factorial(1);

//const summer = (x, y) => {return x + y;}
const summer = (x+ y) => x + y;

const polynomial = x => x*x + 2*x + 3;

const konstant = () => 42;


/**function greet(){
console.log('Hello World';)
}
greet(); **/

function greet(name){
    //console.log('Hello' + name)
    console.log(`Hello ${name}`);
}

greet('Ole');

function square(number){
    return number*number;
}

square(4); //16

let number = square(3); // number = 9
console.log(number);
console.log(square(3));

// To tall
// skal returnere det minste tallet
// compareNumbers
//Tester to tall a og b
// Hvis a > b skal du returnere b
// Hvis a < b returnerer du a


function comparenumbers(a, b){
    if (a > b) return b;
    return a;
}

function sammenl(a, b){
    return (a > b) ? b : a;
}

// Funksjon som returnerer en boolsk verdi
function isLandscape(width, height){
    return (width > height);
}

//hvis nummeret vi sender med kan deles på 3 så skal du returnere Fizz
// hvis nummeret vi sender med kan deles på 5, skal du returnere Buzz 
// hvis nummeret vi sender med kan deles 3 og 5, skal du returnere FizzBuzz
// hvis nummeret vi sender med ikke kan deles på verken 3 eller 5 så 
// skal du returnere nummeret vi sendte med
// hvis det vi sender med ikke er et nummer, skal du returnere "not a number"

function(x, y , z , a){
    if x / 3 = int return Fizz ? y / 5 = int : x 

}
function fizzbuzz(number){
    if (typeof number !== 'number'){ return 'not a number';}
    if ((number % 3 === 0) && (number % 5 === 0)) {return 'FizzBuzz'}
    if (number % 5 === 0) {return 'Buzz'} 
    if(number % 3 === 0) return 'fizz';

}