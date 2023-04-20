var B = 27;

function addNumbers1(){
    console.log(B + R);
}
function addNumbers2(){
    var R = 23;
    document.write(B + R);
}

addNumbers1();
addNumbers2();

function methodFunction() {
    if (new Date() .getHours() < 18) {
    document.getElementById("method").innerHTML = "How are you today";
    }
}//this function displays text depending on the time of day

if (10 > 5) {
    document.write("10 is greater than 5");
}//this if statement displays text if condition is met

function Age_Function(){
    Age = document.getElementById("Age").value;
    if(Age >= 21){
        Drink = "You are old enough to drink!";
    }
    else{
        Drink = "You are not old enough to drink!";
    }
    document.getElementById("How_old_are_you?").innerHTML = Drink;
}//this function displays if you are old enough to drink or not, based on your
//age input

function Time_function(){
    var Time = new Date() .getHours();
    var Replay;
    if(Time < 12 == Time > 0){
        Replay = "It is morning time!";
    }
    else if(Time >= 12 == Time < 18){
        Replay = "It is afternoon.";
    }
    else{
        Replay = "It is evening time."
    }
    document.getElementById("Time_of_day").innerHTML = Replay;
}//this function decides what time of the day to display, depending on the actual
//time