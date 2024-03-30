function main(){
    repeatEveryDiagonal();
    putBeeper();
}

function putBeeperAndMoveDiagonal(){
    putBeeper();
    move();
    turnLeft();
    move();
    turnRight();
}

function repeatEveryDiagonal(){
    putBeeperAndMoveDiagonal();
    putBeeperAndMoveDiagonal();
    putBeeperAndMoveDiagonal();
    putBeeperAndMoveDiagonal();
}