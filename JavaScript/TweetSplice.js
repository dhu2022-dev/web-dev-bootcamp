var longTweet = prompt("Type a tweet. It will get cut off at 140 characters.");
longTweet = longTweet.slice(0, 140);
alert(longTweet);