function fibonacciGenerator(n){
    if(n==0){
        return;
    }
    else if(n==1){
        return [0];
    }
    else{
        var arr = [0, 1];
        for(var i=2; i<n; i++){
            arr.push(arr[i-2] + arr[i-1]);
        }
        return arr;
    }
}

var seqSize = prompt("How long would you like the fibonacci sequence to be?");
fibonacciGenerator(seqSize);