document.query;

//changing the last item in the list to be my name
var h3 = document.firstElementChild.lastElementChild.querySelector("ul").lastElementChild;
//alert("Variable name is: " + h3);
h3.innerHTML = "David Hu";

//changing the link color to be red
var h2 = document.firstElementChild.lastElementChild.querySelector("ul").firstElementChild.querySelector("a");
//alert(h2);
h2.style.color = "red";

//change the background color of the button to be yellow
var buttonBg = document.firstElementChild.lastElementChild.querySelector("button");
buttonBg.style.backgroundColor = "yellow";

//change font size of h1 by adding the "huge" class we made to the classlist
var h1 = document.firstElementChild.lastElementChild.querySelector("h1");
h1.classList.add("huge");