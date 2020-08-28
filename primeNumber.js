let num = prompt ("Enter a number to see if it's prime or not.");

function isPrime(num){
    if (num < 2){
        return "Oops. That's not a prime number!";
    }
    
    for (let i = 2; i < num; i++){
        if (num % i === 0){
            return "Oops. That's not a prime number!";
        } 
    }
    return "You got it! That's a prime number.";
}

console.log(isPrime(num));