document.write(typeof "4" + 4); //this line uses the 'typeof' operator to see wether two values
//are the same type

function nanFunction(){
    document.getElementById("NaN").innerHTML = isNaN(23436);
}//this is defining a function while using the 'isNaN' operator to see if a value
//is not a number

function infinityFunction(){
    document.getElementById("infinity").innerHTML = 7E310;
}//this function makes a number greater than what javascript can display, which 
//makes it then display 'infinity'

function negativeInfinityFunc(){
    document.getElementById("-infinity").innerHTML = -3E600;
}//this function makes a negative number so large, it displays a negative infinity

document.write(4298 > 1094);//these lines showcase using the greater than, and 
document.write(-2984 > 205922);//less than operators

console.log(63>99);//this line shows how to display info in the console in a 
//web browser

document.write(22==22);//this line is using the 'is equal to' operator
document.write("42"==="42");//this line is using an operator similar to the 
//double equals operator, but it also check if both data types are the same

document.write(4 > 1 && 41 > 932);//this showcases using the 'and' operator
document.write(4 > 2 || 41 < 932);//this showcases using the 'or' operator

function notFunction(){
document.getElementById("Not").innerHTML = !(4>2);
}//this function uses the 'not' operator to display the opposite of whatever
//expression it is in front of