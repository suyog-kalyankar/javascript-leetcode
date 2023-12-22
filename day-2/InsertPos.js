const insertPos = (nums, target) => {
    //approach - 1
    /* let index = 0;
    for (let i = 0; i < nums.length; i++){
        if (nums[i] === target) {
            index = i;
        } 
        if (nums[i] < target) {
            index = i + 1;
        }
    }
    return index; */

    // approach - 2
    nums.push(target);
    nums.sort((a,b) => a-b);
    return nums.indexOf(target);
}

console.log(insertPos([1,3,5,6], 5))
console.log(insertPos([1,3,5,6], 7));