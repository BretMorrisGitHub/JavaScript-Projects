function Call_loop(){
    var digit = "";
    var X = 1;
    while(X<11){
        digit += "<br>" + X;
        X++;
        
    }
    document.getElementById("Loop").innerHTML = digit;
}//this function uses a while loop to increase the value of a variable and 
//print it, until it reaches a set value.

var Instruments = ["Bassoon", "Clarinet", "Tuba", "Saxophone", "Harmonica"];
var Content = "";
var Y;
function for_Loop(){
    for(Y=0; Y<Instruments.length; Y++){
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}//this function uses a for loop to list off the values of a list based on the 
//index number defined by a variable

function array_Function(){
    let computer_pics = [];
    computer_pics[0]= "Dell";
    computer_pics[1]= "iMac";
    computer_pics[2]= "Razer";
    computer_pics[3]= "HP";
    computer_pics[4]= "ASUS";
    document.getElementById("Array").innerHTML = "In this picture, the brand of computer is " + computer_pics[3] + ".";
}//this function defines an array, and prints a specific value from the array

function constant_function(){
    const Computer = {brand: "HP", RAM: "16GB", CPU: "4GHZ", SSD: "1TB"};
    Computer.color = "white";
    Computer.price = "$1000";
    Computer.price = "On Sale! $900";
    document.getElementById("Constant").innerHTML = "This " + Computer.brand + " computer costs " + Computer.price + ".";
}//this function uses the 'const' keyword to set and object with properties

function myFunc(){
    return Math.PI;
}//this function uses the return keyword to end the function, and return a value
//specified 
document.getElementById("PI").innerHTML = myFunc();

let computer = {
    brand: "HP ",
    CPU: "4GHz ",
    RAM: "16GB",
    SSD: "1TB",
    Color: "White",
    description : function(){
        return "This computer is a " + this.Color + ", " + this.brand + " computer with " + this.RAM + " of RAM.";
    }
};//this section of code uses the 'let' keyword to define an object and a method
document.getElementById("Computer").innerHTML = computer.description();

let text = "";
for (let A = 0; A < 10; A++){
    if (A === 10) {continue; }
    text += "The number is " + A + "<br>";
}
document.getElementById("Break").innerHTML = text;
//this section uses a for loop with a 'break' keyword to end the loop when a 
//certain condition is met