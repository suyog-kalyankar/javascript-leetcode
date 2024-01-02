const climbStairs = (n) => {
    if (n <= 3) {
        return n;
    }
    let a = 3, b = 2;
    for (let i = 0; i < n - 3; i++){
        console.log(a, b)
        a = a + b;
        b = a - b;
    }
    return a;
}

console.log(climbStairs(3));
console.log(climbStairs(6));