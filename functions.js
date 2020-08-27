function rollDie(){
    let roll = Math.floor(Math.random() * 6) + 1;
    console.log(`Rolled: ${roll}`);
}

function throwDice(numRolls){
    for (let i = 0; i < numRolls; i++){
        rollDie();
    }
}

function greet(name){
    console.log(`Hi, ${name}`);
}

function add(x,y) {
    return x + y;
}