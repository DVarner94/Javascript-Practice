function isPrime(num){
    if (num < 2){
        return "Not Prime!!";
    }
    
    for (let i = 2; i < num; i++){
        if (num % i === 0){
            return "Not Prime!!";
        } 
    }
    return "Prime number!";
}