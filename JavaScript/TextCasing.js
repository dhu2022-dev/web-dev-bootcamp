var name = prompt("What is your name?");
name = name.slice(0,1).toUpperCase() + name.slice(1,);
alert("Hello, " + name);
//Hello Angela

//Angela's Solution
var myName = prompt("What is your name?");

//Create a variable that stores the name that the user enters via a prompt
//Capitalize the first letter of the name
    //a. isolate the first char
    var firstChar = myName.slice(0,1);

    //b. capitalize the first char
    var upperCaseFirstChar = firstChar.toUpperCase();

    //c. isolate the rest of the name
    var restOfName = myName.slice(1,myName.length);

    //d. concatenate the first char with the rest of the char
    var capitalizedName = upperCaseFirstChar + restOfName;

//Use an alert to greet them w/ the capitalized name via an Alert
alert("Hello, " + capitalizedName);