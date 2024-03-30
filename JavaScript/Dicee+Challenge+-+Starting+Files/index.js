//Change Dice 1
var randomNumber1 = Math.round(Math.random()*5) + 1;
//alert(randomNumber1);
var dice1Image = document.firstElementChild.lastElementChild.querySelector(".container").querySelector(".dice").querySelector(".img1");
//alert(dice1Image);
switch(randomNumber1){
    case 1:
        dice1Image.src = "images/dice1.png";
        break;
    case 2:
        dice1Image.src = "images/dice2.png";
        break;
    case 3:
        dice1Image.src = "images/dice3.png";
        break;
    case 4:
        dice1Image.src = "images/dice4.png";
        break;
    case 5:
        dice1Image.src = "images/dice5.png";
        break;
    case 6:
        dice1Image.src = "images/dice6.png";
        break;
}

//Change Dice 2
var randomNumber2 = Math.round(Math.random()*5) + 1;
var dice2Image = document.firstElementChild.lastElementChild.querySelector(".container").querySelectorAll(".dice")[1].querySelector(".img2");
switch(randomNumber2){
    case 1:
        dice2Image.src = "images/dice1.png";
        break;
    case 2:
        dice2Image.src = "images/dice2.png";
        break;
    case 3:
        dice2Image.src = "images/dice3.png";
        break;
    case 4:
        dice2Image.src = "images/dice4.png";
        break;
    case 5:
        dice2Image.src = "images/dice5.png";
        break;
    case 6:
        dice2Image.src = "images/dice6.png";
        break;
}

//Refresh the heading to display the match result
var result = "N/A";
var heading = document.firstElementChild.lastElementChild.querySelector(".container").firstElementChild;
//alert(heading);
if (randomNumber1 - randomNumber2 > 0){
    result = "Player 1 Wins!";
}
else if(randomNumber1 - randomNumber2 < 0){
    result = "Player 2 Wins!";
}
else{
    result = "Draw!";
}
heading.textContent = result;