const palindrome = (num) => {
    if (num < 0) {
        return false;
    }
    const temp = num;
    let remainder, final = 0;
    while (num > 0) {
        remainder = num % 10;
        num = parseInt(num/10);
        final = final * 10 + remainder;
    }
    return temp === final;
}

const x = 1221;
const y = 1211;
console.log(palindrome(x))
console.log(palindrome(y))