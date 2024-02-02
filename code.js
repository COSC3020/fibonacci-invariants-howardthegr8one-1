function fib(n) {
    // Invariant: fibRecursion(n) = fibRecursion(n-1) + fibRecursion(n-2) 
    if(n == 0) return [0];
    if(n == 1) return [0,1];
    
    let arr = fib(n-1)
    arr.push(arr[n-1] + arr[n-2]);
    return arr;
}
