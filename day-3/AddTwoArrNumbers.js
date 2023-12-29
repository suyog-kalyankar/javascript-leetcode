const addTwoArrNumbers = (l1, l2) => {
    let lenOfL1 = l1.length - 1;
    let lenOfl2 = l2.length - 1;
    let val = 0;
    let quotient = 0;
    const stack = [];
    while(lenOfL1 >= 0 || lenOfl2 >= 0) {
        let arrAddVal = 0;
        if (l1[lenOfL1]) {
            arrAddVal += l1[lenOfL1]
        } 
        if (l2[lenOfl2]) {
            arrAddVal += l2[lenOfl2]
        }
        val = arrAddVal + quotient;
        quotient = Math.floor(val/10);
        let unitVal = (val%10);
        stack.push(unitVal);
        lenOfL1--;
        lenOfl2--;
    }
    if (quotient) stack.push(quotient);
    return stack;
}
console.log(addTwoArrNumbers([2,4,3], [5,6,4]));
console.log(addTwoArrNumbers([9,9,9,9,9,9,9], [9,9,9,9]));