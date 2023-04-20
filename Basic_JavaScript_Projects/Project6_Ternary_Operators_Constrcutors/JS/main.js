function Vote_Function(){
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are too young" : "You are old enough";
    document.getElementById("Vote").innerHTML = Can_vote + " to vote.";
}//This function uses a ternary operator to display if you are old enough to vote

function Vehicle(Make, Model, Year, Color){
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}//This section of code uses 'new' and 'this' keywords to create objects of the 
//vehicle functions, and have place holders before the new objects are created
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction(){
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + 
    " manufactured in " + Erik.Vehicle_Year;
}//This function prints a section in the paragraph under id 'Keywords_and_Constructors'
//using the values from an object created in the variable 'Erik'

function count_Function(){
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count(){
        var Starting_point = 9;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
}//This is an example of nested functions, so the functions called in the main
//functions can be defined within nested functions

