const addBinary = (a, b) => {
    let decSum = 
    BigInt(`0b${a}`) + 
    BigInt(`0b${b}`); 
return decSum.toString(2); 
}

console.log(addBinary("11", "1"));