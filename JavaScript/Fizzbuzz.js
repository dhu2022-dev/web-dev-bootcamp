function fizzbuzz(max){
    var arr = []
    for (let step = 1; step <= max; step++){
        if (step%3==0 && step%5==0){
            arr.push("FizzBuzz");
        }
        else if (step%3==0){
            arr.push("Fizz");
        }
        else if (step%5==0){
            arr.push("Buzz");
        }
        else{
            arr.push(step);
        }
    }
    return arr;
}

var num = prompt("Fizzbuzz to what?");
console.log(fizzbuzz(num));