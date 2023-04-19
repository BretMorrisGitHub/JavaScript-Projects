function myFunction(){ //This line is naming a function 'myFunction'
    var sentence = "I am learning"; //This line is creating a variable with a string as its value
    sentence += " a lot from this book!"; //This line concatenates two strings together with the += operator
    document.getElementById("example").innerHTML = sentence;
    //This line above tells to get element by the specified id, then to change an html element, and to print the 
    //variables value 'sentence'
}

function addFunction(){
    
    var sum = 7+17;
    document.getElementById("example2").innerHTML = sum;
}

