const mysqrt = (num) => {
    let start = 0, end = num, middle = 0;
    while(start < end) {
        middle = parseInt((start+end)/2);
        if (middle * middle === num) {
            return middle;
        } else if (num < middle * middle) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
    }
    return num < end * end ? end - 1: end;
}

console.log(mysqrt(4));
console.log(mysqrt(8));