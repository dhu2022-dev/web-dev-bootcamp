/* Adding Event Listeners to a Button */

/* Practice 
//Handling click event more intuitively
document.querySelector("button").addEventListener("click", onClick);

function onClick(){
    alert("Clicked!");
}

//Handling click events
    //With anonymous functions
    //simultaneous events
var btns = document.querySelectorAll(".drum");
//alert(btns);
for(var i=1; i<btns.length; i++){
    btns[i].addEventListener("click", function (){
        alert("Hello");
        //alert("Button " + btns[i].textContent + " got clicked.");
    });
}
*/

var drumButtons = document.querySelectorAll(".drum");
for (var i=0; i<drumButtons.length; i++){
    drumButtons[i].addEventListener("click", function (){
        //alert("The Button has been clicked!");

        // var audio = new Audio("sounds/tom-1.mp3");
        // audio.play();

        //this.style.color = "white";

        makeSound(this.innerHTML);
        buttonAnimation(this.innerHTML);
    });
}

document.addEventListener("keydown", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key){
    switch(key){
        case "w":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "a":
            var kickBass = new Audio("sounds/kick-bass.mp3");
            kickBass.play();
            break;

        case "s":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case "d":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "j":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        
        case "k":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
            
        case "l":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        
        default: console.log(key);
    }
}

function buttonAnimation(key){
    var activeButton = document.querySelector("." + key);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);
}