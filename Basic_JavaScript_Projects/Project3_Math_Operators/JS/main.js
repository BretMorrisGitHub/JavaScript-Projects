//This function uses addition
function additionFunction(){
    var addition = 2 + 2;
    document.getElementById("Math").innerHTML = "2 + 2 = " + addition;
}
//This function uses subtraction
function subtractionFunction(){
    var subtraction = 3763 - 1775;
    document.getElementById("Math2").innerHTML = "3763 - 1775 = " + subtraction;
}
//this function uses multiplication
function multiplyFunction(){
    var multiply = 32 * 7;
    document.getElementById("Multiplication").innerHTML = "32 * 7 = " + multiply;
}
//this function uses division
function divisionFunction(){
    var division = 48 / 6;
    document.getElementById("Division").innerHTML = "48 / 6 = " + division;
}
//this function uses muliple math operators at once
function simpleMath(){
    var simpleMath = (37 + 29) * 9 / 7;
    document.getElementById("SimpleMath").innerHTML = "37 + 29 * 9 / 7 = " + simpleMath;
}
//this function uses the modulus operator to give the remainder of a division problem
function modulusFunction(){
    var modulus = 47 % 3;
    document.getElementById("Modulus").innerHTML = "47 / 3 with a remainder of " + modulus;
}
//this function turns a number negative using the negation operator
function negativeFunction(){
    var x = 10;
    document.getElementById("Negative").innerHTML = "10 as a negative is " + -x;
}
//this function uses the increment operator in increment a number by one
function incrementFunction(){
var y = 32;
y++;
document.getElementById("Increment").innerHTML = "32 incremented is " + y;
}
//this function uses the decerment operator to decerement a number by one
function decrementFunction(){
var z = 32;
z--;
document.getElementById("Decrement").innerHTML = "32 decremented is " + z;
}
//this function uses a math object to make a random number less than 100
function randomFunction(){
var R = (Math.random() * 100);
document.getElementById("Random").innerHTML = "Your random number is " + R;
}
//this function uses a math object to find the square root of a number
function squareRootFunction(){
var B = (Math.sqrt(7225));
document.getElementById("SquareRoot").innerHTML = "Square root of 7225 is " + B;
}