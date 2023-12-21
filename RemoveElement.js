const removeElement = (nums, val) => {
    let len = nums.length;
    if (len <= 1) {
        return len;
    }
    let cnt = 0;
    let duplicateCnt = 0;
    for (let i = 0; i < len; i++){
        if(nums[i] !== val) {
            nums[cnt] = nums[i];
            cnt++;
        } else {
            duplicateCnt++;
        }
    }
    nums.length = nums.length - duplicateCnt;
    return nums.length;
}

console.log(removeElement([3,2,2,3], 3));
console.log(removeElement([0,1,2,2,3,0,4,2],2));