// You need to return the count of Primes less than equal to N
// N: input number
function numberOfPrimes(N)
{
     const isPrime = new Array(N).fill(true);
    isPrime[0] = isPrime[1] = false;
    for(let i = 2; i * i < N; ++i) {
        if(!isPrime[i]) {
            continue;
        }
        for(let j = i * i; j < N; j += i) {
            isPrime[j] = false;
        }
    }
    let count = 0;
    for(let i = 2; i < N; ++i) {
        count += isPrime[i];
    }
    return count;
 }
