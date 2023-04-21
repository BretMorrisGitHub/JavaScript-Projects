function concatFunc(){
    var part1 = "This is ";
    var part2 = "my sentence ";
    var part3 = "using the concatenate ";
    var part4 = "operator to combine ";
    var part5 = "sentences.";
    var complete_sentence = part1.concat(part2, part3, part4, part5);
    document.getElementById("string").innerHTML = complete_sentence;
}//this function makes use of the 'concat' method to combine all the defined 
//variables into one complete variable

function sliceFunc(){
    var sentence = "This is an example sentence to slice from!";
    var section = sentence.slice(20,35);
    document.getElementById("slice").innerHTML = section;
}//this function uses the 'slice' method to focus on a specified index range 
//and display the values

function uppercaseFunc(){
    var sentence = "This is a sentence that started out normal.";
    var uppercase = sentence.toUpperCase();
    document.getElementById("uppercase").innerHTML = uppercase;
}//this function uses the 'toUpperCase' method to make all characters in a 
//string uppercase

function searchFunc(){
    var sentence = "This is a sentence to search words through.";
    var searchIndex = sentence.search("words");
    document.getElementById("search").innerHTML = searchIndex.toString();
}//this function uses the 'toString' method to search for a specified word
//and display what index number that word is on in the sentence

function precisionFunc(){
    var x = 98274.926927602497924;
    document.getElementById("precision").innerHTML = x.toPrecision(15);
}//this function uses the 'toPrecision' method to format a number to a 
//specified length

function fixedFunc(){
    var y = 7.9363213636;
    document.getElementById("fixed").innerHTML = y.toFixed();
}//this function uses the 'toFixed' method on the 'y' variable to display it as 
//a string, and rounds it to a specified number of decimals