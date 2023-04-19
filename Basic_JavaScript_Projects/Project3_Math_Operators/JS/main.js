function additionFunction(){
    var addition = 2 + 2;
    document.getElementById("Math").innerHTML = "2 + 2 = " + addition;
}

function subtractionFunction(){
    var subtraction = 3763 - 1775;
    document.getElementById("Math2").innerHTML = "3763 - 1775 = " + subtraction;
}

function multiplyFunction(){
    var multiply = 32 * 7;
    document.getElementById("Multiplication").innerHTML = "32 * 7 = " + multiply;
}

function divisionFunction(){
    var division = 48 / 6;
    document.getElementById("Division").innerHTML = "48 / 6 = " + division;
}

function simpleMath(){
    var simpleMath = (37 + 29) * 9 / 7;
    document.getElementById("SimpleMath").innerHTML = "37 + 29 * 9 / 7 = " + simpleMath;
}

function modulusFunction(){
    var modulus = 47 % 3;
    document.getElementById("Modulus").innerHTML = "47 / 3 with a remainder of " + modulus;
}

function negativeFunction(){
    var x = 10;
    document.getElementById("Negative").innerHTML = "10 as a negative is " + -x;
}

function incrementFunction(){
var y = 32;
y++;
document.getElementById("Increment").innerHTML = "32 incremented is " + y;
}

function decrementFunction(){
var z = 32;
z--;
document.getElementById("Decrement").innerHTML = "32 decremented is " + z;
}

function randomFunction(){
var R = (Math.random() * 100);
document.getElementById("Random").innerHTML = "Your random number is " + R;
}

function squareRootFunction(){
var B = (Math.sqrt(7225));
document.getElementById("SquareRoot").innerHTML = "Square root of 7225 is " + B;
}