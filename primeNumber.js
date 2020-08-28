function isPrime(num){
    if (num < 2){
        return "Oops. That's not a prime number!";
    }
    
    for (let i = 2; i < num; i++){
        if (num % i === 0){
            return "Oops. That's not a prime number!";
        } 
    }
    return "Prime Number!";
}