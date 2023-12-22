const plusOne = (digits) => {
  let digitLen = digits.length - 1;
  let remainder = 1;
  let val = 0;
  while(digitLen >= 0 && remainder) {
    val = digits[digitLen] + 1;
    remainder = Math.floor(val/10);
    digits[digitLen] = val % 10;
    digitLen--;
  }
  if (remainder) digits.unshift(remainder);
  return digits;
}

console.log(plusOne([1,2,3]));
console.log(plusOne([9]));
console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,9]))