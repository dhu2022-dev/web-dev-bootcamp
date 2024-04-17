var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var gameStart = false;
var userIndex = 0;

function nextSequence(){
    console.log("Next Sequence");
    $("h1").text("Level "+level);
    //console.log("hello");
    var randomNumber = Math.round(Math.random() * 3);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    //console.log(gamePattern);
    //console.log(randomChosenColour);
    for (var i = 0; i < gamePattern.length; i++) {
        (function(index) {
            setTimeout(function() {
                //console.log(gamePattern[index]);
                animatePress(gamePattern[index]);
                playSound(gamePattern[index]);
            }, (i + 1) * 1000); // Add 1 to i to avoid starting with a delay of 0 seconds
        })(i);
        //console.log("Playing sequence");
    }
    userClickedPattern = [];
}

var userChosenColour;

$("#green").on("click", function(){
    userChosenColour = "green";
    userClickedPattern.push(userChosenColour);
    console.log(userClickedPattern);
    playSound("green");
    animatePress("green");
    checkAnswer(userIndex);
});

$("#red").click(function(){
    userChosenColour = "red";
    userClickedPattern.push(userChosenColour);
    console.log(userClickedPattern);
    playSound("red");
    animatePress("red");
    checkAnswer(userIndex);
});

$("#yellow").click(function(){
    userChosenColour = "yellow";
    userClickedPattern.push(userChosenColour);
    console.log(userClickedPattern);
    playSound("yellow");
    animatePress("yellow");
    checkAnswer(userIndex);
});

$("#blue").click(function(){
    userChosenColour = "blue";
    userClickedPattern.push(userChosenColour);
    console.log(userClickedPattern);
    playSound("blue");
    animatePress("blue");
    checkAnswer(userIndex);
});

function playSound(name){
    //console.log(name);
    var sound = new Audio("sounds/" + name + ".mp3");
    sound.play();
}

function animatePress(currentColor){
    //console.log(currentColor);
    var element = $("#"+currentColor);
    element.addClass("pressed");
    element.delay(100).queue(function(next){
        element.removeClass("pressed");
        next();
    });
}

$(document).keydown(function(event){
    if(!gameStart){
        level = 1;
        $("h1").text("Level 0");
        console.log("Game Start");
        nextSequence();
        gameStart = true;
    }
});

function checkAnswer(currentLevel){
    console.log("Checking Answer");
    //console.log("Current Index: " + currentLevel);
    //console.log("Game Pattern: " + gamePattern[currentLevel]);
    //console.log("User Pattern: " + userClickedPattern[currentLevel]);
    if(userClickedPattern[currentLevel] == gamePattern[currentLevel]){
        //console.log("correct");
        //console.log("user index: " + userIndex);
        //console.log("game level: " + gamePattern.length);
        if(userIndex === gamePattern.length-1){
            console.log("pattern end reached");
            level += 1;
            userClickedPattern = [];
            userIndex = 0;
            nextSequence();
        }
        else{
            userIndex += 1;
        }
    }
    else{
        console.log("wrong");
        gameStart = false;
        level = 0;
        userIndex = 0;
        gamePattern = [];
        playSound("wrong");
        $("body").addClass("game-over");
        $("body").delay(200).queue(function(next){
            $("body").removeClass("game-over");
            next();
        });
        $("h1").text("Game Over, Press Any Key to Restart.");
    }
}