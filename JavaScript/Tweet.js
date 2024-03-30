var tweet = prompt("Type out your tweet please.");
currCount = tweet.length;
countLeft = 140 - currCount;
alert("You used: " + currCount);
alert("You have: " + countLeft);