var guestList = ["Angela", "Jack", "Pam", "James", "Lara", "Jason"];
var guest = prompt("Name of Guest to Admit?");
if (guestList.includes(guest)){
    console.log("You're In!");
}
else {
    console.log("You're not on the list, sorry.");
}