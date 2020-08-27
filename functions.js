// function rollDie(){
//     let roll = Math.floor(Math.random() * 6) + 1;
//     console.log(`Rolled: ${roll}`);
// }

// function throwDice(numRolls){
//     for (let i = 0; i < numRolls; i++){
//         rollDie();
//     }
// }

// function greet(name){
//     console.log(`Hi, ${name}`);
// }

// function add(x,y) {
//     return x + y;
// }

// function square (x){
//     s = return x * x;
//     console.log('All done!');
// }
// ^console.log won't be executed because it's after a return statement

function isPurple(color){
    if (color.toLowerCase() === 'purple'){
        return true;
    }
    return false;
}
// ^doesn't need an "else" statement because as long as "if" isn't true
// then the "return false" will execute

function isPurple(color){
    return color.toLowerCase() === 'purple';
}
// ^shortened option to the prior conditional statement

function containsPurple(arr){
    for(let color of arr){
        if (color === 'purple' || color === 'magenta'){
            return true;
        }
    }
    return false
}
// ^more return practice with a for-of loop within a conditional