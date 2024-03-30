function main(){
    turnLeft();
    alternate();
    alternate();
    moreBeeperCol();
}

function moreBeeperCol(){
    placeAndMove();
    placeAndMove();
    putBeeper();
}

function lessBeeperCol(){
    placeAndMove();
    putBeeper();
}

function alternate(){
    moreBeeperCol();
    turnRight();
    move();
    turnRight();
    move();
    lessBeeperCol();
    move();
    turnLeft();
    move();
    turnLeft();
}

function placeAndMove(){
    putBeeper();
    move();
    move();
}