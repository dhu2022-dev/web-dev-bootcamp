$(document).ready(function() { //jQuery to check if the library is loaded before executing jQuery methods
    $("body").css("background-color","white");
});

//jQuery selector vs. DOM selector
$("button");
document.querySelector("button");
document.querySelectorAll("button");

//jQuery manipulate styles
$("h1").css("color", "green");
$("h1").css("font-size", "5rem");

//Manipulate styles by adding CSS classes (aligns with UI design principles)
$("h1").addClass("big-title");
$("h1").removeClass("big-title");
$("h1").addClass("big-title");

//Add multiple classes
$("h1").addClass("big-title margin-50");
$("h1").hasClass("margin-50");

//Manipulating Text
$("h1").text("Bye");
$("#button2").text("Don't Click"); //selecting by id

//Manipulating Attributes
$("a").attr("href"); //Get
$("a").attr("href", "https://www.yahoo.com");

//jQuery Event Listener
$("h1").click(function() {
    $("h1").css("color", "purple");
});

$("input").keydown(function(event) {
    console.log(event.key);
})

$(document).keydown(function(event) { //listens to the whole document
    $("h1").text(event.key);
})

//Use on for any other event types (see docs for which one you need)
$("h1").on("mouseover", function(){
    $("h1").css("color", "purple");
});

//Adding and Removing elements w/ jQuery
$("h1").before("<button>New Button<\button>");
$("h1").after("<button>New Button<\button>");
$("h1").prepend("<button>New Button<\button>");
$("h1").append("<button>New Button<\button>");
//Removes Button:
//$("button").remove();

//Webiste Animations
$("button").on("click", function(){
    //$("h1").hide(); hides
    //$("h1").show(); shows
    $("h1").toggle(); //alternates between hiding and showing
});

//multiple animations
$("#button2").on("click", function() {
    $("h1").slideUp().slideDown().animate({opacity: 0.5});
});