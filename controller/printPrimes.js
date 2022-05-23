const isPrime = (n) => {
    if (n <=1) return false;
    if (n === 2)  return true;
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    };
    return true;
}

const printPrime = (n) => {
    let primes = [];
    for (let i = 0; i <=n; i ++) {
        if (isPrime(i)) {
            primes.push(i)
        }
    };
    return primes;
};

const result = printPrime(1000)

module.exports = {
    result
}