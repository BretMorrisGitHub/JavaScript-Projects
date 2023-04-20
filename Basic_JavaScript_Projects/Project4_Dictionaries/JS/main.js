
function myFunction(){ //This line defines a function 
    var computer ={ //This line defines a variable 'computer' that has a dictionary 
        brand: "Alienware",
        cpu: "4GHz",
        RAM: "8GB",
        SSD: "1TB",
    }
    delete computer.RAM; //This line deletes the key and value pair 'RAM'
    document.getElementById("computer").innerHTML = computer.RAM;
}