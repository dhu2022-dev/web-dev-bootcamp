var numBeers = prompt("How many bottles of beer?");
beer(numBeers);
function beer(count){
    while(count > 0){
        console.log(count + " bottles of beer on the wall, " + count + " bottles of beer.");
        count--;
        console.log("Take one down and pass it around, " + count + " bottels of beer on the wall.");
    }
}